import { TestBed } from '@angular/core/testing';

import { WelcomeGuideService } from './welcome-guide.service';

describe('WelcomeGuideService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WelcomeGuideService = TestBed.get(WelcomeGuideService);
    expect(service).toBeTruthy();
  });
});
