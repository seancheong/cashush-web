import { Button } from '@/components/ui/button';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

const navItems = [
  {
    title: 'home',
    href: '/',
  },
  {
    title: 'features',
    href: '/',
  },
  {
    title: 'faqs',
    href: '/services',
  },
  {
    title: 'contact',
    href: '/contact',
  },
] as const;

export const Header = () => {
  const t = useTranslations('Common');

  return (
    <header className="mb-6 border-b-[0.5px] border-neutral-200 @container">
      <nav className="flex items-center justify-between px-4 py-4 @md:px-8">
        <Link href="/" className="text-[1.75rem] font-bold text-heading">
          {t('brand')}
        </Link>

        <ul className="hidden w-1/3 items-center justify-between @2xl:flex">
          {navItems.map((item) => (
            <li key={item.title}>
              <Link href="/">{t(`nav.${item.title}`)}</Link>
            </li>
          ))}
        </ul>

        <Button className="hidden @2xl:flex">{t('cta')}</Button>

        <div className="@2xl:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <HamburgerMenuIcon className="h-8 w-8 text-heading" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              {navItems.map((item) => (
                <DropdownMenuItem key={item.title}>
                  {t(`nav.${item.title}`)}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
};
