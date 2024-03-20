import { TestBed } from '@angular/core/testing';

import { SolutionModuleServiceService } from './solution-module-service.service';

describe('SolutionModuleServiceService', () => {
  let service: SolutionModuleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolutionModuleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
