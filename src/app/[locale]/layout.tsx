import { cn } from '@/lib/utils';
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
          'h-full min-h-screen min-w-[360px] bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
