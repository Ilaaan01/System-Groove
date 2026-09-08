export type TestimonialType = "quote" | "paraphrase" | "none";

export interface CaseStudy {
  slug: string;
  client: string;
  category: string;
  industry: string;
  year: string;
  duration: string;
  market: string;
  summary: string;
  heroMetrics: { value: string; label: string }[];
  challenge: string;
  move: { intro: string; points: string[]; closing?: string };
  system: { intro: string; points: string[] };
  timeline: { step: string; title: string; lines: string[] }[];
  timelineNote?: string;
  howItWorked: { title: string; body: string }[];
  before: string[];
  after: { body: string; caveats: string[] };
  testimonial: { type: TestimonialType; quote?: string; attribution?: string; note: string };
  specifications: { objective: string; market: string; creativeLearning: string; dataBoundaryNote: string };
  creativeTesting?: { label: string; value: string; note?: string }[];
  services: { title: string; body: string }[];
  dataBoundary: { verified: string[]; notProvided: string[] };
  seo: { title: string; description: string };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "epoxy-flooring-next-canada",
    client: "Epoxy Flooring Next Canada",
    category: "Meta Ads Lead Generation",
    industry: "Epoxy Flooring",
    year: "2026",
    duration: "September 2025 – July 2026",
    market: "Edmonton, Alberta",
    summary:
      "Epoxy Flooring Next Canada moved beyond referral-only growth with a Meta Ads, landing page, and CRM-assisted lead-generation system that produced 68 tracked leads.",
    heroMetrics: [
      { value: "68", label: "Tracked Leads" },
      { value: "CA$38.97", label: "Cost Per Tracked Lead" },
      { value: "151,441", label: "Impressions" },
      { value: "CA$2,650.09", label: "Total Ad Spend" },
      { value: "70,097", label: "Reach" },
      { value: "1,387", label: "Link Clicks" },
    ],
    challenge:
      "Epoxy Flooring Next Canada was relying mainly on referrals and word of mouth in the Edmonton market. That made the company's pipeline unpredictable because new project opportunities depended heavily on someone recommending the business. System Groove needed to create a measurable and repeatable source of local demand.",
    move: {
      intro: "System Groove built a local lead-generation system using:",
      points: [
        "Meta Ads",
        "Focused local targeting",
        "A quote-focused landing page",
        "Meta Pixel lead tracking",
        "CRM organization",
        "Creative testing",
        "Performance-based budget decisions",
      ],
      closing:
        "Paid traffic was directed toward an intentional quote-request conversion path rather than depending only on social engagement or in-platform activity.",
    },
    system: {
      intro: "The campaign combined:",
      points: [
        "Direct service messaging",
        "Epoxy flooring project visuals",
        "Edmonton-area targeting",
        "Quote-focused conversion paths",
        "Meta Pixel lead events",
        "CRM lead organization",
        "Creative testing",
        "Performance analysis to determine where budget should go",
      ],
    },
    timeline: [
      {
        step: "01",
        title: "Campaign Activation",
        lines: ["Meta Ads campaign launched: September 12, 2025", "Target market: Edmonton service area"],
      },
      {
        step: "02",
        title: "First 30 Days",
        lines: ["37 tracked leads", "CA$1,402.78 ad spend", "CA$37.91 cost per tracked lead"],
      },
      {
        step: "03",
        title: "Efficiency Window",
        lines: [
          "July 1–16, 2026",
          "19 tracked leads",
          "CA$24.73 cost per tracked lead",
          "This demonstrated significantly stronger lead efficiency during this later optimization window.",
        ],
      },
      {
        step: "04",
        title: "All-Time Readout",
        lines: [
          "By July 16, 2026",
          "68 tracked leads",
          "CA$2,650.09 total spend",
          "CA$38.97 overall cost per tracked lead",
        ],
      },
    ],
    howItWorked: [
      {
        title: "Local Demand Capture",
        body: "System Groove put Epoxy Flooring Next Canada in front of Edmonton homeowners and property owners considering garage-floor and larger flooring upgrades.",
      },
      {
        title: "Landing Page Flow",
        body: "Paid traffic was sent to a focused quote-request landing page rather than depending only on engagement within social media.",
      },
      {
        title: "Lead Tracking",
        body: "Meta Pixel lead events connected campaign spend and traffic with tracked lead volume.",
      },
      {
        title: "Follow-Up Support",
        body: "CRM organization made incoming leads easier for the business to see, manage, and respond to as volume increased.",
      },
    ],
    before: [
      "Lead flow depended primarily on referrals and word of mouth.",
      "Growth was consequently tied to when existing customers or contacts happened to recommend the company.",
    ],
    after: {
      body: "Meta Ads created a measurable source of lead generation. The client also reported steady lead flow and positive lead quality, including opportunities for larger projects.",
      caveats: ["Revenue was not supplied.", "Booked jobs were not supplied.", "Closed revenue was not supplied.", "ROAS was not supplied."],
    },
    testimonial: {
      type: "quote",
      quote: "Things are going good. Steady leads coming in!",
      attribution: "Epoxy Flooring Next Canada",
      note: "This is an approved client quote.",
    },
    specifications: {
      objective: "Lead generation and offsite conversion leads for epoxy flooring quote requests.",
      market: "Edmonton-area homeowners and local property owners interested in garage floors and larger flooring spaces.",
      creativeLearning: "Video creative generated the strongest lead volume. Weaker video and carousel tests helped identify where budget should be limited.",
      dataBoundaryNote: "This is a verified lead-generation case study. Verified reporting does not contain booked appointments, closed jobs, exact revenue, or ROAS.",
    },
    services: [
      { title: "Meta Ads", body: "Campaign setup, targeting, creative testing, performance analysis and budget direction." },
      { title: "Landing Page", body: "Quote-focused conversion path designed to turn paid traffic into flooring inquiries." },
      { title: "CRM Support", body: "Lead organization and follow-up support." },
    ],
    dataBoundary: {
      verified: [
        "68 tracked leads",
        "CA$2,650.09 total ad spend",
        "CA$38.97 cost per tracked lead",
        "151,441 impressions",
        "70,097 reach",
        "1,387 link clicks",
      ],
      notProvided: ["Booked jobs", "Revenue", "ROAS"],
    },
    seo: {
      title: "Epoxy Flooring Next Canada — Meta Ads Lead Generation Case Study",
      description:
        "How System Groove helped Epoxy Flooring Next Canada generate 68 tracked leads in the Edmonton market at CA$38.97 per tracked lead using Meta Ads, a quote-focused landing page, and CRM support.",
    },
  },
  {
    slug: "epoxy-flooring-wild-canada",
    client: "Epoxy Flooring Wild Canada",
    category: "Meta Ads Lead Generation",
    industry: "Epoxy Flooring",
    year: "2026",
    duration: "August 2025 – July 2026",
    market: "Edmonton and surrounding communities",
    summary:
      "Epoxy Flooring Wild Canada was a brand-new epoxy flooring business without a formal marketing history. System Groove used a focused Meta Ads campaign to prove that paid social could create local demand. The selected campaign generated 23 tracked leads at an overall CA$33.73 cost per tracked lead.",
    heroMetrics: [
      { value: "23", label: "Tracked Leads" },
      { value: "CA$33.73", label: "Cost Per Tracked Lead" },
      { value: "45,348", label: "Impressions" },
      { value: "CA$775.84", label: "Selected Campaign Spend" },
      { value: "24,572", label: "Reach" },
      { value: "986", label: "Clicks" },
    ],
    challenge:
      "Epoxy Flooring Wild Canada was a new business without formal marketing history. There was no established paid acquisition system. The goal was to determine whether Meta Ads could create legitimate local demand for premium epoxy flooring services without using revenue data as validation.",
    move: {
      intro: "System Groove created a launch-style local-service funnel built around:",
      points: [
        "Premium epoxy flooring visuals",
        "Meta Ads",
        "Edmonton-area targeting",
        "Free-estimate conversion paths",
        "Campaign-level tracking",
        "Creative testing",
        "Local market testing",
      ],
    },
    system: {
      intro: "The campaign used:",
      points: [
        "Premium metallic epoxy imagery",
        "Flake epoxy imagery",
        "Project videos",
        "Direct local targeting",
        "Free-estimate messaging",
        "Campaign-specific tracking",
        "Broad-market versus neighborhood targeting comparisons",
      ],
    },
    timeline: [
      { step: "01", title: "Campaign Activation", lines: ["Campaign launched: August 20, 2025"] },
      { step: "02", title: "First 30 Days", lines: ["20 tracked leads", "CA$451.43 spend", "CA$22.57 cost per tracked lead"] },
      { step: "03", title: "First 90 Days", lines: ["23 tracked leads", "CA$775.84 selected-campaign spend"] },
      { step: "04", title: "All-Time Readout", lines: ["By July 22, 2026", "23 tracked leads", "CA$33.73 cost per tracked lead"] },
    ],
    timelineNote: "Reporting windows are kept distinct — figures are not combined or extrapolated beyond what was measured.",
    howItWorked: [
      {
        title: "Launch Demand",
        body: "Paid social became a practical test of whether a brand-new epoxy flooring business could generate local demand.",
      },
      {
        title: "Local Targeting",
        body: "System Groove compared Edmonton and surrounding communities against a more narrowly targeted neighborhood strategy.",
      },
      {
        title: "Creative Proof",
        body: "Videos and premium project imagery communicated the quality of metallic and flake epoxy flooring before asking prospects to request a free estimate.",
      },
      {
        title: "Campaign Scope",
        body: "These results apply only to this specific campaign and are not blended with other campaigns or clients.",
      },
    ],
    before: [
      "Strong project visuals",
      "Premium services",
      "No formal marketing history",
      "No predictable paid lead source",
    ],
    after: {
      body: "The campaign proved that Meta Ads could produce early local lead flow.",
      caveats: [
        "Booked estimates were not included in verified reporting.",
        "Closed jobs were not included in verified reporting.",
        "Exact revenue was not included in verified reporting.",
        "ROAS was not included in verified reporting.",
      ],
    },
    testimonial: {
      type: "none",
      note: "There is no publicly approved client testimonial for this case study. Rather than invent one, we're noting the boundary directly: no approved quote is available yet.",
    },
    specifications: {
      objective: "Lead generation and free-estimate requests for premium epoxy flooring services.",
      market: "Edmonton, surrounding communities, and selected higher-income residential and commercial areas.",
      creativeLearning: "Video 2 showed the strongest efficiency signal. The broader \"Edmonton and Surroundings\" ad set outperformed the narrower neighborhood test.",
      dataBoundaryNote: "Verified reporting does not include booked estimates, closed jobs, exact revenue, an approved testimonial, or ROAS.",
    },
    services: [
      { title: "Meta Ads", body: "Campaign setup, local targeting tests, creative analysis and lead-generation performance review." },
      { title: "Landing Page", body: "Free-estimate conversion path using premium flooring visuals and a direct local-service CTA." },
      { title: "CRM Support", body: "Lead-generation support connected to the broader client setup without presenting unverified sales data as revenue results." },
    ],
    dataBoundary: {
      verified: [
        "23 tracked leads",
        "CA$775.84 selected campaign spend",
        "CA$33.73 cost per tracked lead",
        "45,348 impressions",
        "24,572 reach",
        "986 clicks",
      ],
      notProvided: ["Booked estimates", "Closed jobs", "Revenue", "ROAS", "Approved public testimonial"],
    },
    seo: {
      title: "Epoxy Flooring Wild Canada — Meta Ads Lead Generation Case Study",
      description:
        "How System Groove helped launch Epoxy Flooring Wild Canada with a Meta Ads campaign generating 23 tracked leads at CA$33.73 per tracked lead in the Edmonton market.",
    },
  },
  {
    slug: "concrete-company-meta-ads",
    client: "Anonymous Concrete Company",
    category: "Meta Ads Lead Generation",
    industry: "Concrete Services",
    year: "2026",
    duration: "May – July 2026",
    market: "Greensboro, North Carolina",
    summary:
      "An anonymous Greensboro concrete company used Meta Ads, landing-page support, and follow-up improvements to generate 22 verified website lead results while reducing cost per result across the available reporting windows.",
    heroMetrics: [
      { value: "22", label: "Website Lead Results" },
      { value: "$116.36", label: "Overall Cost Per Result" },
      { value: "59,796", label: "Impressions" },
      { value: "$2,559.82", label: "Ad Spend" },
      { value: "619", label: "Link Clicks" },
      { value: "10", label: "Messaging Starts" },
    ],
    challenge:
      "The concrete company needed more useful local quote opportunities from people who were genuinely suited for concrete projects — not simply high volumes of low-intent prospects looking for the cheapest contractor. System Groove needed to improve lead generation while learning which project angles and creatives deserved more budget.",
    move: {
      intro: "System Groove:",
      points: [
        "Ran Meta Ads",
        "Sent prospects through a landing-page lead path",
        "Improved the form flow",
        "Improved follow-up visibility",
        "Supported CRM/automation cleanup",
        "Analyzed creative performance",
        "Redirected budget toward better-performing advertising",
      ],
    },
    system: {
      intro: "The system combined:",
      points: [
        "Local concrete project demand",
        "Driveway messaging",
        "Walkway messaging",
        "Video-led advertising",
        "Landing-page conversion support",
        "CRM visibility",
        "Month-by-month performance analysis",
      ],
    },
    timeline: [
      {
        step: "01",
        title: "Campaign Activation",
        lines: ["Campaign support launched: May 19, 2026", "Market: Greensboro, North Carolina service area"],
      },
      {
        step: "02",
        title: "Launch Window",
        lines: ["May 17–31", "2 website lead results", "$354.00 spend", "$177.00 cost per result"],
      },
      {
        step: "03",
        title: "First Full Month",
        lines: ["June", "10 website lead results", "$1,213.23 spend", "$121.32 cost per result"],
      },
      {
        step: "04",
        title: "Best Active Window",
        lines: ["July 1–26", "10 website lead results", "$992.59 spend", "$99.26 cost per result"],
      },
    ],
    howItWorked: [
      {
        title: "Local Demand",
        body: "Campaigns focused on homeowners and property owners in the Greensboro market who needed concrete project help.",
      },
      {
        title: "Landing Page Support",
        body: "The landing page and form flow were cleaned up to provide a clearer path from advertising traffic to quote request.",
      },
      {
        title: "Creative Direction",
        body: "Performance data was used to identify the control ad, the challenger, and weaker creative that should receive less budget.",
      },
      {
        title: "Follow-Up Visibility",
        body: "CRM and automation cleanup made new lead activity easier to track once the campaign began producing inquiries.",
      },
    ],
    before: [
      "Better-quality local concrete inquiries",
      "Clearer conversion paths",
      "Better understanding of which project angles worked",
      "Stronger follow-up visibility",
    ],
    after: {
      body: "The campaign generated 22 verified website lead results, and cost per result improved substantially between the launch reporting window and July.",
      caveats: [
        "Exact revenue was not included in reporting.",
        "Booked estimates were not included in reporting.",
        "Closed jobs were not included in reporting.",
        "Profitability was not included in reporting.",
        "ROAS was not included in reporting.",
      ],
    },
    testimonial: {
      type: "paraphrase",
      note: "Client feedback, paraphrased — not a direct quote: the client reported strong satisfaction with the quantity and quality of leads generated, particularly for walkway projects, driveway repair, and driveway replacement inquiries. No approved public direct quote, CRM screenshot, or verified revenue proof is available for this case study.",
    },
    specifications: {
      objective: "Website lead generation for local concrete quote requests using Meta Ads and a landing page.",
      market: "Greensboro, North Carolina and surrounding service areas.",
      creativeLearning:
        "Video 1 generated 15 website lead results and became the proven control. Video 3 generated 3 website lead results and became a promising challenger. Video 2 underperformed at $240.35 cost per result.",
      dataBoundaryNote: "Reporting came from CSV-exported Meta Ads data. Exact first-30-day performance was unavailable, along with booked appointments, closed jobs, revenue, and ROAS.",
    },
    creativeTesting: [
      { label: "Video 1 (control)", value: "15 website lead results" },
      { label: "Video 3 (challenger)", value: "3 website lead results" },
      { label: "Video 2", value: "$240.35 cost per result", note: "Weaker performer" },
    ],
    services: [
      { title: "Meta Ads", body: "Campaign direction, creative analysis, performance tracking and budget guidance." },
      { title: "Landing Page", body: "Conversion-path improvements for concrete quote requests and stronger lead information capture." },
      { title: "CRM Support", body: "Automation and pipeline visibility support once incoming lead flow began." },
    ],
    dataBoundary: {
      verified: [
        "22 website lead results",
        "$2,559.82 ad spend",
        "$116.36 cost per result",
        "59,796 impressions",
        "619 link clicks",
        "10 messaging starts",
      ],
      notProvided: ["Exact revenue", "Booked estimates", "Closed jobs", "Profitability", "ROAS", "Approved public direct quote"],
    },
    seo: {
      title: "Concrete Lead Generation Case Study — Meta Ads for a Greensboro Concrete Company",
      description:
        "How System Groove helped an anonymous Greensboro, NC concrete company generate 22 verified website lead results while lowering cost per result from $177.00 to $99.26 using Meta Ads and landing-page improvements.",
    },
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
