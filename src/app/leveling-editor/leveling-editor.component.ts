import { Dialog } from '@angular/cdk/dialog';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  ObtainMethod,
  Section,
  SectionEditorComponent,
  obtainMethods,
} from '../section-editor/section-editor.component';
import { b64DecodeUnicode, b64EncodeUnicode } from 'src/utilities/encoding';
import { Subject, takeUntil } from 'rxjs';
import { GemDictService } from '../services/gem-dict/gem-dict.service';
import { ActId, Quest, quests } from 'src/data/quests';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GemType } from 'src/data/gems';

@Component({
  selector: 'app-leveling-editor',
  templateUrl: './leveling-editor.component.html',
  styleUrls: ['./leveling-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LevelingEditorComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject();

  sections: Section[] = [];

  constructor(
    private dialogService: Dialog,
    private cdr: ChangeDetectorRef,
    private gemDictService: GemDictService,
    private domSanitizer: DomSanitizer,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    const data = this.activatedRoute.snapshot.queryParamMap.get('data');

    if (data) {
      try {
        this.sections = JSON.parse(b64DecodeUnicode(data as string));
      } catch (error) {
        this.snackBar.open('An error occured while loading build');
      }
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  editSection(index?: number): void {
    let data: Section | null = null;

    if (index != null) {
      data = this.sections[index];
    }

    const dialogRef = this.dialogService.open<Section>(SectionEditorComponent, {
      height: '80%',
      width: '80%',
      maxWidth: '50rem',
      disableClose: true,
      data: data,
    });

    this.cdr.detectChanges();

    dialogRef.closed
      .pipe(takeUntil(this.destroy$))
      .subscribe((section?: Section) => {
        if (section) {
          if (index != null) {
            this.sections[index] = section;
          } else {
            this.sections.push(section);
          }

          this.updateLink();
          this.cdr.detectChanges();
        }
      });
  }

  getQuestName(id: number): string {
    return quests.find((quest: Quest) => quest.id === id)?.name ?? '-';
  }

  getGemTypeClass(type?: GemType): string {
    let gemTypeClass = '';

    switch (type) {
      case GemType.Dex:
        gemTypeClass = 'gem-dex';
        break;
      case GemType.Int:
        gemTypeClass = 'gem-int';
        break;
      case GemType.Str:
        gemTypeClass = 'gem-str';
        break;
    }

    return gemTypeClass;
  }

  getGemTypeClassByName(name: string): string {
    return this.getGemTypeClass(this.gemDictService.gemDict.get(name)?.type);
  }

  getObtainMethodName(obtainMethod: ObtainMethod): string {
    return (
      obtainMethods.find((methodData) => methodData.method === obtainMethod)
        ?.name ?? '-'
    );
  }

  getObtainMethodClass(obtainMethod: ObtainMethod): string {
    let methodClass = '';

    switch (obtainMethod) {
      case ObtainMethod.Reward:
        methodClass = 'method-reward';
        break;
      case ObtainMethod.Vendor:
        methodClass = 'method-vendor';
        break;
    }

    return methodClass;
  }

  treatAsSafeString(value: string): SafeHtml {
    return this.domSanitizer.bypassSecurityTrustHtml(value);
  }

  deleteSection(index: number): void {
    this.sections.splice(index, 1);
    this.updateLink();
  }

  updateLink(): void {
    this.router.navigate([], {
      replaceUrl: true,
      queryParams: {
        data: b64EncodeUnicode(JSON.stringify(this.sections)),
      },
    });
  }
}
