import Link from "next/link";
import Image from "next/image";
import { ADDRESS, CLIENT_LOGIN_URL, CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, ORG_NAME, SOCIALS } from "@/lib/constants";

export function Footer() {
  return (
    <footer>
      <div className="shell footer-grid">
        <div>
          <Link className="brand footer-brand" href="/">
            <Image className="brand-logo" src="/system-groove-logo.png" alt="SystemGroove" width={1785} height={686} unoptimized />
          </Link>
          <p>Websites, software, apps, search, and automation—built to work together.</p>
        </div>
        <div>
          <span className="footer-label">Explore</span>
          <Link href="/services">Services</Link>
          <Link href="/process">Process</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/contact">Contact</Link>
          <a href={CLIENT_LOGIN_URL}>Client login</a>
        </div>
        <div>
          <span className="footer-label">Connect</span>
          <a href={`mailto:${CONTACT_EMAIL}`}>Email</a>
          <a href={SOCIALS.facebook}>Facebook</a>
          <a href={SOCIALS.instagram}>Instagram</a>
          <a href={SOCIALS.tiktok}>TikTok</a>
        </div>
        <div>
          <span className="footer-label">Charlotte, NC</span>
          <p>
            {ADDRESS.streetAddress}
            <br />
            {ADDRESS.addressLocality}, {ADDRESS.addressRegion} {ADDRESS.postalCode}
          </p>
          <a href={`tel:${CONTACT_PHONE_E164}`}>{CONTACT_PHONE_DISPLAY}</a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} {ORG_NAME}</span>
        <div className="footer-legal">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          <a className="alca-credit" href="https://alcasoftware.com">Made by ALCA Software <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </footer>
  );
}
