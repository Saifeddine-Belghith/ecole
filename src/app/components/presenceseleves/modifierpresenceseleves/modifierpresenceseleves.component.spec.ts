import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierpresenceselevesComponent } from './modifierpresenceseleves.component';

describe('ModifierpresenceselevesComponent', () => {
  let component: ModifierpresenceselevesComponent;
  let fixture: ComponentFixture<ModifierpresenceselevesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierpresenceselevesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierpresenceselevesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
