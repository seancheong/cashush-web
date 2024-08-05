import { TitleIcon } from '@/components/TitleIcon';
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from 'next-intl';

import { EmailForm } from './EmailForm';

export const Contact = () => {
  const t = useTranslations();
  const messages = useMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <section
        id="contact"
        className="mb-16 rounded-lg bg-invert px-6 py-8 text-invert-foreground"
      >
        <TitleIcon iconPath="/icons/mail.svg" className="mb-4" />

        <div className="xl:mb-24 xl:flex xl:justify-between xl:gap-32">
          <div className="mb-12">
            <h3 className="mb-2 text-3xl text-white md:text-6xl">
              {t('Home.contact.title')}
            </h3>

            <p>{t('Home.contact.subtitle')}</p>
          </div>

          <EmailForm />
        </div>

        <span className="text-3xl font-semibold text-white">
          {t('Common.brand')}
        </span>
      </section>
    </NextIntlClientProvider>
  );
};
