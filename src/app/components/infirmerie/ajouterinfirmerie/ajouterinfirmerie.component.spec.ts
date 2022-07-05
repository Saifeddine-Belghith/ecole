import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterinfirmerieComponent } from './ajouterinfirmerie.component';

describe('AjouterinfirmerieComponent', () => {
  let component: AjouterinfirmerieComponent;
  let fixture: ComponentFixture<AjouterinfirmerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterinfirmerieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterinfirmerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
