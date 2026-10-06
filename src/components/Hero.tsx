import React from 'react';
import { ArrowRight, FileText, Mail, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { CodeWindow } from './CodeWindow';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const handleScrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-4rem)] pt-24 pb-16 lg:pt-32 lg:pb-24 flex items-center"
      aria-label="Introduction"
    >
      <div className="max-w-[1280px] w-full mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            {/* Small Label */}
            <div>
              <span className="inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase text-[#8B93A1] border-b border-[#20252D] pb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                {PERSONAL_INFO.role.toUpperCase()}
              </span>
            </div>

            {/* Large Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-bold tracking-tight text-[#F5F7FA] leading-[1.08]">
              {PERSONAL_INFO.headline.line1}
              <br />
              {PERSONAL_INFO.headline.line2}
              <br />
              <span className="text-[#3B82F6]">
                {PERSONAL_INFO.headline.line3}
              </span>
            </h1>

            {/* Sub-description */}
            <p className="text-base sm:text-lg text-[#8B93A1] max-w-xl leading-relaxed font-normal">
              {PERSONAL_INFO.bio}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#work"
                onClick={handleScrollToWork}
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#F5F7FA] text-[#0B0D10] font-medium text-sm transition-all duration-150 hover:bg-white active:scale-[0.98]"
              >
                <span>View Selected Work</span>
                <ArrowRight
                  size={15}
                  className="transition-transform duration-150 group-hover:translate-x-0.5"
                />
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#20252D] bg-[#101419] text-[#F5F7FA] font-medium text-sm transition-all duration-150 hover:border-[#2D3440] hover:bg-[#151A22] active:scale-[0.98]"
              >
                <FileText size={15} className="text-[#8B93A1] group-hover:text-[#F5F7FA]" />
                <span>Download Resume</span>
                <ArrowRight
                  size={14}
                  className="text-[#8B93A1] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:text-[#F5F7FA]"
                />
              </button>
            </div>

            {/* Real Social & Contact Links */}
            <div className="pt-4 border-t border-[#20252D]/80">
              <p className="font-mono text-xs uppercase tracking-wider text-[#5F6775] mb-3">
                Direct Channels
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#8B93A1]">
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Arpit Rai on GitHub"
                  className="group flex items-center gap-2 px-2.5 py-1.5 rounded-md border border-[#20252D] bg-[#101419]/60 hover:border-[#2D3440] hover:text-[#F5F7FA] hover:bg-[#141920] transition-all"
                >
                  <GithubIcon size={14} className="text-[#8B93A1] group-hover:text-[#F5F7FA]" />
                  <span>GitHub</span>
                  <ExternalLink size={11} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#8B93A1]" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Arpit Rai on LinkedIn"
                  className="group flex items-center gap-2 px-2.5 py-1.5 rounded-md border border-[#20252D] bg-[#101419]/60 hover:border-[#2D3440] hover:text-[#F5F7FA] hover:bg-[#141920] transition-all"
                >
                  <LinkedinIcon size={14} className="text-[#8B93A1] group-hover:text-[#F5F7FA]" />
                  <span>LinkedIn</span>
                  <ExternalLink size={11} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#8B93A1]" />
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  aria-label="Email Arpit Rai"
                  className="group flex items-center gap-2 px-2.5 py-1.5 rounded-md border border-[#20252D] bg-[#101419]/60 hover:border-[#2D3440] hover:text-[#F5F7FA] hover:bg-[#141920] transition-all"
                >
                  <Mail size={14} className="text-[#8B93A1] group-hover:text-[#F5F7FA]" />
                  <span>Email</span>
                  <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#8B93A1]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Developer Workspace Window */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <CodeWindow />
          </div>
        </div>
      </div>
    </section>
  );
};
