import { TestBed } from '@angular/core/testing';

import { DeleteIssueService } from './delete-issue.service';

describe('DeleteIssueService', () => {
  let service: DeleteIssueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteIssueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
