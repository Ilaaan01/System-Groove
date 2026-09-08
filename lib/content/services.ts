export type PillarId = "growth-and-visibility" | "digital-products-and-automation";

export interface Service {
  slug: string;
  pillar: PillarId;
  title: string;
  tag: string;
  summary: string;
  description: string;
  bestFor?: string;
  deliverables?: string[];
  outcomes?: string[];
  featured?: boolean;
}

export interface ServicePillarGroup {
  id: PillarId;
  label: string;
  intro: string;
  services: Service[];
}

const growthServices: Service[] = [
  {
    slug: "meta-ads",
    pillar: "growth-and-visibility",
    title: "Meta Ads",
    tag: "META ADS",
    summary: "Targeted Facebook and Instagram campaigns that reach local prospects before and during the buying process.",
    description: "Targeted Facebook and Instagram campaigns that reach local prospects before and during the buying process.",
    bestFor: "Local service businesses with a clear offer, defined service area, and capacity for new inquiries.",
    deliverables: ["Campaign strategy", "Audience targeting", "Campaign and ad-account setup", "Offer and message guidance", "Tracking and performance review", "Ongoing optimization"],
    outcomes: ["More consistent prospect awareness", "Better-quality traffic or lead volume", "Clearer campaign learnings", "Reduced wasted spend over time"],
    featured: true,
  },
  {
    slug: "google-ads",
    pillar: "growth-and-visibility",
    title: "Google Ads",
    tag: "GOOGLE ADS",
    summary: "Search campaigns that capture people actively looking for the service.",
    description: "Search campaigns that capture people actively looking for the service.",
    bestFor: "Businesses whose customers search directly for urgent, local, or comparison-based services.",
    deliverables: ["Keyword and market review", "Search campaign setup", "Ad-copy direction", "Conversion-tracking guidance", "Service-area targeting", "Negative-keyword refinement", "Ongoing optimization"],
    outcomes: ["Greater visibility for high-intent searches", "Better control over paid search traffic", "More qualified calls or forms", "Better understanding of search demand"],
    featured: true,
  },
  {
    slug: "google-business-profile-optimization",
    pillar: "growth-and-visibility",
    title: "Google Business Profile Optimization",
    tag: "LOCAL VISIBILITY",
    summary: "Profile optimization that helps local customers find, trust, and contact the business.",
    description: "Profile optimization that helps local customers find, trust, and contact the business.",
    deliverables: ["Profile audit", "Category and service review", "Business-information cleanup", "Photo and content recommendations", "Service-area improvements", "Review-visibility recommendations", "Posting guidance where appropriate"],
  },
  {
    slug: "seo-local-seo-aeo-geo",
    pillar: "growth-and-visibility",
    title: "SEO, Local SEO, and AEO/GEO",
    tag: "SEO + AI SEARCH",
    summary: "Technical SEO, content strategy, local search, and AI-search optimization tied to qualified leads—not vanity metrics.",
    description: "Technical SEO, content strategy, local search, and authority-building tied to qualified leads—not vanity metrics. AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) make your expertise easy for AI systems like ChatGPT, Gemini, Perplexity, and AI Overviews to discover, interpret, and cite. AEO/GEO complement traditional SEO — they do not replace it.",
    deliverables: ["Technical & local SEO", "Content architecture", "Entity & topic coverage", "Answer-ready content", "Structured data & citations", "Measurement & iteration"],
    featured: true,
  },
  {
    slug: "campaign-landing-pages",
    pillar: "growth-and-visibility",
    title: "Campaign Landing Pages",
    tag: "LANDING PAGES",
    summary: "Focused pages designed for a specific campaign, service, location, or offer.",
    description: "Focused pages designed for a specific campaign, service, location, or offer.",
    deliverables: ["Offer and message structure", "Page strategy", "Conversion-oriented layout", "Copy support", "Form and call placement", "Tracking guidance", "Mobile conversion review"],
  },
  {
    slug: "automated-reviews",
    pillar: "growth-and-visibility",
    title: "Automated Reviews",
    tag: "TRUST SIGNALS",
    summary: "A follow-up system that helps satisfied customers leave feedback consistently.",
    description: "A follow-up system that helps satisfied customers leave feedback consistently.",
    deliverables: ["Review-request workflow", "Customer follow-up timing", "Review-link setup", "Message templates", "Basic automation", "Monitoring guidance", "Staff instructions when needed"],
  },
];

