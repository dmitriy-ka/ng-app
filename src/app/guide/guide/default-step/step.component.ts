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

@Component({
  selector: 'lv-guide-step',
  templateUrl: './step.template.html',
  styleUrls: ['./step.component.scss']
})
export class DefaultStepComponent implements OnInit, OnChanges, OnDestroy {
  private onDestroy: Subject<void> = new Subject();

  currentStep: StepConfig;

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
    this.currentStep = step;
  }
}
