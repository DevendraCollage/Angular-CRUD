import { TestBed } from '@angular/core/testing';

import { CrudMockFacService } from './crud-mock-fac.service';

describe('CrudMockFacService', () => {
  let service: CrudMockFacService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudMockFacService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
