import { AppService } from './../app.service';
import { Component } from '@angular/core';

export class Tour {
  name: string;
  onOpen?: () => void;
  onClose?: () => 'backdrop' | 'esc';
  onFinish?: () => string;
  steps: TourStep[];
}

export class TourStep {
  stepNumber: number;
  anchorElement: string;
  stepType: 'text' | 'component' = 'text';
  title?: string;
  content?: string;
  component?: Component;
  enableBackdrop = false;
  placement: 'left' | 'top' | 'right' | 'bottom' = 'left';
  prevBtnTitle?: string = 'Previous';
  nextBtnTitl?: string = 'Next';
  endBtnTitle?: string = 'Previous';
  onNext?: (arg?: any) => void;
  onPrev?: () => void;
}

export const tours: Tour[] = [
  {
    name: 'showTour',
    steps: [
      {
        stepNumber: 1,
        anchorElement: '.btn.btn-primary.btn-lg',
        stepType: 'text',
        title: 'Title 1',
        content: 'Content content here',
        enableBackdrop: true,
        placement: 'left',
        onNext(appService: AppService) {
          console.log('============= ONNEXT');
        }
      },
      {
        stepNumber: 1,
        anchorElement: '.btn.btn-primary.btn-lg',
        stepType: 'text',
        title: 'Title',
        content: 'Content',
        enableBackdrop: true,
        placement: 'left'
      }
    ]
  }
];
