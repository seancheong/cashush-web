import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

// A list of all locales that are supported
export const locales = ['en', 'zh', 'ms'] as const;

export const routing = defineRouting({
  locales,

  // Used when no locale matches
  defaultLocale: locales[0],
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);
