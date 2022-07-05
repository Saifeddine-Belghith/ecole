import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterrendezvousComponent } from './ajouterrendezvous.component';

describe('AjouterrendezvousComponent', () => {
  let component: AjouterrendezvousComponent;
  let fixture: ComponentFixture<AjouterrendezvousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterrendezvousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterrendezvousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
