import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierplanningComponent } from './modifierplanning.component';

describe('ModifierplanningComponent', () => {
  let component: ModifierplanningComponent;
  let fixture: ComponentFixture<ModifierplanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierplanningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierplanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
