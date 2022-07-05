import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterfmedicalComponent } from './ajouterfmedical.component';

describe('AjouterfmedicalComponent', () => {
  let component: AjouterfmedicalComponent;
  let fixture: ComponentFixture<AjouterfmedicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterfmedicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterfmedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
