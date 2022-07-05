import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterredoublantsComponent } from './ajouterredoublants.component';

describe('AjouterredoublantsComponent', () => {
  let component: AjouterredoublantsComponent;
  let fixture: ComponentFixture<AjouterredoublantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterredoublantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterredoublantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
