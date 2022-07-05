import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeLivretComponent } from './liste-livret.component';

describe('ListeLivretComponent', () => {
  let component: ListeLivretComponent;
  let fixture: ComponentFixture<ListeLivretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeLivretComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeLivretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
