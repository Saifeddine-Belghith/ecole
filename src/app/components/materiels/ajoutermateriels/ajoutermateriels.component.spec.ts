import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutermaterielsComponent } from './ajoutermateriels.component';

describe('AjoutermaterielsComponent', () => {
  let component: AjoutermaterielsComponent;
  let fixture: ComponentFixture<AjoutermaterielsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutermaterielsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutermaterielsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
