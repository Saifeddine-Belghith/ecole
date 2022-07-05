import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterjoursferiesvacancesComponent } from './ajouterjoursferiesvacances.component';

describe('AjouterjoursferiesvacancesComponent', () => {
  let component: AjouterjoursferiesvacancesComponent;
  let fixture: ComponentFixture<AjouterjoursferiesvacancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterjoursferiesvacancesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterjoursferiesvacancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
