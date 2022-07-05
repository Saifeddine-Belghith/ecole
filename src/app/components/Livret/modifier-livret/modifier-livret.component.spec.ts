import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierLivretComponent } from './modifier-livret.component';

describe('ModifierLivretComponent', () => {
  let component: ModifierLivretComponent;
  let fixture: ComponentFixture<ModifierLivretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierLivretComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierLivretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
