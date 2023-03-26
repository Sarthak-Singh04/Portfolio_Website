import React from 'react';
import HeroImage from '../assets/heroimage.png';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center md:flex-row px-4'>
        <div className='flex flex-col justify-center md:justify-start h-full md:w-1/2 md:pr-8 lg:pr-16'>
          <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4'>
            I'm a Full Stack Developer
          </h2>
          <p className='text-gray-500 py-4 max-w-md md:text-sm mb-8'>
          I am an enthusiastic Full Stack Developer with expertise in web development technologies including HTML, CSS, JavaScript, React, and Next.js, as well as backend development with Node.js, Express, and MongoDB. I also have experience working collaboratively with Git.
          </p>
          <div>
            <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              Portfolio
              <span className='group-hover:rotate-90 duration-100 ml-1'>
                <MdKeyboardArrowRight size={25} />
              </span>
            </button>
          </div>
        </div>
        <div className='flex justify-center my-6 md:justify-end h-72 md:h-auto md:w-1/2 w-full'>
          <img src={HeroImage} alt='A futuristic AI interface' className='rounded-2xl mx-auto object-cover w-full h-full md:w-96 lg:w-120' loading='lazy' />
        </div>

      </div>
    </div>
  );
};

export default Home;
