import { TestBed } from '@angular/core/testing';

import { ZomatoCoreService } from './zomato-core.service';

describe('ZomatoCoreService', () => {
  let service: ZomatoCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZomatoCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
