import { TestBed } from '@angular/core/testing';

import { ReuniaoService } from './reuniao.service';

describe('ReuniaoService', () => {
  let service: ReuniaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReuniaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
