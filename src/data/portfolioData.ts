export interface Project {
  number: string;
  name: string;
  subtitle: string;
  category: string;
  status: string;
  badge?: string;
  description: string;
  tech: string[];
  features?: string[];
  metrics?: { label: string; value: string }[];
  primaryLink?: {
    label: string;
    url: string;
    isExternal: boolean;
  };
  secondaryLink: {
    label: string;
    url: string;
    isExternal: boolean;
  };
}

export interface DetailedProject {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  category?: string;
  problem: string;
  whatIBuilt: string;
  tech: string[];
  screenshot: string;
  screenshotFallback: string;
  primaryLink?: {
    label: string;
    url: string;
    isExternal: boolean;
  };
  secondaryLink: {
    label: string;
    url: string;
    isExternal: boolean;
  };
}

export interface TechCategory {
  category: string;
  skills: string[];
}

export type SkillLevel = 'Production' | 'Projects' | 'Learning';

export interface DetailedSkillItem {
  id: string;
  name: string;
  level: SkillLevel;
  usedIn: string[]; // Project IDs e.g. ['chhattisgarh-taxi', 'jal-drishti']
  description: string;
}

export interface SkillCategoryGroup {
  id: string;
  category: string;
  skills: DetailedSkillItem[];
}

export interface ExperienceItem {
  period: string;
  company: string;
  role: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  score: string;
}

export const PERSONAL_INFO = {
  name: 'Arpit Rai',
  initials: 'AR',
  role: 'Full Stack Software Engineer',
  location: 'Bilaspur, Chhattisgarh, India',
  focus: 'Full Stack & AI Systems',
  currently: 'Full Stack Engineer (Trainee)',
  educationSummary: 'B.Tech CSE · Bhilai Institute of Technology (2026)',
  headlineLead: "I'm Arpit Rai, a Full Stack Software Engineer.",
  headlineSub:
    'Full Stack Software Engineer experienced in building scalable web applications, REST APIs, Chrome Extensions, and autonomous AI-powered workflow systems.',
  headline: {
    line1: 'Full Stack Software Engineer',
    line2: 'Assam Flood Intelligence & Taxi Platform',
    line3: 'Autonomous AI & Chrome Extensions',
  },
  educationDegree: 'B.Tech in Computer Science & Engineering',
  bio: "Full Stack Software Engineer with hands-on experience building scalable web applications using React, JavaScript, TypeScript, and Node.js/Express.js. Skilled in designing REST APIs, working across relational and NoSQL databases (PostgreSQL, MySQL, MongoDB), building Chrome Extensions (Manifest V3), and deploying containerized services with Docker.",
  aboutLong: "Full Stack Software Engineer with hands-on experience building scalable web applications using React, JavaScript, TypeScript, and Node.js/Express.js. Skilled in designing REST APIs, working across relational and NoSQL databases (PostgreSQL, MySQL, MongoDB), and deploying containerized services with Docker. Experienced with AWS S3, Git-based workflows, and writing clean, well-documented code. Strong problem-solver with a track record of delivering full-stack features end-to-end in agile environments.",
  status: 'Available for opportunities',
  email: 'arpitrai414@gmail.com',
  phone: '+91 6268913584',
  phoneTel: '+916268913584',
  githubUrl: 'https://github.com/arpitrai11',
  linkedinUrl: 'https://www.linkedin.com/in/arpit-rai-1a434524b',
};

