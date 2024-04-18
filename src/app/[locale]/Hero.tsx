import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export const Hero = () => {
  const t = useTranslations('Home');

  return (
    <section className="@container mb-10">
      <div className="@md:px-8 @2xl:flex @2xl:justify-between @2xl:gap-5 px-4">
        <div className="@2xl:w-1/2 @2xl:h-[728px] @2xl:mb-0 @2xl:flex @2xl:flex-col @2xl:justify-center mb-5 rounded-lg bg-secondary px-4 py-5">
          <h1 className="@md:text-8xl  mb-6 text-5xl font-medium">
            {t('hero.title')}
          </h1>

          <p className="mb-10 text-lg">{t('hero.subtitle')}</p>

          <Button className="@md:w-fit w-full">{t('hero.cta')}</Button>
        </div>

        <div className="@2xl:w-1/2 @2xl:h-[728px] relative h-[500px]">
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
