import Image from "next/image";
import Link from "next/link";
import { SectionCard } from "@/components/section-card";
import { projects } from "@/data/portfolio";

export default function ProjectsPage() {
  // Group projects by year based on status
  const groupProjectsByYear = () => {
    const grouped: { [key: string]: typeof projects } = {};
    const currentYear = new Date().getFullYear();
    
    projects.forEach((project) => {
      let year = "Recent";
      if (project.status) {
        // Extract year from status (e.g., "Apr 2025" -> "2025")
        const yearMatch = project.status.match(/\d{4}/);
        if (yearMatch) {
          const projectYear = parseInt(yearMatch[0]);
          if (projectYear === currentYear || projectYear === currentYear - 1) {
            year = `${projectYear}`;
          } else {
            year = `${projectYear}`;
          }
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
    
    // Sort years descending
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

  const groupedProjects = groupProjectsByYear();

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="glow -left-10 -top-20 h-72 w-72 bg-indigo-500/50" />
      <div className="glow right-0 top-10 h-64 w-64 bg-purple-500/40" />
      <main className="relative mx-auto flex max-w-6xl flex-col gap-8 sm:gap-12 px-4 sm:px-6 pt-28 sm:pt-32 pb-12 sm:pb-16 lg:px-0">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex-1">
            <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-indigo-300">Portfolio</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-indigo-200 to-purple-200 bg-clip-text text-transparent">All Projects</h1>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-300">A collection of projects built with modern technologies</p>
          </div>
          <Link
            href="/"
            className="card-hover rounded-full border border-indigo-400/40 px-4 py-2 text-xs sm:text-sm font-semibold text-indigo-300 transition-all hover:border-indigo-400/60 hover:bg-indigo-500/10 whitespace-nowrap self-start sm:self-center"
          >
            ← Back
          </Link>
        </div>

        <div className="flex flex-col gap-8 sm:gap-10 md:gap-12">
          {groupedProjects.map(({ year, projects: yearProjects }) => (
            <SectionCard key={year}>
              <div className="mb-6 pb-4 border-b border-indigo-500/20">
                <h2 className="text-xl sm:text-2xl font-semibold text-indigo-200">{year}</h2>
                <p className="mt-1 text-sm text-slate-400">{yearProjects.length} project{yearProjects.length !== 1 ? 's' : ''}</p>
              </div>
              <div className="grid gap-5 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {yearProjects.map((project) => (
                  <a
                    key={project.title}
                    href={project.link}
                    className="glass card-hover group flex h-full flex-col rounded-xl sm:rounded-2xl overflow-hidden transition-all border-indigo-500/20 hover:border-indigo-500/40"
                    target={project.link !== "#" ? "_blank" : undefined}
                    rel={project.link !== "#" ? "noreferrer" : undefined}
                  >
                    {project.image && (
                      <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-slate-800/50">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    )}
                    <div className="flex flex-col flex-grow p-5 sm:p-6">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <h3 className="text-lg sm:text-xl font-semibold text-slate-50 group-hover:text-indigo-300 transition-colors flex-1 min-w-0">
                          {project.title}
                        </h3>
                        {project.status && (
                          <span className="tag rounded-full px-2.5 py-1 text-xs text-indigo-200 bg-indigo-500/20 border-indigo-400/30 flex-shrink-0 whitespace-nowrap">
                            {project.status}
                          </span>
                        )}
                      </div>
                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed flex-grow mb-4">{project.description}</p>
                      <div className="mt-auto flex flex-wrap gap-2">
                        {project.stack.slice(0, 5).map((tech) => (
                          <span key={tech} className="tag rounded-full px-2.5 py-1 text-xs text-slate-200 bg-slate-800/50">
                            {tech}
                          </span>
                        ))}
                        {project.stack.length > 5 && (
                          <span className="tag rounded-full px-2.5 py-1 text-xs text-slate-400">
                            +{project.stack.length - 5}
                          </span>
                        )}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </SectionCard>
          ))}
        </div>
      </main>
    </div>
  );
}

