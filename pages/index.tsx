import Head from 'next/head';
import ActionSection from '@/components/ActionSection';
import { ProfileSection } from '@/components/ProfileSection';

const Home = () => {
  return (
    <>
      <Head>
        <title>Ebony Williams - Frontend Developer</title>
        <meta
          name='description'
          content='Welcome to the portfolio of Ebony Williams, a Frontend Developer specializing in accessible, responsive, and intuitive web applications using React, Next.js, and Tailwind CSS.'
        />
      </Head>
      <div className='bg-cover bg-center bg-no-repeat text-white bg-dark-background sm:h-[calc(100vh-85px)]'>
        <div className='container mx-auto px-6'>
          <ProfileSection />
          <div className='flex flex-col gap-8 mt-8 pb-8'>
            <ActionSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
