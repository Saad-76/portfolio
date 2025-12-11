export type Project = {
  title: string;
  description: string;
  stack: string[];
  link: string;
  status?: string;
  image?: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  location?: string;
  responsibilities: string[];
};

export type Metric = {
  value: string;
  label: string;
};

export type HeroContent = {
  title: string;
  subtitle: string;
  summary: string;
  badges: string[];
  secondaryBadges: string[];
  actions: {
    contact: string;
    linkedin: string;
    github: string;
  };
};

export type ContactContent = {
  headline: string;
  copy: string;
  email: string;
  booking: string;
  location?: string;
  phone?: string;
};

export type Recommendation = {
  name: string;
  role: string;
  company: string;
  text: string;
};

export type Education = {
  institution: string;
  credential: string;
  field: string;
  grade: string;
};

export type Blog = {
  title: string;
  description: string;
  link: string;
  platform: string;
  date: string;
  readTime?: string;
  tags?: string[];
};

export const hero: HeroContent = {
  title: "Saad Mehmood",
  subtitle: "Senior Software Engineer | Nest.js, React Js, PostgreSQL, AWS",
  summary:
    "Results-driven software engineer building scalable, robust web apps across Nest.js, React, Node, PostgreSQL, and MongoDB. Skilled in AWS deployments, Stripe payments, microservices, multi-tenant design, WebSockets/Redis, and secure auth with Azure AD B2C/Microsoft SSO.",
  badges: ["Available for freelance & remote roles", "Shipping on AWS / AZURE"],
  secondaryBadges: ["Build | Ship | Measure | Iterate"],
  actions: {
    contact: "mailto:saadmehmood131@gmail.com",
    linkedin: "https://www.linkedin.com/in/saad-mehmood-537903213/",
    github: "https://github.com/Saad-76",
  },
};

export const metrics: Metric[] = [
  { value: "25+", label: "Production features shipped" },
  { value: "4y+", label: "MERN product experience" },
  { value: "98%", label: "Uptime across deployed apps" },
  { value: "CI/CD", label: "Vercel + GitHub Actions ready" },
];

