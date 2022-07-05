import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifieravertissementComponent } from './modifieravertissement.component';

describe('ModifieravertissementComponent', () => {
  let component: ModifieravertissementComponent;
  let fixture: ComponentFixture<ModifieravertissementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifieravertissementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifieravertissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
