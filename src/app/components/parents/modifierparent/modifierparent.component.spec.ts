import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierparentComponent } from './modifierparent.component';

describe('ModifierparentComponent', () => {
  let component: ModifierparentComponent;
  let fixture: ComponentFixture<ModifierparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierparentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
