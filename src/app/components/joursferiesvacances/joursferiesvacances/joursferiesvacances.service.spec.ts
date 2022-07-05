import { TestBed } from '@angular/core/testing';

import { JoursferiesvacancesService } from './joursferiesvacances.service';

describe('JoursferiesvacancesService', () => {
  let service: JoursferiesvacancesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JoursferiesvacancesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
