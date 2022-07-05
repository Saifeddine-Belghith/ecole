import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterinscriptionComponent } from './ajouterinscription.component';

describe('AjouterinscriptionComponent', () => {
  let component: AjouterinscriptionComponent;
  let fixture: ComponentFixture<AjouterinscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterinscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterinscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
