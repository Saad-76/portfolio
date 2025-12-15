export type Project = {
  title: string;
  description: string;
  stack: string[];
  link: string;
  status?: string;
  image?: string;
  responsibilities?: string[];
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
    "Full stack developer building production-ready web applications with React, Next.js, NestJS, and Node.js. I work with PostgreSQL and MongoDB databases, deploy to AWS and Azure, and build APIs, microservices, and authentication systems that scale.",
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
  { value: "4y+", label: "MERN stack development" },
  { value: "98%", label: "Uptime on production apps" },
  { value: "CI/CD", label: "AWS and Azure deployments" },
];

export const projects: Project[] = [
  {
    title: "Digital Signage CMS (Microservices)",
    description:
      "Multi-tenant digital signage platform where I built a custom API gateway, modular services, and reliable messaging so new screens can be onboarded without downtime.",
    stack: ["React", "Redux Toolkit", "NestJS", "TypeORM", "PostgreSQL", "Redis", "RabbitMQ", "AWS", "Azure"],
    link: "#",
    status: "Apr 2025",
    responsibilities: [
      "Designed and implemented the NestJS microservices architecture and custom API gateway.",
      "Integrated Redis, RabbitMQ, and PostgreSQL to keep messaging and data flows reliable.",
      "Collaborated with frontend developers to align API contracts with React/Redux needs.",
    ],
  },
  {
    title: "AI Interview Platform",
    description:
      "Interview management tool where candidates answer AI-generated questions and are scored automatically through a Python/Gemini service that I wired into the core workflow.",
    stack: ["Ruby on Rails", "PostgreSQL", "Python AI service", "ActiveRecord"],
    link: "#",
    status: "Feb–Jun 2025",
    responsibilities: [
      "Extended the Rails application with new flows for AI‑generated interviews.",
      "Connected the Python/Gemini scoring service with secure APIs and background jobs.",
      "Worked with stakeholders to refine scoring logic and reporting views.",
    ],
  },
  {
    title: "AI Content Ops",
    description:
      "Content operations system for marketing teams, built with Next.js and Node/TS, using Azure B2C login, webhooks, sockets, Stripe billing, and automation with ChatGPT and Adobe InDesign.",
    stack: ["Next.js", "Node/TS", "Express", "TypeORM", "PostgreSQL", "Azure B2C", "Stripe", "Redis", "Socket"],
    link: "#",
    status: "Apr 2024–Mar 2025",
    responsibilities: [
      "Built core Next.js pages and Node/TS APIs for content workflows and approvals.",
      "Integrated Azure B2C auth, Stripe billing, and webhooks for external services.",
      "Implemented socket‑based realtime updates and automation with ChatGPT and InDesign.",
    ],
  },
  {
    title: "Trading Mobile App Backend",
    description: "Backend for a trading mobile app using NestJS, Prisma, and PostgreSQL, focused on getting features out quickly while keeping data and calculations correct.",
    stack: ["NestJS", "TypeScript", "Prisma", "PostgreSQL"],
    link: "#",
    status: "Jan–Feb 2025",
    responsibilities: [
      "Implemented RESTful APIs in NestJS to power core trading flows and account management.",
      "Introduced Redis caching to reduce database load when updating trade and status data.",
      "Used Prisma with PostgreSQL for type-safe queries and schema management.",
      "Handled client communication and delivered features continuously during the project timeline.",
    ],
  },
  {
    title: "Flight Data Management",
    description:
      "Operations console for airline data with a React/MUI frontend and a NestJS/TypeORM API, deployed to AWS with clean repository patterns and a focus on day-to-day usability.",
    stack: ["React", "MUI", "React Query", "NestJS", "TypeORM", "PostgreSQL", "AWS"],
    link: "#",
    status: "Apr–Jun 2024",
    responsibilities: [
      "Set up the NestJS backend with TypeORM and connected it to the PNR database to fetch flight data.",
      "Normalized and stored flight and booking data in PostgreSQL so it was easier to query and report on.",
      "Designed and built the React frontend using MUI and React Query for data fetching and state handling.",
    ],
  },
  {
    title: "Premium Lemo",
    description: "Automotive website built with Next.js and Tailwind/DaisyUI, tuned for quick page loads and a clean browsing experience on both desktop and mobile.",
    stack: ["Next.js", "TypeScript", "Tailwind", "DaisyUI"],
    link: "#",
    status: "Mar–Apr 2024",
    responsibilities: [
      "Built a static marketing site for an automotive brand using Next.js for routing and page generation.",
      "Used Tailwind CSS with DaisyUI components to design a clean, responsive layout for showcasing vehicles.",
      "Optimized images and layout for fast loading times on both desktop and mobile devices.",
    ],
  },
  {
    title: "Digital Signage CMS (MERN SaaS)",
    description:
      "SaaS digital signage content management system built on the MERN stack, with canvas-based layout editing, real-time screen updates, and Stripe billing for subscription plans.",
    stack: ["React", "Material UI", "Redux", "RTC", "Fabric.js", "Node", "Express", "Sequelize", "PostgreSQL", "Stripe", "S3"],
    link: "#",
    status: "Jan–Mar 2024",
    responsibilities: [
      "Built the SaaS digital signage CMS on the MERN stack with React on the client and Node/Express on the server.",
      "Implemented canvas-based screen design, real-time updates, and media storage using Fabric.js, RTC, PostgreSQL, and S3.",
      "Integrated Stripe for subscription billing and managed the codebase with Git.",
    ],
  },
  {
    title: "Ecommerce Site (MERN)",
    description:
      "Full MERN e‑commerce store with Stripe payments, Redux state management, and S3 media storage so the client could manage products, orders, and assets in one place.",
    stack: ["React", "Material UI", "Redux", "Node", "Express", "Sequelize", "PostgreSQL", "Stripe", "S3"],
    link: "#",
    status: "Jan–Feb 2024",
    responsibilities: [
      "Built the e-commerce frontend with React, Material UI, Formik forms, and Redux for state management, plus real-time updates using RTC.",
      "Developed the backend API with Node.js, Express.js, Sequelize ORM, and PostgreSQL, using S3 for product images and media storage.",
      "Integrated Stripe payment gateway for secure checkout and managed the project with Git version control.",
    ],
  },
  {
    title: "Debian OS Application",
    description:
      "Debian (.deb) desktop application using realtime sockets, push notifications, and S3-backed media so updates reach users without manual refreshes.",
    stack: ["Node", "Express", "Socket.io", "jQuery", "Bootstrap", "PNS", "S3"],
    link: "#",
    status: "Oct–Dec 2023",
  },
  {
    title: "Windows Application",
    description:
      "Windows (.exe) desktop application backed by a Node/Express API with sockets, push notifications, and S3 media storage for a smoother user experience.",
    stack: ["Node", "Express", "Socket.io", "jQuery", "Bootstrap", "PNS", "S3"],
    link: "#",
    status: "May–Dec 2023",
  },
  {
    title: "AGI Cybersecurity for Quantum Cloud Robotics",
    description:
      "Research prototype exploring how machine learning and early AGI techniques could detect and prevent security issues in quantum cloud robotics workloads.",
    stack: ["ML/AGI", "Cloud Robotics"],
    link: "#",
    status: "Nov 2022–Jun 2023",
  },
  {
    title: "Internal Management System",
    description:
      "Internal operations system with canvas-style tooling and analytics dashboards, deployed to AWS to support the client’s internal teams.",
    stack: ["React", "Fabric.js", "Redux", "Material UI", "Formik", "Charts", "AWS"],
    link: "#",
    status: "Nov 2022–May 2023",
  },
  {
    title: "Blog Site",
    description:
      "Lightweight blog site built with React and Tailwind CSS, using client-side routing for smooth navigation between posts.",
    stack: ["React", "Tailwind", "React Router"],
    link: "#",
    status: "Jan–Feb 2023",
  },
  {
    title: "SaaS Product",
    description:
      "Software-as-a-service product with a React front‑end and Ruby on Rails backend, built to onboard customers quickly and support recurring usage.",
    stack: ["React", "Ruby on Rails"],
    link: "#",
    status: "Aug–Nov 2022",
  },
  {
    title: "Kunji · Society Management",
    description:
      "Society management web application using React, Redux‑Saga, and Material UI to handle residents, payments, and administration tasks.",
    stack: ["React", "Redux-Saga", "Material UI"],
    link: "#",
    status: "Feb–Aug 2022",
  },
  {
    title: "ROXO · Crypto Gaming",
    description:
      "Crypto gaming website built with React where users can play multiple games and earn ROXO tokens as rewards.",
    stack: ["React"],
    link: "#",
    status: "Jan–Jun 2022",
  },
  {
    title: "Arkad · Admin Portal",
    description:
      "Admin portal built with React to manage users, content, and configuration from a simple web dashboard.",
    stack: ["React"],
    link: "#",
    status: "Feb–Mar 2022",
  },
  {
    title: "Coast Collectibles",
    description:
      "Commerce site for collectibles built with React, focused on clear product presentation and an easy browsing experience.",
    stack: ["React"],
    link: "#",
    status: "Jan–Feb 2022",
  },
  {
    title: "Meta Street Apes",
    description:
      "NFT landing site built with React to showcase the Meta Street Apes collection and guide users into the ecosystem.",
    stack: ["React"],
    link: "#",
    status: "Jan–Feb 2022",
  },
  {
    title: "Buey Tuhan",
    description:
      "Marketing website built with React to present the Buey Tuhan brand and core offerings.",
    stack: ["React"],
    link: "#",
    status: "Jan 2022",
  },
  {
    title: "Xee Verse Token",
    description:
      "Gaming and token site built with React to promote the Xee Verse token and related experiences.",
    stack: ["React"],
    link: "#",
    status: "Dec 2021–Jan 2022",
  },
  {
    title: "Gaming Website",
    description:
      "Gaming-focused website built with React to highlight titles, news, and community updates.",
    stack: ["React"],
    link: "#",
    status: "Jan 2022",
  },
  {
    title: "Kenya Exports",
    description:
      "Exports-focused website built with React to showcase Kenyan products and connect buyers with suppliers.",
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
    "Whether you're building a new web application from scratch, migrating to Next.js, optimizing your React app performance, or need help getting your MERN stack ready for production, I can help. I've built projects from the ground up and improved existing applications to handle real users.",
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

