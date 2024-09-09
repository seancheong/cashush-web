import { useTranslations } from 'next-intl';
import Link from 'next/link';

import { LocaleSelection } from '../LocaleSelection';
import { Reveal } from '../Reveal';

const navItems = [
  {
    title: 'features',
    href: '/#features',
  },
  {
    title: 'faqs',
    href: '/#faqs',
  },
  {
    title: 'contact',
    href: '/#contact',
  },
] as const;

export const Header = () => {
  const t = useTranslations('Common');

  return (
    <Reveal direction="top" delay={0.6}>
      <header className="mb-6 border-b-[0.5px] border-neutral-200">
        <nav className="flex items-center justify-between px-4 py-4 md:px-8">
          <Link href="/" className="text-[1.75rem] font-bold text-heading">
            {t('brand')}
          </Link>

          <ul className="hidden w-1/3 items-center justify-between md:flex">
            {navItems.map((item) => (
              <li key={item.title}>
                <Link href={item.href}>{t(`nav.${item.title}`)}</Link>
              </li>
            ))}
          </ul>

          <LocaleSelection />
        </nav>
      </header>
    </Reveal>
  );
};
