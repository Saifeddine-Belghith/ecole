import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutermatiereComponent } from './ajoutermatiere.component';

describe('AjoutermatiereComponent', () => {
  let component: AjoutermatiereComponent;
  let fixture: ComponentFixture<AjoutermatiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutermatiereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutermatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
