import { TestBed } from '@angular/core/testing';

import { StudiPeriodService } from './studi-period.service';

describe('StudiPeriodService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudiPeriodService = TestBed.get(StudiPeriodService);
    expect(service).toBeTruthy();
  });
});
