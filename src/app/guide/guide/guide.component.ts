import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { get as _get } from 'lodash';
import { StepConfig, GuideConfig } from '../@types/guide.config';
import { GuideService } from '../guide.service';

@Component({
  selector: 'lv-guide',
  templateUrl: './guide.template.html',
  styleUrls: ['./guide.component.scss']
})
export class GuideComponent implements OnInit, OnDestroy {
  private onDestroy: Subject<void> = new Subject();

  @Input() user: any;
  @Input() isAuthenticated: boolean;

  @ViewChild('modal') modal: ElementRef;

  guideVisible = false;
  guide: GuideConfig;
  currentStep: StepConfig;
  stepChangeInProgress = false;

  get currentStepIndex(): number {
    if (_get(this.guide, 'steps') && this.currentStep) {
      return this.guide.steps.indexOf(this.currentStep);
    }
    return -1;
  }

  get isLastStep(): boolean {
    return (
      this.guide &&
      this.guide.steps &&
      this.guide.steps.length === this.currentStepIndex + 1
    );
  }

  get isFirstStep(): boolean {
    return this.currentStepIndex === 0;
  }

  constructor(
    private guideService: GuideService,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.guideService
      .getCurrentGuide()
      .pipe(
        filter((guide: GuideConfig | null) => {
          if (!guide) this.clearGuide();
          return Boolean(guide);
        }),
        takeUntil(this.onDestroy)
      )
      .subscribe(guide => {
        this.startGuide(guide as GuideConfig);
      });
  }

  ngOnDestroy() {
    this.onDestroy.next();
    this.onDestroy.complete();
  }

  async prevStep() {
    const prevStep = this.guide.steps[this.currentStepIndex - 1];

    if (this.stepChangeInProgress) {
      return;
    }
    this.stepChangeInProgress = true;

    if (prevStep) {
      await this.onStartStep(prevStep);
      this.currentStep = prevStep;
    }

    this.stepChangeInProgress = false;
  }

  async nextStep() {
    const nextStep = this.guide.steps[this.currentStepIndex + 1];

    if (this.stepChangeInProgress) {
      return;
    }
    this.stepChangeInProgress = true;

    await this.onFinishStep(this.currentStep);
    if (nextStep) {
      await this.onStartStep(nextStep);
      this.currentStep = nextStep;
    } else {
      await this.onFinishGuide(this.guide);
      this.clearGuide();
    }
    this.stepChangeInProgress = false;
  }

  async closeGuide() {
    await this.onCloseGuide(this.guide);
    this.clearGuide();
  }

  private async startGuide(guide: GuideConfig) {
    this.guide = guide;
    this.currentStep = this.guide.steps[0];
    await this.onStartGuide(this.guide);
    await this.onStartStep(this.guide.steps[0]);
    this.setStepPosition();
    this.guideVisible = true;
  }

  private clearGuide() {
    this.guideVisible = false;
    this.guide = null;
    this.currentStep = null;
  }

  private async onStartGuide(guide: GuideConfig): Promise<any> {
    if (typeof guide.onOpen === 'function') {
      await guide.onOpen();
    }
    return Promise.resolve();
  }

  private async onCloseGuide(guide: GuideConfig): Promise<any> {
    if (typeof guide.onClose === 'function') {
      return await guide.onClose();
    }
    return Promise.resolve();
  }

  private async onFinishGuide(guide: GuideConfig): Promise<any> {
    if (typeof guide.onFinish === 'function') {
      return await guide.onFinish();
    }
    return Promise.resolve();
  }

  private async onStartStep(step: StepConfig): Promise<any> {
    if (typeof step.onStart === 'function') {
      return await step.onStart();
    }
    return Promise.resolve();
  }

  private async onFinishStep(step: StepConfig): Promise<any> {
    this.currentStep = step;
    if (typeof step.onFinish === 'function') {
      return await step.onFinish();
    }
    return Promise.resolve();
  }

  private setStepPosition() {
    // TODO: set position depend on anchor element
  }
}
