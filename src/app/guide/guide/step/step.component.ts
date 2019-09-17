import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { Subject } from 'rxjs';
import { isEqual } from 'lodash';
import { StepConfig } from '../../@types/guide.config';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'lv-guide-step',
  templateUrl: './step.template.html',
  styleUrls: ['./step.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('100ms ease-in', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate('100ms ease-in', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class StepComponent implements OnInit, OnChanges, OnDestroy {
  private onDestroy: Subject<void> = new Subject();

  currentStep: StepConfig;
  currentStepVisible = false;

  @Input() step: any;

  constructor() {}

  ngOnInit() {}

  ngOnChanges({ step: { currentValue } }: SimpleChanges) {
    if (currentValue && !isEqual(currentValue, this.currentStep)) {
      this.init(currentValue);
    }
  }

  ngOnDestroy() {
    this.onDestroy.next();
    this.onDestroy.complete();
  }

  private init(step: StepConfig) {
    this.currentStepVisible = false;
    setTimeout(() => {
      this.currentStep = step;
      this.currentStepVisible = true;
    }, 200);
  }
}
