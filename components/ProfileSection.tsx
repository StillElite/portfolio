import React from 'react';

export const ProfileSection = () => {
  return (
    <section className='py-8 md:py-16'>
      <h1 className='text-5xl sm:text-5xl md:text-6xl lg:text-7xl uppercase font-bold text-[#f5a1be] mb-4'>
        Frontend Developer
      </h1>

      <div className='max-w-[800px]'>
        <p className='text-lg text-white leading-relaxed'>
          My Name is{' '}
          <span className='font-bold text-[#f5a1be]'>Ebony Williams</span>.
          Frontend developer by day, UI problem-solver by night. I craft
          responsive, accessible, and intuitive web experiences, turning complex
          code into simple, beautiful designs. Let&apos;s build the future, one
          pixel at a time.
        </p>
      </div>
    </section>
  );
};
