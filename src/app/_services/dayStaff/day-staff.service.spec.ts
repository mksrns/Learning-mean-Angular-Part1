import { TestBed } from '@angular/core/testing';

import { DayStaffService } from './day-staff.service';

describe('DayStaffService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DayStaffService = TestBed.get(DayStaffService);
    expect(service).toBeTruthy();
  });
});
