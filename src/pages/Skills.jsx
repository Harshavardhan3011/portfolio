import React from 'react';
import { FaGem, FaCubes, FaHeartbeat } from 'react-icons/fa';

export default function MySkillsSection() {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center px-8 py-16 bg-white">
      {/* Left Section */}
      <div className="lg:w-1/2">
        <span className="inline-block border border-green-500 text-green-600 px-4 py-1 rounded-full text-lg mb-4">
          My Skills
        </span>
        <h2 className="text-4xl font-bold text-black mb-2">
          Why Hire Me For Your <br /> Next <span className="text-green-600">Project?</span>
        </h2>
        <p className="text-gray-600 mt-4 mb-6 text-lg">
          I’m specialist in UI/UX Design<span className="font-medium">.</span> My passion is designing & solving problems through user experience and research.
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition">
          Hire Me
        </button>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 lg:mt-0">
        {/* Visual Design */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <FaGem className="text-green-500 text-3xl mb-4" />
          <h3 className="text-xl font-bold text-black mb-2">Visual Design</h3>
          <p className="text-gray-600">
            Create user interface design with unique & modern ideas
          </p>
        </div>

        {/* UX Research */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <FaCubes className="text-green-500 text-3xl mb-4" />
          <h3 className="text-xl font-bold text-black mb-2">UX Research</h3>
          <p className="text-gray-600">
            Create digital user products with updated ideas
          </p>
        </div>

        {/* Design Prototype */}
        <div className="bg-white shadow-md p-6 rounded-lg col-span-1 md:col-span-2">
          <FaHeartbeat className="text-green-500 text-3xl mb-4" />
          <h3 className="text-xl font-bold text-black mb-2">Design Prototype</h3>
          <p className="text-gray-600">
            Create advance design prototype with Figma apps.
          </p>
        </div>
      </div>
    </section>
  );
}
