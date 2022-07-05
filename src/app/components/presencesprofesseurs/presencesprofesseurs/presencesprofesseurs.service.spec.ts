import { TestBed } from '@angular/core/testing';

import { PresencesprofesseursService } from './presencesprofesseurs.service';

describe('PresencesprofesseursService', () => {
  let service: PresencesprofesseursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PresencesprofesseursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
