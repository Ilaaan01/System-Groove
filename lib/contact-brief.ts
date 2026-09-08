import { CONTACT_EMAIL } from "@/lib/constants";

export interface ContactBrief {
  services: string[];
  problem: string;
  serviceArea: string;
  mainOffer: string;
  currentMarketing: string;
  currentWebsite: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  notes: string;
}

export const emptyContactBrief: ContactBrief = {
  services: [],
  problem: "",
  serviceArea: "",
  mainOffer: "",
  currentMarketing: "",
  currentWebsite: "",
  name: "",
  company: "",
  email: "",
  phone: "",
  notes: "",
};

export interface ContactBriefErrors {
  name?: string;
  email?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactBrief(brief: ContactBrief): ContactBriefErrors {
  const errors: ContactBriefErrors = {};
  if (!brief.name.trim()) errors.name = "Enter your name.";
  if (!brief.email.trim()) errors.email = "Enter your email.";
  else if (!EMAIL_PATTERN.test(brief.email.trim())) errors.email = "Enter a valid email address.";
  return errors;
}

function buildMailtoHref(brief: ContactBrief): string {
  const lines = [
    `Services of interest: ${brief.services.length ? brief.services.join(", ") : "(none selected)"}`,
    `Primary growth or technology problem: ${brief.problem || "(not provided)"}`,
    `Service area / target market: ${brief.serviceArea || "(not provided)"}`,
    `Main offer: ${brief.mainOffer || "(not provided)"}`,
    `Current marketing activity: ${brief.currentMarketing || "(not provided)"}`,
    `Current website: ${brief.currentWebsite || "(not provided)"}`,
    `Name: ${brief.name || "(not provided)"}`,
    `Company: ${brief.company || "(not provided)"}`,
    `Email: ${brief.email || "(not provided)"}`,
    `Phone: ${brief.phone || "(not provided)"}`,
    `Additional notes: ${brief.notes || "(none)"}`,
  ];
  const subject = `Project brief: ${brief.company || brief.name || "New inquiry"}`;
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
}

export type SubmitContactBriefResult = { type: "mailto"; href: string };

// Integration boundary for a future real backend — swap this function's body only.
export function submitContactBrief(brief: ContactBrief): SubmitContactBriefResult {
  return { type: "mailto", href: buildMailtoHref(brief) };
}
