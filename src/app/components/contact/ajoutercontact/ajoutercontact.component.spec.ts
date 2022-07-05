import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutercontactComponent } from './ajoutercontact.component';

describe('AjoutercontactComponent', () => {
  let component: AjoutercontactComponent;
  let fixture: ComponentFixture<AjoutercontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutercontactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutercontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
