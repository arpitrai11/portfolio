import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-24 border-t border-[#20252D]/70"
      aria-label="Work Experience"
    >
      <div className="max-w-[1280px] mx-auto px-6 space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
            <span className="font-mono text-xs tracking-wider uppercase text-[#8B93A1]">
              CAREER CHRONOLOGY
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F7FA]">
            EXPERIENCE
          </h2>
          <p className="text-sm sm:text-base text-[#8B93A1]">
            Engineering roles, production systems and development experience.
          </p>
        </div>

        {/* Desktop Horizontal Timeline (md and up) */}
        <div className="hidden md:block relative pt-6 pb-2">
          {/* Continuous thin connecting line */}
          <div className="absolute top-[35px] left-4 right-4 h-[1px] bg-[#20252D] z-0" />

          <div className="grid grid-cols-3 gap-8 relative z-10">
            {EXPERIENCES.map((exp, index) => (
              <div key={index} className="space-y-4 group">
                {/* Timeline node */}
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full border-2 border-[#0B0D10] bg-[#3B82F6] ring-4 ring-[#141920] group-hover:scale-125 transition-transform duration-200" />
                  <span className="font-mono text-xs font-medium text-[#3B82F6]">
                    {exp.period}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 rounded-[12px] border border-[#20252D] bg-[#101419] space-y-3 transition-all duration-200 group-hover:border-[#2D3440] group-hover:bg-[#121720]">
                  <div>
                    <h3 className="text-base font-bold text-[#F5F7FA]">
                      {exp.company}
                    </h3>
                    <p className="font-mono text-xs text-[#8B93A1] pt-0.5">
                      {exp.role}
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-[#8B93A1] leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Vertical Timeline (below md) */}
        <div className="md:hidden relative pl-6 border-l border-[#20252D] space-y-8 ml-2">
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="relative space-y-2">
              {/* Dot */}
              <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-[#0B0D10] bg-[#3B82F6]" />

              <span className="font-mono text-xs text-[#3B82F6] font-medium block">
                {exp.period}
              </span>

              <div className="p-5 rounded-[12px] border border-[#20252D] bg-[#101419] space-y-2">
                <h3 className="text-base font-bold text-[#F5F7FA]">
                  {exp.company}
                </h3>
                <p className="font-mono text-xs text-[#8B93A1]">
                  {exp.role}
                </p>
                <p className="text-xs text-[#8B93A1] leading-relaxed pt-1">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
