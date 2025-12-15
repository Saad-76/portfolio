import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects, type Project } from "@/data/portfolio";

const siteUrl = "https://portfolio-sandy-two-85.vercel.app";

export const metadata: Metadata = {
  title: "Projects by Saad Mehmood | Portfolio | Full Stack Developer",
  description: "Portfolio projects by Saad Mehmood - Senior Software Engineer. Featured work including MERN stack applications, Nest.js APIs, React applications, Next.js sites, and AWS deployments.",
  keywords: [
    "Saad Mehmood Projects",
    "Saad Mehmood Portfolio",
    "MERN Stack Projects",
    "Nest.js Projects",
    "React Projects",
    "Next.js Projects",
    "Full Stack Projects",
    "AWS Projects",
    "PostgreSQL Projects",
  ],
  alternates: {
    canonical: `${siteUrl}/projects`,
  },
  openGraph: {
    title: "Projects by Saad Mehmood | Portfolio",
    description: "Featured projects by Saad Mehmood - Full Stack Developer specializing in MERN stack, Nest.js, React, and Next.js.",
    url: `${siteUrl}/projects`,
  },
};

type GroupedProjects = { year: string; projects: Project[] }[];

const groupProjectsByYear = (projectList: Project[]): GroupedProjects => {
  const grouped: { [key: string]: Project[] } = {};
  const currentYear = new Date().getFullYear();

  projectList.forEach((project) => {
    let year = "Recent";
    if (project.status) {
      const yearMatch = project.status.match(/\d{4}/);
      if (yearMatch) {
        const projectYear = parseInt(yearMatch[0]);
        year = `${projectYear}`;
      } else {
        year = "Older";
      }
    } else {
      year = "Older";
    }

    if (!grouped[year]) {
      grouped[year] = [];
    }
    grouped[year].push(project);
  });

  return Object.keys(grouped)
    .sort((a, b) => {
      if (a === "Recent") return -1;
      if (b === "Recent") return 1;
      if (a === "Older") return 1;
      if (b === "Older") return -1;
      return parseInt(b) - parseInt(a);
    })
    .map((year) => ({ year, projects: grouped[year] }));
};

export default function ProjectsPage() {
  const groupedProjects = groupProjectsByYear(projects);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#3b82f608_1px,transparent_1px),linear-gradient(to_bottom,#3b82f608_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="glow -left-10 -top-20 h-72 w-72 bg-blue-500/20" />
      <div className="glow right-0 top-10 h-64 w-64 bg-blue-500/15" />
      <main className="relative mx-auto flex max-w-7xl flex-col gap-8 sm:gap-12 px-4 sm:px-6 pt-28 sm:pt-32 pb-12 sm:pb-16 lg:px-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex-1 text-center sm:text-left">
                <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-blue-600">Portfolio</p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900">All Projects</h1>
                <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-700">
                  A selection of client and personal projects built with React, Next.js, NestJS, MERN stack, PostgreSQL, and AWS.
                </p>
          </div>
          <Link
            href="/"
            className="card-hover rounded-full border border-gray-300 px-4 py-2 text-xs sm:text-sm font-semibold text-gray-700 transition-all hover:border-blue-500 hover:bg-blue-50 whitespace-nowrap self-start sm:self-center"
          >
            ← Back
          </Link>
        </div>

        <div className="flex flex-col gap-8 sm:gap-10 md:gap-12">
          {groupedProjects.map(({ year, projects: yearProjects }) => (
            <section key={year} className="rounded-3xl border border-gray-200/80 bg-white/70 backdrop-blur-sm shadow-sm p-5 sm:p-7">
              <div className="max-w-3xl mx-auto w-full sm:max-w-none sm:mx-0">
                <div className="flex flex-col sm:flex-row items-center sm:items-center sm:justify-between gap-3 mb-5 pb-3 border-b border-gray-200/80 text-center sm:text-left">
                  <div className="w-full sm:w-auto">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">{year}</h2>
                    <p className="mt-1 text-sm text-gray-600">{yearProjects.length} project{yearProjects.length !== 1 ? 's' : ''}</p>
                  </div>
                <span className="hidden sm:inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide self-center sm:self-auto">
                  Projects
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                </span>
                </div>
              </div>
              <div className="divide-y divide-gray-200/80">
                {yearProjects.map((project) => (
                  <a
                    key={project.title}
                    href={project.link}
                    className="group block px-2 sm:px-3 py-6 rounded-2xl transition-all hover:bg-blue-50/60 hover:shadow-md hover:shadow-blue-500/10"
                    target={project.link !== "#" ? "_blank" : undefined}
                    rel={project.link !== "#" ? "noreferrer" : undefined}
                  >
                    <div className="grid gap-6 lg:gap-10 grid-cols-1 lg:grid-cols-[1.6fr_1fr] items-start">
                      <div className="space-y-3 text-center sm:text-left">
                        <div className="flex items-start gap-3">
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 flex-wrap justify-center sm:justify-start text-center sm:text-left">
                              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                                {project.title}
                              </h3>
                              {project.status && (
                                <span className="rounded-full px-2.5 py-1 text-xs text-blue-700 bg-transparent border border-transparent sm:bg-blue-50 sm:border-blue-100 sm:border whitespace-nowrap">
                                  {project.status}
                                </span>
                              )}
                            </div>
                            <p className="mt-2 text-sm sm:text-base text-gray-700 leading-relaxed text-center sm:text-left">
                              {project.description}
                            </p>
                            {project.responsibilities && project.responsibilities.length > 0 && (
                              <ul className="mt-3 sm:mt-4 space-y-1.5 text-sm text-gray-600 list-disc pl-5 max-w-2xl mx-auto sm:mx-0 text-left">
                                {project.responsibilities.map((item, idx) => (
                                  <li key={idx}>{item}</li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                          {project.stack.slice(0, 5).map((tech) => (
                            <span key={tech} className="rounded-full px-2.5 py-1 text-xs text-gray-700 bg-gray-100 border border-gray-200">
                              {tech}
                            </span>
                          ))}
                          {project.stack.length > 5 && (
                            <span className="rounded-full px-2.5 py-1 text-xs text-gray-500 bg-gray-100 border border-gray-200">
                              +{project.stack.length - 5}
                            </span>
                          )}
                        </div>
                      </div>
                      {project.image && (
                        <div className="relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden bg-gray-100 border border-gray-200">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}

