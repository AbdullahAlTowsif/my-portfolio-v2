import {
  FaGithub, FaLinkedin, FaEnvelope, FaReact, FaNodeJs, FaCode,
  FaHtml5, FaCss3Alt, FaDocker, FaRobot, FaLock, FaCreditCard, FaCloud, FaBug,
} from 'react-icons/fa';
import {
  SiExpress, SiMongodb, SiFirebase, SiTailwindcss, SiJavascript, SiTypescript,
  SiCplusplus, SiPython, SiDaisyui, SiRedux, SiMongoose, SiShadcnui,
  SiPostgresql, SiPrisma, SiRedis, SiSocketdotio, SiGo, SiJest, SiVitest,
  SiSelenium, SiPostman, SiSentry, SiStripe, SiVercel, SiJsonwebtokens,
  SiTestinglibrary, SiPassport, SiGit, SiReactquery,
} from 'react-icons/si';
import { RiNextjsFill } from 'react-icons/ri';

export const personalInfo = {
  name: 'Abdullah Al Towsif',
  title: 'Backend & Full Stack Developer',
  email: 'abdullah.al.towsif2002@gmail.com',
  linkedin: 'https://www.linkedin.com/in/abdullah-al-towsif-1528ba345/',
  github: 'https://github.com/AbdullahAlTowsif',
  // Put your latest resume PDF in /public with exactly this file name
  resumeLink: '/Abdullah Al Towsif_Resume.pdf',
  bio: 'Computer Science student and aspiring Backend Engineer with hands-on experience building full-stack applications using Node.js, Express, TypeScript, React.js and Next.js. A self-motivated lifelong learner passionate about secure APIs, real-time systems, and AI-powered features. I dig deep into systems and concepts, not just surface-level code.',
  shortBio: 'I build secure APIs and the apps around them.',
};

export const education = [
  {
    institution: 'National Institute of Textile Engineering and Research',
    affiliation: 'University of Dhaka',
    location: 'Savar, Dhaka',
    degree: 'Bachelor of Science in Computer Science and Engineering',
    duration: 'Feb 2022 – 2026',
    score: 'CGPA: 3.33/4 (Expected)',
    isUniversity: true,
  },
  {
    institution: 'Cda Public School & College',
    degree: 'Higher Secondary Certificate',
    duration: '2020',
    score: 'GPA: 4.67',
  },
  {
    institution: 'Chandgaon N.M.C Adarsha High School',
    degree: 'Secondary School Certificate',
    duration: '2018',
    score: 'GPA: 4.61',
  },
];

