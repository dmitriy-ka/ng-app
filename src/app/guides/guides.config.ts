import { GuideConfig } from './guides.config';
import { Component, Injector, InjectionToken, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { GuideService } from './guide/guide.service';

export interface GuideConfig {
  name: string;
  serviceInjectionToken?: Type<GuideService | any>;
  service?: GuideService | any; // initialized service
  steps: StepConfig[];
  onOpen?: (guideService) => void;
  onClose?: (guideService) => 'backdrop' | 'esc';
  onFinish?: (guideService) => string;
}

export class StepConfig {
  index: number;
  anchorElement: string;
  stepType: 'text' | 'component' = 'text';
  title?: string;
  content?: string;
  component?: Component;
  enableBackdrop = false;
  placement: 'left' | 'top' | 'right' | 'bottom' = 'left';
  prevBtnTitle?: string = 'Previous';
  nextBtnTitle?: string = 'Next';
  endBtnTitle?: string = 'Previous';
  next?: (guideService) => Promise<any> | Observable<any>;
  prev?: (guideService) => Promise<any> | Observable<any>;
}
