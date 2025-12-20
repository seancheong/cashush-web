import createMiddleware from 'next-intl/middleware';

import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // match only internationalized pathnames
  matcher: [
    '/',

    // have to hardcode the locales here,
    // as Nextjs does not allows config to contains template literals
    `/(en|zh|ms)/:path*`,

    // enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!_next|_vercel|.*\\..*).*)',
  ],
};
