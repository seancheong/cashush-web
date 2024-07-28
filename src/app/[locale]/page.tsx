import { Header } from '@/components/Header';

import { Contact } from './_components/Contact';
import { FAQ } from './_components/FAQ';
import { Features } from './_components/Features';
import { Hero } from './_components/Hero';

export default function Home() {
  return (
    <div>
      <Header />

      <main className="px-4 md:px-8">
        <Hero />

        <Features />

        <FAQ />

        <Contact />
      </main>
    </div>
  );
}
