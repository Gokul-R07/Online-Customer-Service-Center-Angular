import { TestBed } from '@angular/core/testing';

import { getCustomerByEmailService } from './view-Customer.service';

describe('GetIssuesByCustomerIdService', () => {
  let service: getCustomerByEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(getCustomerByEmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
