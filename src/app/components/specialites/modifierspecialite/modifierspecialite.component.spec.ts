import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierspecialiteComponent } from './modifierspecialite.component';

describe('ModifierspecialiteComponent', () => {
  let component: ModifierspecialiteComponent;
  let fixture: ComponentFixture<ModifierspecialiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierspecialiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierspecialiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
