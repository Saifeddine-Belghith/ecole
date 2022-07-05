import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterpresencesprofesseursComponent } from './ajouterpresencesprofesseurs.component';

describe('AjouterpresencesprofesseursComponent', () => {
  let component: AjouterpresencesprofesseursComponent;
  let fixture: ComponentFixture<AjouterpresencesprofesseursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterpresencesprofesseursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterpresencesprofesseursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
