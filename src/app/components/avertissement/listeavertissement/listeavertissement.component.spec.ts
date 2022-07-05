import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeavertissementComponent } from './listeavertissement.component';

describe('ListeavertissementComponent', () => {
  let component: ListeavertissementComponent;
  let fixture: ComponentFixture<ListeavertissementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeavertissementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeavertissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
