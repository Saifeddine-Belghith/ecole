import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeformationsprofesseurComponent } from './listeformationsprofesseur.component';

describe('ListeformationsprofesseurComponent', () => {
  let component: ListeformationsprofesseurComponent;
  let fixture: ComponentFixture<ListeformationsprofesseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeformationsprofesseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeformationsprofesseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
