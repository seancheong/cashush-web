import { TitleIcon } from '@/components/TitleIcon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useTranslations } from 'next-intl';

export const Contact = () => {
  const t = useTranslations();

  return (
    <section className="mb-16 rounded-lg bg-invert px-6 py-8 text-invert-foreground">
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
  );
};

const EmailForm = () => {
  const t = useTranslations('Home');

  return (
    <form className="mb-24 xl:min-w-96">
      <Label htmlFor="email">{t('contact.form.label')}</Label>

      <div className="flex">
        <Input
          id="email"
          type="email"
          placeholder={t('contact.form.placeholder')}
          className="rounded-r-none border-none bg-slate-800 placeholder:text-invert-foreground focus-visible:ring-0 focus-visible:ring-offset-0 md:max-w-72"
        />

        <Button type="submit" className="rounded-l-none bg-brand">
          {t('contact.form.button')}
        </Button>
      </div>
    </form>
  );
};
