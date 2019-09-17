import { ContentTplComponent } from './guide/content-tpl/content-tpl.component';
import { SanitizeHtmlPipe } from './sanitize-html.pipe';
import { NgModule } from '@angular/core';
import { GuideComponent } from './guide/guide.component';
import { StepComponent } from './guide/step/step.component';
import { CommonModule } from '@angular/common';
import { GUIDE_PROVIDERS } from './guide.service';
import { WelcomeGuideService } from './lv-guides/welcome-guide/welcome-guide.service';
import { TestComponent } from './components/test/test.component';
import { Test1Component } from './components/test1/test1.component';
import { Test2Component } from './components/test2/test2.component';

@NgModule({
  declarations: [
    GuideComponent,
    StepComponent,
    ContentTplComponent,
    SanitizeHtmlPipe,
    TestComponent,
    Test1Component,
    Test2Component
  ],
  imports: [CommonModule],
  exports: [GuideComponent],
  entryComponents: [
    GuideComponent,
    TestComponent,
    Test1Component,
    Test2Component
  ],
  providers: [
    {
      provide: GUIDE_PROVIDERS,
      multi: true,
      useClass: WelcomeGuideService
    }
  ]
})
export class GuideModule {}
