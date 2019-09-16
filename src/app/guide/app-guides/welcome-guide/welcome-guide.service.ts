import { AppService } from './../../../app.service';
import { Injectable } from '@angular/core';
import { GuideProvider } from '../../@types/guide.provider';

@Injectable({
  providedIn: 'root'
})
export class WelcomeGuideService implements GuideProvider {
  name = 'welcomeGuideService';

  constructor(private appService: AppService) {}

  getConfig() {
    return {
      name: this.name,
      onOpen: () => {
        this.appService.hello();

        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve('onOpen 5');
          }, 5000);
        });
      },
      onClose: () => {
        return Promise.resolve('onClose');
      },
      onFinish: () => {
        return Promise.resolve('onFinish');
      },
      steps: [
        {
          index: 1,
          anchorElement: '.btn.btn-primary.btn-lg',
          stepType: 'text',
          title: 'Step 1',
          content: 'Step 1 content',
          // component?: Component;
          enableBackdrop: false,
          placement: 'left',
          onPrev: () => {
            return Promise.resolve('onPrev');
          },
          onNext: () => {
            return Promise.resolve('onNext');
          }
        }
      ]
    };
  }
}
