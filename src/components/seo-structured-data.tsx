import { hero, projects } from "@/data/portfolio";

export function SEOStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: hero.title,
    jobTitle: "Senior Software Engineer",
    description: hero.summary,
    url: "https://saadmehmood.dev",
    sameAs: [
      hero.actions.github,
      hero.actions.linkedin,
    ],
    email: hero.actions.contact.replace("mailto:", ""),
    knowsAbout: [
      "Saad Mehmood",
      "Node.js",
      "NestJS",
      "Nest.js",
      "React.js",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "PostgreSQL",
      "MongoDB",
      "AWS",
      "Azure",
      "Microservices",
      "Full-Stack Development",
      "MERN Stack",
      "API Development",
      "Backend Development",
      "Frontend Development",
      "Web Development",
      "Software Engineering",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "National College Of Business Administration & Economics",
    },
    worksFor: {
      "@type": "Organization",
      name: "Intagleo Systems",
    },
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${hero.title} - Portfolio`,
    description: hero.summary,
    url: "https://saadmehmood.dev",
    author: {
      "@type": "Person",
      name: hero.title,
    },
  };

  const portfolioStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Portfolio Projects",
    itemListElement: projects.slice(0, 10).map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: project.title,
        description: project.description,
        applicationCategory: "WebApplication",
        operatingSystem: "Web",
      },
    })),
  };

  const professionalServiceStructuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${hero.title} - Software Development Services`,
    description: "Full stack web development services including React, Next.js, NestJS, API development, and cloud deployment",
    provider: {
      "@type": "Person",
      name: hero.title,
      jobTitle: "Senior Software Engineer",
      email: hero.actions.contact.replace("mailto:", ""),
    },
    areaServed: {
      "@type": "Country",
      name: "Worldwide",
    },
    serviceType: [
      "Full Stack Development",
      "React Development",
      "Next.js Development",
      "NestJS API Development",
      "PostgreSQL Database Design",
      "AWS Cloud Deployment",
      "Microservices Architecture",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceStructuredData) }}
      />
    </>
  );
}

