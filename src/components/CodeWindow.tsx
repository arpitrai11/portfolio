import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

export const CodeWindow: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const rawCode = `const developer = {
  name: "Arpit Rai",
  role: "Full Stack Engineer",
  focus: [
    "Web Applications",
    "APIs",
    "AI Automation"
  ],
  status: "Available"
};`;

  const handleCopy = () => {
    navigator.clipboard.writeText(rawCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-xl mx-auto lg:max-w-none rounded-[14px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-xl overflow-hidden transition-all duration-300 hover:border-[var(--border-hover)]">
      {/* Window Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border-subtle)] bg-[var(--bg-header)] select-none">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EC6A5E] inline-block shadow-xs" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#F5BF4F] inline-block shadow-xs" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#62C554] inline-block shadow-xs" />
          </div>
          <span className="ml-3 font-mono text-xs text-[var(--text-secondary)]">
            arpit@portfolio ~/profile
          </span>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          aria-label="Copy profile code"
          className="flex items-center gap-1.5 px-2 py-1 rounded text-[11px] font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-input)] transition-colors"
        >
          {copied ? (
            <>
              <Check size={12} className="text-[var(--accent-text)]" />
              <span className="text-[var(--accent-text)] font-medium">copied</span>
            </>
          ) : (
            <>
              <Copy size={12} />
              <span>copy</span>
            </>
          )}
        </button>
      </div>

      {/* Editor Body */}
      <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-[var(--text-primary)] select-text">
        <div className="flex">
          {/* Line Numbers */}
          <div className="select-none text-[var(--text-muted)] text-right pr-4 font-mono text-xs leading-relaxed space-y-0.5">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
          </div>

          {/* Syntax Code Content */}
          <div className="space-y-0.5 font-mono">
            <div>
              <span className="text-[var(--accent-blue)] font-medium">const</span>{' '}
              <span className="text-sky-600 dark:text-[#93C5FD]">developer</span>{' '}
              <span className="text-[var(--text-secondary)]">=</span>{' '}
              <span className="text-[var(--text-primary)]">{'{'}</span>
            </div>
            <div className="pl-4">
              <span className="text-[var(--text-secondary)]">name:</span>{' '}
              <span className="text-blue-600 dark:text-[#60A5FA]">"Arpit Rai"</span>
              <span className="text-[var(--text-secondary)]">,</span>
            </div>
            <div className="pl-4">
              <span className="text-[var(--text-secondary)]">role:</span>{' '}
              <span className="text-blue-600 dark:text-[#60A5FA]">"Full Stack Engineer"</span>
              <span className="text-[var(--text-secondary)]">,</span>
            </div>
            <div className="pl-4">
              <span className="text-[var(--text-secondary)]">focus:</span>{' '}
              <span className="text-[var(--text-primary)]">[</span>
            </div>
            <div className="pl-8">
              <span className="text-[var(--accent-text)]">"Web Applications"</span>
              <span className="text-[var(--text-secondary)]">,</span>
            </div>
            <div className="pl-8">
              <span className="text-[var(--accent-text)]">"APIs"</span>
              <span className="text-[var(--text-secondary)]">,</span>
            </div>
            <div className="pl-8">
              <span className="text-[var(--accent-text)]">"AI Automation"</span>
            </div>
            <div className="pl-4">
              <span className="text-[var(--text-primary)]">]</span>
              <span className="text-[var(--text-secondary)]">,</span>
            </div>
            <div className="pl-4">
              <span className="text-[var(--text-secondary)]">status:</span>{' '}
              <span className="text-[var(--accent-text)] font-semibold">"Available"</span>
            </div>
            <div>
              <span className="text-[var(--text-primary)]">{'};'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
