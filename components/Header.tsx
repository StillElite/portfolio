import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps {
  logoRef: React.RefObject<HTMLAnchorElement | null>;
}

const Header: React.FC<HeaderProps> = ({ logoRef }) => {
  return (
    <div className='bg-cube-background'>
      <div className='bg-[rgba(255,255,255,0.7)]'>
        <header className='container mx-auto px-6 py-4 h-[85px]'>
          <nav className='mx-auto flex justify-between items-center'>
            <Link href='/' ref={logoRef} className='flex items-center'>
              <Image
                alt='Logo'
                src='/color-logo.svg'
                width={70}
                height={70}
                className='mr-2 block'
              />
            </Link>
            <Link
              href='/portfolio'
              className='text-[#313131] hover:text-[#8D3D59] font-semibold'
            >
              Portfolio
            </Link>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Header;
