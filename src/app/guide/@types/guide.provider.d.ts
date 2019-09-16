import { GuideConfig } from './guide.config';
export interface GuideProvider {
  name: string;
  getConfig(): GuideConfig;
}