export const projects = [
  {
    id: 'careerforge',
    title: 'CareerForge',
    subtitle: 'AI-Powered Youth Employment (SDG-8)',
    category: 'Full Stack · AI',
    date: '',
    icon: <RiNextjsFill size={24} className="text-accent-1" />,
    summary:
      'A job platform that matches young people to roles with a weighted engine, then explains the match and the skills still missing. Gemini handles CV skill extraction, career roadmaps and a chat assistant.',
    overview:
      'CareerForge is built around SDG 8 (decent work and economic growth). Candidates get a match percentage for every job, the reasons behind it, and a skill-gap analysis, so they know what to learn next. An admin panel tracks platform activity and SDG 8 impact.',
    highlights: [
      'Weighted job-matching engine (skills, experience, track) that returns a match %, reasons, and skill-gap analysis.',
      'Google Gemini integration for CV skill extraction, personalized career roadmaps with PDF export, and a context-aware CareerBot assistant.',
      'JWT authentication, Redis caching, and Cloudinary file uploads.',
      'Stripe and SSLCommerz payments.',
      'Admin panel with full CRUD and SDG 8 impact analytics.',
    ],
    tech: [
      'TypeScript', 'Next.js 16', 'Express.js', 'MongoDB (Mongoose)', 'Redis',
      'Google Gemini API', 'Stripe', 'SSLCommerz', 'Cloudinary', 'Sentry', 'JWT',
      'Tailwind CSS & shadcn/ui', 'React Hook Form', 'Zod', 'Recharts', 'next-intl',
    ],
    links: {
      // Your resume links "Client" and "Server" both to this repo — add the server repo URL if it is separate
      client: 'https://github.com/AbdullahAlTowsif/careerforge',
      server: '',
      live: 'https://careerforge-khaki.vercel.app/',
    },
  },
  {
    id: 'events',
    title: 'Events',
    subtitle: 'Online Events & Activities Management System',
    category: 'Full Stack · AI',
    date: 'December 2025',
    icon: <RiNextjsFill size={24} className="text-accent-1" />,
    summary:
      'A role-based event platform covering event creation, participation and payments, with host applications reviewed by admins and AI-powered event recommendations.',
    overview:
      'Events lets users discover and join activities, hosts create and manage them, and admins moderate who can host. Everything from sign-up to payment tracking runs on PostgreSQL through Prisma.',
    highlights: [
      'Role-based access with authentication, host applications, and admin moderation.',
      'End-to-end event creation, participation, and payment tracking on PostgreSQL (Prisma).',
      'Secure host onboarding with a transactional approval workflow.',
      'AI-powered event recommendations based on user interests, location and participation.',
    ],
    tech: [
      'TypeScript', 'Next.js (v16)', 'Express.js', 'PostgreSQL', 'Prisma', 'JWT',
      'Stripe', 'Tailwind CSS & Shadcn', 'React Hook Form', 'Recharts', 'Zod',
    ],
    links: {
      client: 'https://github.com/AbdullahAlTowsif/events-activities-frontend',
      server: 'https://github.com/AbdullahAlTowsif/events-activities-backend',
      live: 'https://events-activities-frontend.vercel.app/',
    },
  },
  {
    id: 'ride-booking',
    title: 'Ride Booking',
    subtitle: 'Online Ride Booking System',
    category: 'Full Stack',
    date: 'September 2025',
    icon: <FaReact size={24} className="text-accent-1" />,
    summary:
      'A ride platform where riders request trips and drivers accept and complete them, with secure token auth, online payments and emergency safety contacts.',
    overview:
      'Ride Booking connects riders and drivers through a full ride lifecycle. Payments are verified on the server, and riders can keep emergency contacts for safety.',
    highlights: [
      'Secure login with JWT access and refresh tokens stored in cookies.',
      'Complete ride flow: request, driver acceptance, in progress, completion, and cancellation.',
      'SSLCommerz payment gateway with server-side verification.',
      'Emergency Safety Contacts feature where riders can add and update contacts.',
    ],
    tech: [
      'React.js', 'Redux Toolkit / RTK Query', 'React Hook Form', 'Express.js',
      'MongoDB (Mongoose)', 'JWT', 'OAuth 2.0 with Passport.js', 'bcrypt.js',
      'Axios', 'SSLCommerz', 'Tailwind CSS & Shadcn', 'Zod',
    ],
    links: {
      client: 'https://github.com/AbdullahAlTowsif/ride-booking-system-frontend',
      server: 'https://github.com/AbdullahAlTowsif/ride-booking-system-backend',
      live: 'https://ride-booking-system-frontend.vercel.app/',
    },
  },
];

