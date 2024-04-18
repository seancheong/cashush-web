import createMiddleware from 'next-intl/middleware';

import { localePrefix, locales, pathnames } from './config';

export default createMiddleware({
  // list of all locales that are supported
  locales,

  // used when no locale matches
  defaultLocale: 'en',
  pathnames,
  localePrefix,
});

export const config = {
  // match only internationalized pathnames
  matcher: [
    '/',
    '/en/:path*',

    // enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!_next|_vercel|.*\\..*).*)',
  ],
};
