import { SectionCard } from "@/components/section-card";
import { type ContactContent } from "@/data/portfolio";

type ContactSectionProps = {
  contact: ContactContent;
};

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <SectionCard>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Contact</p>
          <h2 className="text-3xl font-semibold text-slate-50">{contact.headline}</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-300">{contact.copy}</p>
          {contact.location && (
            <p className="mt-2 text-xs text-slate-400">📍 {contact.location}</p>
          )}
        </div>
        <div className="flex gap-3">
          <a
            href={`mailto:${contact.email}`}
            className="card-hover rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-900"
          >
            Email Me
          </a>
          <a
            href={contact.booking}
            className="card-hover rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100"
          >
            Book a call
          </a>
        </div>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-800/60 bg-white/5 p-4">
          <p className="text-xl font-semibold text-slate-50">MERN + TypeScript</p>
          <p className="mt-2 text-sm text-slate-300">Robust APIs with clean contracts and strong typing.</p>
        </div>
        <div className="rounded-2xl border border-slate-800/60 bg-white/5 p-4">
          <p className="text-xl font-semibold text-slate-50">Performance</p>
          <p className="mt-2 text-sm text-slate-300">Edge caching, server components, and profiler-driven wins.</p>
        </div>
        <div className="rounded-2xl border border-slate-800/60 bg-white/5 p-4">
          <p className="text-xl font-semibold text-slate-50">Delivery</p>
          <p className="mt-2 text-sm text-slate-300">Automated previews, CI/CD guardrails, and observability hooks.</p>
        </div>
      </div>
    </SectionCard>
  );
}

