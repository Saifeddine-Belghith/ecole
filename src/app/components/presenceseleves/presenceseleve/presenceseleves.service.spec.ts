import { TestBed } from '@angular/core/testing';

import { PresenceselevesService } from './presenceseleves.service';

describe('PresenceselevesService', () => {
  let service: PresenceselevesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PresenceselevesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
