import type { Metadata, Viewport } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import "./globals.css";

const body = DM_Sans({ variable: "--font-body", subsets: ["latin"] });
const display = Space_Grotesk({ variable: "--font-display", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.systemgroove.com"),
  title: {
    default: "System Groove | Growth Marketing & Digital Products for Local Service Businesses",
    template: "%s | System Groove",
  },
  description: "System Groove runs Meta Ads, Google Ads, local visibility, and review systems for local service businesses—backed by ALCA Software for custom websites, software, and apps.",
  keywords: ["Meta Ads for local businesses", "Google Ads local services", "Google Business Profile optimization", "local SEO Charlotte NC", "custom software development", "mobile app development", "AI search optimization", "AEO", "GEO", "business automation"],
  alternates: { canonical: "/" },
  category: "technology",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "System Groove",
    title: "System Groove | Build what’s next. Be found everywhere.",
    description: "Meta Ads, Google Ads, local visibility, and review systems for local service businesses—backed by ALCA Software for websites, software, and apps.",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "System Groove — Build what’s next. Be found everywhere." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "System Groove | Build what’s next. Be found everywhere.",
    description: "Meta Ads, Google Ads, local visibility, and review systems for local service businesses—backed by ALCA Software for websites, software, and apps.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#192e3d", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${body.variable} ${display.variable}`}>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
