import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierniveauComponent } from './modifierniveau.component';

describe('ModifierniveauComponent', () => {
  let component: ModifierniveauComponent;
  let fixture: ComponentFixture<ModifierniveauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierniveauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierniveauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
