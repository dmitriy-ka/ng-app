import {
  WelcomeGuideService,
  WELCOME_GUIDE_SERVICE
} from './app-guides/welcome-guide/welcome-guide.service';
import { GuidesService } from './guides.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuideComponent } from './guide/guide.component';
import { GuideStepComponent } from './guide/guide-step/guide-step.component';

@NgModule({
  declarations: [GuideComponent, GuideStepComponent],
  imports: [CommonModule],
  exports: [GuideComponent],
  providers: [
    GuidesService,
    { provide: WELCOME_GUIDE_SERVICE, useFactory: WelcomeGuideService }
  ]
})
export class GuidesModule {}
