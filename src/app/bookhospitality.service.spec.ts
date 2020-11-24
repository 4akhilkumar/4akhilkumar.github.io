import { TestBed } from '@angular/core/testing';

import { BookhospitalityService } from './bookhospitality.service';

describe('BookhospitalityService', () => {
  let service: BookhospitalityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookhospitalityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
