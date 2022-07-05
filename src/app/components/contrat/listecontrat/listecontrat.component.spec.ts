import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListecontratComponent } from './listecontrat.component';

describe('ListecontratComponent', () => {
  let component: ListecontratComponent;
  let fixture: ComponentFixture<ListecontratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListecontratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListecontratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
