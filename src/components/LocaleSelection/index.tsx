'use client';

import { useLocale, useTranslations } from 'next-intl';

import { locales, usePathname, useRouter } from '../../i18n/routing';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

export const LocaleSelection = () => {
  const t = useTranslations('Common.locales');

  const currentLocale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Select
      value={currentLocale}
      onValueChange={(locale) =>
        router.replace(pathname, { locale: locale as (typeof locales)[number] })
      }
    >
      <SelectTrigger className="w-40 bg-secondary">
        <SelectValue />
      </SelectTrigger>

      <SelectContent>
        {locales.map((locale) => (
          <SelectItem key={locale} value={locale}>
            {t(locale)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
