// Social Links - Store only data, not JSX
export const socialLinksData = [
  {
    name: "GitHub",
    href: "https://github.com/S-AbdulRahim",
    label: "GitHub",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/sayyed-abdulrahim",
    label: "LinkedIn",
  },
  {
    name: "Email",
    href: "mailto:abdulrahimsayyed55@gmail.com",
    label: "Email",
  },
];

// Personal Info
export const personalInfo = {
  name: "Sayyed Abdul Rahim",
  shortName: "Abdul Rahim",
  title: "Full Stack Developer",
  email: "abdulrahimsayyed55@gmail.com",
  location: "Hyderabad, India",  // ✅ Updated from "Andhra Pradesh, India"
  github: "https://github.com/S-AbdulRahim",
  linkedin: "https://linkedin.com/in/sayyed-abdulrahim",
  resume: "/resume.pdf",
};


// Hero Section
export const heroContent = {
  greeting: "Hi all, I'm",
  description:
    "Building secure, scalable web applications with modern technologies and cloud infrastructure",
  specializations:
    "Specializing in React.js, Authentication & RBAC, and Microservices Architecture",
  cta: {
    primary: "View My Work",
    secondary: "Get In Touch",
  },
};

// Navigation Items
export const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

// Projects Data
export const projects = [
  {
    id: 1,
    title: "Enterprise Compliance Management Platform",
    description:
      "Full-stack enterprise application with React frontend and Django backend. Deployed on GCP using Kubernetes orchestration with Oracle database integration for high-volume data processing.",
    tech: ["React.js", "Django", "Oracle DB", "Kubernetes", "GCP"],
    role: "Full Stack Developer & Team Lead",
    impact:
      "Deployed production system serving enterprise operations with 99.9% uptime",
    github: "https://github.com/S-AbdulRahim",
    demo: "#",
  },
  {
    id: 2,
    title: "Event-Driven Microservices Platform",
    description:
      "Built scalable microservices architecture with Django and Kafka for real-time event-driven communication. Docker Compose configuration for efficient local development environment.",
    tech: ["Django", "Apache Kafka", "Docker", "Python", "Microservices"],
    role: "Backend Developer",
    impact:
      "Enabled real-time event processing across distributed services with sub-second latency",
    github: "https://github.com/S-AbdulRahim",
    demo: "#",
  },
  {
    id: 3,
    title: "Enterprise Authentication & Authorization System",
    description:
      "Production-grade authentication system implementing JWT, RBAC, and private routing. Built React frontend with Django backend for secure user access control with multi-factor authentication support.",
    tech: ["React.js", "Django", "JWT", "RBAC", "MFA", "LDAP"],
    role: "Full Stack Developer (Auth Specialist)",
    impact:
      "Secured application serving thousands of users with enterprise-grade authentication",
    github: "https://github.com/S-AbdulRahim",
    demo: "#",
  },
  {
    id: 4,
    title: "Real-time Notification Engine",
    description:
      "Scalable real-time notification system using Server-Sent Events (SSE). React frontend consuming Django backend API for instant user notifications with minimal server overhead.",
    tech: ["React.js", "Django", "SSE", "REST APIs"],
    role: "Full Stack Developer",
    impact:
      "Real-time user notifications improving engagement by 40% with 95% delivery rate",
    github: "https://github.com/S-AbdulRahim",
    demo: "#",
  },
];

// Experience Timeline
export const experience = [
  {
    period: "August 2024 - Present",
    title: "Full Stack Developer",
    company: "arcofintech",
    location: "Andhra Pradesh, India",
    current: true,
    achievements: [
      "🏆 Awarded Top Performer of the Year 2024 for exceptional contributions",
      "Leading development teams on 2 critical enterprise projects",
      "Architecting scalable microservices with Kafka and Docker",
      "Implementing enterprise authentication and RBAC systems",
    ],
  },
  {
    period: "October 2022 - July 2024",
    title: "Associate Full Stack Developer",
    company: "arcofintech",
    location: "Andhra Pradesh, India",
    current: false,
    achievements: [
      "Built Enterprise Compliance Management Platform with React and Django",
      "Deployed applications on GCP with Kubernetes orchestration",
      "Developed secure authentication flows with JWT and MFA",
      "Collaborated with cross-functional teams for seamless API integrations",
    ],
  },
  {
    period: "March 2022 - September 2022",
    title: "Trainee Full Stack Developer",
    company: "arcofintech",
    location: "Andhra Pradesh, India",
    current: false,
    achievements: [
      "Learned enterprise application development practices",
      "Built responsive frontend components with React.js",
      "Developed RESTful APIs with Django framework",
      "Gained experience in Oracle database integration and optimization",
    ],
  },
];

// Education
export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "JNTU Anantapur",
    period: "2020 - 2022",
    field: "Computer Science",
  },
  {
    degree: "Bachelor of Science in Computers",
    institution: "Yogi Vemana University, Kadapa",
    period: "2017 - 2020",
    field: "Computer Science",
  },
];

