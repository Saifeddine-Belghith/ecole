import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSatisfactionComponent } from './list-satisfaction.component';

describe('ListSatisfactionComponent', () => {
  let component: ListSatisfactionComponent;
  let fixture: ComponentFixture<ListSatisfactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSatisfactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSatisfactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
