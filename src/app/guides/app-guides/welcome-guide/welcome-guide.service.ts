import { WelcomeGuideConfig } from './welcome-guide.config';
import { GuideService } from './../../guide/guide.service';
import { Injectable, InjectionToken } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeGuideService extends GuideService {
  constructor() {
    super();
  }

  hello() {
    console.log('=========== HELLO WORLD');
  }
}

export const WELCOME_GUIDE_SERVICE = new InjectionToken<WelcomeGuideService>(
  'WelcomeGuideService'
);
