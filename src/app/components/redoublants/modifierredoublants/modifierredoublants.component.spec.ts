import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierredoublantsComponent } from './modifierredoublants.component';

describe('ModifierredoublantsComponent', () => {
  let component: ModifierredoublantsComponent;
  let fixture: ComponentFixture<ModifierredoublantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierredoublantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierredoublantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
