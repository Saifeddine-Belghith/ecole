import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierchargeComponent } from './modifiercharge.component';

describe('ModifierchargeComponent', () => {
  let component: ModifierchargeComponent;
  let fixture: ComponentFixture<ModifierchargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierchargeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierchargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
