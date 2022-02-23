import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeroleComponent } from './listerole.component';

describe('ListeroleComponent', () => {
  let component: ListeroleComponent;
  let fixture: ComponentFixture<ListeroleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeroleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