const productServices: Service[] = [
  {
    slug: "websites",
    pillar: "digital-products-and-automation",
    title: "Modern Marketing Websites",
    tag: "WEB DESIGN + DEVELOPMENT",
    summary: "Fast, accessible marketing sites built to rank, explain your value, and turn visits into real inquiries.",
    description: "Fast, accessible marketing sites built to rank, explain your value, and turn visits into real inquiries.",
    deliverables: ["Conversion-focused UX", "Core Web Vitals", "Analytics & integrations"],
    featured: true,
  },
  {
    slug: "custom-software",
    pillar: "digital-products-and-automation",
    title: "Custom Software and Internal Tools",
    tag: "CUSTOM SOFTWARE",
    summary: "Portals, dashboards, internal tools, and platforms designed around the way your team actually works.",
    description: "Portals, dashboards, internal tools, and platforms designed around the way your team actually works.",
    deliverables: ["Product strategy", "Web platforms & SaaS", "Secure, scalable engineering"],
    featured: true,
  },
  {
    slug: "saas-platforms-customer-portals",
    pillar: "digital-products-and-automation",
    title: "SaaS Platforms and Customer Portals",
    tag: "SAAS + PORTALS",
    summary: "Multi-tenant platforms and customer-facing portals built to scale with your business.",
    description: "Multi-tenant platforms and customer-facing portals built to scale with your business.",
  },
  {
    slug: "mobile-apps",
    pillar: "digital-products-and-automation",
    title: "iOS and Android Applications",
    tag: "MOBILE APPS",
    summary: "Polished iOS and Android products, from a focused first release to an app ready to scale.",
    description: "Polished iOS and Android products, from a focused first release to an app ready to scale.",
    deliverables: ["iOS & Android", "Cross-platform builds", "Launch & ongoing support"],
    featured: true,
  },
  {
    slug: "ai-automation-workflows",
    pillar: "digital-products-and-automation",
    title: "AI Automation and Business Workflows",
    tag: "AUTOMATION",
    summary: "Connect the tools you already use and automate repetitive tasks across your business.",
    description: "Connect the tools you already use and automate repetitive tasks across your business.",
    deliverables: ["Workflow automation", "Systems integration", "AI-assisted processes"],
  },
  {
    slug: "lead-capture-crm-nurturing",
    pillar: "digital-products-and-automation",
    title: "Lead Capture, CRM Integrations, and Nurturing",
    tag: "CRM + NURTURING",
    summary: "Capture leads, connect them to your CRM, and nurture them automatically until they're ready to buy.",
    description: "Capture leads, connect them to your CRM, and nurture them automatically until they're ready to buy.",
    deliverables: ["Lead capture", "CRM integrations", "Nurture sequences"],
  },
];

export const servicePillars: ServicePillarGroup[] = [
  {
    id: "growth-and-visibility",
    label: "Growth and visibility",
    intro: "Get found, get trusted, and turn attention into qualified inquiries — Meta Ads, Google Ads, local visibility, landing pages, and review systems built around one measurable lead system.",
    services: growthServices,
  },
  {
    id: "digital-products-and-automation",
    label: "Digital products and automation",
    intro: "When the gap isn't marketing but the product, the platform, or the workflow itself — websites, software, apps, and automation delivered with ALCA Software.",
    services: productServices,
  },
];

export const allServices: Service[] = servicePillars.flatMap((p) => p.services);

export function getServiceBySlug(slug: string): Service | undefined {
  return allServices.find((s) => s.slug === slug);
}
