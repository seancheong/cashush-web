import { ContactDialog } from '@/components/ContactDialog';
import { Header } from '@/components/Header';
import Image from 'next/image';

import { Hero } from './Hero';

export default function Home() {
  return (
    <div>
      <Header />

      <Hero />

      <main className="container">
        <section className="flex h-[calc(100vh_-_9rem)] sm:items-center">
          <div className="flex flex-col gap-4 sm:flex-row-reverse sm:justify-between">
            <div className="relative h-[400px] max-h-full sm:h-[600px] sm:basis-1/2">
              <Image
                src="/images/hero.png"
                priority={true}
                fill
                alt="Hero Image"
                className="rounded-lg"
              />
            </div>

            <div className="flex flex-col sm:basis-1/2">
              <h1 className="mb-4 text-3xl font-semibold sm:text-5xl">
                Easy & Accessible
              </h1>

              <p className="mb-4 sm:mb-24 xl:text-xl">
                A dynamic lending platform designed to simplify and make
                accessible lending solutions. Our platform not only empowers
                users with flexible financial solutions but also fosters a
                community-driven approach to finance.
              </p>

              <p className="mb-2 font-semibold">Want to know more?</p>

              <ContactDialog />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
