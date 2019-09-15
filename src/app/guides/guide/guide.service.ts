import { GuideConfig, StepConfig } from './../guides.config';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class GuideService {
  guide: GuideConfig;
  currentStep: StepConfig;

  setGuide(guide) {
    this.guide = guide;
  }

  setStep(step) {
    this.currentStep = step;
  }

  next(currentIndex: number): Promise<any> {
    return Promise.resolve();
  }

  prev(currentIndex: number): Promise<any> {
    return Promise.resolve();
  }
}