export const projects: Project[] = [
  {
    title: "Digital Signage CMS (Microservices)",
    description:
      "Scalable multi-tenant digital signage with custom API gateway, modular middleware, and resilient messaging.",
    stack: ["React", "Redux Toolkit", "NestJS", "TypeORM", "PostgreSQL", "Redis", "RabbitMQ", "AWS", "Azure"],
    link: "#",
    status: "Apr 2025",
  },
  {
    title: "IntVue · AI Interview Platform",
    description:
      "Interview management system with AI-generated questions and automated candidate scoring via Python/Gemini service layer.",
    stack: ["Ruby on Rails", "PostgreSQL", "Python AI service", "ActiveRecord"],
    link: "#",
    status: "Feb–Jun 2025",
  },
  {
    title: "ContentGen · AI Content Ops",
    description:
      "Next.js + Node/TS content pipeline with Azure B2C auth, webhooks, sockets, Stripe, and ChatGPT/Adobe InDesign automation.",
    stack: ["Next.js", "Node/TS", "Express", "TypeORM", "PostgreSQL", "Azure B2C", "Stripe", "Redis", "Socket"],
    link: "#",
    status: "Apr 2024–Mar 2025",
  },
  {
    title: "Checksome Backend",
    description: "Mobile backend with NestJS, Prisma, and PostgreSQL focused on correctness and delivery speed.",
    stack: ["NestJS", "TypeScript", "Prisma", "PostgreSQL"],
    link: "#",
    status: "Jan–Feb 2025",
  },
  {
    title: "Flight Data Management",
    description:
      "Ops console for flight data with React/MUI front-end and NestJS/TypeORM API; shipped with AWS deployment and repository/factory patterns.",
    stack: ["React", "MUI", "React Query", "NestJS", "TypeORM", "PostgreSQL", "AWS"],
    link: "#",
    status: "Apr–Jun 2024",
  },
  {
    title: "Premium Lemo",
    description: "Automotive site with a performant Next.js + Tailwind/DaisyUI frontend.",
    stack: ["Next.js", "TypeScript", "Tailwind", "DaisyUI"],
    link: "#",
    status: "Mar–Apr 2024",
  },
  {
    title: "Digital Signage CMS (MERN SaaS)",
    description:
      "SaaS digital signage with rich canvas editing, RTC, and Stripe billing on a MERN stack.",
    stack: ["React", "Material UI", "Redux", "RTC", "Fabric.js", "Node", "Express", "Sequelize", "PostgreSQL", "Stripe", "S3"],
    link: "#",
    status: "Jan–Mar 2024",
  },
  {
    title: "Ecommerce Site (MERN)",
    description: "Full e-commerce flow with Stripe payments, Redux state, and S3 media storage.",
    stack: ["React", "Material UI", "Redux", "Node", "Express", "Sequelize", "PostgreSQL", "Stripe", "S3"],
    link: "#",
    status: "Jan–Feb 2024",
  },
  {
    title: "Debian OS Application",
    description:
      ".deb desktop app with realtime sockets, push notifications, and S3-backed media services.",
    stack: ["Node", "Express", "Socket.io", "jQuery", "Bootstrap", "PNS", "S3"],
    link: "#",
    status: "Oct–Dec 2023",
  },
  {
    title: "Windows Application",
    description:
      ".exe desktop app using sockets and push notifications with Node/Express backend and S3 media.",
    stack: ["Node", "Express", "Socket.io", "jQuery", "Bootstrap", "PNS", "S3"],
    link: "#",
    status: "May–Dec 2023",
  },
  {
    title: "AGI Cybersecurity for Quantum Cloud Robotics",
    description:
      "Research prototype applying ML/AGI to detect and prevent cyber threats in quantum cloud robotics.",
    stack: ["ML/AGI", "Cloud Robotics"],
    link: "#",
    status: "Nov 2022–Jun 2023",
  },
  {
    title: "Internal Management System",
    description:
      "Internal ops suite with rich canvas tooling and analytics shipped to AWS.",
    stack: ["React", "Fabric.js", "Redux", "Material UI", "Formik", "Charts", "AWS"],
    link: "#",
    status: "Nov 2022–May 2023",
  },
  {
    title: "Blog Site",
    description: "Lightweight blog experience with React, Tailwind, and client routing.",
    stack: ["React", "Tailwind", "React Router"],
    link: "#",
    status: "Jan–Feb 2023",
  },
  {
    title: "SaaS Product",
    description: "SaaS platform with React front-end and Ruby on Rails backend.",
    stack: ["React", "Ruby on Rails"],
    link: "#",
    status: "Aug–Nov 2022",
  },
  {
    title: "Kunji · Society Management",
    description: "Society management system with Redux-Saga state and MUI design system.",
    stack: ["React", "Redux-Saga", "Material UI"],
    link: "#",
    status: "Feb–Aug 2022",
  },
  {
    title: "ROXO · Crypto Gaming",
    description: "Crypto gaming website for earning ROXO through multiple games.",
    stack: ["React"],
    link: "#",
    status: "Jan–Jun 2022",
  },
  {
    title: "Arkad · Admin Portal",
    description: "Admin portal delivery with React front-end.",
    stack: ["React"],
    link: "#",
    status: "Feb–Mar 2022",
  },
  {
    title: "Coast Collectibles",
    description: "Commerce experience for collectibles.",
    stack: ["React"],
    link: "#",
    status: "Jan–Feb 2022",
  },
  {
    title: "Meta Street Apes",
    description: "NFT/web project delivery.",
    stack: ["React"],
    link: "#",
    status: "Jan–Feb 2022",
  },
  {
    title: "Buey Tuhan",
    description: "Web build.",
    stack: ["React"],
    link: "#",
    status: "Jan 2022",
  },
  {
    title: "Xee Verse Token",
    description: "Gaming/token site.",
    stack: ["React"],
    link: "#",
    status: "Dec 2021–Jan 2022",
  },
  {
    title: "Gaming Website",
    description: "Gaming-focused web experience.",
    stack: ["React"],
    link: "#",
    status: "Jan 2022",
  },
  {
    title: "Kenya Exports",
    description: "Exports-focused site delivery.",
    stack: ["React"],
    link: "#",
    status: "Oct–Dec 2021",
  },
];

