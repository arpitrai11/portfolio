import React from 'react';
import { ArrowRight, Mail, Phone, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-24 border-t border-[#20252D]/70"
      aria-label="Contact Information"
    >
      <div className="max-w-[1280px] mx-auto px-6 space-y-16">
        {/* Main Banner Heading & Subheading */}
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#20252D] bg-[#101419] text-xs font-mono text-[#8B93A1]">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
            <span className="text-[#F5F7FA]">Available for opportunities</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F7FA] leading-[1.08]">
            LET'S BUILD
            <br />
            SOMETHING USEFUL.
          </h2>

          <p className="text-base sm:text-lg text-[#8B93A1]">
            Have a project, opportunity or idea? Let's talk.
          </p>

          <div className="pt-2">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-[#3B82F6] text-white font-medium text-sm transition-all duration-150 hover:bg-[#2563EB] active:scale-[0.98] shadow-lg shadow-blue-500/10"
            >
              <span>GET IN TOUCH</span>
              <ArrowRight
                size={16}
                className="transition-transform duration-150 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        {/* Real Clickable Contact Links Grid (touch-friendly on mobile) */}
        <div className="pt-8 border-t border-[#20252D]">
          <p className="font-mono text-xs uppercase tracking-wider text-[#5F6775] mb-6">
            Direct Channels
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Email link */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="group p-5 rounded-[12px] border border-[#20252D] bg-[#101419] flex flex-col justify-between space-y-3 transition-all duration-150 hover:border-[#2D3440] hover:bg-[#141920]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#8B93A1] uppercase tracking-wider">
                  Email
                </span>
                <Mail size={15} className="text-[#8B93A1] group-hover:text-[#3B82F6] transition-colors" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-[#F5F7FA] truncate">
                  {PERSONAL_INFO.email}
                </span>
                <ArrowRight size={13} className="text-[#5F6775] group-hover:text-[#F5F7FA] transition-colors" />
              </div>
            </a>

            {/* GitHub link */}
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-[12px] border border-[#20252D] bg-[#101419] flex flex-col justify-between space-y-3 transition-all duration-150 hover:border-[#2D3440] hover:bg-[#141920]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#8B93A1] uppercase tracking-wider">
                  GitHub
                </span>
                <GithubIcon size={15} className="text-[#8B93A1] group-hover:text-[#3B82F6] transition-colors" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-[#F5F7FA] truncate">
                  github.com/arpitrai11
                </span>
                <ExternalLink size={13} className="text-[#5F6775] group-hover:text-[#F5F7FA] transition-colors" />
              </div>
            </a>

            {/* LinkedIn link */}
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-[12px] border border-[#20252D] bg-[#101419] flex flex-col justify-between space-y-3 transition-all duration-150 hover:border-[#2D3440] hover:bg-[#141920]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#8B93A1] uppercase tracking-wider">
                  LinkedIn
                </span>
                <LinkedinIcon size={15} className="text-[#8B93A1] group-hover:text-[#3B82F6] transition-colors" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-[#F5F7FA] truncate">
                  linkedin.com/in/arpitrai
                </span>
                <ExternalLink size={13} className="text-[#5F6775] group-hover:text-[#F5F7FA] transition-colors" />
              </div>
            </a>

            {/* Phone link */}
            <a
              href={`tel:${PERSONAL_INFO.phoneTel}`}
              className="group p-5 rounded-[12px] border border-[#20252D] bg-[#101419] flex flex-col justify-between space-y-3 transition-all duration-150 hover:border-[#2D3440] hover:bg-[#141920]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#8B93A1] uppercase tracking-wider">
                  Phone
                </span>
                <Phone size={15} className="text-[#8B93A1] group-hover:text-[#3B82F6] transition-colors" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-[#F5F7FA] truncate">
                  {PERSONAL_INFO.phone}
                </span>
                <ArrowRight size={13} className="text-[#5F6775] group-hover:text-[#F5F7FA] transition-colors" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
