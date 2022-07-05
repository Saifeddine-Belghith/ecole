import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpaiementComponent } from './listpaiement.component';

describe('ListpaiementComponent', () => {
  let component: ListpaiementComponent;
  let fixture: ComponentFixture<ListpaiementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListpaiementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
