import { Button } from '@/components/ui/button';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

const navItems = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Features',
    href: '/',
  },
  {
    title: 'FAQs',
    href: '/services',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
] as const;

export const Header = () => {
  return (
    <header>
      <nav className="@container flex items-center justify-between px-4 py-4">
        <Link href="/" className="text-heading text-[1.75rem] font-bold">
          Cashush .
        </Link>

        <ul className="@2xl:flex hidden w-1/3 items-center justify-between">
          {navItems.map((item) => (
            <li key={item.title}>
              <Link href="/">{item.title}</Link>
            </li>
          ))}
        </ul>

        <Button className="@2xl:flex hidden">Get Started</Button>

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
                  {item.title}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
};
