export const SITE_URL = "https://www.systemgroove.com";
export const ORG_NAME = "System Groove";

export const CONTACT_EMAIL = "contact@systemgroove.com";
export const CONTACT_PHONE_E164 = "+19803032697";
export const CONTACT_PHONE_DISPLAY = "(980) 303-2697";

export const ADDRESS = {
  streetAddress: "1235 East Blvd #E-2094",
  addressLocality: "Charlotte",
  addressRegion: "NC",
  postalCode: "28203",
  addressCountry: "US",
};
export const ADDRESS_DISPLAY = `${ADDRESS.streetAddress}, ${ADDRESS.addressLocality}, ${ADDRESS.addressRegion} ${ADDRESS.postalCode}`;

export const SOCIALS = {
  facebook: "https://www.facebook.com/SystemGroove1",
  instagram: "https://instagram.com/systemgroove_",
  tiktok: "https://www.tiktok.com/@adriansystemz4",
};

export const CLIENT_LOGIN_URL = "https://app.systemgroove.com";

export const OG_IMAGE = { url: "/og.png", width: 1731, height: 909, alt: "System Groove — Build what’s next. Be found everywhere." };

export const ORG_SERVICE_TYPES = [
  "Web design",
  "Custom software development",
  "Mobile app development",
  "Search engine optimization",
  "AI search optimization",
  "Business automation",
  "Meta Ads",
  "Google Ads",
  "Google Business Profile optimization",
  "Campaign landing pages",
  "Review automation",
];

export const PRIMARY_NAV = [
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
] as const;
