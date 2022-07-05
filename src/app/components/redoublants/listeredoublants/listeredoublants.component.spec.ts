import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeredoublantsComponent } from './listeredoublants.component';

describe('ListeredoublantsComponent', () => {
  let component: ListeredoublantsComponent;
  let fixture: ComponentFixture<ListeredoublantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeredoublantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeredoublantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
