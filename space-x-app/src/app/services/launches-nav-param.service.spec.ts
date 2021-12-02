import { TestBed } from '@angular/core/testing';

import { LaunchesNavParamService } from './launches-nav-param.service';

describe('LaunchesNavParamService', () => {
  let service: LaunchesNavParamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaunchesNavParamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
