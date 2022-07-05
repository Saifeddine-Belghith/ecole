import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierfournitureComponent } from './modifierfourniture.component';

describe('ModifierfournitureComponent', () => {
  let component: ModifierfournitureComponent;
  let fixture: ComponentFixture<ModifierfournitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierfournitureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierfournitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
