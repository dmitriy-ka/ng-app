import { WelcomeGuideConfig } from './app-guides/welcome-guide/welcome-guide.config';
import { GuideConfig, StepConfig } from './guides.config';
import { Injectable, Injector } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuidesService {
  private allGuides: Map<string, GuideConfig> = new Map();
  private currentGuide: BehaviorSubject<GuideConfig | null> = new BehaviorSubject(
    null
  );

  constructor(injector: Injector) {
    const guides = [WelcomeGuideConfig];
    guides.forEach((guideConfig: GuideConfig) => {
      const guide = { ...guideConfig };
      guide.service = injector.get(guideConfig.serviceInjectionToken);
      this.allGuides.set(guide.name, guide);
      guide.service.hello();
    });
  }

  getCurrentGuide(): Observable<GuideConfig> {
    return this.currentGuide.asObservable();
  }

  async showGuide(name) {
    if (!this.allGuides.has(name)) {
      return;
    }
    const guide = this.allGuides.get(name);
    await guide.onOpen(guide.service);
    this.currentGuide.next(guide);
  }

  async finishGuide(name) {}
}
