import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierjoursferiesvacancesComponent } from './modifierjoursferiesvacances.component';

describe('ModifierjoursferiesvacancesComponent', () => {
  let component: ModifierjoursferiesvacancesComponent;
  let fixture: ComponentFixture<ModifierjoursferiesvacancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierjoursferiesvacancesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierjoursferiesvacancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
