import { takeUntil, filter } from 'rxjs/operators';
import { GuidesService } from './../guides.service';
import { GuideConfig } from './../guides.config';
import { Subject } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { StepConfig } from '../guides.config';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss']
})
export class GuideComponent implements OnInit, OnDestroy {
  private onDestroy: Subject<void> = new Subject();

  guide: GuideConfig;
  step: StepConfig;
  isStepChangePending = false;

  constructor(private guidesService: GuidesService) {}

  ngOnInit() {
    this.guidesService
      .getCurrentGuide()
      .pipe(
        filter(guide => Boolean(guide)),
        takeUntil(this.onDestroy)
      )
      .subscribe(guide => {
        this.showGuide(guide);
      });
  }

  ngOnDestroy() {
    this.onDestroy.next();
    this.onDestroy.complete();
  }

  async prev() {
    // TODO: add logic for prev/next
    // validate length, finish
    this.isStepChangePending = true;
    await this.step.prev(this.guide.service);
    this.isStepChangePending = true;
  }

  async next() {
    // TODO: add logic for prev/next
    // validate length, finish
    this.isStepChangePending = true;
    await this.step.next(this.guide.service);
    this.isStepChangePending = true;
  }

  async finish() {
    // TODO: add logic for prev/next
    // validate length, finish
    this.isStepChangePending = true;
    await this.guide.onFinish(this.guide.service);
    this.isStepChangePending = true;
  }

  private async showGuide(guide: GuideConfig) {
    await this.guide.onOpen(this.guide.service);
    this.initializeStep(guide.steps[0]);
  }

  private async closeGuide(guide: GuideConfig) {
    await this.guide.onClose(this.guide.service);
  }

  private initializeStep(step: StepConfig) {}

  private updatePosition(step: StepConfig) {}
}
