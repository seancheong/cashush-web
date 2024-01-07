import Image from 'next/image';
import Link from 'next/link';

export const Header = () => (
  <header className='container mb-2 sm:mb-8'>
    <Link href='#' className='block w-fit'>
      <Image
        src='/images/logo.svg'
        width={100}
        height={100}
        alt='Cashush Logo'
      />
    </Link>
  </header>
);
