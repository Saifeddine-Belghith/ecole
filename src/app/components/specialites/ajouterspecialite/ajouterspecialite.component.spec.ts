import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterspecialiteComponent } from './ajouterspecialite.component';

describe('AjouterspecialiteComponent', () => {
  let component: AjouterspecialiteComponent;
  let fixture: ComponentFixture<AjouterspecialiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterspecialiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterspecialiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
