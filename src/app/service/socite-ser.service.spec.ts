import { TestBed } from '@angular/core/testing';

import { SociteSerService } from './socite-ser.service';

describe('SociteSerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SociteSerService = TestBed.get(SociteSerService);
    expect(service).toBeTruthy();
  });
});
