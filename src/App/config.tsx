import { Email, GitHub, LinkedIn, Resume } from 'icons';
import { Config } from 'types';

export const config: Config = {
  name: {
    display: 'Silas Forrest',
  },
  title: {
    display: 'AI & Full-Stack and Blockchain Engineer',
  },
  buttons: [
    {
      name: 'github',
      display: 'GitHub',
      ariaLabel: 'GitHub profile (opens in new window)',
      icon: <GitHub />,
      href: 'https://github.com/timbertinker/',
    },
    {
      name: 'resume',
      display: 'Resume',
      ariaLabel: 'Resume in Google Drive (opens in new window)',
      icon: <Resume />,
      href: 'https://app.enhancv.com/resume/67886b60f026b52ba3efbd05#mobile-design-menu',
    },
    {
      name: 'email',
      display: 'Telegram',
      ariaLabel: 'Email contact (opens in new window)',
      icon: <Email />,
      href: 'https://t.me/forest_0322',
    },
  ],
};
