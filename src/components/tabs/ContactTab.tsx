import React, { useState } from 'react';
import { Mail, Phone, ExternalLink, Copy, Check, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../Icons';

interface ContactTabProps {
  onNotify: (msg: string) => void;
}

export const ContactTab: React.FC<ContactTabProps> = ({ onNotify }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    onNotify(`Copied ${label} to clipboard`);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const contactChannels = [
    {
      key: 'email',
      label: 'Email Address',
      value: PERSONAL_INFO.email,
      href: `mailto:${PERSONAL_INFO.email}`,
      copyText: PERSONAL_INFO.email,
      icon: Mail,
      isExternal: false,
      tag: 'PRIMARY CONTACT',
    },
    {
      key: 'phone',
      label: 'Phone / WhatsApp',
      value: PERSONAL_INFO.phone,
      href: `tel:${PERSONAL_INFO.phoneTel}`,
      copyText: PERSONAL_INFO.phone,
      icon: Phone,
      isExternal: false,
      tag: 'DIRECT CALL',
    },
    {
      key: 'linkedin',
      label: 'LinkedIn Profile',
      value: 'linkedin.com/in/arpit-rai-1a434524b',
      href: PERSONAL_INFO.linkedinUrl,
      copyText: PERSONAL_INFO.linkedinUrl,
      icon: LinkedinIcon,
      isExternal: true,
      tag: 'PROFESSIONAL NETWORK',
    },
    {
      key: 'github',
      label: 'GitHub Repositories',
      value: 'github.com/arpitrai11',
      href: PERSONAL_INFO.githubUrl,
      copyText: PERSONAL_INFO.githubUrl,
      icon: GithubIcon,
      isExternal: true,
      tag: 'OPEN SOURCE CODE',
    },
  ];

  return (
    <div className="space-y-8 py-2">
      {/* Tab Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Terminal size={16} className="text-[var(--accent)]" />
            <h2 className="text-lg font-bold tracking-tight text-[var(--text-primary)]">
              Direct Channels & Dispatch
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
            Available for full-time software engineering roles, team collaborations, and technical discussions.
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-input)] text-[var(--accent)] font-semibold">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
            Inbox Open
          </span>
        </div>
      </div>

      {/* Terminal Command Console Header */}
      <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] overflow-hidden shadow-sm">
        <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--border-subtle)] bg-[var(--bg-header)] font-mono text-xs">
          <div className="flex items-center gap-2 text-[var(--text-muted)]">
            <span className="text-[var(--accent)]">$</span>
            <span className="text-[var(--text-primary)] font-medium">arpit --contact --channel=all</span>
          </div>
          <span className="text-[11px] text-[var(--text-muted)]">Latency: &lt; 24h response</span>
        </div>

        {/* Large Clickable Rows */}
        <div className="divide-y divide-[var(--border-subtle)]">
          {contactChannels.map((ch) => {
            const Icon = ch.icon;
            const isCopied = copiedKey === ch.key;

            return (
              <div
                key={ch.key}
                className="group flex flex-col sm:flex-row sm:items-center justify-between p-5 gap-4 hover:bg-[var(--bg-tab-hover)] transition-colors"
              >
                {/* Left Side: Icon & Details */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-input)] flex items-center justify-center text-[var(--accent)] group-hover:border-[var(--accent)] transition-colors shrink-0">
                    <Icon className="w-5 h-5 fill-current" />
                  </div>

                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-[var(--text-muted)] font-semibold">
                        {ch.tag}
                      </span>
                    </div>
                    <div className="text-sm sm:text-base font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                      {ch.label}
                    </div>
                    <div className="text-xs sm:text-sm font-mono text-[var(--text-secondary)]">
                      {ch.value}
                    </div>
                  </div>
                </div>

                {/* Right Side: Actions (Open Link + Copy) */}
                <div className="flex items-center gap-2 sm:self-center pl-14 sm:pl-0">
                  <button
                    type="button"
                    onClick={() => copyToClipboard(ch.copyText, ch.label, ch.key)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-input)] text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-medium)] transition-all active:scale-[0.98]"
                    title={`Copy ${ch.label}`}
                  >
                    {isCopied ? (
                      <>
                        <Check size={13} className="text-[var(--accent)]" />
                        <span className="text-[var(--accent)] font-semibold">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={ch.href}
                    target={ch.isExternal ? '_blank' : undefined}
                    rel={ch.isExternal ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--accent)] text-[var(--accent-fg)] text-xs font-mono font-semibold transition-all hover:opacity-90 active:scale-[0.98]"
                  >
                    <span>Connect</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recruiter / Collaboration Note */}
      <div className="p-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-input)]/40 space-y-2">
        <h4 className="text-sm font-bold text-[var(--text-primary)]">
          Immediate Availability Notice
        </h4>
        <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
          I am currently open to full-time Software Engineer positions, trainee or junior roles, and select freelance engineering contracts. If you have an opportunity or want to discuss full-stack or AI system architectures, feel free to drop an email or reach out on LinkedIn.
        </p>
      </div>
    </div>
  );
};
