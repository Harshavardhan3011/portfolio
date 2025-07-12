import React from 'react';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Testimonials from './Testimonial';
import Contact from './Contact';
import profile from "./profile.jpg";


export default function Home() {
  return (
    <>
      <section className="dark:white-100 dark:text-gray-800">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none ">I have 
              <span className="text-green-500"> Creative Design </span> Experience
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">I'm Tanvir, a creative Product Designer. I've been helping businesses to solve their problems with my design for 2 years.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-green-500 dark:text-gray-50">Contact Me</a>
              <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold  rounded ">View portfolio</a>
            </div>
          </div>
          <div className="bg-green-500 flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 ">
            <div className='border border-black'>
              <img src={profile} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 " />
            </div>
          </div>
        </div>
      </section>
      <section className="p-6 dark:bg-white-100 dark:text-gray-800">
        <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl text-green-500">50+</p>
            <p className="text-sm sm:text-base">Satisfied Clients</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl text-green-500">200+</p>
            <p className="text-sm sm:text-base">Projects Completed</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl text-green-500">99+</p>
            <p className="text-sm sm:text-base">Reviews given</p>
          </div>
        </div>
      </section>
      <Skills/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
    </>
  );
}
