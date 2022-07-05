import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteravertissementComponent } from './ajouteravertissement.component';

describe('AjouteravertissementComponent', () => {
  let component: AjouteravertissementComponent;
  let fixture: ComponentFixture<AjouteravertissementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouteravertissementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouteravertissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
