import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterplanningComponent } from './ajouterplanning.component';

describe('AjouterplanningComponent', () => {
  let component: AjouterplanningComponent;
  let fixture: ComponentFixture<AjouterplanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterplanningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterplanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
