import type { Metadata } from "next";
import { BlogsSection } from "@/components/modern-blogs";
import { CTASection } from "@/components/modern-cta";
import { HeroSection } from "@/components/modern-hero";
import { ProjectsSection } from "@/components/modern-projects";
import { ServicesSection } from "@/components/modern-services";
import { TechSection } from "@/components/modern-tech";
import { TestimonialsSection } from "@/components/modern-testimonials";
import { blogs, contact, hero, metrics, projects, recommendations, toolset } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Saad Mehmood | Senior Software Engineer | Full Stack Developer Portfolio",
  description: "Saad Mehmood - Senior Software Engineer and Full Stack Developer specializing in Nest.js, React, Next.js, TypeScript, PostgreSQL, and AWS. Building scalable web applications and APIs. Available for freelance and remote work.",
  keywords: [
    "Saad Mehmood",
    "Saad Mehmood Portfolio",
    "Saad Mehmood Developer",
    "Senior Software Engineer",
    "Full Stack Developer",
    "Nest.js Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "PostgreSQL Developer",
    "AWS Developer",
    "MERN Stack Developer",
  ],
  alternates: {
    canonical: "https://saadmehmood.dev",
  },
  openGraph: {
    title: "Saad Mehmood | Senior Software Engineer Portfolio",
    description: "Portfolio of Saad Mehmood - Senior Software Engineer specializing in full stack development with Nest.js, React, Next.js, and PostgreSQL.",
    url: "https://saadmehmood.dev",
  },
};

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
