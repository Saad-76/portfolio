import Link from "next/link";

type TechSectionProps = {
  toolset: string[];
};

export function TechSection({ toolset }: TechSectionProps) {
  const featuredTech = toolset.slice(0, 12);

  return (
    <section className="relative py-12 lg:py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 text-gray-900">
            Tech Stack
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Technologies I use to build amazing products
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6">
          {featuredTech.map((tech) => (
            <div
              key={tech}
              className="group px-6 py-3 rounded-2xl bg-white border border-gray-200 shadow-sm hover:border-blue-500 hover:bg-blue-50 transition-all hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
                {tech}
              </span>
            </div>
          ))}
          {toolset.length > 12 && (
            <div className="px-6 py-3 rounded-2xl bg-gray-100 border border-gray-200">
              <span className="text-sm font-semibold text-gray-500">
                +{toolset.length - 12} more
              </span>
            </div>
          )}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-blue-500 text-blue-600 font-semibold hover:bg-blue-50 hover:border-blue-600 transition-all backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/20"
          >
            View all skills
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

