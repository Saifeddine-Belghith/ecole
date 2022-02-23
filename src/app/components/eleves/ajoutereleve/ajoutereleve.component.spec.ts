import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutereleveComponent } from './ajoutereleve.component';

describe('AjoutereleveComponent', () => {
  let component: AjoutereleveComponent;
  let fixture: ComponentFixture<AjoutereleveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutereleveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutereleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
