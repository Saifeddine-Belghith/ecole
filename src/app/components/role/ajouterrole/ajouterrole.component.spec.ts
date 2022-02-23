import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterroleComponent } from './ajouterrole.component';

describe('AjouterroleComponent', () => {
  let component: AjouterroleComponent;
  let fixture: ComponentFixture<AjouterroleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterroleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
