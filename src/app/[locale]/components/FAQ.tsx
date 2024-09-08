import { Chip } from '@/components/Chip';
import { Reveal } from '@/components/Reveal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { getFaqs } from '@/db/queries/faqsQueries';
import { locales } from '@/i18n/routing';
import DOMPurify from 'isomorphic-dompurify';
import { useLocale, useTranslations } from 'next-intl';
import { use } from 'react';

export function FAQ() {
  const t = useTranslations('Home');
  const currentLocale = useLocale() as (typeof locales)[number];

  const faqs = use(getFaqs());

  return (
    <section id="faqs" className="mb-16">
      <Reveal direction="bottom">
        <div className="mb-8 flex flex-col items-center">
          <Chip label={t('faqs.section')} className="mb-4" />

          <h2 className="mb-5 text-center text-3xl font-medium md:text-6xl">
            {t('faqs.title')}
          </h2>

          <p className="text-center text-lg">{t('faqs.subtitle')}</p>
        </div>
      </Reveal>

      <Reveal direction="bottom">
        <Accordion type="single" collapsible>
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger className="text-left">
                {faq[`question_${currentLocale}`]}
              </AccordionTrigger>

              <AccordionContent className="[&_ul]:list-disc [&_ul]:ps-10">
                <span
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(faq[`answer_${currentLocale}`]),
                  }}
                />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  );
}
