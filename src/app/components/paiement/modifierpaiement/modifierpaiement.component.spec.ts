import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierpaiementComponent } from './modifierpaiement.component';

describe('ModifierpaiementComponent', () => {
  let component: ModifierpaiementComponent;
  let fixture: ComponentFixture<ModifierpaiementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierpaiementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierpaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
