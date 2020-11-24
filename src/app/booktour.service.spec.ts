import { TestBed } from '@angular/core/testing';

import { BooktourService } from './booktour.service';

describe('BooktourService', () => {
  let service: BooktourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooktourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
