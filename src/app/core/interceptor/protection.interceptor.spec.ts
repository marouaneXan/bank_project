import { TestBed } from '@angular/core/testing';

import { ProtectionInterceptor } from './protection.interceptor';

describe('ProtectionInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ProtectionInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ProtectionInterceptor = TestBed.inject(ProtectionInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
