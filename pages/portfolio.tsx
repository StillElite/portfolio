import React from 'react';
import FrontendMentorSection from '@/components/FrontendMentorSection';
import WorkProjectsSection from '@/components/WorkProjectsSection';

const Portfolio = () => {
  return (
    <div className='bg-[#3E4240] text-white min-h-screen'>
      <WorkProjectsSection />
      <FrontendMentorSection />
    </div>
  );
};

export default Portfolio;
