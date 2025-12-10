import Link from "next/link";
import { ExperienceSection } from "@/components/experience-section";
import { SectionCard } from "@/components/section-card";
import { experiences, metrics } from "@/data/portfolio";

export default function ExperiencePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="glow -left-10 -top-20 h-72 w-72 bg-indigo-500/50" />
      <div className="glow right-0 top-10 h-64 w-64 bg-emerald-400/40" />
      <main className="relative mx-auto flex max-w-6xl flex-col gap-8 sm:gap-12 px-4 sm:px-6 pt-28 sm:pt-32 pb-12 sm:pb-16 lg:px-0">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex-1">
            <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-indigo-300">Career</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-indigo-200 to-purple-200 bg-clip-text text-transparent">Professional Experience</h1>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-300">4+ years building scalable applications and leading teams</p>
          </div>
          <Link
            href="/"
            className="card-hover rounded-full border border-indigo-400/40 px-4 py-2 text-xs sm:text-sm font-semibold text-indigo-300 transition-all hover:border-indigo-400/60 hover:bg-indigo-500/10 whitespace-nowrap self-start sm:self-center"
          >
            ← Back
          </Link>
        </div>

        <div className="grid gap-4 sm:gap-6 grid-cols-1 lg:grid-cols-3">
          <SectionCard className="lg:col-span-2 h-full">
            <ExperienceSection experiences={experiences} />
          </SectionCard>
          <SectionCard>
            <p className="text-sm uppercase tracking-[0.25em] text-indigo-300">Impact</p>
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-indigo-200 to-purple-200 bg-clip-text text-transparent mb-6">Key Metrics</h2>
            <div className="space-y-4">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-indigo-500/20 bg-white/5 p-4">
                  <p className="text-3xl font-semibold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">{metric.value}</p>
                  <p className="text-sm text-slate-400 mt-1">{metric.label}</p>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>
      </main>
    </div>
  );
}

