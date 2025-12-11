import Image from "next/image";
import Link from "next/link";
import { type Project } from "@/data/portfolio";

type ProjectsSectionProps = {
  projects: Project[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const featured = projects.slice(0, 4);

  return (
    <section className="relative py-12 lg:py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-6 mb-12">
              <div className="text-center sm:text-left flex-1">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 text-gray-900">
              Featured Projects
            </h2>
                <p className="text-lg text-gray-700">
              A showcase of my recent work
            </p>
          </div>
          <Link
            href="/projects"
            className="hidden sm:flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 hover:border-blue-500 transition-all backdrop-blur-sm"
          >
            View All
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {featured.map((project, index) => (
            <a
              key={project.title}
              href={project.link}
              target={project.link !== "#" ? "_blank" : undefined}
              rel={project.link !== "#" ? "noreferrer" : undefined}
              className="group relative block"
            >
              <div className="relative h-full rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-lg hover:border-blue-500 transition-all hover:scale-[1.02]">
                {project.image && (
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
                  </div>
                )}
                
                <div className="p-8">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 transition-colors flex-1">
                      {project.title}
                    </h3>
                    {project.status && (
                      <span className="px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-xs text-blue-700 font-medium whitespace-nowrap">
                        {project.status}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-gray-100 border border-gray-200 text-xs text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="px-3 py-1 rounded-lg bg-gray-100 border border-gray-200 text-xs text-gray-500">
                        +{project.stack.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

