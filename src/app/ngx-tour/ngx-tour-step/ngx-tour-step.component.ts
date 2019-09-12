import { NgxTourService } from './../ngx-tour.service';
import { Tour } from './../ngx-tour.config';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { TourStep } from '../ngx-tour.config';
import { Subject, combineLatest } from 'rxjs';
import { takeUntil, filter, withLatestFrom, combineAll } from 'rxjs/operators';

@Component({
  selector: 'app-ngx-tour-step',
  templateUrl: './ngx-tour-step.component.html',
  styleUrls: ['./ngx-tour-step.component.scss']
})
export class NgxTourStepComponent implements OnInit, OnDestroy {
  private onDestroy: Subject<void> = new Subject();
  tour: Tour;
  step: TourStep;

  constructor(private tourService: NgxTourService) {}

  ngOnInit() {
    combineLatest(this.tourService.currentTour, this.tourService.currentStep)
      .pipe(
        filter(([tour, step]) => Boolean(step) && Boolean(tour)),
        takeUntil(this.onDestroy)
      )
      .subscribe(([tour, step]) => {
        console.log('=============', { tour, step });
        this.initializeStep(tour, step);
      });
  }

  ngOnDestroy() {
    this.onDestroy.next();
    this.onDestroy.complete();
  }

  get isNextBtnShown(): boolean {
    return true;
  }

  get isPrevBtnShown(): boolean {
    return true;
  }

  get isFinishBtnShown(): boolean {
    return true;
  }

  onPrev() {
    console.log('prev');
    this.step.onNext();
  }

  onNext() {
    console.log('next');
    this.step.onNext();
  }

  onFinish() {
    console.log('finish');
  }

  private initializeStep(tour: Tour, step: TourStep) {
    this.tour = tour;
    this.step = step;
  }

  private updatePosition(): void {}
}
