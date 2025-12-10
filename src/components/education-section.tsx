import { SectionCard } from "@/components/section-card";
import { type Education } from "@/data/portfolio";

type EducationSectionProps = {
  education: Education[];
};

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <SectionCard>
      <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Education</p>
      <h2 className="text-3xl font-semibold text-slate-50">Academic background</h2>
      <div className="mt-6 space-y-4">
        {education.map((item) => (
          <div key={item.institution} className="rounded-2xl border border-slate-800/60 bg-white/5 p-5">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-50">{item.institution}</h3>
                <p className="text-sm text-slate-300">
                  {item.credential}
                  {item.field ? ` · ${item.field}` : ""}
                </p>
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{item.grade}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

