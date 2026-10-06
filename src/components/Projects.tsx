import React from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';

export const Projects: React.FC = () => {
  return (
    <section
      id="work"
      className="py-24 border-t border-[#20252D]/70"
      aria-label="Selected Work"
    >
      <div className="max-w-[1280px] mx-auto px-6 space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
            <span className="font-mono text-xs tracking-wider uppercase text-[#8B93A1]">
              PORTFOLIO CATALOG
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F7FA]">
            SELECTED WORK
          </h2>
          <p className="text-sm sm:text-base text-[#8B93A1]">
            A few systems I've designed and built.
          </p>
        </div>

        {/* Project Cards List */}
        <div className="space-y-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              reverseLayout={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
