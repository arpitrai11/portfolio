import React from 'react';
import {
  Radio,
  ArrowRight,
  Mail,
  Phone,
  Wifi,
  Send,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const ContactNetworkConsole: React.FC = () => {
  return (
    <section id="contact" className="py-12" aria-label="Contact Network Console">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 space-y-3">
        {/* Concept Label */}
        <div className="flex items-center justify-between text-xs font-mono text-[var(--text-secondary)]">
          <div className="flex items-center gap-2">
            <Radio size={14} className="text-[var(--accent-blue)]" />
            <span className="text-[var(--text-primary)] font-medium">SECTION 08 // NETWORK SOCKET CONSOLE</span>
            <span className="text-[var(--text-muted)]">· Communication Gateway</span>
          </div>
          <span className="hidden sm:inline text-[11px] text-[var(--accent-text)] font-medium">
            PORT: 443 // TCP_ESTABLISHED
          </span>
        </div>

        {/* Network Console Window Frame */}
        <div className="w-full rounded-[14px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-2xl overflow-hidden font-mono text-xs">
          {/* Window Titlebar */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-[var(--border-subtle)] bg-[var(--bg-header)] select-none">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EC6A5E] shadow-xs" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#F5BF4F] shadow-xs" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#62C554] shadow-xs" />
              <span className="text-[var(--text-secondary)] text-[11px] pl-3">
                network-console --target=arpitrai (socket-listener)
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[var(--accent-text)] text-[11px] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
              <span>Available for opportunities</span>
            </div>
          </div>

          {/* Network Packet Telemetry Stream */}
          <div className="p-4 border-b border-[var(--border-subtle)] bg-[var(--bg-header)]/40 flex flex-wrap items-center justify-between gap-3 text-[11px] text-[var(--text-muted)]">
            <div className="flex items-center gap-2">
              <Wifi size={13} className="text-[var(--accent-blue)]" />
              <span className="text-[var(--text-secondary)]">
                PING arpitrai.dev: 64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=14.2 ms
              </span>
            </div>
            <div className="flex items-center gap-4 text-[var(--text-secondary)]">
              <span>PACKETS: 0% LOSS</span>
              <span>BANDWIDTH: GIGABIT</span>
            </div>
          </div>

          {/* Console Body Content */}
          <div className="p-6 sm:p-10 lg:p-12 space-y-10">
            {/* Main Heading & Subheading */}
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-header)] text-xs font-mono text-[var(--text-secondary)] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                <span className="text-[var(--text-primary)] font-medium">Available for opportunities</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)] font-sans leading-[1.08]">
                LET'S BUILD
                <br />
                SOMETHING USEFUL.
              </h2>

              <p className="text-base sm:text-lg text-[var(--text-secondary)] font-sans">
                Have a project, opportunity or idea? Let's talk.
              </p>

              {/* Primary Action Button */}
              <div className="pt-2">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-[var(--accent-blue)] text-white font-medium text-sm font-sans transition-all duration-150 hover:opacity-90 active:scale-[0.98] shadow-lg shadow-blue-500/20"
                >
                  <Send size={15} />
                  <span>GET IN TOUCH</span>
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-150 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>

            {/* Clickable Socket Endpoints */}
            <div className="pt-6 border-t border-[var(--border-subtle)] space-y-4">
              <span className="text-[11px] uppercase tracking-wider text-[var(--text-muted)] block">
                ACTIVE NETWORK SOCKET ENDPOINTS
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Email socket */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="group p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] flex flex-col justify-between space-y-3 hover:border-[var(--accent-blue)]/50 hover:bg-[var(--bg-header)]/40 transition-all shadow-xs"
                >
                  <div className="flex items-center justify-between text-[var(--text-secondary)]">
                    <span className="text-[10px] text-[var(--text-muted)]">SOCKET 01 // EMAIL</span>
                    <Mail size={14} className="group-hover:text-[var(--accent-blue)] transition-colors" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[var(--text-primary)] block truncate">
                      {PERSONAL_INFO.email}
                    </span>
                    <span className="text-[10px] text-[var(--text-muted)]">Click to transmit mail</span>
                  </div>
                </a>

                {/* GitHub socket */}
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] flex flex-col justify-between space-y-3 hover:border-[var(--accent-blue)]/50 hover:bg-[var(--bg-header)]/40 transition-all shadow-xs"
                >
                  <div className="flex items-center justify-between text-[var(--text-secondary)]">
                    <span className="text-[10px] text-[var(--text-muted)]">SOCKET 02 // GITHUB</span>
                    <GithubIcon size={14} className="group-hover:text-[var(--accent-blue)] transition-colors" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[var(--text-primary)] block truncate">
                      github.com/arpitrai11
                    </span>
                    <span className="text-[10px] text-[var(--text-muted)]">External Repository Hub</span>
                  </div>
                </a>

                {/* LinkedIn socket */}
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] flex flex-col justify-between space-y-3 hover:border-[var(--accent-blue)]/50 hover:bg-[var(--bg-header)]/40 transition-all shadow-xs"
                >
                  <div className="flex items-center justify-between text-[var(--text-secondary)]">
                    <span className="text-[10px] text-[var(--text-muted)]">SOCKET 03 // LINKEDIN</span>
                    <LinkedinIcon size={14} className="group-hover:text-[var(--accent-blue)] transition-colors" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[var(--text-primary)] block truncate">
                      linkedin.com/in/arpitrai
                    </span>
                    <span className="text-[10px] text-[var(--text-muted)]">Professional Network</span>
                  </div>
                </a>

                {/* Phone socket */}
                <a
                  href={`tel:${PERSONAL_INFO.phoneTel}`}
                  className="group p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] flex flex-col justify-between space-y-3 hover:border-[var(--accent-blue)]/50 hover:bg-[var(--bg-header)]/40 transition-all shadow-xs"
                >
                  <div className="flex items-center justify-between text-[var(--text-secondary)]">
                    <span className="text-[10px] text-[var(--text-muted)]">SOCKET 04 // VOICE & SMS</span>
                    <Phone size={14} className="group-hover:text-[var(--accent-blue)] transition-colors" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[var(--text-primary)] block truncate">
                      {PERSONAL_INFO.phone}
                    </span>
                    <span className="text-[10px] text-[var(--text-muted)]">Direct Telephony Link</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
