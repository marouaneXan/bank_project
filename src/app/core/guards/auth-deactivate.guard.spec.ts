import { TestBed } from '@angular/core/testing';

import { AuthDeactivateGuard } from './auth-deactivate.guard';

describe('AuthDeactivateGuard', () => {
  let guard: AuthDeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthDeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
