import { ADDRESS, CONTACT_EMAIL, CONTACT_PHONE_E164, ORG_NAME, ORG_SERVICE_TYPES, SITE_URL } from "@/lib/constants";
import type { CaseStudy } from "@/lib/content/case-studies";
import type { Service } from "@/lib/content/services";

export interface FaqItem {
  q: string;
  a: string;
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: ORG_NAME,
    url: SITE_URL,
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE_E164,
    address: { "@type": "PostalAddress", ...ADDRESS },
    areaServed: "United States",
    serviceType: ORG_SERVICE_TYPES,
  };
}

export function buildFaqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function buildServiceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    serviceType: service.title,
    areaServed: "United States",
    provider: { "@type": "ProfessionalService", name: ORG_NAME, url: SITE_URL },
    url: `${SITE_URL}/services#${service.slug}`,
  };
}

export function buildCreativeWorkSchema(caseStudy: CaseStudy) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: caseStudy.title,
    description: caseStudy.metaDescription,
    about: { "@type": "Thing", name: caseStudy.industry },
    url: `${SITE_URL}/case-studies/${caseStudy.slug}`,
    author: { "@type": "Organization", name: ORG_NAME, url: SITE_URL },
  };
}
