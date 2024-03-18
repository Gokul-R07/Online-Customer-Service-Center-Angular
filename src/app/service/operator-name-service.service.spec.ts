import { TestBed } from '@angular/core/testing';

import { OperatorNameServiceService } from './operator-name-service.service';

describe('OperatorNameServiceService', () => {
  let service: OperatorNameServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperatorNameServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
