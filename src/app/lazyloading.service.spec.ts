import { TestBed } from '@angular/core/testing';

import { LazyloadingService } from './lazyloading.service';

describe('LazyloadingService', () => {
  let service: LazyloadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LazyloadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
