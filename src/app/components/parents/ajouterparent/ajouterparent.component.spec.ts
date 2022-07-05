import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterparentComponent } from './ajouterparent.component';

describe('AjouterparentComponent', () => {
  let component: AjouterparentComponent;
  let fixture: ComponentFixture<AjouterparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterparentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
