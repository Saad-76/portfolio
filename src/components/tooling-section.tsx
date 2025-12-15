import { SectionCard } from "@/components/section-card";

type ToolingSectionProps = {
  toolset: string[];
};

export function ToolingSection({ toolset }: ToolingSectionProps) {
  return (
    <SectionCard className="flex h-full flex-col gap-4 text-center sm:text-left">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 mb-1">Skills</p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">Technologies & Tools</h2>
      </div>
      <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
        {toolset.map((tool) => (
          <span key={tool} className="tag rounded-full px-3 py-1 text-xs text-gray-700">
            {tool}
          </span>
        ))}
      </div>
      <div className="mt-auto rounded-2xl border border-blue-200 bg-blue-50 p-5">
        <p className="text-sm text-gray-700">
          Looking for a fast delivery partner? I design APIs, wire up the data, ship the UI, and
          automate release gates.
        </p>
      </div>
    </SectionCard>
  );
}

