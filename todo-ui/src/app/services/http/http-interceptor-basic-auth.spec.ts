import { TestBed } from '@angular/core/testing';
import { HttpInterceptorBasicAuth } from './http-interceptor-basic-auth';

describe('HttpInterceptorBasicAuth', () => {
  let service: HttpInterceptorBasicAuth;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpInterceptorBasicAuth);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
