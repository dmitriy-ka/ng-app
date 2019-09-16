import { Subject } from 'rxjs';
import { GuideService } from './../guide.service';
import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  Renderer2
} from '@angular/core';
import { GuideConfig, StepConfig } from '../@types/guide.config';
import { takeUntil, filter } from 'rxjs/operators';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss']
})
export class GuideComponent implements OnInit, OnDestroy {
  private onDestroy: Subject<void> = new Subject();

  @ViewChild('modal') modal: ElementRef;

  guideVisible = false;
  guide: GuideConfig;
  currentStep: StepConfig;
  stepChangeInProgress = false;

  constructor(
    private guideService: GuideService,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.guideService
      .getCurrentGuide()
      .pipe(
        filter(guide => Boolean(guide)),
        takeUntil(this.onDestroy)
      )
      .subscribe(guide => {
        this.startGuide(guide);
      });
  }

  ngOnDestroy() {
    this.onDestroy.next();
    this.onDestroy.complete();
  }

  async prev() {
    if (this.stepChangeInProgress) {
      return;
    }
  }

  async next() {
    if (this.stepChangeInProgress) {
      return;
    }
    this.stepChangeInProgress = true;
    if (typeof this.currentStep.onNext === 'function') {
      await this.currentStep.onNext();
    }
  }

  async close() {}

  async finish() {}

  private async startGuide(guide: GuideConfig) {
    this.guide = guide;
    this.currentStep = guide.steps[0];
    this.setPosition();
    this.showGuide();
    if (typeof guide.onOpen === 'function') {
      await guide.onOpen();
    }
    this.currentStep = this.guide.steps[0];
  }

  private setPosition() {
    // TODO: set position depend on anchor element
  }

  private showGuide() {
    this.guideVisible = true;
    this.renderer.setStyle(this.modal.nativeElement, 'display', 'block');
    this.renderer.addClass(this.modal.nativeElement, 'show');
  }
}
