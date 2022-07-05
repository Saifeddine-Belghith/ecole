import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpresencesprofesseursComponent } from './listpresencesprofesseurs.component';

describe('ListpresencesprofesseursComponent', () => {
  let component: ListpresencesprofesseursComponent;
  let fixture: ComponentFixture<ListpresencesprofesseursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListpresencesprofesseursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpresencesprofesseursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
