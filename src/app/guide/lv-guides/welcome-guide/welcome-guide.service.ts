import { Injectable } from '@angular/core';
import { GuideConfig } from '../../@types/guide.config';
import { GuideProvider } from '../../@types/guide-provider';
import { TestComponent } from '../../components/test/test.component';
import { Test1Component } from '../../components/test1/test1.component';
import { Test2Component } from '../../components/test2/test2.component';

@Injectable({
  providedIn: 'root'
})
export class WelcomeGuideService implements GuideProvider {
  name = 'welcomeGuide';

  constructor() {}

  getConfig() {
    return {
      name: this.name,
      onOpen: () => {
        return Promise.resolve('onOpen');
      },
      onClose: () => {
        return Promise.resolve('onClose');
      },
      onFinish: () => {
        return Promise.resolve('onFinish');
      },
      steps: [
        {
          anchorElement: '.tool-button',
          title: {
            type: 'component',
            translateKey: `hibirdi-guide_step_1.title`,
            content: TestComponent
          },
          content: {
            type: 'component',
            translateKey: `hibirdi-guide_step_1.title`,
            content: TestComponent
          },
          enableBackdrop: true,
          placement: 'right',
          onStart: () => {
            return Promise.resolve(1);
          },
          onFinish: () => {
            return Promise.resolve(1);
          }
        },
        {
          anchorElement: '.filters-title-wrapper',
          stepType: 'text',
          title: {
            type: 'component',
            translateKey: `hibirdi-guide_step_1.title`,
            content: Test1Component
          },
          content: {
            type: 'component',
            translateKey: `hibirdi-guide_step_1.title`,
            content: Test1Component
          },
          titleTpl: `<span [translate]="'time-series-guide_step_2.title'"></span>`,
          contentTpl: `<span [translate]="'time-series-guide_step_2.content'"></span>`,
          enableBackdrop: true,
          placement: 'right',
          onStart: () => {
            return Promise.resolve(1);
          },
          onFinish: () => {
            return Promise.resolve(1);
          }
        },
        {
          anchorElement: '.filters-section',
          stepType: 'text',
          title: {
            type: 'component',
            translateKey: `hibirdi-guide_step_1.title`,
            content: Test2Component
          },
          content: {
            type: 'component',
            translateKey: `hibirdi-guide_step_1.title`,
            content: Test2Component
          },
          titleTpl: `<span [translate]="'time-series-guide_step_3.title'"></span>`,
          contentTpl: `<span [translate]="'time-series-guide_step_3.content'"></span>`,
          enableBackdrop: true,
          placement: 'right',
          onStart: () => {
            return Promise.resolve(1);
          },
          onFinish: () => {
            return Promise.resolve(1);
          }
        }
      ]
    } as GuideConfig;
  }
}
