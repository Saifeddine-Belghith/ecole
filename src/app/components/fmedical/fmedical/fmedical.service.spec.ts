import { TestBed } from '@angular/core/testing';

import { FmedicalService } from './fmedical.service';

describe('FmedicalService', () => {
  let service: FmedicalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FmedicalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
