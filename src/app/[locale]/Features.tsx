import { Chip } from '@/components/Chip';
import { TitleIcon } from '@/components/TitleIcon';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import clsx from 'clsx';
import { ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

export const Features = () => {
  const t = useTranslations('Home');

  return (
    <section className="mb-16">
      <div className="mb-8 flex flex-col items-center">
        <Chip label={t('features.section')} className="mb-4" />

        <h2 className="mb-5 text-center text-3xl font-medium md:text-6xl">
          {t('features.title')}
        </h2>

        <p className="text-lg">{t('features.subtitle')}</p>
      </div>

      <div className="grid gap-4">
        <div className="grid gap-4 md:row-start-1 md:grid-cols-2">
          <FeatureContent
            iconPath="/icons/bank.svg"
            title={t('features.content1.title')}
            description={t('features.content1.description')}
          />

          <FeatureContent
            iconPath="/icons/note.svg"
            title={t('features.content2.title')}
            description={t('features.content2.description')}
          />
        </div>

        <FeatureContent
          iconPath="/icons/percent.svg"
          title={t('features.content3.title')}
          description={t('features.content3.description')}
          imagePath="/images/interest-tree.svg"
        />

        <div className="grid gap-4 md:row-start-3 md:grid-cols-3">
          <FeatureContent
            iconPath="/icons/time.svg"
            title={t('features.content4.title')}
          />

          <FeatureContent
            iconPath="/icons/currency.svg"
            title={t('features.content5.title')}
          />

          <div className="rounded-lg bg-secondary bg-[url('/images/tryout-background.svg')] bg-cover px-4 py-5 text-white">
            <h3 className="mb-6 text-2xl font-medium">
              {t('features.tryout.title')}
            </h3>

            <Button disabled className="rounded-md bg-brand px-6 py-3">
              {t('features.tryout.button')}
              <ChevronRight className="ml-2 h-6 w-6" />
            </Button>

            <Badge>{t('features.tryout.comingSoon')}</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

interface FeatureContentProps {
  iconPath: string;
  title: string;
  description?: string;
  imagePath?: string;
}

const FeatureContent = ({
  iconPath,
  title,
  description,
  imagePath,
}: FeatureContentProps) => {
  const t = useTranslations('Home');

  const imageFilename = imagePath ? imagePath.split('/').pop() || '' : '';

  return (
    <div className="rounded-lg bg-secondary px-4 py-5 @container">
      <div className="flex flex-col gap-4 @4xl:flex-row @4xl:justify-between">
        <div className="@4xl:w-1/2">
          <TitleIcon iconPath={iconPath} className="mb-4" />

          <h3
            className={clsx(
              'text-3xl font-medium',
              { 'mb-4': !!description },
              { 'text-2xl': !description },
            )}
          >
            {title}
          </h3>

          <p>{description}</p>
        </div>

        {imagePath && (
          <div className="relative h-60 w-full @4xl:w-96">
            <Image src={imagePath} alt={imageFilename} fill />
          </div>
        )}
      </div>
    </div>
  );
};
