import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { MapPin, Target, Briefcase, GraduationCap } from 'lucide-react';

export const About: React.FC = () => {
  const metadata = [
    {
      label: 'Location',
      value: PERSONAL_INFO.location,
      icon: MapPin,
    },
    {
      label: 'Focus',
      value: PERSONAL_INFO.focus,
      icon: Target,
    },
    {
      label: 'Currently',
      value: PERSONAL_INFO.currently,
      icon: Briefcase,
    },
    {
      label: 'Education',
      value: PERSONAL_INFO.educationDegree,
      icon: GraduationCap,
    },
  ];

  return (
    <section
      id="about"
      className="py-24 border-t border-[#20252D]/70"
      aria-label="About Arpit Rai"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Heading */}
          <div className="lg:col-span-4 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
              <span className="font-mono text-xs tracking-wider uppercase text-[#8B93A1]">
                BACKGROUND
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F7FA]">
              ABOUT
            </h2>
          </div>

          {/* Right Column: Editorial Paragraph & Metadata Grid */}
          <div className="lg:col-span-8 space-y-12">
            <p className="text-lg sm:text-xl text-[#F5F7FA] font-normal leading-relaxed">
              {PERSONAL_INFO.aboutLong}
            </p>

            {/* Core Attributes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#20252D]">
              {metadata.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="p-5 rounded-lg border border-[#20252D] bg-[#101419] space-y-1.5 transition-colors duration-150 hover:border-[#2D3440]"
                  >
                    <div className="flex items-center gap-2">
                      <Icon size={14} className="text-[#3B82F6]" />
                      <span className="font-mono text-xs uppercase tracking-wider text-[#8B93A1]">
                        {item.label}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base font-medium text-[#F5F7FA]">
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
