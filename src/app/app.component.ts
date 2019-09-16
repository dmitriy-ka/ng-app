import { GuideService } from './guide/guide.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-app';

  constructor(private guideService: GuideService) {}

  showTour() {
    this.guideService.start('welcomeGuideService');
  }
}
