import React from 'react';
import Head from 'next/head';
import FrontendMentorSection from '@/components/FrontendMentorSection';
import WorkProjectsSection from '@/components/WorkProjectsSection';

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Portfolio - Ebony Williams</title>
        <meta
          name='description'
          content='Discover the professional projects and Frontend Mentor challenges of Ebony Williams, showcasing skills in React, Next.js, and accessible web development.'
        />
      </Head>
      <div className='bg-[#3E4240] text-white min-h-screen'>
        <WorkProjectsSection />
        <FrontendMentorSection />
      </div>
    </>
  );
};

export default Portfolio;
