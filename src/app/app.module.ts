import { AppService } from './app.service';
import { NgxTourModule } from './ngx-tour/ngx-tour.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgxTourModule],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {}
