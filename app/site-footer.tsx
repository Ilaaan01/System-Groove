import Link from "next/link";
import HashLink from "./hash-link";

export default function SiteFooter() {
  return (
    <footer>
      <div className="shell footer-grid">
        <div>
          <Link className="brand footer-brand" href="/"><span className="brand-mark">SG</span><span>system/groove</span></Link>
          <p>Websites, software, apps, search, and automation—built to work together.</p>
        </div>
        <div>
          <span className="footer-label">Explore</span>
          <HashLink href="/#services">Services</HashLink>
          <HashLink href="/#approach">Approach</HashLink>
          <HashLink href="/#work">Experience</HashLink>
          <Link href="/case-studies">Case Studies</Link>
          <a href="https://app.systemgroove.com">Client login</a>
        </div>
        <div>
          <span className="footer-label">Connect</span>
          <a href="mailto:contact@systemgroove.com">Email</a>
          <a href="https://www.facebook.com/SystemGroove1">Facebook</a>
          <a href="https://instagram.com/systemgroove_">Instagram</a>
          <a href="https://www.systemgroove.com/privacy-policy/">Privacy Policy</a>
          <a href="https://www.systemgroove.com/terms-and-conditions/">Terms &amp; Conditions</a>
        </div>
        <div>
          <span className="footer-label">Charlotte, NC</span>
          <p>1235 East Blvd #E-2094<br />Charlotte, NC 28203</p>
          <a href="tel:+19803032697">(980) 303-2697</a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} System Groove</span>
        <a className="footer-credit" href="https://alcasoftware.com" target="_blank" rel="noopener noreferrer">Made by ALCA Software</a>
        <span>Strategy / Design / Engineering / Growth</span>
      </div>
    </footer>
  );
}
