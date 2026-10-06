import React from 'react';
import { TECH_STACK } from '../data/portfolioData';
import {
  Code2,
  Server,
  Database,
  Cloud,
  Bot,
  Terminal,
} from 'lucide-react';

export const TechStack: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'FRONTEND':
        return Code2;
      case 'BACKEND':
        return Server;
      case 'DATABASES':
        return Database;
      case 'CLOUD & DEVOPS':
        return Cloud;
      case 'AI & AUTOMATION':
        return Bot;
      default:
        return Terminal;
    }
  };

  return (
    <section
      id="stack"
      className="py-24 border-t border-[#20252D]/70"
      aria-label="Technical Stack"
    >
      <div className="max-w-[1280px] mx-auto px-6 space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
            <span className="font-mono text-xs tracking-wider uppercase text-[#8B93A1]">
              ENVIRONMENT & TOOLING
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F7FA]">
            TECH STACK
          </h2>
          <p className="text-sm sm:text-base text-[#8B93A1]">
            Technologies and frameworks I utilize across production systems.
          </p>
        </div>

        {/* Grouped Horizontal Rows Container */}
        <div className="rounded-[14px] border border-[#20252D] bg-[#101419]/70 divide-y divide-[#20252D] overflow-hidden">
          {TECH_STACK.map((group) => {
            const Icon = getCategoryIcon(group.category);
            return (
              <div
                key={group.category}
                className="grid grid-cols-1 md:grid-cols-12 p-6 sm:p-7 gap-4 md:gap-8 items-start hover:bg-[#121720]/60 transition-colors duration-150"
              >
                {/* Category Header */}
                <div className="md:col-span-3 flex items-center gap-2.5">
                  <div className="p-1.5 rounded-md border border-[#20252D] bg-[#141920] text-[#3B82F6]">
                    <Icon size={14} />
                  </div>
                  <h3 className="font-mono text-xs uppercase tracking-wider text-[#8B93A1] font-medium">
                    {group.category}
                  </h3>
                </div>

                {/* Tech Pills Row */}
                <div className="md:col-span-9 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[#20252D] bg-[#141920] text-xs font-mono text-[#F5F7FA] transition-all duration-150 hover:border-[#3B82F6]/40 hover:text-white"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#3B82F6]" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
