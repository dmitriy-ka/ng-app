import { Tour, TourStep, tours } from './ngx-tour.config';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgxTourService {
  private _allTours: Map<string, Tour> = new Map();
  private _currentTour: BehaviorSubject<Tour | null> = new BehaviorSubject(
    null
  );
  private _currentStep: BehaviorSubject<TourStep | null> = new BehaviorSubject(
    null
  );

  constructor() {
    tours.forEach(tour => this._allTours.set(tour.name, tour));
  }

  get currentTour(): Observable<Tour> {
    return this._currentTour.asObservable();
  }

  get currentStep(): Observable<TourStep> {
    return this._currentStep.asObservable();
  }

  startTour(tourname) {
    if (!this._allTours.has(tourname)) {
      return;
    }
    // TODO: initialize tour
    const tour = this._allTours.get(tourname);
    this._currentTour.next(tour);
    this._currentStep.next(tour.steps[0]);
  }

  finishTour() {}
}
