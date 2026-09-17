import type { Metadata, Viewport } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import { CookieNotice } from "@/components/cookie-notice";
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

const GTM_ID = "GTM-T93NK7DX";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </head>
      <body className={`${body.variable} ${display.variable}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`} height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
        </noscript>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Nav />
        {children}
        <Footer />
        <CookieNotice />
      </body>
    </html>
  );
}
