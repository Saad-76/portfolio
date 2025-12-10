import { SectionCard } from "@/components/section-card";

type ToolingSectionProps = {
  toolset: string[];
};

export function ToolingSection({ toolset }: ToolingSectionProps) {
  return (
    <SectionCard className="flex h-full flex-col gap-4">
      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Skills</p>
        <h2 className="text-3xl font-semibold text-slate-50">Technologies & Tools</h2>
      </div>
      <div className="flex flex-wrap gap-2">
        {toolset.map((tool) => (
          <span key={tool} className="tag rounded-full px-3 py-1 text-xs text-slate-200">
            {tool}
          </span>
        ))}
      </div>
      <div className="mt-auto rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5">
        <p className="text-sm text-emerald-200">
          Looking for a fast delivery partner? I design APIs, wire up the data, ship the UI, and
          automate release gates.
        </p>
      </div>
    </SectionCard>
  );
}

