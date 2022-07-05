import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiernoteComponent } from './modifiernote.component';

describe('ModifiernoteComponent', () => {
  let component: ModifiernoteComponent;
  let fixture: ComponentFixture<ModifiernoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifiernoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiernoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
