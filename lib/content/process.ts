export interface MarketingProcessStep {
  step: string;
  title: string;
  copy: string;
  duration: string;
  clientInvolvement: string;
  completionCriteria: string;
}

export interface BuildPhase {
  phase: string;
  copy: string;
}

export const marketingProcess: MarketingProcessStep[] = [
  {
    step: "01",
    title: "Diagnose the Gaps",
    copy: "We review the offer, service area, existing marketing, local visibility, ad readiness, pages, reviews, and follow-up.",
    duration: "1–2 weeks",
    clientInvolvement: "High",
    completionCriteria: "Primary growth gap and first service priority are confirmed.",
  },
  {
    step: "02",
    title: "Build the Path",
    copy: "We build the scoped campaigns, profile improvements, landing-page structure, conversion paths, tracking, and review workflow.",
    duration: "2–4 weeks",
    clientInvolvement: "Medium",
    completionCriteria: "Launch assets and tracking plan are approved.",
  },
  {
    step: "03",
    title: "Launch and Track",
    copy: "We launch the approved work, check targeting and conversion settings, and review early traffic and inquiry signals.",
    duration: "1–2 weeks",
    clientInvolvement: "Medium",
    completionCriteria: "Launch checks and first optimization priorities are documented.",
  },
  {
    step: "04",
    title: "Improve the System",
    copy: "We review lead quality, traffic quality, campaign data, local visibility, reviews, and customer feedback.",
    duration: "Ongoing",
    clientInvolvement: "Low to medium",
    completionCriteria: "The next improvement cycle is selected.",
  },
];

export const buildProcess: BuildPhase[] = [
  { phase: "Discovery", copy: "We learn your goals, users, and constraints before scoping the build." },
  { phase: "Product design", copy: "We design the experience and the system architecture around real usage." },
  { phase: "Iterative engineering", copy: "ALCA Software builds in visible cycles, with progress you can see throughout." },
  { phase: "QA", copy: "We test for correctness, accessibility, and performance before anything ships." },
  { phase: "Launch", copy: "We ship the release and confirm everything works in production." },
  { phase: "Ongoing support", copy: "We stay involved to fix issues, add capacity, and extend the system as you grow." },
];
