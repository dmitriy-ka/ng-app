import { GuidesModule } from './guides/guides.module';
import { AppService } from './app.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, GuidesModule],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {}
