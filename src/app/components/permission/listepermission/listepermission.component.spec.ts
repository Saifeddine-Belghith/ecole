import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListepermissionComponent } from './listepermission.component';

describe('ListepermissionComponent', () => {
  let component: ListepermissionComponent;
  let fixture: ComponentFixture<ListepermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListepermissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListepermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
