export const personal = {
  name: 'Mitesh Kumar Anshu',
  firstName: 'Mitesh',
  title: 'Full-Stack Engineer',
  roles: ['Full-Stack Engineer', 'React Developer', 'UI Builder', 'Backend Architect'],
  tagline:
    'Building end-to-end applications with transactional backends and responsive, data-driven frontends.',
  email: 'miteshanshu1@gmail.com',
  phone: '+91 76674 99479',
  linkedin: 'https://linkedin.com/in/miteshanshu',
  github: 'https://github.com/miteshanshu',
  location: 'India',
  availability: 'Open to full-time roles',
  summary:
    'Full-stack engineer building end-to-end applications across React, Node.js, and PostgreSQL, with hands-on experience in designing transactional backend systems and responsive, data-driven frontend interfaces.',
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
    items: ['Java', 'JavaScript', 'SQL'],
    icon: 'code',
    level: 90,
  },
  {
    category: 'Frontend',
    items: ['React.js', 'Vite', 'HTML', 'CSS', 'Recharts', 'Zustand', 'Material UI'],
    icon: 'layout',
    level: 88,
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'RBAC', 'Helmet', 'CORS'],
    icon: 'server',
    level: 92,
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'Stored Procedures', 'Row-Level Locking', 'Trigram Indexes'],
    icon: 'database',
    level: 90,
  },
  {
    category: 'Tooling',
    items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Vercel', 'Render'],
    icon: 'tool',
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
    github: 'https://github.com/miteshanshu',
    live: null,
    metrics: [
      { label: 'API Domains', value: '12' },
      { label: 'Portals', value: '3' },
      { label: 'Stack', value: 'MERN+SQL' },
    ],
    highlights: [
      'End-to-end role-based platform with Admin, Librarian, and Student portals',
      'Responsive UI with state-driven rendering and analytics dashboards',
      'Transactional checkout/return via PL/pgSQL stored procedures',
      'Race-condition safety with partial indexes and SELECT FOR UPDATE locking',
      'Fuzzy search with PostgreSQL trigram indexes across catalog and members',
      'Deployed on Vercel (frontend) and Render (backend)',
    ],
    featured: true,
    gradient: 'from-orange-500/20 via-violet-500/10 to-cyan-500/20',
  },
  {
    id: 'billing',
    name: 'Smart Billing Engine',
    subtitle: 'Discount System with Design Patterns',
    year: '2024',
    stack: ['Java', 'OOP', 'Strategy Pattern'],
    github: 'https://github.com/miteshanshu',
    live: null,
    metrics: [
      { label: 'Patterns', value: '3+' },
      { label: 'Algorithms', value: 'BOGO' },
      { label: 'Language', value: 'Java' },
    ],
    highlights: [
      'Strategy Pattern for interchangeable discount algorithms',
      'Composition-based ShoppingCart with modular pricing logic',
      'Clean separation between domain models and discount behaviour',
    ],
    featured: false,
    gradient: 'from-violet-500/20 via-fuchsia-500/10 to-rose-500/20',
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
      'Solved on LeetCode and GeeksforGeeks — arrays, trees, graphs, and OOP design with consistent pattern practice.',
  },
  {
    title: 'CircuLib Technical Docs',
    description:
      'ER diagrams, stored procedure flows, auth flow, and API reference for faster onboarding and review.',
  },
];

export const marqueeItems = [
  'React.js',
  'TypeScript',
  'Node.js',
  'PostgreSQL',
  'REST APIs',
  'RBAC',
  'UI/UX',
  'Responsive Design',
  'Vite',
  'Framer Motion',
  'Design Systems',
  'Performance',
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
    title: 'Clarity First',
    text: 'Hierarchy, spacing, and motion guide users — never decorate for decoration’s sake.',
  },
  {
    title: 'Performance Matters',
    text: 'Lazy-loaded 3D, code-split bundles, and reduced-motion fallbacks built in.',
  },
  {
    title: 'Systems Thinking',
    text: 'Reusable tokens, components, and data layers — scalable like production code.',
  },
];