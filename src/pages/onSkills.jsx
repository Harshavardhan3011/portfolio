import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiVite, SiPostman, SiJest } from "react-icons/si";

const SKILL_SETS = [
  {
    title: "Frontend",
    note: "Building responsive, accessible UIs with modern stacks.",
    skills: [
      { name: "React", icon: <FaReact />, level: 80 },
      { name: "JavaScript (ES6+)", icon: <FaJsSquare />, level: 78 },
      { name: "HTML5", icon: <FaHtml5 />, level: 90 },
      { name: "CSS3", icon: <FaCss3Alt />, level: 85 },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 82 },
      { name: "Vite", icon: <SiVite />, level: 75 },
    ],
  },
  {
    title: "Backend",
    note: "APIs and services with Node.js + Express.",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, level: 10 },
      { name: "Express", icon: <SiExpress />, level: 10 },
      { name: "MongoDB", icon: <SiMongodb />, level: 10 },
      { name: "SQL / RDBMS", icon: <FaDatabase />, level: 75 },
    ],
  },
  {
    title: "Tools & Testing",
    note: "Everyday developer workflow and quality checks.",
    skills: [
      { name: "Git", icon: <FaGitAlt />, level: 80 },
      { name: "GitHub", icon: <FaGithub />, level: 78 },
      { name: "Figma", icon: <FaFigma />, level: 70 },
    ],
  },
  {
    title: "Languages & Other",
    note: "What I’m comfortable coding and communicating with.",
    skills: [
      { name: "C", icon: <span className="font-bold">C</span>, level: 85 },
      { name: "Python", icon: <FaPython />, level: 60 },
      { name: "English Communication", icon: <span className="font-bold">En</span>, level: 80 },
      { name: "Team Collaboration", icon: <span className="font-bold">🤝</span>, level: 85 },
    ],
  },
];

function LevelBar({ level }) {
  return (
    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
      <div
        className="h-full bg-green-500 rounded-full"
        style={{ width: `${Math.min(Math.max(level, 0), 100)}%` }}
      />
    </div>
  );
}

function SkillItem({ name, icon, level }) {
  return (
    <div className="group p-3 rounded-lg border border-green-100 bg-white hover:shadow-md transition">
      <div className="flex items-center gap-3 mb-2">
        <div className="text-xl text-green-600">{icon}</div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-800">{name}</span>
            <span className="text-xs text-gray-500">{level}%</span>
          </div>
          <div className="mt-2">
            <LevelBar level={level} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function onSkills() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block border border-green-500 text-green-600 px-4 py-1 rounded-full text-sm">
            My Skills
          </span>
          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Tech I Use To Build <span className="text-green-600">Real Projects</span>
          </h2>
          <p className="mt-3 text-gray-600">
            A quick overview of the tools and technologies I’m hands-on with.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_SETS.map((set) => (
            <div
              key={set.title}
              className="rounded-xl border border-green-100 bg-white/80 backdrop-blur-sm p-6 shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">{set.title}</h3>
                <span className="text-xs text-gray-500">{set.note}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {set.skills.map((s) => (
                  <SkillItem key={s.name} {...s} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="/harsha_vardhan_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
          >
            Download My Resume
          </a>
        </div>
      </div>
    </section>
  );
}
