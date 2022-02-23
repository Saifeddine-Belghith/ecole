import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditspecialiteComponent } from './editspecialite.component';

describe('EditspecialiteComponent', () => {
  let component: EditspecialiteComponent;
  let fixture: ComponentFixture<EditspecialiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditspecialiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditspecialiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
