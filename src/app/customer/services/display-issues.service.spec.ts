import { TestBed } from '@angular/core/testing';

import { DisplayIssuesService } from './display-issues.service';

describe('DisplayIssuesService', () => {
  let service: DisplayIssuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayIssuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
