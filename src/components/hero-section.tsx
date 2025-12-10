import { SectionCard } from "@/components/section-card";
import { type HeroContent, type Metric } from "@/data/portfolio";

type HeroSectionProps = {
  hero: HeroContent;
  metrics: Metric[];
};

export function HeroSection({ hero, metrics }: HeroSectionProps) {
  return (
    <SectionCard className="relative overflow-hidden border-indigo-400/40 bg-gradient-to-br from-indigo-500/15 via-purple-500/10 to-emerald-500/10 shadow-2xl shadow-indigo-500/20">
      {/* Animated gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl pointer-events-none animate-float" style={{ animationDelay: "0s" }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none animate-float" style={{ animationDelay: "4s" }} />
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 shimmer-effect pointer-events-none opacity-30" />
      
      <div className="relative flex flex-col gap-5 md:gap-8 lg:flex-row lg:items-center lg:justify-between z-10">
        <div className="space-y-3 sm:space-y-4 flex-1 min-w-0">
          <p className="text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.25em] text-indigo-300 font-medium">
            {hero.subtitle}
          </p>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight bg-gradient-to-r from-indigo-200 via-purple-200 via-emerald-200 to-cyan-200 bg-clip-text text-transparent break-words gradient-animated">
            {hero.title}
          </h1>
          <p className="max-w-2xl text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed">
            {hero.summary}
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {hero.badges.map((badge) => (
              <span key={badge} className="tag rounded-full px-3 sm:px-4 py-1.5 text-xs sm:text-sm text-slate-200 bg-indigo-500/20 border-indigo-400/30 hover:bg-indigo-500/30 transition-colors whitespace-nowrap">
                {badge}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 lg:items-end lg:flex-shrink-0">
          <div className="flex flex-wrap gap-2 sm:gap-3 w-full sm:w-auto">
            <a
              href={hero.actions.contact}
              className="card-hover rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-xl shadow-indigo-500/40 transition-all hover:from-indigo-400 hover:via-purple-400 hover:to-pink-400 hover:shadow-2xl hover:shadow-indigo-500/50 text-center whitespace-nowrap flex-1 sm:flex-initial gradient-animated"
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
      <div className="mt-6 sm:mt-8 md:mt-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 relative z-10">
        {metrics.map((metric, index) => (
          <div 
            key={metric.label} 
            className="glass card-hover rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 border-indigo-500/30 bg-gradient-to-br from-indigo-500/10 to-purple-500/5 hover:from-indigo-500/20 hover:to-purple-500/10 transition-all shadow-lg hover:shadow-xl hover:shadow-indigo-500/20"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <p className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-300 via-purple-300 to-emerald-300 bg-clip-text text-transparent leading-tight">{metric.value}</p>
            <p className="text-[10px] sm:text-xs md:text-sm text-slate-300 mt-1 sm:mt-2 leading-tight font-medium">{metric.label}</p>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

