import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaReact, FaNodeJs, FaDatabase, FaCode, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiFirebase, SiTailwindcss, SiJavascript, SiTypescript, SiCplusplus, SiPython, SiDaisyui, SiBootstrap, SiRedux, SiMongoose, SiShadcnui, SiPostgresql } from 'react-icons/si';
import { RiNextjsFill } from "react-icons/ri";

export const personalInfo = {
  name: "Abdullah Al Towsif",
  title: "Full Stack Developer",
  email: "abdullah.al.towsif2002@gmail.com",
  linkedin: "https://www.linkedin.com/in/abdullah-al-towsif-1528ba345/",
  github: "https://github.com/AbdullahAlTowsif",
  resumeLink: "/Abdullah Al Towsif_Resume.pdf",
  bio: "Innovative Full Stack Developer passionate about creating seamless and impactful web solutions. Eager to leverage modern technologies to solve real-world problems and contribute to dynamic team environments.",
  shortBio: "I build things for the web."
};

export const education = [
  {
    institution: "National Institute of Textile Engineering and Research",
    degree: "Bachelor of Science in Computer Science and Engineering",
    duration: "Feb 2022 – Present",
    score: "CGPA: 3.13/4",
  },
  {
    institution: "Cda Public School & College",
    degree: "Higher Secondary Certificate",
    duration: "2020",
    score: "4.67",
  },
  {
    institution: "Chandgaon N.M.C Adarsha High School",
    degree: "Secondary School Certificate",
    duration: "2018",
    score: "4.61",
  },
];

export const projects = [
  {
    title: "eduHive",
    tech: ["React JS", "Node.js", "Express.js", "MongoDB", "JWT", "Firebase", "Stripe", "Tanstack Query"],
    description: "EduHive is a platform designed to enhance interactions between educational institutions, tutors, and students. The system streamlines class management, scheduling, and skill-based learning in an accessible and efficient manner. Users can enroll in courses, manage study materials, and interact with tutors in a structured learning environment.",
    date: "January 2025",
    githubLink: "https://github.com/AbdullahAlTowsif/eduHive-client", // Replace with actual link
    liveLink: "https://edu-hive-3c8bd.web.app/", // Replace with actual link if available
    category: "MERN Stack",
    icon: <FaReact size={24} className="text-accent-1"/>
  },
  {
    title: "GroupStudy",
    tech: ["React JS", "Node.js", "Express.js", "MongoDB", "Firebase", "JWT"],
    description: "The Online Group-Study platform is designed to help students study collaboratively in virtual study groups. It enables users to join or create study groups based on subjects, schedule study sessions, and share study materials. The goal of this platform is to enhance productivity, make studying more interactive, and provide a supportive learning environment.",
    date: "December 2024",
    githubLink: "https://github.com/AbdullahAlTowsif/group-study-client", // Replace with actual link
    liveLink: "https://group-study-1086a.web.app/",
    category: "MERN Stack",
    icon: <FaReact size={24} className="text-accent-1"/>
  },
  {
    title: "Ride Booking",
    tech: ["React JS", "Redux Toolkit / RTK Query", " React Hook Form", "Express.js", "MongoDB (Mongoose)", "OAuth 2.0 with Passport.js", "JWT", "Shadcn"],
    description: "A ride booking platform built with modern technologies. This project provides a secure, scalable, and user-friendly system for riders and drivers to connect and manage ride bookings efficiently.",
    date: "September 2025",
    githubLink: "https://github.com/AbdullahAlTowsif/ride-booking-system-frontend",
    liveLink: "https://ride-booking-system-frontend.vercel.app/",
    category: "Full Stack",
    icon: <FaReact size={24} className="text-accent-1"/>
  },
];

export const skills = {
  languages: [
    { name: "C/C++", icon: <SiCplusplus /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Python", icon: <SiPython /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "MySQL", icon: <FaDatabase /> },
  ],
  frameworksAndLibraries: [
    { name: "React JS", icon: <FaReact /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "Next JS", icon: <RiNextjsFill /> },
    { name: "Node JS", icon: <FaNodeJs /> },
    { name: "Express JS", icon: <SiExpress /> },
    { name: "Mongoose", icon: <SiMongoose /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Shadcn", icon: <SiShadcnui /> },
    { name: "Daisy UI", icon: <SiDaisyui /> },
    { name: "Bootstrap", icon: <SiBootstrap /> },
  ],
  toolsAndPlatforms: [
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Git & GitHub", icon: <FaGithub /> },
    { name: "VS Code", icon: <FaCode /> }, // Or a more specific icon
    { name: "Postman", icon: <FaCode /> }, // Placeholder icon
    // { name: "Google Cloud Platform", icon: <FaCode /> },
  ],
  coreCompetencies: [
    "Problem Solving",
    "Presentations",
    "Team Working"
    // "Oratory",
    // "Team Leadership",
    // "Event Hosting",
    // "Agile Methodologies"
  ]
};

export const leadershipAndInvolvement = [
  {
    role: "Junior Partner",
    organization: "The Apex Circle (TAC)",
    duration: "Jan 2025 – Present",
    points: [
      "Participated in over 15 hackathons and technical events, collaborating with peers to build innovative solutions.",
      "Mentored juniors by sharing knowledge, guiding them in projects, and fostering a strong tech community.",
    ],
  },
  {
    role: "Technical Executive",
    organization: "Computer Society of India, CU Student Branch",
    duration: "Nov 2024 – Present",
    points: [
      "Organized 5+ workshops, hackathons, and competitions to enhance student learning and engagement.",
      "Coordinated with faculty and industry experts to bring technical opportunities to students.",
    ],
  },
  {
    role: "AMCAT 2nd Rank Holder",
    organization: "Chandigarh University",
    duration: "Sept 2024",
    points: [
      "Secured 2nd rank in AMCAT among 5500+ peers, showcasing strong analytical and problem-solving skills.",
      "Demonstrated excellence in aptitude, coding, and domain-specific assessments, outperforming competition.",
    ],
  },
];

export const socialLinks = {
  linkedin: { url: personalInfo.linkedin, icon: <FaLinkedin size={24} /> },
  github: { url: personalInfo.github, icon: <FaGithub size={24} /> },
  email: { url: `mailto:${personalInfo.email}`, icon: <FaEnvelope size={24} /> },
  // phone: { url: `tel:${personalInfo.phone}`, icon: <FaPhone size={24} /> }, // Optional
};