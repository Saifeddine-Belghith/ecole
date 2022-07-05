import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierformationsprofesseurComponent } from './modifierformationsprofesseur.component';

describe('ModifierformationsprofesseurComponent', () => {
  let component: ModifierformationsprofesseurComponent;
  let fixture: ComponentFixture<ModifierformationsprofesseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierformationsprofesseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierformationsprofesseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
