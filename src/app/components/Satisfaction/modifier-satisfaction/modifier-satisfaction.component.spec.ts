import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierSatisfactionComponent } from './modifier-satisfaction.component';

describe('ModifierSatisfactionComponent', () => {
  let component: ModifierSatisfactionComponent;
  let fixture: ComponentFixture<ModifierSatisfactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierSatisfactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierSatisfactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
