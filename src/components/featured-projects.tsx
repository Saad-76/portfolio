import Link from "next/link";
import { SectionCard } from "@/components/section-card";
import { type Project } from "@/data/portfolio";

type FeaturedProjectsProps = {
  projects: Project[];
};

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const featured = projects.slice(0, 4);

  return (
    <SectionCard>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
        <div className="min-w-0 flex-1">
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-indigo-300">Featured Work</p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold bg-gradient-to-r from-indigo-200 to-purple-200 bg-clip-text text-transparent break-words">Recent Projects</h2>
        </div>
        <Link
          href="/projects"
          className="card-hover rounded-full border border-indigo-400/40 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-indigo-300 transition-all hover:border-indigo-400/60 hover:bg-indigo-500/10 whitespace-nowrap flex-shrink-0"
        >
          View All →
        </Link>
      </div>
      <div className="mt-5 sm:mt-6 md:mt-8 grid gap-3 sm:gap-4 md:gap-6 grid-cols-1 md:grid-cols-2">
        {featured.map((project) => (
          <a
            key={project.title}
            href={project.link}
            className="glass card-hover group flex h-full flex-col rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all border-indigo-500/20"
            target={project.link !== "#" ? "_blank" : undefined}
            rel={project.link !== "#" ? "noreferrer" : undefined}
          >
            <div className="flex items-start justify-between">
              <h3 className="text-lg sm:text-xl font-semibold text-slate-50 group-hover:text-indigo-300 transition-colors">
                {project.title}
              </h3>
              {project.status && (
                <span className="tag rounded-full px-2 sm:px-3 py-0.5 sm:py-1 text-xs text-indigo-200 bg-indigo-500/20 border-indigo-400/30">
                  {project.status}
                </span>
              )}
            </div>
            <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">{project.description}</p>
            <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
              {project.stack.slice(0, 4).map((tech) => (
                <span key={tech} className="tag rounded-full px-2.5 py-1 text-xs text-slate-200">
                  {tech}
                </span>
              ))}
              {project.stack.length > 4 && (
                <span className="tag rounded-full px-2.5 py-1 text-xs text-slate-400">
                  +{project.stack.length - 4} more
                </span>
              )}
            </div>
          </a>
        ))}
      </div>
    </SectionCard>
  );
}

