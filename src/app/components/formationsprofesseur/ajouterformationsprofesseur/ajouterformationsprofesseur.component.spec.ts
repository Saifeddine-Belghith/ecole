import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterformationsprofesseurComponent } from './ajouterformationsprofesseur.component';

describe('AjouterformationsprofesseurComponent', () => {
  let component: AjouterformationsprofesseurComponent;
  let fixture: ComponentFixture<AjouterformationsprofesseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterformationsprofesseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterformationsprofesseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
