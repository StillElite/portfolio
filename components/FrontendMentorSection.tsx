import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faEye } from '@fortawesome/free-solid-svg-icons';

type ProjectFit = 'cover' | 'contain';

interface ProjectLink {
  label: string;
  image: string;
  codeLink: string;
  viewLink: string;
  fit: ProjectFit;
}

const frontendMentorLinks: ProjectLink[] = [
  // Temporarily removed Country Explorer and Product Cart projects
  // due to broken public APIs. Will revisit after switching to stable data or patching image paths.

  // {
  //   label: 'Countries Explorer',
  //   image: '/countries.png',
  //   codeLink: 'https://github.com/StillElite/countries',
  //   viewLink: 'https://stillelite.github.io/countries/',
  // },
  // {
  //   label: 'Product List Cart',
  //   image: '/products.png',
  //   codeLink: 'https://github.com/StillElite/product-list-cart',
  //   viewLink: 'https://stillelite.github.io/product-list-cart/products',
  // },
  {
    label: 'Grow & Tell',
    image: '/dashboard.png',
    codeLink: 'https://github.com/StillElite/grow-and-tell',
    viewLink: 'https://stillelite.github.io/grow-and-tell/',
    fit: 'contain',
  },
  {
    label: 'FAQ Accordion',
    image: '/faq-accordion.png',
    codeLink: 'https://github.com/StillElite/faq-accordion-card-main',
    viewLink: 'https://stillelite.github.io/faq-accordion-card-main/',
    fit: 'cover',
  },
  {
    label: 'Article Preview',
    image: '/article.png',
    codeLink: 'https://github.com/StillElite/article-preview-component-master',
    viewLink: 'https://stillelite.github.io/article-preview-component-master/',
    fit: 'cover',
  },
  {
    label: 'Testimonials Slider',
    image: '/testimonials.png',
    codeLink:
      'https://github.com/StillElite/coding-bootcamp-testimonials-slider-master',
    viewLink:
      'https://stillelite.github.io/coding-bootcamp-testimonials-slider-master/',
    fit: 'cover',
  },
  {
    label: 'Profile Card',
    image: '/profile.png',
    codeLink: 'https://github.com/StillElite/profile-card-component-main',
    viewLink: 'https://stillelite.github.io/profile-card-component-main/',
    fit: 'cover',
  },
];

const FrontendMentorSection: React.FC = () => {
  return (
    <section
      className='bg-cube-background'
      aria-labelledby='frontend-mentor-heading'
    >
      <div className='bg-[rgba(255,255,255,0.8)]'>
        <div className='container mx-auto px-6 py-12'>
          <h2
            id='frontend-mentor-heading'
            className='text-3xl font-semibold mb-8 text-[#8D3D59]'
          >
            Selected Projects
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {frontendMentorLinks.map((challenge, index) => (
              <div
                key={index}
                className='bg-white border border-[#D1D1D1] rounded-lg shadow-md overflow-hidden'
              >
                <div className='relative h-64 bg-[#DDE2DE] rounded-t-lg overflow-hidden border-b border-[#dddddd] shadow-sm'>
                  <Image
                    src={challenge.image}
                    alt={`Screenshot of ${challenge.label}`}
                    fill
                    style={{ objectFit: challenge.fit }}
                    className='rounded-t-lg'
                  />
                </div>

                <div className='p-4 flex flex-col'>
                  <h3 className='text-lg font-bold text-[#8D3D59] mb-2'>
                    {challenge.label}
                  </h3>
                  <div className='flex justify-between items-center mt-auto text-sm'>
                    <a
                      href={challenge.codeLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-1 px-4 py-2 border border-[#A5A5A5] text-[#313131] bg-[#F0F0F0] rounded-lg hover:bg-[#D1D1D1] hover:text-[#8D3D59] transition-colors duration-300 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[#8D3D59]'
                      aria-label={`View the code for ${challenge.label}`}
                    >
                      <FontAwesomeIcon icon={faCode} />
                      Code
                    </a>

                    <a
                      href={challenge.viewLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-1 px-4 py-2 border border-[#A5A5A5] text-[#313131] bg-[#F0F0F0] rounded-lg hover:bg-[#D1D1D1] hover:text-[#8D3D59] transition-colors duration-300 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[#8D3D59]'
                      aria-label={`View the live site for ${challenge.label}`}
                    >
                      <FontAwesomeIcon icon={faEye} />
                      View
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrontendMentorSection;
