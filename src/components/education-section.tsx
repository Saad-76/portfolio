import { SectionCard } from "@/components/section-card";
import { type Education } from "@/data/portfolio";

type EducationSectionProps = {
  education: Education[];
};

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <SectionCard className="text-center sm:text-left">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 mb-1">Education</p>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-6">Academic background</h2>
      <div className="space-y-4">
        {education.map((item) => (
          <div key={item.institution} className="rounded-2xl border border-gray-200 bg-gray-50 p-5 transition-all hover:border-blue-500 hover:-translate-y-1 hover:shadow-md text-left sm:text-left">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{item.institution}</h3>
                <p className="text-sm text-gray-700">
                  {item.credential}
                  {item.field ? ` · ${item.field}` : ""}
                </p>
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500">{item.grade}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

