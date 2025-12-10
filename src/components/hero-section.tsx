import { SectionCard } from "@/components/section-card";
import { type HeroContent, type Metric } from "@/data/portfolio";

type HeroSectionProps = {
  hero: HeroContent;
  metrics: Metric[];
};

export function HeroSection({ hero, metrics }: HeroSectionProps) {
  return (
    <SectionCard>
      <div className="flex flex-col gap-5 md:gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-3 sm:space-y-4 flex-1 min-w-0">
          <p className="text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.25em] text-indigo-300">{hero.subtitle}</p>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight bg-gradient-to-r from-indigo-200 via-purple-200 to-emerald-200 bg-clip-text text-transparent break-words">
            {hero.title}
          </h1>
          <p className="max-w-2xl text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed">{hero.summary}</p>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {hero.badges.map((badge) => (
              <span key={badge} className="tag rounded-full px-2.5 sm:px-3 py-1 text-xs sm:text-sm text-slate-200 whitespace-nowrap">
                {badge}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 lg:items-end lg:flex-shrink-0">
          <div className="flex flex-wrap gap-2 sm:gap-3 w-full sm:w-auto">
            <a
              href={hero.actions.contact}
              className="card-hover rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all hover:from-indigo-400 hover:to-purple-400 text-center whitespace-nowrap flex-1 sm:flex-initial"
            >
              Contact
            </a>
            <a
              href={hero.actions.linkedin}
              className="card-hover rounded-full border border-indigo-400/40 px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-indigo-300 transition-all hover:border-indigo-400/60 hover:bg-indigo-500/10 text-center whitespace-nowrap flex-1 sm:flex-initial"
            >
              LinkedIn
            </a>
            <a
              href={hero.actions.github}
              className="card-hover rounded-full border border-purple-400/40 px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-purple-300 transition-all hover:border-purple-400/60 hover:bg-purple-500/10 text-center whitespace-nowrap flex-1 sm:flex-initial"
            >
              GitHub
            </a>
          </div>
          {hero.secondaryBadges.map((badge) => (
            <p key={badge} className="text-xs uppercase tracking-[0.3em] text-slate-400 text-center lg:text-right">
              {badge}
            </p>
          ))}
        </div>
      </div>
      <div className="mt-6 sm:mt-8 md:mt-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 md:gap-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="glass card-hover rounded-lg sm:rounded-xl md:rounded-2xl p-2.5 sm:p-3 md:p-4 border-indigo-500/20">
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent leading-tight">{metric.value}</p>
            <p className="text-[10px] sm:text-xs md:text-sm text-slate-400 mt-0.5 sm:mt-1 leading-tight">{metric.label}</p>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

