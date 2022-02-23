import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditniveauComponent } from './editniveau.component';

describe('EditniveauComponent', () => {
  let component: EditniveauComponent;
  let fixture: ComponentFixture<EditniveauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditniveauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditniveauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
