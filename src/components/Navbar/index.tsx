import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

import { Button } from '../ui/button';
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

export const Navbar = () => {
  return (
    <nav className="@container flex items-center justify-between px-4 py-4">
      <Link href="/" className="text-heading text-[1.75rem] font-bold">
        Cashush .
      </Link>

      <ul className="flex items-center justify-between">
        {navItems.map((item) => (
          <li key={item.title}>
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>

      <Button>Get Started</Button>

      <div className="@2xl:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <HamburgerMenuIcon className="text-heading h-8 w-8" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            {navItems.map((item) => (
              <DropdownMenuItem key={item.title}>{item.title}</DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};
