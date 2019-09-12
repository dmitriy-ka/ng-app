import { NgxTourService } from './ngx-tour/ngx-tour.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-app';

  constructor(private tourService: NgxTourService) {}

  showTour() {
    this.tourService.startTour('showTour');
  }
}
