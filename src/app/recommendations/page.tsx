import Link from "next/link";
import { RecommendationsSection } from "@/components/recommendations-section";
import { recommendations } from "@/data/portfolio";

export default function RecommendationsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="glow -left-10 -top-20 h-72 w-72 bg-indigo-500/50" />
      <div className="glow right-0 top-10 h-64 w-64 bg-emerald-400/40" />
      <div className="glow left-1/2 bottom-0 h-80 w-80 -translate-x-1/2 bg-purple-500/40" />
      <main className="relative mx-auto flex max-w-6xl flex-col gap-8 sm:gap-12 px-4 sm:px-6 pt-28 sm:pt-32 pb-12 sm:pb-16 lg:px-0">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex-1">
            <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-indigo-300">Testimonials</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-indigo-200 to-purple-200 bg-clip-text text-transparent">Recommendations</h1>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-300">What colleagues and clients say about working with me</p>
          </div>
          <Link
            href="/"
            className="card-hover rounded-full border border-indigo-400/40 px-4 py-2 text-xs sm:text-sm font-semibold text-indigo-300 transition-all hover:border-indigo-400/60 hover:bg-indigo-500/10 whitespace-nowrap self-start sm:self-center"
          >
            ← Back
          </Link>
        </div>

        <RecommendationsSection recommendations={recommendations} />
      </main>
    </div>
  );
}

