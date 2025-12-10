import Link from "next/link";
import { SectionCard } from "@/components/section-card";
import { type Recommendation } from "@/data/portfolio";

type FeaturedTestimonialsProps = {
  recommendations: Recommendation[];
};

export function FeaturedTestimonials({ recommendations }: FeaturedTestimonialsProps) {
  const featured = recommendations.slice(0, 3);

  if (featured.length === 0) {
    return null;
  }

  return (
    <SectionCard className="bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-emerald-500/10 border-indigo-400/30">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
        <div className="min-w-0 flex-1">
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-indigo-300">Social Proof</p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold bg-gradient-to-r from-indigo-200 to-purple-200 bg-clip-text text-transparent break-words">
            What People Say
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            Trusted by colleagues and clients
          </p>
        </div>
        <Link
          href="/recommendations"
          className="card-hover rounded-full border border-indigo-400/40 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-indigo-300 transition-all hover:border-indigo-400/60 hover:bg-indigo-500/10 whitespace-nowrap flex-shrink-0"
        >
          View All →
        </Link>
      </div>
      <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 md:grid-cols-3">
        {featured.map((rec, idx) => (
          <div
            key={idx}
            className="glass card-hover group flex flex-col rounded-xl sm:rounded-2xl p-4 sm:p-5 border-indigo-500/30 hover:border-indigo-500/50 bg-gradient-to-br from-indigo-500/10 to-purple-500/5 hover:from-indigo-500/20 hover:to-purple-500/10 transition-all shadow-lg hover:shadow-xl hover:shadow-indigo-500/20"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className="mb-3 sm:mb-4">
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-400/50"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed flex-grow mb-4 line-clamp-4">
              &ldquo;{rec.text}&rdquo;
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-indigo-500/20">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 flex items-center justify-center text-slate-900 font-bold text-sm sm:text-base flex-shrink-0">
                {rec.name.charAt(0)}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs sm:text-sm font-semibold text-slate-50 truncate">
                  {rec.name}
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 truncate">
                  {rec.role} {rec.company && `· ${rec.company}`}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

