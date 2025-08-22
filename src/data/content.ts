export const personalData = {
  name: "Alex Doe",
  tagline: "I build things for the web.",
  bio: "A passionate Full Stack developer from New York, with a knack for creating elegant and efficient solutions. I love turning complex problems into simple, beautiful and intuitive designs. When I'm not coding, you can find me exploring the city or reading a good book.",
  cvUrl: "/alex-doe-cv.pdf"
};

export type Skill = {
  name: string;
  level: number;
};

export const skills: Skill[] = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Firebase", level: 80 },
  { name: "Tailwind CSS", level: 95 },
  { name: "UI/UX Design", level: 75 },
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
    image: "https://placehold.co/600x400.png",
    image_alt: "e-commerce website",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with boards, lists, and cards, inspired by Trello. Real-time updates with websockets.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.IO"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "https://placehold.co/600x400.png",
    image_alt: "task manager",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio website (the one you're looking at now!) built with Next.js and styled with Tailwind CSS.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com",
    image: "https://placehold.co/600x400.png",
    image_alt: "portfolio website",
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  type: "work" | "education";
};

export const experiences: Experience[] = [
  {
    role: "Senior Software Engineer",
    company: "Tech Solutions Inc.",
    period: "2020 - Present",
    description: "Leading development of client-facing web applications using modern technologies. Mentoring junior developers and improving code quality.",
    type: "work",
  },
  {
    role: "Full Stack Developer",
    company: "Web Innovators",
    period: "2018 - 2020",
    description: "Developed and maintained web applications for various clients, focusing on performance and user experience.",
    type: "work",
  },
  {
    role: "Bachelor of Science in Computer Science",
    company: "University of Technology",
    period: "2014 - 2018",
    description: "Graduated with honors. Focused on software engineering, algorithms, and web development. Active member of the coding club.",
    type: "education",
  },
];
