import React from 'react';

interface TechLogoProps {
  name: string;
  size?: number;
  className?: string;
}

export const TechLogo: React.FC<TechLogoProps> = ({ name, size = 20, className = '' }) => {
  const norm = name.toLowerCase().replace(/[^a-z0-9]/g, '');

  switch (norm) {
    case 'react':
      return (
        <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" className={className} aria-label="React">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );

    case 'typescript':
    case 'ts':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-label="TypeScript">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path d="M14.7 18.5c-.7 0-1.4-.2-2-.5l.4-1.3c.5.3 1.1.5 1.7.5.9 0 1.4-.4 1.4-1 0-.6-.4-.9-1.3-1.3-1.4-.6-2-1.2-2-2.3 0-1.4 1-2.4 2.6-2.4.6 0 1.2.1 1.8.4l-.4 1.3c-.5-.2-1-.4-1.5-.4-.8 0-1.3.4-1.3.9 0 .5.4.8 1.3 1.2 1.4.6 2 1.3 2 2.4 0 1.5-1.1 2.5-2.7 2.5zm-5.7-6.5H6.5v-1.4h6v1.4h-2.5V18.5H9V12z" fill="#FFF" />
        </svg>
      );

    case 'javascript':
    case 'js':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-label="JavaScript">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path d="M12.6 18.5c-.7 0-1.3-.2-1.7-.6l.6-1.3c.4.3.8.5 1.3.5.7 0 1-.3 1-.8v-5.9h1.7v6c0 1.4-.8 2.1-2.9 2.1zm5.2 0c-.8 0-1.5-.3-2.1-.7l.6-1.3c.5.4 1.1.6 1.7.6.8 0 1.2-.4 1.2-.9 0-.6-.3-.9-1.2-1.3-1.4-.6-2-1.2-2-2.2 0-1.4 1.1-2.4 2.7-2.4.7 0 1.3.2 1.8.4l-.5 1.3c-.4-.2-.9-.4-1.4-.4-.7 0-1.1.4-1.1.9 0 .5.4.8 1.2 1.2 1.4.6 2 1.2 2 2.3 0 1.5-1.1 2.5-2.9 2.5z" fill="#000" />
        </svg>
      );

    case 'html5':
    case 'html':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-label="HTML5">
          <path d="M4.1 2.5h15.8l-1.4 16.2L12 21.5l-6.5-2.8L4.1 2.5z" fill="#E34F26" />
          <path d="M12 4.1v15.7l5.2-2.3 1.2-13.4H12z" fill="#EF652A" />
          <path d="M12 8.4h3.6l-.3 3.4H12v2.3h3.4l-.5 5.5-2.9 1V18l2.9-1 .4-4.5H8.7l.2-2.2H12V8.4z" fill="#FFF" />
        </svg>
      );

    case 'css3':
    case 'css':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-label="CSS3">
          <path d="M4.1 2.5h15.8l-1.4 16.2L12 21.5l-6.5-2.8L4.1 2.5z" fill="#1572B6" />
          <path d="M12 4.1v15.7l5.2-2.3 1.2-13.4H12z" fill="#33A9DC" />
          <path d="M12 8.4h3.6l-.3 3.4H12v2.3h3.4l-.5 5.5-2.9 1-2.9-1-.2-2.5h2.2l.1 1.2 1.5.4 1.5-.4.2-1.8H8.8l.2-2.2H12V8.4z" fill="#FFF" />
        </svg>
      );

    case 'tailwindcss':
    case 'tailwind':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-label="Tailwind CSS">
          <path d="M12 6c-3.6 0-5.8 1.8-6.6 5.4 1.4-1.8 3-2.4 4.8-1.8.8.3 1.4.9 2 1.5 1 1 2.2 2.2 4.8 2.2 3.6 0 5.8-1.8 6.6-5.4-1.4 1.8-3 2.4-4.8 1.8-.8-.3-1.4-.9-2-1.5-1-1-2.2-2.2-4.8-2.2zM5.4 12c-3.6 0-5.8 1.8-6.6 5.4 1.4-1.8 3-2.4 4.8-1.8.8.3 1.4.9 2 1.5 1 1 2.2 2.2 4.8 2.2 3.6 0 5.8-1.8 6.6-5.4-1.4 1.8-3 2.4-4.8 1.8-.8-.3-1.4-.9-2-1.5-1-1-2.2-2.2-4.8-2.2z" fill="#06B6D4" />
        </svg>
      );

    case 'shadcnui':
    case 'shadcn':
      return (
        <svg width={size} height={size} viewBox="0 0 256 256" className={className} aria-label="Shadcn UI">
          <rect width="256" height="256" rx="60" fill="currentColor" opacity="0.1" />
          <line x1="208" y1="128" x2="128" y2="208" stroke="currentColor" strokeWidth="24" strokeLinecap="round" />
          <line x1="192" y1="40" x2="40" y2="192" stroke="currentColor" strokeWidth="24" strokeLinecap="round" />
        </svg>
      );

    case 'nodejs':
    case 'node':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-label="Node.js">
          <path d="M12 2L3 7.2v10.4L12 22l9-5.2V7.2L12 2z" fill="#339933" />
          <path d="M12 4.3l7 4v8l-7 4-7-4v-8l7-4z" fill="#215732" opacity="0.4" />
          <path d="M12 6.5l4.8 2.8v5.5L12 17.5l-4.8-2.8V9.3L12 6.5z" fill="#FFF" />
        </svg>
      );

    case 'expressjs':
    case 'express':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-label="Express.js">
          <rect width="24" height="24" rx="4" fill="currentColor" opacity="0.15" />
          <text x="50%" y="60%" textAnchor="middle" fill="currentColor" fontSize="8" fontWeight="bold" fontFamily="monospace">ex</text>
        </svg>
      );

    case 'python':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-label="Python">
          <path d="M11.9 2c-3.1 0-5 1.4-5 3.3v2.2h5.1v.7H4.5C2.6 8.2 1 9.8 1 12.8s1.4 4.7 3.5 4.7h1.9v-2.3c0-2.3 2-4.3 4.3-4.3h5.2V8.6c0-2-1.9-3.6-4-3.6zm-1.8 1.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z" fill="#3776AB" />
          <path d="M12.1 22c3.1 0 5-1.4 5-3.3v-2.2H12v-.7h7.5c1.9 0 3.5-1.6 3.5-4.6s-1.4-4.7-3.5-4.7h-1.9v2.3c0 2.3-2 4.3-4.3 4.3H8.1v2.3c0 2 1.9 3.6 4 3.6zm1.8-1.5c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z" fill="#FFD438" />
        </svg>
      );

    case 'restapis':
    case 'restapi':
    case 'api':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-label="REST API">
          <path d="M4 12h16M16 6l4 6-4 6M8 18l-4-6 4-6" />
        </svg>
      );

    case 'jwtauthentication':
    case 'jwt':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-label="JWT">
          <path d="M12 2L3 6v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V6l-9-4z" fill="#D63AFF" opacity="0.2" stroke="#D63AFF" strokeWidth="2" />
          <path d="M9 12l2 2 4-4" stroke="#D63AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      );

    case 'mongodb':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-label="MongoDB">
          <path d="M12 1.5s-4 4.5-4 10.2c0 4.6 3.5 8.8 4 9.3.5-.5 4-4.7 4-9.3 0-5.7-4-10.2-4-10.2z" fill="#47A248" />
          <path d="M12 21s3.4-4.5 3.4-9.3c0-4.6-2.9-8.4-3.4-9.4v18.7z" fill="#499D4A" opacity="0.7" />
          <path d="M11.8 1v22c.2 0 .4-.1.5-.2V1.2c-.2-.1-.4-.2-.5-.2z" fill="#FFF" />
        </svg>
      );

    case 'postgresql':
    case 'postgres':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-label="PostgreSQL">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" fill="#4169E1" opacity="0.15" />
          <path d="M18.8 13.5c-.2-.6-.7-1-1.3-1.2.2-.4.3-.8.3-1.3 0-1.8-1.5-3.3-3.3-3.3-.8 0-1.5.3-2 .8-.5-.5-1.2-.8-2-.8-1.8 0-3.3 1.5-3.3 3.3 0 .5.1.9.3 1.3-.6.2-1.1.6-1.3 1.2-.3.9 0 1.9.7 2.5l.3.2v2.3h2v-1.7l.7.5c.5.4 1.2.6 1.9.6.6 0 1.1-.2 1.6-.5l.8-.6v2.2h2v-2.3l.3-.2c.7-.6 1-1.6.7-2.5z" fill="#4169E1" />
        </svg>
      );

    case 'mysql':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-label="MySQL">
          <rect width="24" height="24" rx="4" fill="#00758F" opacity="0.2" />
          <path d="M12 5c-3.9 0-7 2.2-7 5s3.1 5 7 5 7-2.2 7-5-3.1-5-7-5zm0 8.5c-3 0-5.5-1.6-5.5-3.5S9 6.5 12 6.5s5.5 1.6 5.5 3.5-2.5 3.5-5.5 3.5z" fill="#00758F" />
          <path d="M12 11c-1.5 0-2.8-.5-3.5-1.3L7 11.2c1.1 1.2 2.9 1.8 5 1.8s3.9-.6 5-1.8l-1.5-1.5c-.7.8-2 1.3-3.5 1.3z" fill="#F29111" />
        </svg>
      );

    case 'docker':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-label="Docker">
          <path d="M22.5 10.3c-.3-.2-1.3-.3-2.1.2-.2-.6-.6-1.2-1.2-1.5l-.6-.4-.4.6c-.4.6-.5 1.5-.2 2.2-.4.2-1.1.3-2 .3H2.5c-.3 0-.5.2-.5.5 0 2.4 1.2 4.4 3.2 5.5 1.4.8 3.1 1.3 4.8 1.3 5.5 0 10.1-3.6 11.5-8.7.6 0 1.6-.2 1.9-.9l.2-.4-.7-.2z" fill="#2496ED" />
          <path d="M5.4 9.1H3.6c-.2 0-.3.1-.3.3v1.8c0 .2.1.3.3.3h1.8c.2 0 .3-.1.3-.3V9.4c0-.2-.1-.3-.3-.3zm2.7 0H6.3c-.2 0-.3.1-.3.3v1.8c0 .2.1.3.3.3h1.8c.2 0 .3-.1.3-.3V9.4c0-.2-.1-.3-.3-.3zm2.7 0H9c-.2 0-.3.1-.3.3v1.8c0 .2.1.3.3.3h1.8c.2 0 .3-.1.3-.3V9.4c0-.2-.1-.3-.3-.3zm2.7 0h-1.8c-.2 0-.3.1-.3.3v1.8c0 .2.1.3.3.3h1.8c.2 0 .3-.1.3-.3V9.4c0-.2-.1-.3-.3-.3zm2.7 0h-1.8c-.2 0-.3.1-.3.3v1.8c0 .2.1.3.3.3h1.8c.2 0 .3-.1.3-.3V9.4c0-.2-.1-.3-.3-.3zm-5.4-2.7H9c-.2 0-.3.1-.3.3v1.8c0 .2.1.3.3.3h1.8c.2 0 .3-.1.3-.3V6.7c0-.2-.1-.3-.3-.3zm2.7 0h-1.8c-.2 0-.3.1-.3.3v1.8c0 .2.1.3.3.3h1.8c.2 0 .3-.1.3-.3V6.7c0-.2-.1-.3-.3-.3zm2.7 0h-1.8c-.2 0-.3.1-.3.3v1.8c0 .2.1.3.3.3h1.8c.2 0 .3-.1.3-.3V6.7c0-.2-.1-.3-.3-.3z" fill="#2496ED" />
        </svg>
      );

    case 'awss3':
    case 'aws':
    case 's3':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-label="AWS S3">
          <path d="M12 2L4 6v12l8 4 8-4V6l-8-4z" fill="#FF9900" opacity="0.2" stroke="#FF9900" strokeWidth="1.5" />
          <path d="M12 6.5l5 2.5-5 2.5-5-2.5 5-2.5z" fill="#FF9900" />
          <path d="M7 11.5l5 2.5 5-2.5M7 14.5l5 2.5 5-2.5" stroke="#FF9900" strokeWidth="1.5" fill="none" />
        </svg>
      );

    case 'vercel':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-label="Vercel">
          <path d="M12 2L24 22H0L12 2z" fill="currentColor" />
        </svg>
      );

    case 'n8n':
    case 'n8nworkflows':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-label="n8n">
          <rect width="24" height="24" rx="5" fill="#EA4B71" />
          <circle cx="8" cy="12" r="2.5" fill="#FFF" />
          <circle cx="16" cy="12" r="2.5" fill="#FFF" />
          <path d="M10.5 12h3" stroke="#FFF" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'geminillmapi':
    case 'gemini':
    case 'geminillm':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-label="Gemini AI">
          <path d="M12 2c0 5.523-4.477 10-10 10 5.523 0 10 4.477 10 10 0-5.523 4.477-10 10-10-5.523 0-10-4.477-10-10z" fill="url(#geminiGrad)" />
          <defs>
            <linearGradient id="geminiGrad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1BA1E3" />
              <stop offset="0.5" stopColor="#5468FF" />
              <stop offset="1" stopColor="#BD34FE" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'promptengineering':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-label="Prompt Engineering">
          <polyline points="4 17 10 11 4 5" />
          <line x1="12" y1="19" x2="20" y2="19" />
        </svg>
      );

    case 'telegrambotapi':
    case 'telegram':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-label="Telegram">
          <circle cx="12" cy="12" r="10" fill="#24A1DE" />
          <path d="M7 11.8l7.8-3.2c.7-.3 1.3.2 1.1 1l-1.3 6.3c-.1.5-.4.6-.8.4l-2.2-1.6-1.1 1c-.1.1-.2.2-.4.2l.2-2.3 4.2-3.8c.2-.2 0-.3-.3-.1L9.6 13l-2.3-.7c-.5-.2-.5-.5.1-.7l-.4.2z" fill="#FFF" />
        </svg>
      );

    case 'git':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-label="Git">
          <path d="M21.6 10.9L13.1 2.4c-.6-.6-1.5-.6-2.1 0L8.7 4.7l2.7 2.7c.6-.2 1.3-.1 1.8.4.5.5.7 1.2.4 1.8l2.6 2.6c.6-.2 1.3-.1 1.8.4.8.8.8 2 0 2.8s-2 .8-2.8 0c-.6-.6-.7-1.4-.4-2.1l-2.4-2.4v5.3c.2.2.4.4.4.8 0 1.1-.9 2-2 2s-2-.9-2-2c0-.8.5-1.5 1.2-1.8V9.1c-.7-.3-1.2-1-1.2-1.8 0-.6.2-1.1.6-1.5L4.8 8.2c-.6.6-.6 1.5 0 2.1l8.5 8.5c.6.6 1.5.6 2.1 0l6.2-6.2c.6-.5.6-1.4 0-1.7z" fill="#F05032" />
        </svg>
      );

    case 'github':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="GitHub">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
        </svg>
      );

    case 'postman':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-label="Postman">
          <circle cx="12" cy="12" r="10" fill="#FF6C37" />
          <path d="M13.5 7.5L8 12l5.5 4.5V13h3v-2h-3V7.5z" fill="#FFF" />
        </svg>
      );

    case 'vscode':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-label="VS Code">
          <path d="M17.8 2.2L9.4 9.9 4.3 6 2 7.3v9.4L4.3 18l5.1-3.9 8.4 7.7 4.2-2.1V4.3l-4.2-2.1zm-8.4 10.3l-3.3 2.5V9l3.3 2.5v1zm8.4 4.2l-5.6-4.2 5.6-4.2v8.4z" fill="#007ACC" />
        </svg>
      );

    case 'swagger':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-label="Swagger">
          <circle cx="12" cy="12" r="10" fill="#85EA2D" />
          <path d="M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm-2 9l-2-2 1.4-1.4L10 12.2l4.6-4.6L16 9l-6 6z" fill="#000" />
        </svg>
      );

    case 'nextjs':
    case 'next':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="Next.js">
          <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.1" />
          <path d="M15.5 17.5l-6-8.5V17H8V7h1.5l6 8.5V7H17v10.5h-1.5z" />
        </svg>
      );

    case 'redis':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-label="Redis">
          <path d="M3 6.5l9-4.5 9 4.5v11l-9 4.5-9-4.5v-11z" fill="#DC382D" opacity="0.2" stroke="#DC382D" strokeWidth="1.5" />
          <path d="M12 7l4 2-4 2-4-2 4-2zm-4 4.5l4 2 4-2v2l-4 2-4-2v-2zm0 3.5l4 2 4-2v2l-4 2-4-2v-2z" fill="#DC382D" />
        </svg>
      );

    default:
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
  }
};
