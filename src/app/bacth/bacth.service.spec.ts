import { TestBed } from '@angular/core/testing';

import { BacthService } from './bacth.service';

describe('BacthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BacthService = TestBed.get(BacthService);
    expect(service).toBeTruthy();
  });
});
