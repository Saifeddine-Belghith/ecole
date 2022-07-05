import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiergarderieComponent } from './modifiergarderie.component';

describe('ModifiergarderieComponent', () => {
  let component: ModifiergarderieComponent;
  let fixture: ComponentFixture<ModifiergarderieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifiergarderieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiergarderieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
