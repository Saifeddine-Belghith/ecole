import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpresenceselevesComponent } from './listpresenceseleves.component';

describe('ListpresenceselevesComponent', () => {
  let component: ListpresenceselevesComponent;
  let fixture: ComponentFixture<ListpresenceselevesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListpresenceselevesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpresenceselevesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
