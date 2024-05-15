// 'use client';
import { Header } from '@/components/Header';

import { Contact } from './Contact';
import { Features } from './Features';
import { Hero } from './Hero';

export default function Home() {
  return (
    <div>
      <Header />

      <main className="px-4 md:px-8">
        <Hero />

        <Features />

        <Contact />
      </main>
    </div>
  );
}
