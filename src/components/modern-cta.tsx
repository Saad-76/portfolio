import Link from "next/link";
import { type ContactContent } from "@/data/portfolio";

type CTASectionProps = {
  contact: ContactContent;
};

export function CTASection({ contact }: CTASectionProps) {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/6 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gray-200/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
              <div className="text-center lg:text-left space-y-4 max-w-3xl mx-auto lg:mx-0">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">Let&apos;s build your next launch</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
              {contact.headline}
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto lg:mx-0 font-light">
              {contact.copy}
            </p>
            {contact.location && (
              <div className="flex justify-center lg:justify-start">
                <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1 text-xs font-semibold">
                  <span className="text-base">📍</span>
                  {contact.location}
                </span>
              </div>
            )}
          </div>

          <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-sm w-full max-w-xl mx-auto lg:mx-0">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">Ready to talk?</h3>
                <p className="text-sm text-gray-600">
                  Need a full stack developer for your next project? Looking for help with React development, Node.js backend, or Next.js migration? Let's discuss how I can help build or improve your web application.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
                <a
                  href={`mailto:${contact.email}`}
                  className="group relative flex-1 min-w-[220px] justify-center px-6 py-4 rounded-2xl bg-blue-600 text-white font-semibold text-base overflow-hidden transition-all hover:scale-[1.02] shadow-lg shadow-blue-500/25 hover:bg-blue-700 flex items-center gap-2 text-center"
                >
                  <span className="relative z-10">Get In Touch</span>
                  <div className="absolute inset-0 bg-blue-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <Link
                  href="/experience"
                  className="flex-1 min-w-[220px] justify-center px-6 py-4 rounded-2xl border border-gray-300 text-gray-700 font-semibold text-base hover:bg-gray-50 hover:border-blue-500 transition-all backdrop-blur-sm flex items-center gap-2 text-center"
                >
                  View Experience
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
              {contact.phone && (
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-base">📞</span>
                  {contact.phone}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

