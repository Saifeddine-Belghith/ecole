import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierinfirmerieComponent } from './modifierinfirmerie.component';

describe('ModifierinfirmerieComponent', () => {
  let component: ModifierinfirmerieComponent;
  let fixture: ComponentFixture<ModifierinfirmerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierinfirmerieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierinfirmerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
