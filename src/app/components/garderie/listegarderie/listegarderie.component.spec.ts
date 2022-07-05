import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListegarderieComponent } from './listegarderie.component';

describe('ListegarderieComponent', () => {
  let component: ListegarderieComponent;
  let fixture: ComponentFixture<ListegarderieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListegarderieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListegarderieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
