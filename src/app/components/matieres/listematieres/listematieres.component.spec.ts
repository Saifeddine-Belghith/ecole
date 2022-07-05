import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListematieresComponent } from './listematieres.component';

describe('ListematieresComponent', () => {
  let component: ListematieresComponent;
  let fixture: ComponentFixture<ListematieresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListematieresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListematieresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
