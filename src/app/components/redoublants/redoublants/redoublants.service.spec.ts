import { TestBed } from '@angular/core/testing';

import { RedoublantsService } from './redoublants.service';

describe('RedoublantsService', () => {
  let service: RedoublantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedoublantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
