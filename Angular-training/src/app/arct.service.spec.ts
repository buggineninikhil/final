import { TestBed } from '@angular/core/testing';

import { ArctService } from './arct.service';

describe('ArctService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArctService = TestBed.get(ArctService);
    expect(service).toBeTruthy();
  });
});
