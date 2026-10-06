import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../data/portfolioData';
import { ProjectVisual } from './ProjectVisual';
import { GithubIcon } from './Icons';

interface ProjectCardProps {
  project: Project;
  reverseLayout?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, reverseLayout = false }) => {
  return (
    <article
      className="group rounded-[14px] border border-[#20252D] bg-[#101419] p-6 lg:p-8 transition-all duration-300 hover:border-[#2D3440] hover:shadow-xl"
      aria-labelledby={`project-${project.number}-title`}
    >
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
        reverseLayout ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''
      }`}>
        {/* Left/Content column */}
        <div className="lg:col-span-6 space-y-6">
          {/* Project Number & Subtitle */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded border border-[#20252D] bg-[#141920] text-[#3B82F6]">
                {project.number}
              </span>
              <span className="font-mono text-xs text-[#8B93A1] uppercase tracking-wider">
                System Specification
              </span>
            </div>
            <h3
              id={`project-${project.number}-title`}
              className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F5F7FA] pt-1"
            >
              {project.name}
            </h3>
            <p className="text-sm font-medium text-[#8B93A1]">
              {project.subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-[#8B93A1] leading-relaxed font-normal">
            {project.description}
          </p>

          {/* Tech Stack Tags */}
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-[#5F6775] mb-2.5">
              Technologies Used
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-2.5 py-1 rounded-md border border-[#20252D] bg-[#141920] text-[#F5F7FA]/90"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.primaryLink && (
              <a
                href={project.primaryLink.url}
                target={project.primaryLink.isExternal ? '_blank' : undefined}
                rel={project.primaryLink.isExternal ? 'noopener noreferrer' : undefined}
                className="group/btn inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#3B82F6] text-white text-xs sm:text-sm font-medium transition-all duration-150 hover:bg-[#2563EB] active:scale-[0.98]"
              >
                <span>{project.primaryLink.label}</span>
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-150 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                />
              </a>
            )}

            <a
              href={project.secondaryLink.url}
              target={project.secondaryLink.isExternal ? '_blank' : undefined}
              rel={project.secondaryLink.isExternal ? 'noopener noreferrer' : undefined}
              className="group/btn inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#20252D] bg-[#141920] text-[#F5F7FA] text-xs sm:text-sm font-medium transition-all duration-150 hover:border-[#2D3440] hover:bg-[#1A202A] active:scale-[0.98]"
            >
              <GithubIcon size={14} className="text-[#8B93A1] group-hover/btn:text-[#F5F7FA]" />
              <span>{project.secondaryLink.label}</span>
              <ArrowUpRight
                size={14}
                className="text-[#8B93A1] transition-transform duration-150 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 group-hover/btn:text-[#F5F7FA]"
              />
            </a>
          </div>
        </div>

        {/* Right/Visual column with subtle 1.02-1.03 scale on card hover */}
        <div className="lg:col-span-6 overflow-hidden rounded-lg">
          <div className="transform transition-transform duration-300 ease-out group-hover:scale-[1.025]">
            <ProjectVisual projectNumber={project.number} />
          </div>
        </div>
      </div>
    </article>
  );
};
