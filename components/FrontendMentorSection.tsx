import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faEye } from '@fortawesome/free-solid-svg-icons';

const frontendMentorLinks = [
  {
    label: 'Product List Cart',
    image: '/products.png',
    codeLink: 'https://github.com/StillElite/product-list-cart',
    viewLink: 'https://stillelite.github.io/product-list-cart/products',
  },
  {
    label: 'FAQ Accordion',
    image: '/faq-accordion.png',
    codeLink: 'https://github.com/StillElite/faq-accordion-card-main',
    viewLink: 'https://stillelite.github.io/faq-accordion-card-main/',
  },
  {
    label: 'Article Preview',
    image: '/article.png',
    codeLink: 'https://github.com/StillElite/article-preview-component-master',
    viewLink: 'https://stillelite.github.io/article-preview-component-master/',
  },
  {
    label: 'Testimonials Slider',
    image: '/testimonials.png',
    codeLink:
      'https://github.com/StillElite/coding-bootcamp-testimonials-slider-master',
    viewLink:
      'https://stillelite.github.io/coding-bootcamp-testimonials-slider-master/',
  },
  {
    label: 'Profile Card',
    image: '/profile.png',
    codeLink: 'https://github.com/StillElite/profile-card-component-main',
    viewLink: 'https://stillelite.github.io/profile-card-component-main/',
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
            Frontend Mentor Challenges
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {frontendMentorLinks.map((challenge, index) => (
              <div
                key={index}
                className='bg-white border border-[#D1D1D1] rounded-lg shadow-md overflow-hidden'
              >
                {/* Image Section */}
                <div className='relative h-64 bg-[#E5E5E5] rounded-t-lg overflow-hidden border-b border-[#dddddd]'>
                  <Image
                    src={challenge.image}
                    alt={`Screenshot of ${challenge.label}`}
                    layout='fill'
                    objectFit='cover'
                    className='rounded-t-lg'
                  />
                </div>

                {/* Content */}
                <div className='p-4 flex flex-col'>
                  <h3 className='text-lg font-bold text-[#8D3D59] mb-2'>
                    {challenge.label}
                  </h3>
                  <div className='flex justify-between items-center mt-auto text-sm'>
                    {/* Code Button */}
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

                    {/* View Button */}
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
