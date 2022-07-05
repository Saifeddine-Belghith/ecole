import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierformationscandidatsComponent } from './modifierformationscandidats.component';

describe('ModifierformationscandidatsComponent', () => {
  let component: ModifierformationscandidatsComponent;
  let fixture: ComponentFixture<ModifierformationscandidatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierformationscandidatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierformationscandidatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
