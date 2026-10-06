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
  location: 'India',
  focus: 'Full Stack & AI Systems',
  currently: 'Full Stack Engineer (Trainee)',
  educationSummary: 'B.Tech CSE · Bhilai Institute of Technology (2026)',
  headlineLead: "I'm Arpit Rai, a Full Stack Software Engineer.",
  headlineSub:
    'I build basin-scale flood intelligence for Assam, full-stack production taxi booking platforms, and autonomous AI workflow systems.',
  headline: {
    line1: 'Full Stack Software Engineer',
    line2: 'Assam Flood Intelligence & Taxi Platform',
    line3: 'Autonomous AI Workflows',
  },
  educationDegree: 'B.Tech in Computer Science & Engineering',
  bio: "I'm a Full Stack Software Engineer focused on building practical web applications, robust REST APIs, and autonomous AI-powered workflows. I work across frontend interfaces, backend microservices, database design, and cloud deployments to turn ideas into reliable production software.",
  aboutLong: "I'm a Full Stack Software Engineer focused on building practical web applications, robust REST APIs, and autonomous AI-powered workflows. I work across frontend interfaces, backend microservices, database design, and cloud deployments to turn ideas into reliable production software.",
  status: 'Available for opportunities',
  email: 'arpitrai414@gmail.com',
  phone: '+91 6268913584',
  phoneTel: '+916268913584',
  githubUrl: 'https://github.com/arpitrai11',
  linkedinUrl: 'https://linkedin.com/in/arpitrai',
};

export const DETAILED_PROJECTS: DetailedProject[] = [
  {
    id: 'jal-drishti',
    number: '01',
    name: 'JAL-DRISHTI',
    subtitle: 'AI-Driven Flood Prediction & Early Warning Platform',
    problem:
      'Assam faces devastating recurrent annual floods where delayed upstream river telemetry leads to lost evacuation windows and emergency response bottlenecks.',
    whatIBuilt:
      'Engineered a basin-scale hydrological intelligence and early-warning platform combining historical flood events, precipitation gauges, terrain elevation data, and hydrological connectivity to forecast river stages and issue automated threat advisories.',
    tech: ['Python', 'React', 'TypeScript', 'REST APIs'],
    screenshot: '/screenshots/jal-drishti.webp',
    screenshotFallback: '/screenshots/jal-drishti.svg',
    secondaryLink: {
      label: 'GitHub Profile →',
      url: 'https://github.com/arpitrai11',
      isExternal: true,
    },
  },
  {
    id: 'ai-automation',
    number: '02',
    name: 'AI Social Media Automation',
    subtitle: 'Autonomous Content Generation & Publishing Pipeline',
    problem:
      'Manual multi-platform content curation and publishing across teams is repetitive, slow, and prone to formatting inconsistencies and missed release schedules.',
    whatIBuilt:
      'Constructed a containerized end-to-end automation pipeline utilizing n8n, Gemini 1.5, and Kie.ai for generating contextual captions, hashtags, and visual assets, featuring an interactive Telegram bot gate for one-click human approval before multi-channel publishing.',
    tech: ['n8n', 'Gemini', 'Kie.ai', 'Telegram', 'Docker'],
    screenshot: '/screenshots/ai-automation.webp',
    screenshotFallback: '/screenshots/ai-automation.svg',
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
    problem:
      'Regional commuters and drivers in Chhattisgarh lacked a reliable, localized web portal for on-demand booking, price transparency, and real-time trip coordination.',
    whatIBuilt:
      'Designed and deployed a responsive web platform with JWT authentication, real-time ride reservation workflows, vehicle tier selection, driver allocation, and an administrative dispatch management dashboard synced with MongoDB Atlas.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    screenshot: '/screenshots/chhattisgarh-taxi.png',
    screenshotFallback: '/screenshots/chhattisgarh-taxi.webp',
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
    category: 'Frontend',
    skills: [
      {
        id: 'react',
        name: 'React',
        level: 'Production',
        usedIn: ['chhattisgarh-taxi', 'jal-drishti', 'logimetrix'],
        description: 'Component architecture, custom hooks, and dynamic client routing.',
      },
      {
        id: 'typescript',
        name: 'TypeScript',
        level: 'Production',
        usedIn: ['jal-drishti', 'chhattisgarh-taxi'],
        description: 'Strict type safety across client interfaces and full-stack modules.',
      },
      {
        id: 'javascript',
        name: 'JavaScript',
        level: 'Production',
        usedIn: ['chhattisgarh-taxi', 'holiday-dost'],
        description: 'Modern ES6+ syntax, asynchronous event handling, and DOM interaction.',
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
        id: 'tailwindcss',
        name: 'Tailwind CSS',
        level: 'Production',
        usedIn: ['chhattisgarh-taxi', 'jal-drishti'],
        description: 'Utility-first rapid UI styling with customized design tokens.',
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
        usedIn: ['chhattisgarh-taxi', 'jal-drishti', 'logimetrix'],
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
        id: 'n8n',
        name: 'n8n Workflows',
        level: 'Projects',
        usedIn: ['ai-automation'],
        description: 'Visual workflow node orchestration and multi-step webhook triggers.',
      },
      {
        id: 'geminillmapi',
        name: 'Gemini LLM API',
        level: 'Projects',
        usedIn: ['ai-automation'],
        description: 'Contextual prompt synthesis, multi-modal vision, and caption generation.',
      },
      {
        id: 'promptengineering',
        name: 'Prompt Engineering',
        level: 'Projects',
        usedIn: ['ai-automation'],
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
        usedIn: ['chhattisgarh-taxi', 'jal-drishti', 'logimetrix'],
        description: 'Branching, commit conventions, rebasing, and merge conflict resolution.',
      },
      {
        id: 'github',
        name: 'GitHub',
        level: 'Production',
        usedIn: ['chhattisgarh-taxi', 'jal-drishti', 'ai-automation'],
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
        usedIn: ['chhattisgarh-taxi', 'jal-drishti'],
        description: 'Primary engineering environment, extensions, and debugging tooling.',
      },
      // TODO: Confirm with user if Swagger / OpenAPI should be listed under Tools & Workflow or kept strictly to core REST APIs.
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
  category: 'Full Stack',
  status: 'Production',
  description: p.problem,
  tech: p.tech,
  primaryLink: p.primaryLink,
  secondaryLink: p.secondaryLink,
}));
