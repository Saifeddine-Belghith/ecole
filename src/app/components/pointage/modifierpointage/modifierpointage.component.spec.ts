import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierpointageComponent } from './modifierpointage.component';

describe('ModifierpointageComponent', () => {
  let component: ModifierpointageComponent;
  let fixture: ComponentFixture<ModifierpointageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierpointageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierpointageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
