import { TestBed } from '@angular/core/testing';

import { StudiMaterialService } from './studi-material.service';

describe('StudiMaterialService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudiMaterialService = TestBed.get(StudiMaterialService);
    expect(service).toBeTruthy();
  });
});
