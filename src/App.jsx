// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import OnSkills from "./pages/onSkills"; // <-- keep file name; import alias to PascalCase
import Portfolio from "./pages/Portfolio";
import Testimonials from "./pages/Testimonial";
import Contact from "./pages/Contact";
import "./index.css";
import ScrollToTop from "./ScrollToTop.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <Router>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="onSkills" element={<OnSkills />} /> {/* URL unchanged */}
          <Route path="Portfolio" element={<Portfolio />} />
          <Route path="Testimonials" element={<Testimonials />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Projects" element={<Projects />} />
        </Route>
      </Routes>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-100 text-gray-900 border-t mt-10">
        <div className="container flex flex-col items-center justify-between mx-auto px-6 py-6 md:flex-row">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">
            © 2025 Harsha. All Rights Reserved.
          </p>
          <div className="flex space-x-5 text-green-600">
            <a
              href="https://www.instagram.com/itz_roronoa_zoro___?igsh=b2ZkYnExcDI2ZnJ0"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-700 transition"
            >
              <i className="fa-brands fa-instagram text-2xl"></i>
            </a>
            <a href="#" title="Twitter" className="hover:text-green-700 transition">
              <i className="fa-brands fa-twitter text-2xl"></i>
            </a>
            <a href="#" title="Facebook" className="hover:text-green-700 transition">
              <i className="fa-brands fa-facebook text-2xl"></i>
            </a>
            <a href="#" title="Gmail" className="hover:text-green-700 transition">
              <i className="fa-solid fa-envelope text-2xl"></i>
            </a>
          </div>
        </div>
      </footer>
    </Router>
  );
}
