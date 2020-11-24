import { TestBed } from '@angular/core/testing';

import { BooktravelService } from './booktravel.service';

describe('BooktravelService', () => {
  let service: BooktravelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooktravelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
