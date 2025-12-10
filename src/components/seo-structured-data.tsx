import { hero, projects, recommendations } from "@/data/portfolio";

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
      "Node.js",
      "NestJS",
      "React.js",
      "TypeScript",
      "PostgreSQL",
      "AWS",
      "Microservices",
      "Full-Stack Development",
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
    </>
  );
}