export const DETAILED_PROJECTS: DetailedProject[] = [
  {
    id: 'jal-drishti',
    number: '01',
    name: 'JAL-DRISHTI',
    subtitle: 'AI-Driven Flood Prediction & Early Warning Platform',
    category: 'AI Flood Prediction & Early Warning',
    problem:
      'Assam faces devastating recurrent annual floods where delayed upstream river telemetry leads to lost evacuation windows and emergency response bottlenecks.',
    whatIBuilt:
      'Building a basin-scale flood intelligence and early-warning platform for Assam, India, combining historical flood events, ERA5-Land rainfall reanalysis, upstream rainfall, hydrological connectivity, and terrain data. Developed an explainable decision-support engine and REST API with a React dashboard featuring historical event replay (56 events, 2000–2018) and an interactive district-level intelligence map. Enforced data validation and readiness gates so missing data is never fabricated; wrote automated tests for graceful degradation and temporal integrity.',
    tech: ['Python', 'REST APIs', 'React', 'TypeScript', 'ERA5-Land Reanalysis'],
    screenshot: '/images/jaldrishti.jpg',
    screenshotFallback: '/screenshots/jal-drishti.svg',
    primaryLink: {
      label: 'GitHub Profile →',
      url: 'https://github.com/arpitrai11',
      isExternal: true,
    },
    secondaryLink: {
      label: 'GitHub Profile →',
      url: 'https://github.com/arpitrai11',
      isExternal: true,
    },
  },
  {
    id: 'ai-automation',
    number: '02',
    name: 'AI-Generated Social Media Posting',
    subtitle: 'Autonomous Content Generation & Publishing Pipeline',
    category: 'AI & Workflow Automation',
    problem:
      'Manual multi-platform content curation and publishing across teams is repetitive, slow, and prone to formatting inconsistencies and missed release schedules.',
    whatIBuilt:
      'Built an n8n automation workflow that uses AI to generate social media captions, hashtags, and images tailored to a company\'s business profile. Created a Telegram bot interface that collects company name, profile, and platform, then sends post previews with Approve / Edit / Decline controls for human review. Designed to publish to Facebook, Instagram, LinkedIn, and TikTok via Zernio; deployed locally with Docker and ngrok webhooks.',
    tech: ['n8n', 'Gemini API', 'Kie.ai', 'Telegram Bot API', 'Docker'],
    screenshot: '/images/social-ai.jpg',
    screenshotFallback: '/screenshots/ai-automation.svg',
    primaryLink: {
      label: 'GitHub Profile →',
      url: 'https://github.com/arpitrai11',
      isExternal: true,
    },
    secondaryLink: {
      label: 'GitHub Profile →',
      url: 'https://github.com/arpitrai11',
      isExternal: true,
    },
  },
  {
    id: 'chhattisgarh-taxi',
    number: '03',
    name: 'Chhattisgarh Taxi Service',
    subtitle: 'Full-Stack Production Ride Booking Platform',
    category: 'Full-Stack Web Application',
    problem:
      'Regional commuters and drivers in Chhattisgarh lacked a reliable, localized web portal for on-demand booking, price transparency, and real-time trip coordination.',
    whatIBuilt:
      'Built a full-stack taxi booking platform with a React frontend and Node.js/Express.js backend. Developed REST APIs and a MongoDB schema to handle booking, driver, and trip data. Implemented user authentication and created responsive booking interfaces for mobile and desktop. Optimized application performance for faster load times and smoother interactions.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    screenshot: '/images/chhattisgarh-taxi.jpg',
    screenshotFallback: '/screenshots/chhattisgarh-taxi.png',
    primaryLink: {
      label: 'Visit Live Website →',
      url: 'https://chhattisgarhtaxiservice.com',
      isExternal: true,
    },
    secondaryLink: {
      label: 'GitHub Profile →',
      url: 'https://github.com/arpitrai11',
      isExternal: true,
    },
  },
  {
    id: 'responsify',
    number: '04',
    name: 'Responsify',
    subtitle: 'Developer Tool & Multi-Viewport Chrome Extension',
    category: 'Developer Tool & Chrome Extension',
    problem:
      'Front-end engineers struggle to inspect multi-device viewports simultaneously, obstructed by iframe X-Frame-Options blocking and lack of synchronized scrolling controls.',
    whatIBuilt:
      'Production-grade Chrome Extension for responsive design testing and multi-device viewport inspection. Features an infinite canvas workspace with synchronized scrolling across mobile/tablet/desktop frames, zero X-Frame-Options blocking via declarativeNetRequest, and an embedded DevTools inspector drawer (element picker, live CSS editor, box model, WCAG contrast checker, and media asset downloader).',
    tech: ['Manifest V3', 'React', 'TypeScript', 'Vite', 'Tailwind CSS', 'declarativeNetRequest'],
    screenshot: '/images/responsify.png',
    screenshotFallback: '/screenshots/responsify.png',
    primaryLink: {
      label: 'View Repository →',
      url: 'https://github.com/arpitrai11/Responsify.git',
      isExternal: true,
    },
    secondaryLink: {
      label: 'GitHub Repository →',
      url: 'https://github.com/arpitrai11/Responsify.git',
      isExternal: true,
    },
  },
  {
    id: 'meetmind',
    number: '05',
    name: 'MeetMind AI',
    subtitle: 'Local-First Meeting Intelligence & Task Extraction',
    category: 'AI Chrome Extension & Meeting Intelligence',
    problem:
      'Engineering teams lose critical architectural discussions, API contracts, frontend bug reports, and schema decisions discussed in voice meetings due to delayed or manual note-taking.',
    whatIBuilt:
      'Local-first, privacy-focused Chrome Extension that captures browser meetings (Google Meet, Teams, Zoom) using chrome.tabCapture and microphone mixing with zero-loss audio loopback. Features local storage in IndexedDB, offscreen recording, free automated transcription with Whisper via Groq, and developer-specific task extraction (APIs, endpoints, frontend bugs, DB schemas, Jira/Linear task summaries, and follow-up emails) powered by Google Gemini 2.0 Flash.',
    tech: ['Manifest V3', 'React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'IndexedDB', 'Gemini 2.0 Flash', 'Groq Whisper'],
    screenshot: '/images/meetmind.jpg',
    screenshotFallback: '/screenshots/meetmind.jpg',
    primaryLink: {
      label: 'View Repository →',
      url: 'https://github.com/arpitrai11/MeetMind',
      isExternal: true,
    },
    secondaryLink: {
      label: 'GitHub Repository →',
      url: 'https://github.com/arpitrai11/MeetMind',
      isExternal: true,
    },
  },
];

// Project reference lookup for "Used in:" chips and click-to-filter
export const PROJECT_NAME_MAP: Record<string, { name: string; url?: string; tabId: string }> = {
  'chhattisgarh-taxi': {
    name: 'Chhattisgarh Taxi Service',
    url: 'https://chhattisgarhtaxiservice.com',
    tabId: 'projects',
  },
  'jal-drishti': {
    name: 'JAL-DRISHTI',
    tabId: 'projects',
  },
  'ai-automation': {
    name: 'AI Social Media Automation',
    tabId: 'projects',
  },
  'responsify': {
    name: 'Responsify',
    url: 'https://github.com/arpitrai11/Responsify.git',
    tabId: 'projects',
  },
  'meetmind': {
    name: 'MeetMind AI',
    url: 'https://github.com/arpitrai11/MeetMind',
    tabId: 'projects',
  },
  'logimetrix': {
    name: 'Logimetrix Trainee',
    tabId: 'experience',
  },
  'holiday-dost': {
    name: 'Holiday Dost',
    tabId: 'experience',
  },
};

// Rich Structured Skills Data with Real Logos, Levels, and Project References
export const DETAILED_SKILL_GROUPS: SkillCategoryGroup[] = [
  {
    id: 'frontend',
    category: 'Frontend & Extensions',
    skills: [
      {
        id: 'react',
        name: 'React',
        level: 'Production',
        usedIn: ['chhattisgarh-taxi', 'jal-drishti', 'responsify', 'meetmind', 'logimetrix'],
        description: 'Component architecture, custom hooks, and dynamic client routing.',
      },
      {
        id: 'typescript',
        name: 'TypeScript',
        level: 'Production',
        usedIn: ['jal-drishti', 'chhattisgarh-taxi', 'responsify', 'meetmind'],
        description: 'Strict type safety across client interfaces and full-stack modules.',
      },
      {
        id: 'javascript',
        name: 'JavaScript',
        level: 'Production',
        usedIn: ['chhattisgarh-taxi', 'holiday-dost', 'logimetrix'],
        description: 'Modern ES6+ syntax, asynchronous event handling, and DOM interaction.',
      },
      {
        id: 'chromeextensions',
        name: 'Chrome Extensions (MV3)',
        level: 'Production',
        usedIn: ['responsify', 'meetmind'],
        description: 'Manifest V3 architecture, service workers, declarativeNetRequest, tabCapture, and offscreen audio loopback.',
      },
      {
        id: 'vite',
        name: 'Vite',
        level: 'Production',
        usedIn: ['responsify', 'meetmind'],
        description: 'High-speed bundler, hot module replacement, and modern browser extension build pipelines.',
      },
      {
        id: 'tailwindcss',
        name: 'Tailwind CSS',
        level: 'Production',
        usedIn: ['chhattisgarh-taxi', 'jal-drishti', 'responsify', 'meetmind'],
        description: 'Utility-first rapid UI styling with customized design tokens and responsive viewports.',
      },
      {
        id: 'html5',
        name: 'HTML5',
        level: 'Production',
        usedIn: ['chhattisgarh-taxi', 'holiday-dost'],
        description: 'Semantic markup, accessible structure, and SEO standards.',
      },
      {
        id: 'css3',
        name: 'CSS3',
        level: 'Production',
        usedIn: ['chhattisgarh-taxi', 'holiday-dost'],
        description: 'Responsive styling, Flexbox, CSS Grid, and custom animations.',
      },
      {
        id: 'webaudioapi',
        name: 'Web Audio API',
        level: 'Projects',
        usedIn: ['meetmind'],
        description: 'chrome.tabCapture, mic stream mixing, zero-loss loopback, and AudioContext processing.',
      },
      {
        id: 'shadcnui',
        name: 'Shadcn UI',
        level: 'Projects',
        usedIn: ['jal-drishti'],
        description: 'Accessible component primitives built on Radix UI.',
      },
    ],
  },
  {
    id: 'backend',
    category: 'Backend',
    skills: [
      {
        id: 'nodejs',
        name: 'Node.js',
        level: 'Production',
        usedIn: ['chhattisgarh-taxi', 'logimetrix'],
        description: 'Server runtime for RESTful microservices and backend logic.',
      },
      {
        id: 'expressjs',
        name: 'Express.js',
        level: 'Production',
        usedIn: ['chhattisgarh-taxi'],
        description: 'HTTP middleware pipelines, route controllers, and API handlers.',
      },
      {
        id: 'restapis',
        name: 'REST APIs',
        level: 'Production',
        usedIn: ['chhattisgarh-taxi', 'jal-drishti', 'responsify', 'meetmind', 'logimetrix'],
        description: 'Clean REST endpoints, request validation, and JSON schemas.',
      },
      {
        id: 'jwtauthentication',
        name: 'JWT Authentication',
        level: 'Production',
        usedIn: ['chhattisgarh-taxi'],
        description: 'Stateless session verification, token signing, and secure cookies.',
      },
      {
        id: 'python',
        name: 'Python',
        level: 'Projects',
        usedIn: ['jal-drishti'],
        description: 'Hydrological data processing, numerical scripts, and telemetry scripts.',
      },
    ],
  },
  {
    id: 'databases',
    category: 'Databases',
    skills: [
      {
        id: 'mongodb',
        name: 'MongoDB',
        level: 'Production',
        usedIn: ['chhattisgarh-taxi'],
        description: 'Document database, Mongoose schema modeling, and aggregation pipelines.',
      },
      {
        id: 'indexeddb',
        name: 'IndexedDB',
        level: 'Production',
        usedIn: ['meetmind'],
        description: 'Local-first browser database for offline meeting audio blobs, transcripts, and action logs.',
      },
      {
        id: 'postgresql',
        name: 'PostgreSQL',
        level: 'Projects',
        usedIn: ['jal-drishti'],
        description: 'Relational schema modeling, foreign keys, and ACID transactions.',
      },
      {
        id: 'mysql',
        name: 'MySQL',
        level: 'Projects',
        usedIn: ['jal-drishti'],
        description: 'Structured database schemas and relational SQL transformations.',
      },
    ],
  },
  {
    id: 'cloud-devops',
    category: 'Cloud & DevOps',
    skills: [
      {
        id: 'docker',
        name: 'Docker',
        level: 'Projects',
        usedIn: ['ai-automation'],
        description: 'Containerized service packaging, Dockerfiles, and compose files.',
      },
      {
        id: 'awss3',
        name: 'AWS S3',
        level: 'Projects',
        usedIn: ['chhattisgarh-taxi'],
        description: 'Cloud object storage for vehicle images and platform assets.',
      },
      {
        id: 'vercel',
        name: 'Vercel',
        level: 'Production',
        usedIn: ['chhattisgarh-taxi'],
        description: 'Automated CI/CD deployments, edge caching, and DNS routing.',
      },
    ],
  },
  {
    id: 'ai-automation',
    category: 'AI & Automation',
    skills: [
      {
        id: 'geminillmapi',
        name: 'Gemini 2.0 Flash',
        level: 'Production',
        usedIn: ['meetmind', 'ai-automation'],
        description: 'Developer task extraction, bug identification, DB schema detection, and automated summaries.',
      },
      {
        id: 'groqwhisper',
        name: 'Groq Whisper',
        level: 'Production',
        usedIn: ['meetmind'],
        description: 'Ultra-fast sub-second audio transcription using Groq cloud Whisper inference.',
      },
      {
        id: 'n8n',
        name: 'n8n Workflows',
        level: 'Projects',
        usedIn: ['ai-automation'],
        description: 'Visual workflow node orchestration and multi-step webhook triggers.',
      },
      {
        id: 'promptengineering',
        name: 'Prompt Engineering',
        level: 'Projects',
        usedIn: ['ai-automation', 'meetmind'],
        description: 'Structured few-shot system prompts with guaranteed JSON output formats.',
      },
      {
        id: 'telegrambotapi',
        name: 'Telegram Bot API',
        level: 'Projects',
        usedIn: ['ai-automation'],
        description: 'Interactive chat gate with inline keyboards for human review.',
      },
    ],
  },
  {
    id: 'tools-workflow',
    category: 'Tools & Workflow',
    skills: [
      {
        id: 'git',
        name: 'Git',
        level: 'Production',
        usedIn: ['chhattisgarh-taxi', 'jal-drishti', 'responsify', 'meetmind', 'logimetrix'],
        description: 'Branching, commit conventions, rebasing, and merge conflict resolution.',
      },
      {
        id: 'github',
        name: 'GitHub',
        level: 'Production',
        usedIn: ['chhattisgarh-taxi', 'jal-drishti', 'responsify', 'meetmind', 'ai-automation'],
        description: 'Remote repositories, issue tracking, and version management.',
      },
      {
        id: 'postman',
        name: 'Postman',
        level: 'Production',
        usedIn: ['chhattisgarh-taxi', 'logimetrix'],
        description: 'Endpoint testing, authorization headers, and API collection mockups.',
      },
      {
        id: 'n8n',
        name: 'n8n Workflows',
        level: 'Projects',
        usedIn: ['ai-automation'],
        description: 'Visual automation pipeline orchestration and webhook integrations.',
      },
      {
        id: 'vscode',
        name: 'VS Code',
        level: 'Production',
        usedIn: ['chhattisgarh-taxi', 'jal-drishti', 'responsify', 'meetmind'],
        description: 'Primary engineering environment, extensions, and debugging tooling.',
      },
      {
        id: 'swagger',
        name: 'Swagger / OpenAPI',
        level: 'Projects',
        usedIn: ['chhattisgarh-taxi'],
        description: 'Interactive documentation specifications for REST API endpoints.',
      },
    ],
  },
];

// Currently learning strip (technologies actively exploring / deepening)
export const CURRENTLY_LEARNING = [
  {
    name: 'Next.js 15',
    category: 'Framework',
    focus: 'App Router, Server Actions & React Server Components',
    logo: 'nextjs',
  },
  {
    name: 'Redis',
    category: 'In-Memory Store',
    focus: 'In-memory caching, rate limiting & session queues',
    logo: 'redis',
  },
];

// Flat backward-compatible skills array for legacy components
export const FILTERED_SKILLS: TechCategory[] = DETAILED_SKILL_GROUPS.map((g) => ({
  category: g.category.toUpperCase(),
  skills: g.skills.map((s) => s.name),
}));

export const TIMELINE_EXPERIENCE: ExperienceItem[] = [
  {
    period: '2026 — PRESENT',
    company: 'Logimetrix Tech Solutions',
    role: 'Full Stack Engineer (Trainee)',
    description:
      'Building and maintaining client-facing web applications, responsive customer portals, and full-stack features across modern React interfaces and scalable backend REST services.',
  },
  {
    period: '2025',
    company: 'Holiday Dost',
    role: 'Front-End Developer Intern',
    description:
      'Developed responsive user interfaces, resolved cross-browser layout inconsistencies, and optimized frontend bundle performance within team Git workflows.',
  },
  {
    period: '2025',
    company: 'South East Central Railway',
    role: 'IT Systems Intern',
    description:
      'Assisted in network diagnostics, server monitoring, and IT infrastructure maintenance supporting large-scale operational railway systems.',
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'Bhilai Institute of Technology, Durg',
    year: '2026',
    score: 'CGPA 7.0 / 10',
  },
  {
    degree: 'Class XII — CBSE',
    institution: 'Central Board of Secondary Education',
    year: '2021',
    score: '92.4%',
  },
];

// Backward-compatible exports for legacy components
export const EXPERIENCES = TIMELINE_EXPERIENCE;
export const EDUCATION = EDUCATION_DATA;
export const TECH_STACK = FILTERED_SKILLS;
export const PROJECTS: Project[] = DETAILED_PROJECTS.map((p) => ({
  number: p.number,
  name: p.name,
  subtitle: p.subtitle,
  category: p.category || 'Production System',
  status: 'Production',
  description: p.whatIBuilt || p.problem,
  tech: p.tech,
  primaryLink: p.primaryLink,
  secondaryLink: p.secondaryLink,
}));
