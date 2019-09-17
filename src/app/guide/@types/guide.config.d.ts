import { Component } from '@angular/core';

export interface GuideConfig {
  name: string;
  steps: StepConfig[];
  onOpen?: () => Promise<any>;
  onClose?: () => Promise<any>;
  onFinish?: () => Promise<any>;
}

export interface StepConfig {
  anchorElement: string;
  stepType: StepType;
  title: ContentTpl;
  content: ContentTpl;
  titleTpl?: string;
  contentTpl?: string;
  component?: Component;
  enableBackdrop: boolean;
  placement: string;
  prevBtnTitle?: string;
  nextBtnTitle?: string;
  endBtnTitle?: string;
  onStart?: () => Promise<any>;
  onFinish?: () => Promise<any>;
}

export interface ContentTpl {
  type?: 'html' | 'translateKey' | 'component';
  content?: string | Component;
  translateKey?: string; // use with type = 'translateKey'
}

export type StepType = 'text' | 'component';
