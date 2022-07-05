import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiermaterielsComponent } from './modifiermateriels.component';

describe('ModifiermaterielsComponent', () => {
  let component: ModifiermaterielsComponent;
  let fixture: ComponentFixture<ModifiermaterielsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifiermaterielsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiermaterielsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
