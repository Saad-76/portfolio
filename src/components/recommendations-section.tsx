import { SectionCard } from "@/components/section-card";
import { type Recommendation } from "@/data/portfolio";

type RecommendationsSectionProps = {
  recommendations: Recommendation[];
};

export function RecommendationsSection({ recommendations }: RecommendationsSectionProps) {
  if (recommendations.length === 0) {
    return null;
  }

  return (
    <SectionCard>
      <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Recommendations</p>
      <h2 className="text-3xl font-semibold text-slate-50">What colleagues say</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {recommendations.map((rec, idx) => (
          <div key={idx} className="rounded-2xl border border-slate-800/60 bg-white/5 p-5">
            <p className="text-sm text-slate-300 italic">&ldquo;{rec.text}&rdquo;</p>
            <div className="mt-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center text-slate-900 font-semibold">
                {rec.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-50">{rec.name}</p>
                <p className="text-xs text-slate-400">
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

