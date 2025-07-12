import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from "./Logo.png";


export default function Layout() {
  return (
    <>
      <header className="bg-white sticky top-0 z-50">
        <div className="container justify-center mx-auto flex justify-between items-center p-4">
          <div className="text-xl font-bold text-green-500">
            <Link to="/"><img src={logo} alt="Logo" /></Link>
          </div>
          <nav className="flex space-x-6">
            <Link to="/" className="hover:text-green-500">Home</Link>
            <Link to="/About" className="hover:text-green-500">About</Link>
            <Link to="/Skills" className="hover:text-green-500">Skills</Link>
            <Link to="/Portfolio" className="hover:text-green-500">Portfolio</Link>
            <Link to="/Testimonials" className="hover:text-green-500">Testimonials</Link>
          </nav>
          <a
            href="src\layout\harsha_vardhan_resume.pdf"
            target="_blank"
            
            className="bg-green-500 text-white px-4 py-1 rounded"
          >
            Download CV
          </a>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <Outlet />
      </main>
    </>
  );
}
