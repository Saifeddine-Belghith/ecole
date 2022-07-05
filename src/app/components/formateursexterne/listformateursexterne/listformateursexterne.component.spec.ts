import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListformateursexterneComponent } from './listformateursexterne.component';

describe('ListformateursexterneComponent', () => {
  let component: ListformateursexterneComponent;
  let fixture: ComponentFixture<ListformateursexterneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListformateursexterneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListformateursexterneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
