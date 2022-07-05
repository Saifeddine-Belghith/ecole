import { TestBed } from '@angular/core/testing';

import { FormationsprofesseurService } from './formationsprofesseur.service';

describe('FormationsprofesseurService', () => {
  let service: FormationsprofesseurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormationsprofesseurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
