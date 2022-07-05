import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierfmedicalComponent } from './modifierfmedical.component';

describe('ModifierfmedicalComponent', () => {
  let component: ModifierfmedicalComponent;
  let fixture: ComponentFixture<ModifierfmedicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierfmedicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierfmedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
