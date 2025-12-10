import { CTASection } from "@/components/cta-section";
import { FeaturedProjects } from "@/components/featured-projects";
import { HeroSection } from "@/components/hero-section";
import { contact, hero, metrics, projects } from "@/data/portfolio";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="glow -left-10 -top-20 h-72 w-72 bg-indigo-500/50" />
      <div className="glow right-0 top-10 h-64 w-64 bg-emerald-400/40" />
      <div className="glow left-1/2 bottom-0 h-80 w-80 -translate-x-1/2 bg-purple-500/40" />
      <main className="relative mx-auto flex max-w-6xl flex-col gap-8 sm:gap-12 md:gap-16 px-3 sm:px-4 md:px-6 pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12 md:pb-16 lg:px-0">
        <HeroSection hero={hero} metrics={metrics} />
        <FeaturedProjects projects={projects} />
        <CTASection contact={contact} />
      </main>
    </div>
  );
}
