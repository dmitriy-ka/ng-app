import { GUIDE_PROVIDERS, GuideService } from './guide/guide.service';
import { GuideModule } from './guide/guide.module';
import { AppService } from './app.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeGuideService } from './guide/app-guides/welcome-guide/welcome-guide.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, GuideModule],
  providers: [
    AppService,
    {
      provide: GUIDE_PROVIDERS,
      multi: true,
      useValue: {
        name: 'test',
        getConfig() {
          return {};
        }
      }
    },
    {
      provide: GUIDE_PROVIDERS,
      multi: true,
      useClass: WelcomeGuideService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public guideService: GuideService) {
    guideService.init();
  }
}
