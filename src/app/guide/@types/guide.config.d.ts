import { Component } from '@angular/core';
export interface GuideConfig {
  name: string;
  steps: StepConfig[];
  onOpen?: () => Promise<any>;
  onClose?: () => Promise<any>;
  onFinish?: () => Promise<any>;
}

export class StepConfig {
  index: number;
  anchorElement: string;
  stepType: string;
  title?: string;
  content?: string;
  component?: Component;
  enableBackdrop: boolean;
  placement: string;
  prevBtnTitle?: string;
  nextBtnTitle?: string;
  endBtnTitle?: string;
  onNext?: () => Promise<any>;
  onPrev?: () => Promise<any>;
}
