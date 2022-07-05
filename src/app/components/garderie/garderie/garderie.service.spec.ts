import { TestBed } from '@angular/core/testing';

import { GarderieService } from './garderie.service';

describe('GarderieService', () => {
  let service: GarderieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GarderieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
