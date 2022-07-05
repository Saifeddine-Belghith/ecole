import { TestBed } from '@angular/core/testing';

import { InfirmerieService } from './infirmerie.service';

describe('InfirmerieService', () => {
  let service: InfirmerieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfirmerieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
