import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListinfirmerieComponent } from './listinfirmerie.component';

describe('ListinfirmerieComponent', () => {
  let component: ListinfirmerieComponent;
  let fixture: ComponentFixture<ListinfirmerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListinfirmerieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListinfirmerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
