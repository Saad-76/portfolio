import Link from "next/link";
import { SectionCard } from "@/components/section-card";
import { type ContactContent } from "@/data/portfolio";

type CTASectionProps = {
  contact: ContactContent;
};

export function CTASection({ contact }: CTASectionProps) {
  return (
    <SectionCard className="bg-gradient-to-br from-indigo-500/20 via-purple-500/15 to-emerald-500/20 border-indigo-400/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-emerald-500/10 animate-float pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="relative flex flex-col items-center gap-5 sm:gap-6 text-center z-10">
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-indigo-300 via-purple-300 via-emerald-300 to-cyan-300 bg-clip-text text-transparent gradient-animated">
            {contact.headline}
          </h2>
          <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-slate-200 px-2 font-medium">{contact.copy}</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
          <a
            href={`mailto:${contact.email}`}
            className="card-hover rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white transition-all hover:from-indigo-400 hover:via-purple-400 hover:to-pink-400 shadow-xl shadow-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/50 w-full sm:w-auto gradient-animated"
          >
            Get In Touch
          </a>
          <Link
            href="/experience"
            className="card-hover rounded-full border border-indigo-400/40 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-indigo-300 transition-all hover:border-indigo-400/60 hover:bg-indigo-500/10 w-full sm:w-auto"
          >
            View Experience
          </Link>
          <Link
            href="/about"
            className="card-hover rounded-full border border-purple-400/40 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-purple-300 transition-all hover:border-purple-400/60 hover:bg-purple-500/10 w-full sm:w-auto"
          >
            Learn More
          </Link>
        </div>
      </div>
    </SectionCard>
  );
}