export const experiences: Experience[] = [
  {
    role: "Senior Software Engineer",
    company: "Intagleo Systems",
    period: "Jan 2025 — Present",
    location: "Lahore, Pakistan",
    responsibilities: [
      "Develop scalable applications using microservices architecture and industry best practices",
      "Manage client communications to ensure successful delivery of high-quality products",
      "Oversee production deployments, ensuring minimal downtime and efficient issue resolution",
      "Mentor junior developers and foster best practices to enhance overall team performance",
    ],
  },
  {
    role: "Software Engineer",
    company: "Intagleo Systems",
    period: "Aug 2022 — Jan 2025",
    location: "Lahore, Pakistan",
    responsibilities: [
      "Developed projects with MERN stack (MongoDB, Express, React, Node.js)",
      "Maintained Jira and Trello boards for project tracking and task management",
      "Handled client communication and requirements gathering",
      "Deployed projects on AWS and local servers with CI/CD practices",
    ],
  },
  {
    role: "React Javascript Developer",
    company: "Viltco Technologies",
    period: "Oct 2021 — Aug 2022",
    location: "Lahore, Pakistan",
    responsibilities: [
      "Built responsive and interactive user interfaces using React.js",
      "Collaborated with cross-functional teams to deliver high-quality web applications",
    ],
  },
  {
    role: "React js Web Developer",
    company: "Chirp Technologies",
    period: "Jul 2021 — Oct 2021",
    location: "Lahore, Pakistan",
    responsibilities: [
      "Developed web applications using React.js and modern JavaScript practices",
      "Implemented responsive designs and optimized user experiences",
    ],
  },
];

export const toolset: string[] = [
  "Node.js",
  "NestJS",
  "React.js",
  "TypeScript",
  "JavaScript",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "RabbitMQ",
  "Socket.io",
  "Amazon Web Services (AWS)",
  "Ruby on Rails",
  "Object-Oriented Programming (OOP)",
  "Digital Signage",
];

