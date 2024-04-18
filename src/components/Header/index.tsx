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
    <header>
      <nav className="@container flex items-center justify-between px-4 py-4">
        <Link href="/" className="text-heading text-[1.75rem] font-bold">
          {t('brand')}
        </Link>

        <ul className="@2xl:flex hidden w-1/3 items-center justify-between">
          {navItems.map((item) => (
            <li key={item.title}>
              <Link href="/">{t(`nav.${item.title}`)}</Link>
            </li>
          ))}
        </ul>

        <Button className="@2xl:flex hidden">{t('cta')}</Button>

        <div className="@2xl:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <HamburgerMenuIcon className="text-heading h-8 w-8" />
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
