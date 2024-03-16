import { TestBed } from '@angular/core/testing';

import { GetIssuesByCustomerIdService } from './get-issues-by-customer-id.service';

describe('GetIssuesByCustomerIdService', () => {
  let service: GetIssuesByCustomerIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetIssuesByCustomerIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
