import React from "react";
import PortfolioCard from "../layout/Layout-cards/PortfolioCard";

export default function Projects() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="inline-block border border-green-500 text-green-600 px-4 py-1 rounded-full text-sm">
            Projects
          </span>
          <h1 className="mt-4 text-4xl font-bold text-gray-900">
            Things I’ve <span className="text-green-600">Built</span>
          </h1>
         
        </div>

        <PortfolioCard />
      </div>
    </section>
  );
}
