import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const workProjects = [
  {
    title: 'Purina: Petfinder',
    contribution:
      'Built modular components using React, improving code reusability and maintenance. Worked alongside the backend team for API integration.',
    link: 'https://www.petfinder.com/',
    label: 'View Live',
  },
  {
    title: 'endpoint',
    contribution:
      'Designed and coded pixel-perfect responsive layouts, ensuring cross-browser compatibility.',
    link: 'https://www.endpointclinical.com/',
    label: 'Learn More',
  },
  {
    title: 'Google: Enterprise Trust',
    contribution:
      'Optimized the application’s performance and implemented reusable components for scalability.',
  },
  {
    title: 'Google: Summer of Code',
    contribution:
      'Developed a responsive and accessible UI using React and Tailwind CSS. Collaborated with backend developers and designers for seamless integration.',
    link: 'https://summerofcode.withgoogle.com/',
    label: 'View Live',
  },
  {
    title: 'Navy 3-M Program Web Applications',
    contribution:
      'Maintained frontend stability with unit tests to ensure seamless data flow and user interactions.',
    link: 'https://www.antechsystems.com/pms-support/',
    label: 'Learn More',
  },
];

const WorkProjectsSection: React.FC = () => {
  return (
    <section
      className='container mx-auto px-6 py-12'
      aria-labelledby='work-projects-heading'
    >
      <h2
        id='work-projects-heading'
        className='text-3xl font-semibold mb-8 text-white'
      >
        Professional Projects
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {workProjects.map((project, index) => (
          <div
            key={index}
            className='bg-[#4B4F4E] p-6 rounded-lg shadow-md hover:shadow-lg flex flex-col h-full'
          >
            <div className='flex-grow'>
              <h3 className='text-xl font-bold text-[#F5A1BE] mb-2'>
                {project.title}
              </h3>
              <p className='text-[#E0E0E0] mb-4'>{project.contribution}</p>
            </div>
            {project.link && (
              <a
                href={project.link}
                className='text-white font-semibold hover:underline transition-colors duration-200 mt-auto flex items-center gap-2 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[#F5A1BE]'
                target='_blank'
                rel='noopener noreferrer'
                aria-label={`${project.label} for ${project.title}`}
              >
                <span className='sr-only'>{`${project.label} for ${project.title}`}</span>
                <span aria-hidden='true'>{project.label}</span>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkProjectsSection;
