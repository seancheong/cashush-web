import { Pathnames } from 'next-intl/navigation';

export const locales = ['en'] as const;

export const pathnames = {
  '/': '/',
  '/pathnames': {
    en: '/pathnames',
  },
} satisfies Pathnames<typeof locales>;

// use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
