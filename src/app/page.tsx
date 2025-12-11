import { BlogsSection } from "@/components/modern-blogs";
import { CTASection } from "@/components/modern-cta";
import { HeroSection } from "@/components/modern-hero";
import { ProjectsSection } from "@/components/modern-projects";
import { ServicesSection } from "@/components/modern-services";
import { TechSection } from "@/components/modern-tech";
import { TestimonialsSection } from "@/components/modern-testimonials";
import { blogs, contact, hero, metrics, projects, recommendations, toolset } from "@/data/portfolio";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#3b82f608_1px,transparent_1px),linear-gradient(to_bottom,#3b82f608_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      <main className="relative">
        <HeroSection hero={hero} metrics={metrics} />
        <ServicesSection />
        <ProjectsSection projects={projects} />
        <TechSection toolset={toolset} />
        <TestimonialsSection recommendations={recommendations} />
        <BlogsSection blogs={blogs} />
        <CTASection contact={contact} />
      </main>
    </div>
  );
}
