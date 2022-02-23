import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterpermissionComponent } from './ajouterpermission.component';

describe('AjouterpermissionComponent', () => {
  let component: AjouterpermissionComponent;
  let fixture: ComponentFixture<AjouterpermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterpermissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterpermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
