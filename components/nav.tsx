import Link from "next/link";
import Image from "next/image";
import { MobileMenu } from "@/components/mobile-menu";
import { CLIENT_LOGIN_URL, PRIMARY_NAV } from "@/lib/constants";

export function Nav() {
  return (
    <header className="site-header">
    <nav className="nav shell" aria-label="Main navigation">
      <Link className="brand" href="/" aria-label="System Groove home">
        <Image className="brand-logo" src="/system-groove-logo.png" alt="SystemGroove" width={1785} height={686} unoptimized />
      </Link>
      <div className="nav-links">
        {PRIMARY_NAV.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
        <a href={CLIENT_LOGIN_URL}>Client login</a>
      </div>
      <div className="nav-actions">
        <MobileMenu items={PRIMARY_NAV} clientLoginUrl={CLIENT_LOGIN_URL} />
        <Link className="button button-small" href="/contact">
          Start a project <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </nav>
    </header>
  );
}
