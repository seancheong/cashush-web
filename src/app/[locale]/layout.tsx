import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';

import './globals.css';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Cashush',
  description: 'Landing page for Cashush',
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body
        className={cn(
          'h-full min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <div className="ml-auto mr-auto min-w-[360px] max-w-screen-2xl">
          {children}
          <Analytics />
        </div>
        <Toaster />
        <SpeedInsights />
      </body>
    </html>
  );
}
