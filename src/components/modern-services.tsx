const services = [
  {
    icon: "🚀",
    title: "Full-Stack Development",
    description: "I build full stack web applications using React and Next.js for the frontend, and NestJS or Node.js for backend development. I create REST APIs and GraphQL endpoints that connect everything together and handle real user traffic.",
    gradient: "from-slate-700/10 to-slate-800/10",
  },
  {
    icon: "⚡",
    title: "Backend Architecture",
    description: "I design backend systems and build APIs that are easy to maintain. I set up microservices architecture when it makes sense, and work with PostgreSQL databases, MongoDB, and Redis caching based on what each project needs.",
    gradient: "from-blue-500/10 to-blue-500/10",
  },
  {
    icon: "🔒",
    title: "Security & Auth",
    description: "I implement secure authentication systems using Azure AD B2C and Microsoft SSO integration. User authentication and data security are built into every project from day one, not added as an afterthought later on.",
    gradient: "from-blue-500/10 to-blue-500/10",
  },
  {
    icon: "☁️",
    title: "Cloud Deployment",
    description: "I deploy web applications to AWS cloud and Azure cloud platforms. I configure CI/CD pipelines for automated deployments, set up monitoring and logging systems, and ensure applications stay online and perform well.",
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
            I build web applications that run in production, not just on my laptop. Here's the kind of work I do day to day.
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

