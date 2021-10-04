import * as React from 'react';

import { IoCalendar, IoGrid, IoHelpBuoy } from 'react-icons/io5';
import { MdWeb } from 'react-icons/md';

export const links = [
  {
    label: 'Rent Now',
    href: '/cars',
  },
  {
    label: 'Start Today',
    href: '/start-today',
  },
  {
    label: 'Pricing',
    href: '/pricing',
  },
  {
    label: 'More',
    children: [
      {
        label: 'Get Help',
        description: 'Read our FAQ, or get in touch.',
        href: '/faq',
        icon: <IoHelpBuoy />,
      },
      {
        label: 'Dashboard',
        description: 'Find out what you have booked in your dashboard!',
        href: '/profile/dashboard',
        icon: <IoCalendar />,
      },
      {
        label: 'Profille',
        description: 'Check out your profile and account details.',
        href: '/profile/dashboard-seller',
        icon: <IoGrid />,
      },
      {
        label: 'Blog',
        description: 'Get updates, articles and insights from the team.',
        href: '/blog',
        icon: <MdWeb />,
      },
    ],
  },
];
