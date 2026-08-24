import { TestBed } from '@angular/core/testing';

import { SerpostDeleteService } from './serpost-delete.service';

describe('SerpostDeleteService', () => {
  let service: SerpostDeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerpostDeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
