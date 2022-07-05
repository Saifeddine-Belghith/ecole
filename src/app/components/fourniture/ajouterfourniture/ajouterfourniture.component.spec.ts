import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterfournitureComponent } from './ajouterfourniture.component';

describe('AjouterfournitureComponent', () => {
  let component: AjouterfournitureComponent;
  let fixture: ComponentFixture<AjouterfournitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterfournitureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterfournitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