// Skills are grouped exactly like the resume. type: 'chips' renders plain pills (no icon).
export const skills = [
  {
    title: 'Languages',
    items: [
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'Python', icon: <SiPython /> },
      { name: 'Go (Familiar)', icon: <SiGo /> },
      { name: 'C++', icon: <SiCplusplus /> },
    ],
  },
  {
    title: 'Backend & Databases',
    items: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'Mongoose', icon: <SiMongoose /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'Prisma', icon: <SiPrisma /> },
      { name: 'Redis', icon: <SiRedis /> },
      { name: 'Socket.io', icon: <SiSocketdotio /> },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'React.js', icon: <FaReact /> },
      { name: 'Next.js', icon: <RiNextjsFill /> },
      { name: 'Redux', icon: <SiRedux /> },
      { name: 'TanStack Query', icon: <SiReactquery /> },
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'Shadcn UI', icon: <SiShadcnui /> },
      { name: 'DaisyUI', icon: <SiDaisyui /> },
    ],
  },
  {
    title: 'DevOps & Deployment',
    items: [
      { name: 'Vercel', icon: <SiVercel /> },
      { name: 'Render', icon: <FaCloud /> },
      { name: 'Firebase', icon: <SiFirebase /> },
      { name: 'Docker', icon: <FaDocker /> },
    ],
  },
  {
    title: 'Authentication & Payment',
    items: [
      { name: 'JWT', icon: <SiJsonwebtokens /> },
      { name: 'OAuth 2.0', icon: <FaLock /> },
      { name: 'Passport.js', icon: <SiPassport /> },
      { name: 'Better Auth', icon: <FaLock /> },
      { name: 'bcrypt', icon: <FaLock /> },
      { name: 'RBAC', icon: <FaLock /> },
      { name: 'Stripe', icon: <SiStripe /> },
      { name: 'SSLCommerz', icon: <FaCreditCard /> },
    ],
  },
  {
    title: 'AI-Native Development',
    items: [
      { name: 'Claude', icon: <FaRobot /> },
      { name: 'Agentic Dev (OpenCode)', icon: <FaRobot /> },
      { name: 'ChatGPT', icon: <FaRobot /> },
      { name: 'GitHub Copilot', icon: <FaRobot /> },
    ],
  },
  {
    title: 'Tools & Monitoring',
    items: [
      { name: 'VS Code', icon: <FaCode /> },
      { name: 'Git', icon: <SiGit /> },
      { name: 'GitHub', icon: <FaGithub /> },
      { name: 'Postman', icon: <SiPostman /> },
      { name: 'Selenium', icon: <SiSelenium /> },
      { name: 'Jest', icon: <SiJest /> },
      { name: 'Vitest', icon: <SiVitest /> },
      { name: 'React Testing Library', icon: <SiTestinglibrary /> },
      { name: 'Sentry', icon: <SiSentry /> },
      { name: 'ClickUp', icon: <FaBug /> },
    ],
  },
  {
    title: 'CS Fundamentals',
    type: 'chips',
    items: ['RESTful API', 'OOP', 'DSA', 'Design Patterns', 'SDLC'],
  },
];

export const coursework = [
  { title: '100 Days of Python', provider: 'Udemy', link: 'https://www.udemy.com/certificate/UC-cba7da7a-4f04-456f-b919-04be9891892e/' },
  { title: 'Next Level Web Development', provider: 'Programming Hero', link: 'https://web.programming-hero.com/verification?validationNumber=PHL2B5WEB10-03341034' },
  { title: 'Complete Web Development Course', provider: 'Programming Hero', link: 'https://i.ibb.co/MWn8nZW/PH-L1-Certificate-Imgbb.png' },
  { title: 'Microsoft Excel', provider: '10 Minute School', link: 'https://i.ibb.co.com/78nctgt/MS-Excel.png' },
  { title: 'Round 2 Qualifier, SOLVIO AI Hackathon 2025', provider: 'Hackathon', link: 'https://i.ibb.co.com/d4PfgMcj/SOLVIO.png' },
  { title: 'Participant, NextGen Hackathon (IIUC) 2025', provider: 'Hackathon', link: '' },
];

export const socialLinks = {
  linkedin: { url: personalInfo.linkedin, icon: <FaLinkedin size={24} /> },
  github: { url: personalInfo.github, icon: <FaGithub size={24} /> },
  email: { url: `mailto:${personalInfo.email}`, icon: <FaEnvelope size={24} /> },
};
