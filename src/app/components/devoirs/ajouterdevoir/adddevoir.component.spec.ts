import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddevoirComponent } from './adddevoir.component';

describe('AdddevoirComponent', () => {
  let component: AdddevoirComponent;
  let fixture: ComponentFixture<AdddevoirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddevoirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddevoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
