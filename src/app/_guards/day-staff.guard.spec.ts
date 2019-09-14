import { TestBed, async, inject } from '@angular/core/testing';

import { DayStaffGuard } from './day-staff.guard';

describe('DayStaffGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DayStaffGuard]
    });
  });

  it('should ...', inject([DayStaffGuard], (guard: DayStaffGuard) => {
    expect(guard).toBeTruthy();
  }));
});
