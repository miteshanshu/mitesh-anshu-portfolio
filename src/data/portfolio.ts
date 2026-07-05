export const personal = {
  name: 'Mitesh Kumar Anshu',
  firstName: 'Mitesh',
  title: 'Full-Stack Engineer',
  roles: ['Full-Stack Engineer', 'Frontend Developer', 'UI/UX Builder', 'Systems Thinker'],
  tagline:
    'I design and ship interfaces that feel intentional — backed by transactional APIs, role-based systems, and production-grade architecture.',
  email: 'miteshanshu1@gmail.com',
  phone: '+91 76674 99479',
  linkedin: 'https://linkedin.com/in/miteshanshu',
  github: 'https://github.com/miteshanshu',
  portfolioRepo: 'https://github.com/miteshanshu/mitesh-anshu-portfolio',
  location: 'India',
  availability: 'Open to full-time roles',
  summary:
    'Full-stack engineer with a frontend-first mindset. I translate complex backend logic — RBAC, stored procedures, race-condition safety — into clear, responsive interfaces that users actually enjoy. B.Tech CSE, Roorkee Institute of Technology (2021–2025).',
};

export const stats = [
  { label: 'API Domains Built', value: 12, suffix: '+' },
  { label: 'DSA Problems Solved', value: 100, suffix: '+' },
  { label: 'Role-Based Portals', value: 3, suffix: '' },
  { label: 'Years in CSE', value: 4, suffix: '' },
];

export const skills = [
  {
    category: 'Languages',
    items: ['Java', 'JavaScript', 'TypeScript', 'SQL'],
    level: 90,
  },
  {
    category: 'Frontend',
    items: ['React.js', 'Vite', 'HTML', 'CSS', 'Framer Motion', 'Recharts', 'Zustand', 'Material UI'],
    level: 92,
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'RBAC', 'Helmet', 'CORS'],
    level: 90,
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'Stored Procedures', 'Row-Level Locking', 'Trigram Indexes'],
    level: 88,
  },
  {
    category: 'Tooling',
    items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Vercel', 'Render'],
    level: 85,
  },
];

export const projects = [
  {
    id: 'circulib',
    name: 'CircuLib',
    subtitle: 'Library Circulation & Operations Platform',
    year: '2024',
    stack: ['React', 'Vite', 'Node.js', 'PostgreSQL', 'Recharts'],
    github: 'https://github.com/miteshanshu/Library-Management-System---RBAC',
    githubBackend: 'https://github.com/miteshanshu/Library-Management-System---RBAC-Backend',
    live: 'https://library-management-system-rbac.vercel.app',
    metrics: [
      { label: 'API Domains', value: '12' },
      { label: 'Portals', value: '3' },
      { label: 'Users', value: 'RBAC' },
    ],
    problem:
      'Libraries need distinct workflows for admins, librarians, and students — with reliable checkout/return under concurrent access.',
    solution:
      'Built three role-specific portals with shared design tokens, analytics dashboards, and a PostgreSQL backend using stored procedures and row-level locking.',
    outcome:
      'Deployed end-to-end on Vercel + Render. Documented ER diagrams, auth flows, and API references for team onboarding.',
    highlights: [
      'Admin, Librarian & Student portals with role-gated navigation',
      'Responsive UI with state-driven rendering and Recharts analytics',
      'Transactional checkout via PL/pgSQL stored procedures',
      'Race-condition safety with SELECT FOR UPDATE & partial indexes',
      'Fuzzy catalog search with PostgreSQL trigram indexes',
    ],
    featured: true,
    color: '#c8f135',
  },
  {
    id: 'billing',
    name: 'Smart Billing Engine',
    subtitle: 'Discount System with Design Patterns',
    year: '2024',
    stack: ['Java', 'OOP', 'Strategy Pattern'],
    github: 'https://github.com/miteshanshu/java-oop-billing-engine',
    live: null,
    metrics: [
      { label: 'Patterns', value: '3+' },
      { label: 'Algorithms', value: 'BOGO' },
      { label: 'Language', value: 'Java' },
    ],
    problem: 'Discount logic scattered across conditionals — hard to extend with new pricing rules.',
    solution: 'Strategy Pattern with composable ShoppingCart — each discount is a swappable algorithm.',
    outcome: 'Clean domain separation demonstrating OOP design principles interviewers look for.',
    highlights: [
      'Strategy Pattern for interchangeable discount algorithms',
      'Composition-based ShoppingCart with modular pricing',
      'BOGO, percentage, and flat-rate discount implementations',
    ],
    featured: false,
    color: '#7c9cff',
  },
];

export const education = {
  institution: 'Roorkee Institute of Technology',
  location: 'Uttarakhand',
  degree: 'B.Tech, Computer Science Engineering',
  period: '2021 – 2025',
  coursework: [
    'Data Structures & Algorithms',
    'DBMS',
    'Operating Systems',
    'Object-Oriented Programming',
    'Computer Networks',
  ],
};

export const achievements = [
  {
    title: '100+ DSA Problems',
    description:
      'Arrays, trees, graphs, and OOP design on LeetCode & GeeksforGeeks — consistent pattern practice.',
  },
  {
    title: 'CircuLib Technical Docs',
    description:
      'ER diagrams, stored procedure flows, auth flow, and API reference for faster onboarding.',
  },
];

export const marqueeItems = [
  'React',
  'TypeScript',
  'UI/UX',
  'Design Systems',
  'Node.js',
  'PostgreSQL',
  'REST APIs',
  'RBAC',
  'Framer Motion',
  'Responsive Design',
  'Performance',
  'Accessibility',
];

export const navLinks = [
  { id: 'home', label: 'Home', num: '01' },
  { id: 'about', label: 'About', num: '02' },
  { id: 'work', label: 'Work', num: '03' },
  { id: 'skills', label: 'Skills', num: '04' },
  { id: 'contact', label: 'Contact', num: '05' },
];

export const uxPrinciples = [
  {
    title: 'Hierarchy & Clarity',
    text: 'Typography scale, whitespace, and motion guide attention — every pixel earns its place.',
    num: '01',
  },
  {
    title: 'Performance by Default',
    text: 'Lazy loading, code splitting, reduced-motion fallbacks — fast feels like good design.',
    num: '02',
  },
  {
    title: 'Systems, Not One-offs',
    text: 'Design tokens, reusable components, and typed data layers — built to scale like production.',
    num: '03',
  },
];

export const processSteps = [
  { step: 'Discover', detail: 'Understand user roles, constraints, and edge cases before writing code.' },
  { step: 'Design', detail: 'Wire hierarchy, spacing, and interaction states — prototype in the browser.' },
  { step: 'Build', detail: 'Component-driven development with typed APIs and accessible markup.' },
  { step: 'Ship', detail: 'Deploy, document, and iterate based on real usage patterns.' },
];