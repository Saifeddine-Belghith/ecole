import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterLivretComponent } from './ajouter-livret.component';

describe('AjouterLivretComponent', () => {
  let component: AjouterLivretComponent;
  let fixture: ComponentFixture<AjouterLivretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterLivretComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterLivretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
