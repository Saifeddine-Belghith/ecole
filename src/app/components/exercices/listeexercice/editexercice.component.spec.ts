import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditexerciceComponent } from './editexercice.component';

describe('EditexerciceComponent', () => {
  let component: EditexerciceComponent;
  let fixture: ComponentFixture<EditexerciceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditexerciceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditexerciceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
