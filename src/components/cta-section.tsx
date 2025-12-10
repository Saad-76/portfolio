import Link from "next/link";
import { SectionCard } from "@/components/section-card";
import { type ContactContent } from "@/data/portfolio";

type CTASectionProps = {
  contact: ContactContent;
};

export function CTASection({ contact }: CTASectionProps) {
  return (
    <SectionCard className="bg-gradient-to-br from-indigo-500/15 via-purple-500/10 to-emerald-500/15 border-indigo-400/30">
      <div className="flex flex-col items-center gap-5 sm:gap-6 text-center">
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-indigo-300 via-purple-300 to-emerald-300 bg-clip-text text-transparent">
            {contact.headline}
          </h2>
          <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-slate-300 px-2">{contact.copy}</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
          <a
            href={`mailto:${contact.email}`}
            className="card-hover rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white transition-all hover:from-indigo-400 hover:to-purple-400 shadow-lg shadow-indigo-500/30 w-full sm:w-auto"
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

