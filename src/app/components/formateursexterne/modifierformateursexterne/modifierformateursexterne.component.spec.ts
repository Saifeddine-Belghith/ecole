import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierformateursexterneComponent } from './modifierformateursexterne.component';

describe('ModifierformateursexterneComponent', () => {
  let component: ModifierformateursexterneComponent;
  let fixture: ComponentFixture<ModifierformateursexterneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierformateursexterneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierformateursexterneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
