import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeformationscandidatsComponent } from './listeformationscandidats.component';

describe('ListeformationscandidatsComponent', () => {
  let component: ListeformationscandidatsComponent;
  let fixture: ComponentFixture<ListeformationscandidatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeformationscandidatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeformationscandidatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
