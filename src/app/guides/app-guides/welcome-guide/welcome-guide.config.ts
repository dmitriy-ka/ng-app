import { GuideConfig } from './../../guides.config';
import { WelcomeGuideService } from './welcome-guide.service';

export const WelcomeGuideConfig: GuideConfig = {
  name: 'welcomeGuide',
  serviceInjectionToken: WelcomeGuideService,
  steps: [
    {
      index: 1,
      anchorElement: '.btn.btn-primary.btn-lg',
      stepType: 'text',
      title: 'Title 1',
      content: 'Content content here',
      enableBackdrop: true,
      placement: 'left',
      prev(service: WelcomeGuideService) {
        return Promise.resolve('Prev');
      },
      next(service: WelcomeGuideService) {
        return Promise.resolve('Next');
      }
    },
    {
      index: 2,
      anchorElement: '.btn.btn-primary.btn-lg',
      stepType: 'text',
      title: 'Title',
      content: 'Content',
      enableBackdrop: true,
      placement: 'left'
    }
  ]
};
