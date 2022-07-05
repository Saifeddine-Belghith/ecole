import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterpointageComponent } from './ajouterpointage.component';

describe('AjouterpointageComponent', () => {
  let component: AjouterpointageComponent;
  let fixture: ComponentFixture<AjouterpointageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterpointageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterpointageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
