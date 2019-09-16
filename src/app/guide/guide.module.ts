import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuideComponent } from './guide/guide.component';
import { StepComponent } from './guide/step/step.component';

@NgModule({
  declarations: [GuideComponent, StepComponent],
  exports: [GuideComponent],
  imports: [CommonModule]
})
export class GuideModule {}
