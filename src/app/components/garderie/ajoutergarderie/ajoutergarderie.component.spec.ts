import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutergarderieComponent } from './ajoutergarderie.component';

describe('AjoutergarderieComponent', () => {
  let component: AjoutergarderieComponent;
  let fixture: ComponentFixture<AjoutergarderieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutergarderieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutergarderieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
