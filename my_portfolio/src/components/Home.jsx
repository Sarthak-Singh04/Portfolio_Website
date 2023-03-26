import React from 'react';
import HeroImage from '../assets/heroimage.png';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Home = () => {
  return (
    <div name='home' className='min-h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
      <div className='max-w-screen-lg mx-auto flex flex-col md:flex-row px-4'>
        <div className='flex flex-col justify-center md:justify-start h-full md:w-1/2 md:pr-8 lg:pr-16'>
          <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4'>
            I'm a Full Stack Developer
          </h2>
          <p className='text-lg md:text-xl mb-8'>
            I am a dedicated and enthusiastic developer with a strong passion for open source. My technical skills include expertise in web development technologies such as HTML, CSS, JavaScript, and popular frameworks like React and Next.js, as well as backend development with Node.js, Express, and MongoDB. I have experience working with Git and collaborating effectively with other developers.
          </p>
          <div className='flex items-center'>
            <button className='px-4 py-2 text-lg md:text-xl font-bold rounded-md bg-blue-600 text-white hover:bg-blue-700' style={{ height: '3rem' }}>
              View Portfolio
              <span className='ml-2' style={{ display: 'inline-block' }}>
                <MdOutlineKeyboardArrowRight size='1.5rem' />
              </span>
            </button>
          </div>
        </div>
        <div className='flex justify-center my-6 md:justify-end h-72 md:h-auto md:w-1/2'>
          <img src={HeroImage} alt='A futuristic AI interface' className='object-cover w-full h-full md:w-96 lg:w-120' loading='lazy' />
        </div>
      </div>
    </div>
  );
};

export default Home;
