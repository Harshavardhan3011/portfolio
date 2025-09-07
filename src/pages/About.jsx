import React from 'react';
import harsha from "./harsha.jpg";

export default function About() {
  return (
    <section className="bg-white max-w-full px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Image + About Content */}
        <div
          className="flex flex-col md:flex-row items-center md:items-start gap-8"
          data-aos="fade-up"
        >
          {/* Profile Image */}
          <img
            src={harsha}
            alt="Profile"
            className=" w-48 h-48 md:w-64 md:h-64 object-cover rounded-lg shadow-lg border-4 border-white"
          />

          {/* About Text */}
          <div
            className="flex-1 bg-white/70 backdrop-blur-sm p-6 rounded-lg shadow-lg"
            data-aos="fade-left"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">About Me</h2>
            <p className="text-gray-600 leading-relaxed">
              I'm a passionate Full Stack Developer with a strong foundation in both front-end and back-end
              technologies. I love creating dynamic and responsive web applications that provide a seamless
              user experience.
              <br /><br />
              With a background in Computer Science and Engineering, I have honed my skills in various
              programming languages and frameworks. I am always eager to learn new technologies and improve my
              craft.
              <br /><br />
              In my free time, I enjoy contributing to open-source projects and exploring new technologies.
            </p>
          </div>
        </div>

        {/* Skills & Education */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Skills */}
          <div
            className="bg-white/80 backdrop-blur-sm shadow-lg rounded-lg p-6"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <h3 className="text-xl font-bold mb-4 text-gray-800">Skills</h3>
            <ul className="grid grid-cols-2 gap-3 text-gray-700">
              <li>C</li>
              <li>Python</li>
              <li>HTML & CSS</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </div>

          {/* Education */}
          <div
            className="bg-white/80 backdrop-blur-sm shadow-lg rounded-lg p-6"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <h3 className="text-xl font-bold mb-4 text-gray-800">Education</h3>
            <ul className="space-y-3 text-gray-700">
              <li>
                <span className="font-semibold">2026</span> – B-Tech from Avanthi Engineering College
              </li>
              <li>
                <span className="font-semibold">2020 - 2022</span> – Intermediate from Sri Chaitanya Junior College
              </li>
              <li>
                <span className="font-semibold">2019</span> – SSC from Pragathi English Medium High School
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
