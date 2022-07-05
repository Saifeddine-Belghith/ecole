import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListjoursferiesvacancesComponent } from './listjoursferiesvacances.component';

describe('ListjoursferiesvacancesComponent', () => {
  let component: ListjoursferiesvacancesComponent;
  let fixture: ComponentFixture<ListjoursferiesvacancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListjoursferiesvacancesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListjoursferiesvacancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
