import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterniveauComponent } from './ajouterniveau.component';

describe('AjouterniveauComponent', () => {
  let component: AjouterniveauComponent;
  let fixture: ComponentFixture<AjouterniveauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterniveauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterniveauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
