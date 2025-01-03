import React from 'react';

const actions = [
  { label: 'GitHub', link: 'https://github.com/StillElite', target: '_blank' },
  {
    label: 'LinkedIn',
    target: '_blank',
    link: 'https://www.linkedin.com/in/ebony-williams-b5422076/',
  },
  { label: 'Portfolio', link: '/portfolio', target: '_self' },
  {
    label: 'Resume',
    link: '/resume.pdf',
    target: '_blank',
  },
];

const ActionSection = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 overflow-hidden'>
      {actions.map(({ label, link, target }, index) => (
        <a
          key={index}
          href={link}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : ''}
          className='flex items-center justify-center h-44 w-full rounded-lg 
          bg-[rgba(55,57,56,0.8)] border border-[#7e7e7e] text-white font-bold text-lg 
          transition-all duration-300 ease-in-out hover:bg-[#2C2C2C]'
        >
          <span className='transition-colors duration-300 group-hover:text-[#F5A1BE]'>
            {label}
          </span>
        </a>
      ))}
    </div>
  );
};

export default ActionSection;
