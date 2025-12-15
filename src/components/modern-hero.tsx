import { type HeroContent, type Metric } from "@/data/portfolio";

type HeroSectionProps = {
  hero: HeroContent;
  metrics: Metric[];
};

export function HeroSection({ hero, metrics }: HeroSectionProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-40 pb-12 sm:pt-44 lg:pt-24">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/6 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center justify-items-center lg:justify-items-start">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="space-y-4">
              <div className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 backdrop-blur-sm shadow-sm">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                <span className="text-xs sm:text-sm text-blue-700 font-semibold uppercase tracking-wider">
                  {hero.subtitle}
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-gray-900">
                <span className="block">
                  {hero.title.split(" ")[0]}
                </span>
                <span className="block">
                  {hero.title.split(" ").slice(1).join(" ")}
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed max-w-2xl font-light">
                {hero.summary}
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {hero.badges.map((badge) => (
                <span
                  key={badge}
                  className="px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-sm text-blue-700 shadow-sm backdrop-blur-sm hover:bg-blue-100 hover:border-blue-300 transition-all"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href={hero.actions.contact}
                className="group relative w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-blue-600 text-white overflow-hidden transition-all hover:scale-110 shadow-lg shadow-blue-500/30 flex items-center justify-center"
                aria-label="Get In Touch"
              >
                <svg
                  className="w-6 h-6 relative z-10 transition-transform group-hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href={hero.actions.linkedin}
                className="group w-14 h-14 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 hover:border-blue-500 hover:text-blue-600 transition-all backdrop-blur-sm flex items-center justify-center"
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="w-6 h-6 transition-transform group-hover:scale-110"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={hero.actions.github}
                className="group w-14 h-14 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 hover:border-blue-500 hover:text-blue-600 transition-all backdrop-blur-sm flex items-center justify-center"
                aria-label="GitHub"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="w-6 h-6 transition-transform group-hover:scale-110"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.532 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Metrics Grid */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                className="group relative p-6 lg:p-8 rounded-2xl bg-white border border-gray-200 shadow-lg hover:border-blue-500 transition-all hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-blue-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-xs sm:text-sm text-gray-600 font-medium">
                    {metric.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

