import { SectionCard } from "@/components/section-card";

const services = [
  {
    icon: "🚀",
    title: "Full-Stack Development",
    description: "Building scalable web applications with modern frameworks and best practices",
  },
  {
    icon: "⚡",
    title: "Backend Architecture",
    description: "Designing robust APIs, microservices, and database solutions",
  },
  {
    icon: "🔒",
    title: "Security & Auth",
    description: "Implementing secure authentication with Azure AD B2C, Microsoft SSO, and more",
  },
  {
    icon: "☁️",
    title: "Cloud Deployment",
    description: "Deploying and managing applications on AWS with CI/CD pipelines",
  },
];

export function WhatIDoSection() {
  return (
    <SectionCard>
      <div className="text-center mb-8 sm:mb-10">
        <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-indigo-300">Services</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold bg-gradient-to-r from-indigo-200 to-purple-200 bg-clip-text text-transparent mt-2">
          What I Do
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
          Specialized in building production-ready applications with cutting-edge technologies
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="glass card-hover group flex flex-col items-center text-center p-5 sm:p-6 rounded-xl sm:rounded-2xl border-indigo-500/30 hover:border-indigo-500/50 bg-gradient-to-br from-indigo-500/10 to-purple-500/5 hover:from-indigo-500/20 hover:to-purple-500/10 transition-all shadow-lg hover:shadow-xl hover:shadow-indigo-500/20"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 transition-transform group-hover:scale-110 group-hover:rotate-3">
              {service.icon}
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-slate-50 mb-2 group-hover:text-indigo-300 transition-colors">
              {service.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

