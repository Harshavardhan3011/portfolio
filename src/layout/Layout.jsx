import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "./Logo.png"; // your Harsha logo PNG

const navClass = ({ isActive }) =>
  `hover:text-green-600 transition ${
    isActive ? "text-green-600 font-semibold" : "text-gray-700"
  }`;

export default function Layout() {
  return (
    <>
      <header className="bg-white sticky top-0 z-50 border-b shadow-sm">
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo Section */}
          <NavLink to="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Logo"
              className="h-14 w-auto object-contain"
              style={{
                filter: `
                  drop-shadow(0 0 2px rgba(0, 128, 0, 0.6))
                  drop-shadow(0 0 4px rgba(0, 255, 0, 0.3))
                `,
              }}
            />
          </NavLink>

          {/* Navigation Links */}
          <nav className="flex space-x-6 items-center text-lg">
            <NavLink to="/" end className={navClass}>
              Home
            </NavLink>
            <NavLink to="/About" className={navClass}>
              About
            </NavLink>
            <NavLink to="/onSkills" className={navClass}>
              Skills
            </NavLink>
            <NavLink to="/Projects" className={navClass}>
              Projects
            </NavLink>

            <NavLink to="/Testimonials" className={navClass}>
              Testimonials
            </NavLink>
          </nav>

          {/* CV Download Button */}
          <a
            href="/harsha_vardhan_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition font-medium shadow-md hover:shadow-lg"
          >
            Download CV
          </a>
        </div>
      </header>

      {/* Main Page Content */}
      <main className="container mx-auto p-4">
        <Outlet />
      </main>
    </>
  );
}
