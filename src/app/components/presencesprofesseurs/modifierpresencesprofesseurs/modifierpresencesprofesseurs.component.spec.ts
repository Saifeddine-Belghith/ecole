import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierpresencesprofesseursComponent } from './modifierpresencesprofesseurs.component';

describe('ModifierpresencesprofesseursComponent', () => {
  let component: ModifierpresencesprofesseursComponent;
  let fixture: ComponentFixture<ModifierpresencesprofesseursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierpresencesprofesseursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierpresencesprofesseursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
