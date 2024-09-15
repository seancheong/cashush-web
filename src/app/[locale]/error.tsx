'use client';

import { Button } from '@/components/ui/button';
import { AlertCircle, RefreshCcw } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';

const email = process.env.NEXT_PUBLIC_COMPANY_EMAIL;

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations('Error');

  useEffect(() => {
    // TODO: log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-10 shadow-md">
        <div className="text-center">
          <AlertCircle className="mx-auto h-12 w-12 text-red-500" />
          <h2 className="mt-6 text-3xl font-extrabold">{t('title')}</h2>

          <p className="mt-4 text-sm">{t('description')}</p>
        </div>

        <div className="mt-8 space-y-6">
          <div className="flex flex-col space-y-4">
            <Button
              onClick={reset}
              className="flex w-full items-center justify-center"
            >
              <RefreshCcw className="mr-2 h-4 w-4" />
              {t('buttons.try-again')}
            </Button>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs">
            {t.rich('instruction', {
              email: () => (
                <a
                  href={`mailto:${email}`}
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  {email}
                </a>
              ),
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
