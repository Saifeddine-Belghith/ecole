import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterpaiementComponent } from './ajouterpaiement.component';

describe('AjouterpaiementComponent', () => {
  let component: AjouterpaiementComponent;
  let fixture: ComponentFixture<AjouterpaiementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterpaiementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterpaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
