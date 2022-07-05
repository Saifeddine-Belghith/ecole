import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterpresenceselevesComponent } from './ajouterpresenceseleves.component';

describe('AjouterpresenceselevesComponent', () => {
  let component: AjouterpresenceselevesComponent;
  let fixture: ComponentFixture<AjouterpresenceselevesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterpresenceselevesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterpresenceselevesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
