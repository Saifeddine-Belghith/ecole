import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListematerielsComponent } from './listemateriels.component';

describe('ListematerielsComponent', () => {
  let component: ListematerielsComponent;
  let fixture: ComponentFixture<ListematerielsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListematerielsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListematerielsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
