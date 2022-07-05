import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListplanningComponent } from './listplanning.component';

describe('ListplanningComponent', () => {
  let component: ListplanningComponent;
  let fixture: ComponentFixture<ListplanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListplanningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListplanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
