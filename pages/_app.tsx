import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  // Ref for the logo link in the Header
  const logoRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const handleTabLoop = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        const focusableElements = document.querySelectorAll(
          'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[
          focusableElements.length - 1
        ] as HTMLElement;

        if (e.shiftKey && document.activeElement === firstElement) {
          // Shift+Tab from the first element moves focus to the last
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          // Tab from the last element moves focus to the logo
          e.preventDefault();
          logoRef.current?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleTabLoop);
    return () => {
      document.removeEventListener('keydown', handleTabLoop);
    };
  }, []);

  return (
    <div className='flex flex-col min-h-screen'>
      {/* Header */}
      <Header logoRef={logoRef} />

      {/* Main Content */}
      <main className='flex-grow'>
        <Component {...pageProps} />
      </main>

      {/* Footer */}
      {!isHomePage && (
        <footer className='bg-[#3E4240] text-white py-4 text-center'>
          <p className='text-sm'>
            © {new Date().getFullYear()} Ebony Williams. All Rights Reserved.
          </p>
        </footer>
      )}
    </div>
  );
}
