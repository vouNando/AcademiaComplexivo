import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { warningsGuard } from './warnings.guard';

describe('warningsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => warningsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
