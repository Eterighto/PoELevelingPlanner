import { TestBed } from '@angular/core/testing';

import { GemDictService } from './gem-dict.service';

describe('GemDictService', () => {
  let service: GemDictService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GemDictService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
