const services = [
  {
    icon: "🚀",
    title: "Full-Stack Development",
    description: "Building scalable web applications with modern frameworks and best practices",
    gradient: "from-slate-700/10 to-slate-800/10",
  },
  {
    icon: "⚡",
    title: "Backend Architecture",
    description: "Designing robust APIs, microservices, and database solutions",
    gradient: "from-blue-500/10 to-blue-500/10",
  },
  {
    icon: "🔒",
    title: "Security & Auth",
    description: "Implementing secure authentication with Azure AD B2C, Microsoft SSO, and more",
    gradient: "from-blue-500/10 to-blue-500/10",
  },
  {
    icon: "☁️",
    title: "Cloud Deployment",
    description: "Deploying and managing applications on AWS with CI/CD pipelines",
    gradient: "from-blue-500/10 to-blue-500/10",
  },
];

export function ServicesSection() {
  return (
    <section className="relative -mt-8 pb-12 lg:-mt-12 lg:pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 text-gray-900">
            What I Do
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Specialized in building production-ready applications with cutting-edge technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 rounded-3xl bg-white border border-gray-200 shadow-md hover:border-blue-500 transition-all hover:scale-105 hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className="relative">
                <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

