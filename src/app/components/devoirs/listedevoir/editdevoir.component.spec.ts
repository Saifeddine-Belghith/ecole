import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdevoirComponent } from './editdevoir.component';

describe('EditdevoirComponent', () => {
  let component: EditdevoirComponent;
  let fixture: ComponentFixture<EditdevoirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditdevoirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdevoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
