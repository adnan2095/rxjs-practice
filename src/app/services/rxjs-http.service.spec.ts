import { TestBed } from '@angular/core/testing';

import { RxjsHttpService } from './rxjs-http.service';

describe('RxjsHttpService', () => {
  let service: RxjsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RxjsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
