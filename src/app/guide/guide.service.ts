import { GuideConfig } from './@types/guide.config';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { GuideProvider } from './@types/guide-provider';
import { Observable, BehaviorSubject } from 'rxjs';

export const GUIDE_PROVIDERS = new InjectionToken<GuideProvider>(
  'GUIDE_PROVIDERS'
);

@Injectable({
  providedIn: 'root'
})
export class GuideService {
  private guideConfigs: Map<string, GuideConfig> = new Map();
  private currentGuide: BehaviorSubject<
    GuideConfig | any
  > = new BehaviorSubject(null);

  constructor(
    @Inject(GUIDE_PROVIDERS) public guideProviders: GuideProvider[]
  ) {}

  init() {
    this.guideProviders.forEach(provider => this.add(provider));
  }

  startGuide(name: string) {
    if (!this.guideConfigs.has(name)) {
      return;
    }
    const guide = this.guideConfigs.get(name);
    this.currentGuide.next(guide);
  }

  getCurrentGuide(): Observable<GuideConfig | null> {
    return this.currentGuide.asObservable();
  }

  private add(provider: GuideProvider) {
    const { name, getConfig } = provider;
    if (this.guideConfigs.has(name)) {
      throw new Error(`Guide with name (${name}) already exist`);
    }
    this.guideConfigs.set(name, getConfig.call(provider));
  }
}
