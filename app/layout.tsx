import type { Metadata, Viewport } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const body = DM_Sans({ variable: "--font-body", subsets: ["latin"] });
const display = Space_Grotesk({ variable: "--font-display", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.systemgroove.com"),
  title: {
    default: "System Groove | Websites, Software, Apps & SEO",
    template: "%s | System Groove",
  },
  description: "System Groove builds modern websites, custom software, mobile apps, SEO campaigns, and AI search visibility for growing businesses.",
  keywords: ["web design Charlotte NC", "custom software development", "mobile app development", "SEO services", "AI search optimization", "AEO", "GEO", "business automation"],
  alternates: { canonical: "/" },
  category: "technology",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "System Groove",
    title: "System Groove | Build what’s next. Be found everywhere.",
    description: "Websites, custom software, mobile apps, SEO, AI search optimization, and automation for growing businesses.",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "System Groove — Build what’s next. Be found everywhere." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "System Groove | Build what’s next. Be found everywhere.",
    description: "Websites, custom software, mobile apps, SEO, AI search optimization, and automation for growing businesses.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#f1f0e8", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${body.variable} ${display.variable}`}>{children}</body></html>;
}
