import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterformationscandidatsComponent } from './ajouterformationscandidats.component';

describe('AjouterformationscandidatsComponent', () => {
  let component: AjouterformationscandidatsComponent;
  let fixture: ComponentFixture<AjouterformationscandidatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterformationscandidatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterformationscandidatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
