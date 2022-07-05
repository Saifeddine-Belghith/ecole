import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeemploiComponent } from './listeemploi.component';

describe('ListeemploiComponent', () => {
  let component: ListeemploiComponent;
  let fixture: ComponentFixture<ListeemploiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeemploiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeemploiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
