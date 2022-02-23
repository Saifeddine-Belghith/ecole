import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddexerciceComponent } from './addexercice.component';

describe('AddexerciceComponent', () => {
  let component: AddexerciceComponent;
  let fixture: ComponentFixture<AddexerciceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddexerciceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddexerciceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
