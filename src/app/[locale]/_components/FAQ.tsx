import { Chip } from '@/components/Chip';
import { Reveal } from '@/components/Reveal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useTranslations } from 'next-intl';

const faqs = [
  {
    question: 'What is this app about?',
    answer:
      'Our app is a peer-to-peer (P2P) money lending platform, similar to Uber but for lending money. It connects individuals who need to borrow money with those who have spare funds to lend.',
  },
  {
    question: 'How does it work?',
    answer:
      '\u2022 Anyone in need of quick cash can request to borrow money through the app.\n\n\u2022 Users with spare funds can browse through the borrowing requests and choose to lend money to those they wish to help.\n\n\u2022 Lenders earn interest on the money they lend, providing them with an opportunity to grow their savings.\n\n\u2022 Borrowers repay the loan with interest over a specified period.',
  },
  {
    question: 'What are the benefits for lenders?',
    answer:
      '\u2022 Lenders can earn interest on the money they lend, making it a profitable way to use spare funds.\n\n\u2022 Lenders can choose whom to lend to and how much to lend, giving them control over their investments.\n\n\u2022 By lending money, lenders can help others in their community who are in need of financial assistance.',
  },
  {
    question: 'What are the benefits for borrowers?',
    answer:
      '\u2022 Borrowers can get quick access to the funds they need without going through lengthy bank procedures.\n\n\u2022 Borrowers can negotiate the terms of the loan directly with the lender, allowing for more personalized and flexible repayment plans.\n\n\u2022 Borrowers can receive support from individuals within their community, fostering a sense of trust and cooperation.',
  },
  {
    question: 'Is it safe to use this app?',
    answer:
      'Yes, our app employs robust security measures to protect both lenders and borrowers. All transactions are encrypted, and we have a verification process in place to ensure the authenticity of users.',
  },
  {
    question:
      'Can I get back my money if the borrower does not pay according to the schedule?',
    answer:
      'If a borrower is unable to repay the loan on the required date, they will be added to the blacklist of CTOS Malaysia. This means they will face difficulties in dealing with banks in the future. With this measure, we aim to minimize the rate of borrowers failing to repay on time.',
  },
  {
    question: 'How do I get started?',
    answer:
      'We are currently developing the app. Please subscribe to our mailing list and stay tuned for updates. We will notify you as soon as the app is ready for use.',
  },
];

export const FAQ = () => {
  const t = useTranslations('Home');

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
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`faq-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>

              <AccordionContent className="whitespace-pre-line">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  );
};
