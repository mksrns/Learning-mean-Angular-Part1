import { TestBed } from '@angular/core/testing';

import { BijakService } from './bijak.service';

describe('BijakService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BijakService = TestBed.get(BijakService);
    expect(service).toBeTruthy();
  });
});