// About Section
export const aboutContent = {
  title: "Building Modern Web Solutions",
  paragraphs: [
    "I'm a Full Stack Developer with 3+ years of experience building secure, scalable enterprise applications. My expertise lies in crafting robust frontend experiences with React and implementing enterprise-grade authentication systems.",
    "At arcofintech, I progressed from Trainee to Full Stack Developer and was recognized as Top Performer of the Year 2024. I currently lead development teams on critical projects, specializing in authentication, authorization, and RBAC implementation.",
    "I'm passionate about continuous learning and staying current with modern development practices. Currently expanding expertise in microservices architecture, Kubernetes, and system design to become a well-rounded expert who can take projects from requirements to production deployment.",
  ],
  highlights: [
    {
      title: "Top Performer 2024",
      description: "Recognized for exceptional contributions and delivery",
    },
    {
      title: "Team Leadership",
      description: "Leading development teams on critical projects",
    },
    {
      title: "3+ Years Experience",
      description: "Full-stack development across multiple domains",
    },
    {
      title: "Modern Tech Stack",
      description: "React, Django, Kubernetes, Microservices",
    },
  ],
};

// Skills Categories (without icons - add in component)
export const skillsData = [
  {
    title: "Frontend Development",
    level: "Expert",
    skills: [
      { name: "React.js", level: 95 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    title: "Backend Development",
    level: "Intermediate",
    skills: [
      { name: "Python", level: 75 },
      { name: "Django", level: 75 },
      { name: "REST APIs", level: 80 },
      { name: "Node.js", level: 65 },
    ],
  },
  {
    title: "DevOps & Cloud",
    level: "Intermediate",
    skills: [
      { name: "Docker", level: 80 },
      { name: "Kubernetes", level: 65 },
      { name: "Git & GitHub", level: 85 },
      { name: "Google Cloud Platform", level: 70 },
    ],
  },
  {
    title: "Databases & Architecture",
    level: "Intermediate",
    skills: [
      { name: "Oracle Database", level: 75 },
      { name: "Apache Kafka", level: 70 },
      { name: "Microservices", level: 70 },
      { name: "PostgreSQL", level: 65 },
    ],
  },
];

// Specializations
export const specializations = [
  "Authentication & Authorization",
  "Role-Based Access Control (RBAC)",
  "JWT & Multi-Factor Authentication",
  "LDAP Integration",
  "Cross-functional Collaboration",
  "Agile Methodology",
];

// Contact Info
export const contactInfoData = [
  {
    title: "Email",
    value: "abdulrahimsayyed55@gmail.com",
    link: "mailto:abdulrahimsayyed55@gmail.com",
  },
  {
    title: "Location",
    value: "Andhra Pradesh, India",
    link: null,
  },
];

export const professionalStatus = {
  current: "Full Stack Developer at arcofintech",
  message:
    "Currently working as Full Stack Developer at arcofintech. Open to discussing interesting opportunities and collaborations.",
};

// Certifications (with priority and credential URLs)
// Certifications (with iframe embed support)
export const certifications = [
  {
    id: 1,
    name: "Frontend Developer (React)",
    issuer: "HackerRank",
    status: "Certified",
    year: "2023",
    priority: 1,
    credentialUrl: "https://www.hackerrank.com/certificates/ecafbcabdb9f",
    embeddable: true, // ✅ HackerRank now supports iframe
    embedUrl: "https://www.hackerrank.com/certificates/iframe/ecafbcabdb9f", // Same URL works for embed
  },
  {
    id: 2,
    name: "REST API (Intermediate)",
    issuer: "HackerRank",
    status: "Certified",
    year: "2023",
    priority: 2,
    credentialUrl: "https://www.hackerrank.com/certificates/69f204d0e32d",
    embeddable: true,
    embedUrl: "https://www.hackerrank.com/certificates/iframe/69f204d0e32d",
  },
  {
    id: 3,
    name: "RedHat Certification",
    issuer: "RedHat",
    status: "In Progress",
    year: "2025",
    priority: 3,
    credentialUrl: null,
    embeddable: false,
    embedUrl: null,
  },
  // Example with Credly (AWS, Azure, etc.)
  // {
  //   id: 4,
  //   name: "AWS Certified Developer - Associate",
  //   issuer: "Amazon Web Services",
  //   status: "Certified",
  //   year: "2024",
  //   priority: 4,
  //   credentialUrl: "https://www.credly.com/badges/your-badge-id",
  //   embeddable: true,
  //   embedUrl: "https://www.credly.com/embedded/share/your-badge-id",
  // },
];


// Helper function to get sorted certifications
export const getSortedCertifications = () => {
  return [...certifications].sort((a, b) => a.priority - b.priority);
};
