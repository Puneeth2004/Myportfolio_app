export const personalData = {
  name: "Puneeth Kakimari",
  tagline: "Final Year CSE Student.",
  bio: "I am a final-year Computer Science and Engineering student studying at Vellore Institute of Technology, with a strong passion for building impactful software solutions. Over the past few years, I have gained hands-on experience in Java, Python, Web Development, and Firebase, while also exploring areas like AI, Machine Learning, and Data Structures & Algorithms. Currently, I am looking for opportunities to apply my skills in software development, AI/ML, or full-stack development, where I can contribute, learn, and grow as a professional.",
};

export type Skill = {
  name: string;
  level: number;
};

export const skills: Skill[] = [
  { name: "Java", level: 85 },
  { name: "Python", level: 80 },
  { name: "React", level: 75 },
  { name: "Node.js", level: 70 },
  { name: "SQL & MongoDB", level: 65 },
  { name: "HTML & CSS", level: 75 },
  { name: "JavaScript", level: 60 },
  { name: "Machine Learning (AI/ML)", level: 65 },
  { name: "Data Structures & Algorithms", level: 85 }
];

export type Project = {
  title: string;
  description: string;
  stack: string[];
  github: string;
  demo?: string;
  image: string;
  image_alt: string;
};

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce website with product listings, shopping cart, and checkout process. Integrated with Stripe for payments.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Firebase"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "/assets/project-1.png",
    image_alt: "e-commerce website",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with boards, lists, and cards, inspired by Trello. Real-time updates with websockets.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.IO"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "/assets/project-2.png",
    image_alt: "task manager",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio website (the one you're looking at now!) built with Next.js and styled with Tailwind CSS.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com",
    image: "/assets/project-3.png",
    image_alt: "portfolio website",
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
};

export const experiences: Experience[] = [
  {
    role: "Intern",
    company: "Virtusa.",
    period: "2025 - Present",
    description: "Intern.",
  },
  {
    role: "Intern",
    company: "Tech Sakhshyam - a Colloborative with Microsoft",
    period: "2024 December - 2025 January",
    description: "Developed a human pose detection project using media pipe and Open CV. Learnt development and deployoning the web pages using python as backend.",
  },
];

export type Education = {
  degree: string;
  institution: string;
  period: string;
  description: string;
};

export const education: Education[] = [
    {
    degree: "Integrated M.Tech Computer Science",
    institution: "Vellore Institue of Technology",
    period: "2021 - till now",
    description: "Studying M.Tech Integrated with cgpa of 8.41 out of ten.",
  },
  {
    degree: "Intermediate",
    institution: "Narayana Junior Collge",
    period: "2019 - 2021",
    description: "Completed Intermediate by scoring 954 out of thousand.",
  },
  {
    degree: "Secondory School Eduaction",
    institution: "LRG Vidyalayam",
    period: "2014 - 2019",
    description: "Completed Secondory School Certificate with the CGPA of 9.7 out of ten.",
  },
];
