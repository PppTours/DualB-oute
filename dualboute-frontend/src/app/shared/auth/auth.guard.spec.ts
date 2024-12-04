import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { needLoginGuard } from './auth.guard';

describe('needLoginGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => needLoginGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

describe('needLogOutGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => needLoginGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

