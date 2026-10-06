import React from 'react';
import { EDUCATION } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="py-24 border-t border-[#20252D]/70"
      aria-label="Education"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Heading */}
          <div className="lg:col-span-4 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
              <span className="font-mono text-xs tracking-wider uppercase text-[#8B93A1]">
                ACADEMICS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F7FA]">
              EDUCATION
            </h2>
          </div>

          {/* Right Column: Pure Typographic Layout without cards */}
          <div className="lg:col-span-8 space-y-10">
            {/* Primary Degree */}
            <div className="space-y-2 border-b border-[#20252D] pb-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F5F7FA]">
                  {EDUCATION[0].degree}
                </h3>
                <span className="font-mono text-sm text-[#3B82F6] font-medium">
                  {EDUCATION[0].year}
                </span>
              </div>
              <p className="text-base text-[#8B93A1]">
                {EDUCATION[0].institution}
              </p>
              <div className="pt-2">
                <span className="inline-block font-mono text-xs px-2.5 py-1 rounded border border-[#20252D] bg-[#141920] text-[#F5F7FA]">
                  {EDUCATION[0].score}
                </span>
              </div>
            </div>

            {/* Secondary High School */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-[#F5F7FA]">
                  {EDUCATION[1].degree}
                </h3>
                <span className="font-mono text-sm text-[#8B93A1]">
                  {EDUCATION[1].year}
                </span>
              </div>
              <div>
                <span className="inline-block font-mono text-xs px-2.5 py-1 rounded border border-[#20252D] bg-[#141920] text-[#8B93A1]">
                  {EDUCATION[1].score}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
