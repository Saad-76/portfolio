import { type Experience } from "@/data/portfolio";

type ExperienceSectionProps = {
  experiences: Experience[];
};

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <div className="h-full">
      <p className="text-sm uppercase tracking-[0.25em] text-indigo-300">Experience</p>
      <h2 className="text-3xl font-semibold bg-gradient-to-r from-indigo-200 to-purple-200 bg-clip-text text-transparent">Professional Journey</h2>
      <div className="mt-6 space-y-5">
        {experiences.map((item, idx) => (
          <div key={`${item.role}-${idx}`} className="rounded-2xl border border-indigo-500/20 bg-white/5 p-5">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-50">{item.role}</h3>
                <p className="text-sm text-slate-300">{item.company}</p>
                {item.location && (
                  <p className="text-xs text-slate-400 mt-1">{item.location}</p>
                )}
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{item.period}</p>
            </div>
            <ul className="mt-4 space-y-2">
              {item.responsibilities.map((responsibility, rIdx) => (
                <li key={rIdx} className="text-sm text-slate-300 flex items-start gap-2">
                  <span className="text-indigo-400 mt-1.5">•</span>
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

