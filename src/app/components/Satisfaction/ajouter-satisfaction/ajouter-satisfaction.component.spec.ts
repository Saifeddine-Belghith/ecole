import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterSatisfactionComponent } from './ajouter-satisfaction.component';

describe('AjouterSatisfactionComponent', () => {
  let component: AjouterSatisfactionComponent;
  let fixture: ComponentFixture<AjouterSatisfactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterSatisfactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterSatisfactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
