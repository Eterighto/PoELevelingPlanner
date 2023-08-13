import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Quest, acts, quests } from 'src/data/quests';
import { GemDictService } from '../services/gem-dict/gem-dict.service';
import { Gem, GemType } from 'src/data/gems';

export enum ObtainMethod {
  Vendor = 1,
  Reward = 2,
}

export const obtainMethods = [
  {
    method: ObtainMethod.Reward,
    name: 'Reward',
  },
  {
    method: ObtainMethod.Vendor,
    name: 'Vendor',
  },
];

export interface QuestReward {
  questId: number;
  gemId: string;
  method: ObtainMethod;
}

export interface Section {
  name: string;
  actId?: number;
  labMasteryReward?: string;
  links: string[][];
  notes: string;
  questRewards: QuestReward[];
}

@Component({
  selector: 'app-section-editor',
  templateUrl: './section-editor.component.html',
  styleUrls: ['./section-editor.component.scss'],
})
export class SectionEditorComponent implements OnInit {
  readonly acts = [
    {
      id: null,
      name: 'None',
    },
    ...acts,
  ];

  gems!: Gem[];
  obtainMethods = obtainMethods;
  filteredGems!: Gem[];
  quests!: Quest[];
  sectionFormGroup!: FormGroup;
  newQuestRewardForm!: FormGroup;
  newGemLinkForm!: FormArray;

  constructor(
    public dialogRef: DialogRef,
    @Inject(DIALOG_DATA) public data: Section,
    private gemDictService: GemDictService
  ) {}

  ngOnInit(): void {
    this.gems = this.gemDictService.gemsList;
    this.filteredGems = this.gems;

    this.sectionFormGroup = new FormGroup({
      name: new FormControl(this.data?.name, Validators.required),
      actId: new FormControl(this.data?.actId),
      labMasteryReward: new FormControl(this.data?.labMasteryReward),
      links: new FormArray([]),
      notes: new FormControl(this.data?.notes),
      questRewards: new FormArray([]),
    });

    if (this.data) {
      this.data.links.forEach((link: string[]) =>
        (this.sectionFormGroup.controls['links'] as FormArray).push(
          this.createGemLinkFormArray(link)
        )
      );

      this.data.questRewards.forEach((reward: QuestReward) =>
        (this.sectionFormGroup.controls['questRewards'] as FormArray).push(
          this.createQuestRewardFormGroup(reward)
        )
      );

      if (this.data.actId != null) {
        this.quests = quests.filter(
          (quest: Quest) => quest.actId === this.data.actId
        );
      }
    }

    this.newQuestRewardForm = this.createQuestRewardFormGroup();
    this.newGemLinkForm = this.createGemLinkFormArray();
  }

  onActIdChange(actId?: number): void {
    (this.sectionFormGroup.controls['questRewards'] as FormArray).clear();
    this.quests = quests.filter((quest: Quest) => quest.actId === actId);
  }

  getGemTypeClass(type?: GemType | null): string {
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

  getGemTypeByName(name: string): GemType {
    return this.gemDictService.gemDict.get(name)?.type as GemType;
  }

  getGemTypeClassByName(name: string): string {
    return this.getGemTypeClass(this.getGemTypeByName(name));
  }

  onGemSearchInput(inputEvent?: Event): void {
    const searchValue = (inputEvent?.target as HTMLInputElement)?.value;

    if (searchValue) {
      this.filteredGems = this.gems.filter((gem: Gem) =>
        (gem.name as string).toLowerCase().includes(searchValue.toLowerCase())
      );
    } else {
      this.onQuestGemSelectorOpen();
    }
  }

  onQuestGemSelectorOpen(searchInput?: HTMLInputElement): void {
    this.filteredGems = this.gems;
    if (searchInput) {
      searchInput.value = '';
      searchInput.focus();
    }
  }

  createQuestRewardFormGroup(questReward?: QuestReward): FormGroup {
    return new FormGroup({
      questId: new FormControl(questReward?.questId, Validators.required),
      gemId: new FormControl(questReward?.gemId, Validators.required),
      method: new FormControl(questReward?.method, Validators.required),
    });
  }

  addQuestReward(): void {
    if (this.newQuestRewardForm.valid) {
      (this.sectionFormGroup.controls['questRewards'] as FormArray).push(
        this.createQuestRewardFormGroup(this.newQuestRewardForm.getRawValue())
      );
      this.newQuestRewardForm.reset();
    } else {
      this.newQuestRewardForm.markAllAsTouched();
    }
  }

  removeQuestReward(index: number): void {
    (this.sectionFormGroup.controls['questRewards'] as FormArray).removeAt(
      index
    );
  }

  createGemLinkFormArray(gemLink?: string[]): FormArray {
    return new FormArray([
      new FormControl(gemLink?.[0], Validators.required),
      new FormControl(gemLink?.[1]),
      new FormControl(gemLink?.[2]),
      new FormControl(gemLink?.[3]),
      new FormControl(gemLink?.[4]),
      new FormControl(gemLink?.[5]),
    ]);
  }

  addGemLink(): void {
    if (this.newGemLinkForm.valid) {
      let linkGems = this.newGemLinkForm.getRawValue() as string[];

      linkGems = linkGems.filter((value: string) => !!value);

      (this.sectionFormGroup.controls['links'] as FormArray).push(
        this.createGemLinkFormArray(linkGems)
      );
      this.newGemLinkForm.reset();
    } else {
      this.newGemLinkForm.markAllAsTouched();
    }
  }

  removeGemLink(index: number): void {
    (this.sectionFormGroup.controls['links'] as FormArray).removeAt(index);
  }

  save(): void {
    if (this.sectionFormGroup.valid) {
      const section: Section = this.sectionFormGroup.getRawValue();

      section.links = section.links.map((link: string[]) =>
        link.filter((value: string) => !!value)
      );

      this.close(section);
    } else {
      this.sectionFormGroup.markAllAsTouched();
    }
  }

  close(section?: Section): void {
    this.dialogRef.close(section);
  }

  get questRewardForms(): FormGroup[] {
    return (this.sectionFormGroup.controls['questRewards'] as FormArray)
      .controls as FormGroup[];
  }

  get linkForms(): FormArray[] {
    return (this.sectionFormGroup.controls['links'] as FormArray)
      .controls as FormArray[];
  }
}
