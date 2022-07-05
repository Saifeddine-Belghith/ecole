import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierexerciceComponent } from './modifierexercice.component';

describe('ModifierexerciceComponent', () => {
  let component: ModifierexerciceComponent;
  let fixture: ComponentFixture<ModifierexerciceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierexerciceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierexerciceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
