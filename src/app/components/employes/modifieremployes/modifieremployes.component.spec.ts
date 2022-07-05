import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifieremployesComponent } from './modifieremployes.component';

describe('ModifieremployesComponent', () => {
  let component: ModifieremployesComponent;
  let fixture: ComponentFixture<ModifieremployesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifieremployesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifieremployesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
