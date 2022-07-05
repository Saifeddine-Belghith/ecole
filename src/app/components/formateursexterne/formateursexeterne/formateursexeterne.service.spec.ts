import { TestBed } from '@angular/core/testing';

import { FormateursexeterneService } from './formateursexeterne.service';

describe('FormateursexeterneService', () => {
  let service: FormateursexeterneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormateursexeterneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
