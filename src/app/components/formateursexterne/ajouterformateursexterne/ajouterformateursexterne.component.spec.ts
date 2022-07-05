import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterformateursexterneComponent } from './ajouterformateursexterne.component';

describe('AjouterformateursexterneComponent', () => {
  let component: AjouterformateursexterneComponent;
  let fixture: ComponentFixture<AjouterformateursexterneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterformateursexterneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterformateursexterneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
