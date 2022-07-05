import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListechargeComponent } from './listecharge.component';

describe('ListechargeComponent', () => {
  let component: ListechargeComponent;
  let fixture: ComponentFixture<ListechargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListechargeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListechargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
