import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListefmedicalComponent } from './listefmedical.component';

describe('ListefmedicalComponent', () => {
  let component: ListefmedicalComponent;
  let fixture: ComponentFixture<ListefmedicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListefmedicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListefmedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
