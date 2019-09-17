import { Component } from '@angular/core';
import { GuideService } from './guide/guide.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-app';

  constructor(private guideService: GuideService) {}

  showTour() {
    this.guideService.startGuide('welcomeGuide');
  }
}
