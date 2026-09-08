export interface CaseStudyMetric {
  label: string;
  value: string;
}

export interface CaseStudyTimelineEntry {
  label: string;
  description: string;
}

export interface CaseStudyQuote {
  text: string;
  attribution: string;
}

export interface CaseStudyBeforeAfter {
  before: string;
  after: string;
}

export interface CaseStudyHeroImage {
  src: string;
  alt: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  metaDescription: string;
  client: string;
  industry: string;
  market: string;
  duration: string;
  services: string[];
  // Left unset until approved photography exists — see CaseStudyHeroImage usage in [slug]/page.tsx.
  heroImage?: CaseStudyHeroImage;
  summary: string;
  challenge: string;
  systemMove: string;
  timeline: CaseStudyTimelineEntry[];
  results: CaseStudyMetric[];
  quote: CaseStudyQuote | null;
  learning: string;
  beforeAfter: CaseStudyBeforeAfter;
  dataLimitations: string;
  relatedServiceSlugs: string[];
  relatedCaseStudySlugs: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "epoxy-flooring-next-canada",
    title: "Epoxy Flooring Next Canada",
    metaDescription: "How a Meta Ads, landing page, and CRM system produced 68 tracked leads at CA$38.97 per lead for an Edmonton epoxy flooring business.",
    client: "Epoxy Flooring Next Canada",
    industry: "Epoxy Flooring",
    market: "Edmonton, Canada",
    duration: "September 2025–July 2026",
    services: ["meta-ads", "campaign-landing-pages", "lead-capture-crm-nurturing"],
    summary: "Epoxy Flooring Next Canada moved beyond referral-only growth with a Meta Ads, landing page, and CRM-assisted lead-generation system that produced 68 tracked leads.",
    challenge: "Epoxy Flooring Next Canada was relying mainly on referrals and word of mouth in the Edmonton market, which made new project opportunities harder to predict.",
    systemMove: "We built a local lead-generation system using Meta Ads to create demand, a focused landing page to capture quote requests, and CRM support to help with follow-up. The system included direct service messaging, epoxy flooring visuals, quote-focused conversion paths, and performance reads.",
    timeline: [
      { label: "Sep 12, 2025", description: "Campaign activation." },
      { label: "First 30 days", description: "37 tracked leads from CA$1,402.78 in spend at CA$37.91 per tracked lead." },
      { label: "Jul 1–16, 2026", description: "19 tracked leads at CA$24.73 per tracked lead." },
      { label: "Jul 16, 2026", description: "Final readout: 68 tracked leads from CA$2,650.09 total ad spend." },
    ],
    results: [
      { label: "Tracked leads", value: "68" },
      { label: "Cost per tracked lead", value: "CA$38.97" },
      { label: "Total ad spend", value: "CA$2,650.09" },
      { label: "Impressions", value: "151,441" },
      { label: "Reach", value: "70,097" },
      { label: "Link clicks", value: "1,387" },
    ],
    quote: { text: "Things are going good. Steady leads coming in!", attribution: "Epoxy Flooring Next Canada" },
    learning: "A steady, always-on Meta Ads presence kept lead cost consistent across the campaign's first ten months, with the most recent stretch (Jul 1–16, 2026) producing the lowest cost per tracked lead of the campaign to date.",
    beforeAfter: {
      before: "Lead flow depended on referrals and word of mouth, with growth tied to who happened to recommend the business next.",
      after: "Meta Ads created a measurable, always-on lead source with steady lead volume and a larger pool of opportunities than referrals alone produced.",
    },
    dataLimitations: "Booked appointments, closed jobs, exact revenue, and ROAS were not supplied. This is a verified lead-generation case study only — no revenue or close-rate claims are made.",
    relatedServiceSlugs: ["meta-ads", "campaign-landing-pages", "lead-capture-crm-nurturing"],
    relatedCaseStudySlugs: ["epoxy-flooring-wild-canada", "concrete-company-meta-ads"],
  },
  {
    slug: "epoxy-flooring-wild-canada",
    title: "Epoxy Flooring Wild Canada",
    metaDescription: "How a Meta Ads lead-generation campaign produced 23 tracked leads at CA$33.73 per lead for a brand-new Edmonton-area epoxy flooring business.",
    client: "Epoxy Flooring Wild Canada",
    industry: "Epoxy Flooring",
    market: "Edmonton, Canada",
    duration: "August 2025–July 2026",
    services: ["meta-ads"],
    summary: "Epoxy Flooring Wild Canada used a focused Meta Ads campaign to prove paid local demand for a brand-new Edmonton-area epoxy flooring business, generating 23 tracked leads.",
    challenge: "Epoxy Flooring Wild Canada was a brand-new business that had not run formal marketing before, so Meta Ads had to prove it could create real local demand without revenue data to lean on.",
    systemMove: "We built a launch-style local-service funnel around premium epoxy visuals, a free-estimate path, and Edmonton-area targeting to turn attention into tracked leads.",
    timeline: [
      { label: "First 30 days", description: "20 tracked leads from CA$451.43 in spend at CA$22.57 per tracked lead." },
    ],
    results: [
      { label: "Tracked leads", value: "23" },
      { label: "Cost per tracked lead", value: "CA$33.73" },
      { label: "Total ad spend", value: "CA$775.84" },
      { label: "Impressions", value: "45,348" },
      { label: "Reach", value: "24,572" },
      { label: "Clicks", value: "986" },
    ],
    quote: null,
    learning: "Broader Edmonton-area targeting outperformed the narrower neighborhood test — service-area breadth mattered more than hyper-local precision for this campaign.",
    beforeAfter: {
      before: "The business had strong visuals but no formal marketing history and no predictable paid lead source.",
      after: "The campaign proved Meta Ads could create early local lead flow for a brand-new business with no prior track record.",
    },
    dataLimitations: "No approved testimonial, booked estimates, closed jobs, revenue, or ROAS exists for this campaign. None of these are claimed or implied.",
    relatedServiceSlugs: ["meta-ads"],
    relatedCaseStudySlugs: ["epoxy-flooring-next-canada", "concrete-company-meta-ads"],
  },
  {
    slug: "concrete-company-meta-ads",
    title: "Concrete Company Lead System",
    metaDescription: "How Meta Ads, a landing page, and CRM follow-up produced 22 website lead results at $116.36 per result for an anonymous Greensboro, NC concrete company.",
    client: "An anonymous concrete company",
    industry: "Concrete Services",
    market: "Greensboro, North Carolina",
    duration: "May–July 2026",
    services: ["meta-ads", "campaign-landing-pages", "lead-capture-crm-nurturing"],
    summary: "An anonymous Greensboro concrete company used Meta Ads, landing-page support, and follow-up improvements to generate 22 website lead results.",
    challenge: "The company needed qualified local leads for driveway and walkway work — not price shoppers looking for the cheapest possible contractor.",
    systemMove: "We built a Meta Ads campaign targeting concrete demand in the Greensboro market, with video-led creative, landing-page conversion optimization, and CRM tracking integration for follow-up.",
    timeline: [
      { label: "May 17–31", description: "2 results from $354.00 in spend at $177.00 per result." },
      { label: "June (full month)", description: "10 results from $1,213.23 in spend at $121.32 per result." },
      { label: "July 1–26", description: "10 results from $992.59 in spend at $99.26 per result." },
    ],
    results: [
      { label: "Website lead results", value: "22" },
      { label: "Average cost per result", value: "$116.36" },
      { label: "Total ad spend", value: "$2,559.82" },
      { label: "Impressions", value: "59,796" },
      { label: "Link clicks", value: "619" },
      { label: "Messaging starts", value: "10" },
    ],
    quote: null,
    learning: "Creative testing separated the campaign's performance clearly: Video 1 (control) produced 15 results, Video 3 (challenger) produced 3, and Video 2 was the weakest performer at $240.35 per result — informing which creative direction carried the rest of the campaign.",
    beforeAfter: {
      before: "Lead flow relied on price-focused inbound inquiries that were harder to qualify before the first call.",
      after: "A dedicated Meta Ads and landing-page system produced a steadier flow of website lead results with CRM-tracked follow-up.",
    },
    dataLimitations: "No public company name, testimonial, revenue, booked estimates, closed jobs, ROAS, or profitability data exists. The company remains anonymous by request.",
    relatedServiceSlugs: ["meta-ads", "campaign-landing-pages", "lead-capture-crm-nurturing"],
    relatedCaseStudySlugs: ["epoxy-flooring-next-canada", "epoxy-flooring-wild-canada"],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
