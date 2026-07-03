export const personal = {
  name: 'Mitesh Kumar Anshu',
  title: 'Full-Stack Engineer',
  tagline: 'Backend reliability, transactional integrity & role-based systems',
  email: 'miteshanshu1@gmail.com',
  phone: '+91 76674 99479',
  linkedin: 'https://linkedin.com/in/miteshanshu',
  github: 'https://github.com/miteshanshu',
  location: 'India',
  summary:
    'Full-stack engineer specialising in backend reliability, transactional data integrity, and role-based system design. Builds end-to-end features across React, Node.js, and PostgreSQL — from RBAC middleware and PL/pgSQL stored procedures to deployed, live applications. Strong foundation in data structures, OOP, and concurrency-safe schema design.',
};

export const skills = [
  {
    category: 'Languages',
    items: ['Java', 'JavaScript', 'SQL'],
  },
  {
    category: 'Frontend',
    items: ['React.js', 'Vite', 'Zustand', 'Material UI', 'Recharts', 'HTML', 'CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'RBAC Middleware', 'Helmet', 'CORS'],
  },
  {
    category: 'Databases',
    items: [
      'PostgreSQL',
      'Transactions',
      'Row-Level Locking',
      'Stored Procedures',
      'Trigram Indexes',
      'MongoDB',
    ],
  },
  {
    category: 'Tooling & Deployment',
    items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Vercel', 'Render'],
  },
];

export const projects = [
  {
    id: 'circulib',
    name: 'CircuLib',
    subtitle: 'Library Circulation & Operations Platform',
    stack: ['React', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/miteshanshu',
    live: null,
    highlights: [
      'End-to-end role-based platform with Admin, Librarian, and Student portals',
      'Layered backend with JWT auth, RBAC middleware, and connection pooling',
      'Transactional checkout/return via PL/pgSQL stored procedures',
      'Race-condition safety with partial indexes and SELECT FOR UPDATE locking',
      '12 API domains including catalog, circulation, reservations, and global search',
      'Fuzzy search with PostgreSQL trigram indexes and Recharts analytics dashboards',
      'Deployed on Vercel (frontend) and Render (backend)',
    ],
    featured: true,
  },
  {
    id: 'billing',
    name: 'Smart Billing & Discount Engine',
    subtitle: 'OOP Design Patterns in Java',
    stack: ['Java', 'OOP', 'Design Patterns'],
    github: 'https://github.com/miteshanshu',
    live: null,
    highlights: [
      'Strategy Pattern for interchangeable discount algorithms (percentage, fixed, BOGO)',
      'Composition-based ShoppingCart and Item models with modular pricing logic',
      'Clean separation between domain models and discount behaviour',
    ],
    featured: false,
  },
];

export const education = {
  institution: 'Roorkee Institute of Technology, Uttarakhand',
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
  'Solved 100+ problems on LeetCode and GeeksforGeeks covering arrays, trees, graphs, and OOP design',
  'Produced full technical documentation for CircuLib: ER diagrams, stored procedure flows, auth flow, and API reference',
];

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];