import { AppService } from './app.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuideModule } from './guide/guide.module';
import { GuideService } from './guide/guide.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, GuideModule],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public guideService: GuideService) {
    guideService.init();
  }
}
