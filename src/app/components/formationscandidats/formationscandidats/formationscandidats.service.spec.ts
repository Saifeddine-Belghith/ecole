import { TestBed } from '@angular/core/testing';

import { FormationscandidatsService } from './formationscandidats.service';

describe('FormationscandidatsService', () => {
  let service: FormationscandidatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormationscandidatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
