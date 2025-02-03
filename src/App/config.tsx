import { Email, GitHub, LinkedIn, Resume } from 'icons';
import { Config } from 'types';

export const config: Config = {
  name: {
    display: 'Silas Forrest',
  },
  title: {
    display: 'Full-Stack & Blockchain Engineer',
  },
  buttons: [
    {
      name: 'github',
      display: 'GitHub',
      ariaLabel: 'GitHub profile (opens in new window)',
      icon: <GitHub />,
      href: 'https://github.com/seniordevforest/',
    },
    {
      name: 'resume',
      display: 'Resume',
      ariaLabel: 'Resume in Google Drive (opens in new window)',
      icon: <Resume />,
      href: 'https://drive.google.com/file/d/1r0ESZEnUPuw_oOrnh0wpKNjFxJwnKGva/view?usp=drive_link',
    },
    {
      name: 'email',
      display: 'Telegram',
      ariaLabel: 'Email contact (opens in new window)',
      icon: <Email />,
      href: 'https://t.me/Silas_Forrest',
    },
  ],
};
