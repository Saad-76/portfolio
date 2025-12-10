import { CTASection } from "@/components/cta-section";
import { FeaturedBlogs } from "@/components/featured-blogs";
import { FeaturedProjects } from "@/components/featured-projects";
import { FeaturedTestimonials } from "@/components/featured-testimonials";
import { HeroSection } from "@/components/hero-section";
import { TechPreviewSection } from "@/components/tech-preview-section";
import { WhatIDoSection } from "@/components/what-i-do-section";
import { blogs, contact, hero, metrics, projects, recommendations, toolset } from "@/data/portfolio";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Enhanced animated background glows */}
      <div className="glow -left-10 -top-20 h-72 w-72 bg-indigo-500/50 animate-float" style={{ animationDelay: "0s" }} />
      <div className="glow right-0 top-10 h-64 w-64 bg-emerald-400/40 animate-float" style={{ animationDelay: "2s" }} />
      <div className="glow left-1/2 bottom-0 h-80 w-80 -translate-x-1/2 bg-purple-500/40 animate-float" style={{ animationDelay: "4s" }} />
      <div className="glow -right-20 top-1/2 h-96 w-96 bg-cyan-500/30 animate-float" style={{ animationDelay: "1s" }} />
      <div className="glow left-1/3 top-1/3 h-64 w-64 bg-pink-500/20 animate-float" style={{ animationDelay: "3s" }} />
      
      {/* Grid pattern overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-30" />
      
      <main className="relative mx-auto flex max-w-6xl flex-col gap-10 sm:gap-14 md:gap-20 px-3 sm:px-4 md:px-6 pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12 md:pb-16 lg:px-0">
        <HeroSection hero={hero} metrics={metrics} />
        <WhatIDoSection />
        <FeaturedProjects projects={projects} />
        <TechPreviewSection toolset={toolset} />
        <FeaturedTestimonials recommendations={recommendations} />
        <FeaturedBlogs blogs={blogs} />
        <CTASection contact={contact} />
      </main>
    </div>
  );
}
