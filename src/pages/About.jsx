import React from "react";
import harsha from "./harsha.jpg";

export default function About() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-green-50/50">
      {/* soft decorative blobs */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-green-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Image + About Content */}
        <div
          className="flex flex-col md:flex-row items-center md:items-start gap-10"
          data-aos="fade-up"
        >
          {/* Profile Image w/ animated glow ring */}
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl blur-2xl bg-green-400/30 animate-pulse" />
            <img
              src={harsha}
              alt="Harsha profile"
              className="relative w-48 h-48 md:w-64 md:h-64 object-cover rounded-2xl shadow-xl ring-4 ring-white"
            />
            {/* subtle crown accent to echo your logo vibe (optional) */}
            <span className="absolute -top-5 -left-3 text-2xl md:text-3xl select-none">
              👑
            </span>
          </div>

          {/* About Text */}
          <div
            className="flex-1 bg-white/70 backdrop-blur-xl p-6 md:p-8 rounded-2xl shadow-xl border border-white/60"
            data-aos="fade-left"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-green-100 text-green-700 text-xs font-semibold px-3 py-1">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Available for Projects
              </span>
              <span className="hidden sm:inline rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1">
                Full-Stack • React • JS
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
              About Me
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              I’m a passionate Full-Stack Developer who loves crafting fast,
              clean, and accessible web apps. From crisp UI with React and
              Tailwind to robust back-end logic, I enjoy building experiences
              that feel smooth and thoughtful.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              With a Computer Science background, I’m constantly learning and
              improving—experimenting with patterns, performance, and developer
              tooling. In my free time, I explore new stacks and contribute to
              small OSS utilities.
            </p>

            {/* CTA buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="/harsha_vardhan_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-green-600 px-5 py-2.5 text-white font-semibold shadow-md hover:bg-green-700 hover:shadow-lg transition"
              >
                Download CV
              </a>
              <a
                href="mailto:harsha@example.com"
                className="inline-flex items-center justify-center rounded-xl border border-green-600 text-green-700 px-5 py-2.5 font-semibold hover:bg-green-50 transition"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>

        {/* Stats + Skills + Education */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Stats */}
          <div
            className="bg-white/80 backdrop-blur-xl shadow-lg rounded-2xl p-6 border border-white/60"
            data-aos="zoom-in"
          >
            <h3 className="text-lg font-bold text-gray-900">Highlights</h3>
            <div className="mt-4 grid grid-cols-3 gap-4 text-center">
              <div className="rounded-xl p-4 bg-green-50">
                <div className="text-2xl font-extrabold text-green-600">10+</div>
                <div className="text-xs text-gray-600">Mini Projects</div>
              </div>
              <div className="rounded-xl p-4 bg-green-50">
                <div className="text-2xl font-extrabold text-green-600">5</div>
                <div className="text-xs text-gray-600">Core Skills</div>
              </div>
              <div className="rounded-xl p-4 bg-green-50">
                <div className="text-2xl font-extrabold text-green-600">∞</div>
                <div className="text-xs text-gray-600">Curiosity</div>
              </div>
            </div>
          </div>

          {/* Skills w/ progress bars */}
          <div
            className="bg-white/80 backdrop-blur-xl shadow-lg rounded-2xl p-6 border border-white/60"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <h3 className="text-lg font-bold text-gray-900">Skills</h3>

            <ul className="mt-4 space-y-4">
              {[
                { name: "C", pct: 80 },
                { name: "Python", pct: 75 },
                { name: "HTML & CSS", pct: 90 },
                { name: "JavaScript", pct: 80 },
                { name: "React", pct: 85 },
              ].map((s) => (
                <li key={s.name}>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="font-medium text-gray-700">{s.name}</span>
                    <span className="text-gray-500">{s.pct}%</span>
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-gray-200 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-400"
                      style={{ width: `${s.pct}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>

            {/* skill chips */}
            <div className="mt-5 flex flex-wrap gap-2">
              {["REST APIs", "Tailwind", "Responsive UI", "Git", "AOS Animations"].map(
                (chip) => (
                  <span
                    key={chip}
                    className="text-xs font-semibold px-3 py-1 rounded-full bg-green-100 text-green-700"
                  >
                    {chip}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Education timeline */}
          <div
            className="bg-white/80 backdrop-blur-xl shadow-lg rounded-2xl p-6 border border-white/60"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <h3 className="text-lg font-bold text-gray-900">Education</h3>
            <ol className="mt-4 relative border-s-2 border-green-200">
              <li className="mb-6 ms-4">
                <div className="absolute -start-3 mt-1 h-5 w-5 rounded-full bg-green-600 ring-4 ring-green-100" />
                <time className="text-sm font-semibold text-green-700">2026</time>
                <p className="text-gray-800 font-medium">B-Tech</p>
                <p className="text-gray-600">Avanthi Engineering College</p>
              </li>
              <li className="mb-6 ms-4">
                <div className="absolute -start-3 mt-1 h-5 w-5 rounded-full bg-green-600 ring-4 ring-green-100" />
                <time className="text-sm font-semibold text-green-700">
                  2020 – 2022
                </time>
                <p className="text-gray-800 font-medium">Intermediate</p>
                <p className="text-gray-600">Sri Chaitanya Junior College</p>
              </li>
              <li className="ms-4">
                <div className="absolute -start-3 mt-1 h-5 w-5 rounded-full bg-green-600 ring-4 ring-green-100" />
                <time className="text-sm font-semibold text-green-700">2019</time>
                <p className="text-gray-800 font-medium">SSC</p>
                <p className="text-gray-600">
                  Pragathi English Medium High School
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
