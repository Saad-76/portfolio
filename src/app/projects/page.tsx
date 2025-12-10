import Link from "next/link";
import { SectionCard } from "@/components/section-card";
import { projects } from "@/data/portfolio";

export default function ProjectsPage() {
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

        <SectionCard>
          <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.link}
                className="glass card-hover group flex h-full flex-col rounded-xl sm:rounded-2xl p-4 sm:p-5 transition-all border-indigo-500/20"
                target={project.link !== "#" ? "_blank" : undefined}
                rel={project.link !== "#" ? "noreferrer" : undefined}
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-slate-50 group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                  {project.status && (
                    <span className="tag rounded-full px-2.5 py-1 text-xs text-indigo-200 bg-indigo-500/20 border-indigo-400/30 ml-2 flex-shrink-0">
                      {project.status}
                    </span>
                  )}
                </div>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed flex-grow">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tag rounded-full px-2.5 py-1 text-xs text-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </SectionCard>
      </main>
    </div>
  );
}

