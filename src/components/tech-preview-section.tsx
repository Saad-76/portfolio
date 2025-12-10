import { SectionCard } from "@/components/section-card";
import { type HeroContent } from "@/data/portfolio";

type TechPreviewSectionProps = {
  toolset: string[];
};

export function TechPreviewSection({ toolset }: TechPreviewSectionProps) {
  const featuredTech = toolset.slice(0, 12);

  return (
    <SectionCard className="bg-gradient-to-br from-slate-800/50 to-indigo-900/20 border-indigo-400/30">
      <div className="text-center mb-6 sm:mb-8">
        <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-indigo-300">Tech Stack</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold bg-gradient-to-r from-indigo-200 to-purple-200 bg-clip-text text-transparent mt-2">
          Technologies I Work With
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
          A selection of modern tools and technologies I use to build amazing products
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        {featuredTech.map((tech) => (
          <div
            key={tech}
            className="glass card-hover px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 hover:bg-indigo-500/20 hover:border-indigo-500/50 transition-all group"
          >
            <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-indigo-200 transition-colors">
              {tech}
            </span>
          </div>
        ))}
        {toolset.length > 12 && (
          <div className="glass px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-slate-600/30 bg-slate-700/20">
            <span className="text-xs sm:text-sm font-medium text-slate-400">
              +{toolset.length - 12} more
            </span>
          </div>
        )}
      </div>
      <div className="mt-6 sm:mt-8 text-center">
        <a
          href="/about"
          className="inline-flex items-center gap-2 text-sm sm:text-base text-indigo-300 hover:text-indigo-200 transition-colors group"
        >
          <span>View all skills</span>
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </SectionCard>
  );
}