export const recommendations: Recommendation[] = [
  {
    name: "Ali Raza",
    role: "React JS Developer",
    company: "",
    text: "I've had the privilege of working with Saad, and he is an outstanding software engineer. His deep technical expertise and ability to solve complex problems have been invaluable to our team. Beyond that, Saad is approachable and always willing to help, whether it's mentoring others or offering advice. He's a true team player and leader, and I highly recommend him for any opportunity.",
  },
  {
    name: "Umair Khalid",
    role: "MERN Stack Developer",
    company: "",
    text: "I highly recommend Saad for his exceptional skills as a front-end developer. His expertise in React and Next.js consistently delivers high-quality, user-friendly applications. A true professional with a keen eye for detail, He is a valuable asset to any development team.",
  },
  {
    name: "Hamza Asad",
    role: "Senior SQA Engineer",
    company: "",
    text: "I highly recommend Saad Mehmood, an outstanding full stack developer on our team. Saad excels in both front-end and back-end development, delivering high-quality, scalable solutions. His problem-solving skills and attention to detail are exceptional, consistently producing flawless code and thorough testing.",
  },
  {
    name: "Momin Naveed",
    role: "Full Stack Web Developer | React Specialist",
    company: "",
    text: "Highly technical developer and enthusiastic learner. Did everything with spirit and always found a way to solve problems faced during development.",
  },
  {
    name: "Abid Saleem",
    role: "Principle Software Engineer",
    company: "",
    text: "I would like to highly recommend Saad Mehmood for any opportunities that come their way as a ReactJS developer. During their time working under my supervision, I've witnessed firsthand Saad's exceptional skills and dedication to their work. They consistently demonstrated a deep understanding of ReactJS and its associated technologies, contributing significantly to our projects. Saad Mehmood is not only proficient in writing clean and efficient code but also possesses a strong problem-solving ability, which has been invaluable in overcoming complex challenges. Their positive attitude, teamwork, and willingness to learn make them a valuable asset to any team.",
  },
  {
    name: "Muhammad Ahmad",
    role: "MERN Stack Developer",
    company: "",
    text: "A well-mannered and skilled colleague. I will recommend him with whole heart.",
  },
  {
    name: "Manohar Rahman",
    role: "Project Manager",
    company: "Viltco Technologies",
    text: "I highly recommend Saad Mehmood as a skilled and dedicated developer. During our time working together at viltco technologies, he consistently demonstrated exceptional technical expertise and a strong commitment to delivering high-quality software solutions.",
  },
  {
    name: "Maha Nadeem",
    role: "CHRP-Certified HR Professional",
    company: "",
    text: "I had the opportunity to witness Saad's exceptional work ethic and unwavering commitment to excellence. He consistently went above and beyond to support his colleagues, readily offering his assistance whenever needed. His willingness to lend a helping hand exemplified his collaborative nature and dedication to teamwork.",
  },
  {
    name: "Usama Rafiq",
    role: "SQA Engineer",
    company: "CureMD",
    text: "I highly recommend Saad for his exceptional coding skills and commitment to delivering high-quality software. He consistently meets deadlines, collaborates effectively across teams, and brings a proactive and detail oriented approach to development.",
  },
  {
    name: "Mudassar Alam",
    role: "Software Engineer | MERN Stack",
    company: "",
    text: "Saad is an outstanding developer, a true force on his own. His prowess extends effortlessly across both frontend and backend development, exemplifying excellence in both domains. Collaborating with Saad is a pleasure, and I confidently endorse him for his remarkable skills and unwavering commitment.",
  },
  {
    name: "Wajid Ali",
    role: "Software Engineer",
    company: "Meezan Bank",
    text: "Saad is a Good Developer and a one man army he is handling many products of international clients specifically from Ireland. I'll surely recommend him as his skills outclass in frontend as well as in backend, you'll surely enjoy working with him.",
  },
];

export const contact: ContactContent = {
  headline: "Let's build your next launch",
  copy:
    "I can help with greenfield products, migrations to Next.js, performance work, and production hardening for MERN apps.",
  email: "saadmehmood131@gmail.com",
  booking: "https://cal.com/",
  location: "Pakistan",
};

export const education: Education[] = [
  {
    institution: "National College Of Business Administration & Economics",
    credential: "Bachelor of Computer Science",
    field: "Computer Science",
    grade: "3.49 CGPA",
  },
  {
    institution: "Punjab Group Of Colleges",
    credential: "Intermediate of Computer Science",
    field: "Computer Science",
    grade: "Grade: A",
  },
  {
    institution: "Allied High School",
    credential: "Matric in Computer Science",
    field: "Computer Science",
    grade: "Grade: A+",
  },
];

export const blogs: Blog[] = [
  {
    title: "Streamlining User Registration and Authentication with Microsoft Graph API & Node.js",
    description:
      "Learn how to implement seamless user registration and authentication using Microsoft Graph API with Node.js. This guide covers integration patterns, best practices, and step-by-step implementation for building secure authentication flows.",
    link: "https://medium.com/@saadmehmood131/streamlining-user-registration-and-authentication-with-microsoft-graph-api-node-js-62136fa8aa3b",
    platform: "Medium",
    date: "2025",
    readTime: "5 min read",
    tags: ["Node.js", "Microsoft Graph API", "Authentication", "Backend Development"],
  },
];

