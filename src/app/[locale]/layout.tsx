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

const title = 'Cashush';
const description = 'Landing page for Cashush';

export const metadata: Metadata = {
  title,
  description,
  keywords: 'Cashush, Fintech, Finance, P2P Lending Service',
  authors: [
    { name: 'Sean Cheong Zhen Xiong', url: 'https://github.com/seancheong' },
  ],
  metadataBase: new URL('https://www.cashush.com'),
  openGraph: {
    title,
    description,
    url: 'https://www.cashush.com',
    type: 'website',
    images: [
      {
        url: 'https://www.cashush.com/screenshots/landing.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['https://www.cashush.com/screenshots/landing.png'],
  },
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
