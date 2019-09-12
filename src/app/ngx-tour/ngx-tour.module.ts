import { NgxTourService } from './ngx-tour.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTourComponent } from './ngx-tour/ngx-tour.component';
import { FirstTourComponent } from './tours/first-tour/first-tour.component';
import { NgxTourStepComponent } from './ngx-tour-step/ngx-tour-step.component';

@NgModule({
  declarations: [NgxTourComponent, FirstTourComponent, NgxTourStepComponent],
  exports: [NgxTourComponent],
  providers: [NgxTourService],
  imports: [CommonModule]
})
export class NgxTourModule {}
