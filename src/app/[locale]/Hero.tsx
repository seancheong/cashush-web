import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export const Hero = () => {
  const t = useTranslations('Home');

  return (
    <section className="mb-10 @container">
      <div className="px-4 @md:px-8 @2xl:flex @2xl:justify-between @2xl:gap-5">
        <div className="mb-5 rounded-lg bg-secondary px-4 py-5 @2xl:mb-0 @2xl:flex @2xl:h-[728px] @2xl:w-1/2 @2xl:flex-col @2xl:justify-center">
          <h1 className="mb-6  text-5xl font-medium @md:text-8xl">
            {t('hero.title')}
          </h1>

          <p className="mb-10 text-lg">{t('hero.subtitle')}</p>

          <Button className="w-full @md:w-fit">{t('hero.cta')}</Button>
        </div>

        <div className="relative h-[500px] @2xl:h-[728px] @2xl:w-1/2">
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
