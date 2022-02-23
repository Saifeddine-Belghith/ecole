import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeleveComponent } from './editeleve.component';

describe('EditeleveComponent', () => {
  let component: EditeleveComponent;
  let fixture: ComponentFixture<EditeleveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditeleveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
