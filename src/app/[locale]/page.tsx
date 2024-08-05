import { Header } from '@/components/Header';

import { Contact } from './components/Contact';
import { FAQ } from './components/FAQ';
import { Features } from './components/Features';
import { Hero } from './components/Hero';

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
