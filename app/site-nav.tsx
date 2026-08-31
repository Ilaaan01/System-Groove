"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const isCaseStudies = pathname?.startsWith("/case-studies") ?? false;

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return undefined;

    function onScroll() {
      nav!.classList.toggle("nav-scrolled", window.scrollY > 4);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const panel = panelRef.current;
    const focusable = panel
      ? Array.from(panel.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"))
      : [];
    focusable[0]?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (event.key === "Tab" && focusable.length > 0) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
    toggleRef.current?.focus();
  }

  return (
    <nav ref={navRef} className="nav" aria-label="Main navigation">
      <div className="shell nav-inner">
        <Link className="brand" href="/" aria-label="System Groove home">
          <span className="brand-mark">SG</span>
          <span>system/groove</span>
        </Link>
        <div className="nav-links">
          <Link href="/#services">Services</Link>
          <Link href="/#approach">Approach</Link>
          <Link href="/#about">About</Link>
          <Link href="/case-studies" className={isCaseStudies ? "active" : undefined} aria-current={isCaseStudies ? "page" : undefined}>Case Studies</Link>
          <a href="https://app.systemgroove.com">Client login</a>
        </div>
        <Link className="button button-small" href="/#contact">
          Start a project <span>↗</span>
        </Link>
        <button
          ref={toggleRef}
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="nav-toggle-bars" aria-hidden="true" />
        </button>
      </div>
      <div id={panelId} ref={panelRef} className={open ? "nav-panel nav-panel-open" : "nav-panel"}>
        <div className="nav-panel-links">
          <Link href="/#services" onClick={closeMenu}>Services</Link>
          <Link href="/#approach" onClick={closeMenu}>Approach</Link>
          <Link href="/#about" onClick={closeMenu}>About</Link>
          <Link href="/case-studies" className={isCaseStudies ? "active" : undefined} aria-current={isCaseStudies ? "page" : undefined} onClick={closeMenu}>Case Studies</Link>
          <a href="https://app.systemgroove.com" onClick={closeMenu}>Client login</a>
        </div>
        <Link className="button nav-panel-cta" href="/#contact" onClick={closeMenu}>
          Start a project <span>↗</span>
        </Link>
      </div>
    </nav>
  );
}
