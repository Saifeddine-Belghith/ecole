import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditclasseComponent } from './editclasse.component';

describe('EditclasseComponent', () => {
  let component: EditclasseComponent;
  let fixture: ComponentFixture<EditclasseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditclasseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditclasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
