import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { EducationSection } from "@/components/education-section";
import { ToolingSection } from "@/components/tooling-section";
import { contact, education, toolset } from "@/data/portfolio";

const siteUrl = "https://portfolio-sandy-two-85.vercel.app";

export const metadata: Metadata = {
  title: "About | Saad Mehmood — Senior Software Engineer",
  description: "Skills, background, and education of Saad Mehmood. Full-stack, Nest.js, React, TypeScript, PostgreSQL, AWS, CI/CD.",
  alternates: {
    canonical: `${siteUrl}/about`,
  },
};

const profileMetrics = [
  { label: "Years shipping", value: "4+" },
  { label: "Projects delivered", value: "20+" },
  { label: "Time-to-first value", value: "Days" },
];

const profileHighlights = [
  {
    title: "Delivery mindset",
    copy: "Design APIs, wire data, build UI, and automate release gates with CI/CD.",
  },
  {
    title: "Performance & DX",
    copy: "Profiler-driven fixes, caching, and sensible patterns that keep teams moving.",
  },
  {
    title: "Quality & resilience",
    copy: "Typed contracts, contract tests, and observability baked into every service.",
  },
];

const capabilityCards = [
  {
    title: "Product-minded engineering",
    copy: "Translate goals into thin slices, keep scope aligned, and ship in short cycles.",
  },
  {
    title: "Systems & APIs",
    copy: "Design stable contracts, modular services, and guardrails that scale with traffic.",
  },
  {
    title: "Frontend craft",
    copy: "Accessible UI, fast interactions, and thoughtful states with React/Next.js.",
  },
  {
    title: "Cloud-ready",
    copy: "Infra as code, CI/CD, observability hooks, and cost-aware architecture.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#3b82f608_1px,transparent_1px),linear-gradient(to_bottom,#3b82f608_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="glow -left-10 -top-20 h-72 w-72 bg-blue-500/20" />
      <div className="glow right-0 top-10 h-64 w-64 bg-blue-500/15" />
      <main className="relative mx-auto flex max-w-6xl flex-col gap-10 sm:gap-12 px-4 sm:px-6 pt-28 sm:pt-32 pb-12 sm:pb-16 lg:px-0">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex-1 text-center sm:text-left">
              <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-blue-600">About</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900">Skills & Background</h1>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-700">Crafting performant, production-grade products across the stack.</p>
          </div>
          <Link
            href="/"
            className="card-hover rounded-full border border-gray-300 px-4 py-2 text-xs sm:text-sm font-semibold text-gray-700 transition-all hover:border-blue-500 hover:bg-blue-50 whitespace-nowrap self-start sm:self-center"
          >
            ← Back
          </Link>
        </div>

        <section className="relative overflow-hidden rounded-3xl border border-gray-200/80 bg-white/80 backdrop-blur-sm shadow-sm p-6 sm:p-8 lg:p-9 transition-all hover:border-blue-500 hover:-translate-y-1 hover:shadow-lg">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute right-0 -bottom-10 h-52 w-52 rounded-full bg-blue-600/10 blur-3xl" />
          </div>
          <div className="relative grid gap-6 lg:gap-8 lg:grid-cols-[1.15fr_0.85fr] items-start">
            <div className="space-y-4 sm:space-y-5 text-center sm:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">Profile</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                Building reliable experiences from API to pixel.
              </h2>
              <p className="text-sm sm:text-base text-gray-700 max-w-3xl mx-auto sm:mx-0">
                I help teams ship fast without sacrificing quality—establishing clear contracts between services, optimizing rendering paths, and hardening releases with testing and observability.
              </p>
              <div className="flex flex-wrap gap-2.5 sm:gap-3 justify-center sm:justify-start">
                {["Full-stack delivery", "TypeScript first", "Cloud & DevOps", "Remote-friendly"].map((item) => (
                  <span key={item} className="px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-xs font-semibold text-gray-700">
                    {item}
                  </span>
                ))}
              </div>
              <div className="grid sm:grid-cols-3 gap-3 sm:gap-4 pt-4">
                {profileMetrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 shadow-sm transition-all hover:border-blue-500 hover:-translate-y-1 hover:shadow-md">
                    <p className="text-3xl font-black text-gray-900">{metric.value}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-600 mt-2">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-3.5 sm:gap-4 lg:self-stretch">
              {profileHighlights.map((card) => (
                <div key={card.title} className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 shadow-sm h-full transition-all hover:border-blue-500 hover:-translate-y-1 hover:shadow-md">
                  <p className="text-sm uppercase tracking-[0.2em] text-blue-600">{card.title}</p>
                  <p className="mt-2 text-sm text-gray-700">{card.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <section className="rounded-3xl border border-gray-200/80 bg-white/80 backdrop-blur-sm shadow-sm p-6 sm:p-7 lg:p-8 transition-all hover:border-blue-500 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center justify-between gap-3 flex-wrap text-center sm:text-left">
              <div className="w-full sm:w-auto">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">Capabilities</p>
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">What I bring to teams</h2>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1 text-xs font-semibold mx-auto sm:mx-0">
                Delivery focused
              </span>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 mt-5">
              {capabilityCards.map((item) => (
                <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 shadow-sm transition-all hover:border-blue-500 hover:-translate-y-1 hover:shadow-md">
                  <p className="text-base font-semibold text-gray-900">{item.title}</p>
                  <p className="mt-2 text-sm text-gray-700">{item.copy}</p>
                </div>
              ))}
            </div>
          </section>

          <ToolingSection toolset={toolset} />
        </div>

        <EducationSection education={education} />

          <section className="rounded-3xl border border-gray-200/80 bg-white/80 backdrop-blur-sm shadow-sm p-6 sm:p-8 lg:p-9 transition-all hover:border-blue-500 hover:-translate-y-1 hover:shadow-lg">
          <div className="flex flex-col gap-2 mb-6 text-center sm:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
              Contact
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
              Let’s talk about your next project
            </h2>
            <p className="text-sm text-gray-600">
              Share a few details and I’ll respond quickly.
            </p>
          </div>
          <div className="space-y-5 sm:space-y-6">
            <ContactForm />
          </div>
        </section>
      </main>
    </div>
  );
}

