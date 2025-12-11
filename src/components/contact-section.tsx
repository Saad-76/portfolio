import { type ContactContent } from "@/data/portfolio";

type ContactSectionProps = {
  contact: ContactContent;
};

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <div className="space-y-4 sm:space-y-5">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">Contact</p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">{contact.headline}</h2>
        <p className="text-sm text-gray-700 max-w-2xl">
          Let&apos;s build your next launch together—greenfield builds, Next.js migrations, performance tuning, or production hardening.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
        {[
          { label: "Avg. response", value: "< 24 hours", icon: "⏱️" },
          { label: "Availability", value: "Remote · GMT+5", icon: "🌍" },
          { label: "Preferred", value: "Email or short call", icon: "📞" },
        ].map((item) => (
          <div key={item.label} className="rounded-xl border border-gray-200 bg-white p-3 sm:p-3.5 shadow-sm flex items-center gap-3">
            <span className="text-base">{item.icon}</span>
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-gray-600">{item.label}</p>
              <p className="text-sm font-semibold text-gray-900 mt-0.5">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-3 sm:gap-3.5 sm:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-4.5 flex items-start gap-3">
          <span className="text-base">🧭</span>
          <div>
            <p className="text-sm font-semibold text-gray-900">Project kickoff</p>
            <p className="mt-1 text-sm text-gray-700">Scope fast, propose a thin slice, and align on success metrics.</p>
          </div>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-4.5 flex items-start gap-3">
          <span className="text-base">⚡</span>
          <div>
            <p className="text-sm font-semibold text-gray-900">Migrations & performance</p>
            <p className="mt-1 text-sm text-gray-700">Next.js upgrades, caching, profiling, and DX improvements.</p>
          </div>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-gray-50/80 p-4 sm:p-4.5 flex items-start gap-3 sm:col-span-2">
          <span className="text-base">🤝</span>
          <div>
            <p className="text-sm font-semibold text-gray-900">Consulting & mentorship</p>
            <p className="mt-1 text-sm text-gray-700">Pairing on architecture, code reviews, and team enablement.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

