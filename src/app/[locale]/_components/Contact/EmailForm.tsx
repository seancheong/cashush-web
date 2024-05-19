'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';
import { useTranslations } from 'next-intl';
import { useEffect, useRef } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { toast } from 'sonner';

import { subscribeAction } from '../../_actions/subscribeAction';

const initialFormState = {
  done: '',
  error: null,
};

export const EmailForm = () => {
  const t = useTranslations('Home');

  const [state, formAction] = useFormState(subscribeAction, initialFormState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.done) {
      toast(t('contact.form.success'));
      formRef.current?.reset();
    }
  }, [state.done, t]);

  return (
    <form ref={formRef} action={formAction} className="mb-24 xl:min-w-96">
      <Label htmlFor="email">{t('contact.form.label')}</Label>

      <div className="flex">
        <Input
          id="email"
          name="email"
          type="email"
          placeholder={t('contact.form.placeholder')}
          className="rounded-r-none border-none bg-slate-800 placeholder:text-invert-foreground focus-visible:ring-0 focus-visible:ring-offset-0 md:max-w-72"
        />

        <SubscribeButton />
      </div>
    </form>
  );
};

const SubscribeButton = () => {
  const t = useTranslations('Home');

  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className="rounded-l-none bg-brand hover:bg-brand"
    >
      {t('contact.form.button')}
    </Button>
  );
};
