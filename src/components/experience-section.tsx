import { type Experience } from "@/data/portfolio";

type ExperienceSectionProps = {
  experiences: Experience[];
};

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <div className="h-full">
      <p className="text-sm uppercase tracking-[0.25em] text-blue-600 text-center sm:text-left">Experience</p>
      <h2 className="text-3xl font-semibold text-gray-900 text-center sm:text-left">Professional Journey</h2>
      <div className="mt-6 space-y-5">
        {experiences.map((item, idx) => (
          <div key={`${item.role}-${idx}`} className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{item.role}</h3>
                <p className="text-sm text-gray-700">{item.company}</p>
                {item.location && (
                  <p className="text-xs text-gray-500 mt-1">{item.location}</p>
                )}
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500">{item.period}</p>
            </div>
            <ul className="mt-4 space-y-2">
              {item.responsibilities.map((responsibility, rIdx) => (
                <li key={rIdx} className="text-sm text-gray-700 flex items-start gap-2">
                  <span className="text-blue-600 mt-1.5">•</span>
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

