import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "./site-nav";
import SiteFooter from "./site-footer";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main>
      <SiteNav />
      <section className="not-found shell">
        <p className="kicker">404</p>
        <h1>Page not found.</h1>
        <p className="not-found-lede">The page you&apos;re looking for doesn&apos;t exist or may have moved.</p>
        <Link className="button" href="/">
          Back to home <span>↗</span>
        </Link>
      </section>
      <SiteFooter />
    </main>
  );
}
