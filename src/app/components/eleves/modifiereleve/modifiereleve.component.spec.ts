import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiereleveComponent } from './modifiereleve.component';

describe('ModifiereleveComponent', () => {
  let component: ModifiereleveComponent;
  let fixture: ComponentFixture<ModifiereleveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifiereleveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiereleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
