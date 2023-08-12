import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelingEditorComponent } from './leveling-editor.component';

describe('LevelingEditorComponent', () => {
  let component: LevelingEditorComponent;
  let fixture: ComponentFixture<LevelingEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LevelingEditorComponent]
    });
    fixture = TestBed.createComponent(LevelingEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
