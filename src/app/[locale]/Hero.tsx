import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export const Hero = () => {
  const t = useTranslations('Home');

  return (
    <section className="mb-16">
      <div className="xl:flex xl:justify-between xl:gap-5">
        <div className="mb-5 rounded-lg bg-secondary px-4 py-5 md:py-12 xl:mb-0 xl:flex xl:h-auto xl:w-1/2 xl:flex-col xl:justify-center">
          <h1 className="mb-6 text-5xl font-medium md:text-8xl">
            {t('hero.title')}
          </h1>

          <p className="mb-10 text-lg">{t('hero.subtitle')}</p>

          <Button className="w-full md:w-fit">{t('hero.cta')}</Button>
        </div>

        <div className="relative h-[500px] xl:h-auto xl:w-1/2">
          <Image
            src="/images/hero.svg"
            alt={t('hero.image')}
            priority
            fill
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};
