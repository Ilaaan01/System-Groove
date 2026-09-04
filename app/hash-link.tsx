"use client";

import type { MouseEvent, ReactNode } from "react";

/**
 * vinext's App Router scroll-restoration only fires for navigations its own
 * router tracked (see AppRouterScrollTargetInner in vinext's shims) — a plain
 * anchor click, or a fresh page load with a URL hash, updates the hash but
 * never scrolls. This component does the scroll itself so in-page section
 * links keep working regardless of that framework gap.
 */
export default function HashLink({
  href,
  className,
  onClick,
  children,
}: {
  href: string;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.();
    if (window.location.pathname !== "/") return;
    const id = href.split("#")[1];
    const target = id ? document.getElementById(id) : null;
    if (!target) return;
    event.preventDefault();
    // "instant" (not "smooth"): on this page a CSS-driven smooth scroll
    // reliably stalls near the start instead of completing — see the note
    // in the on-mount hash effect in site-nav.tsx for the same finding.
    target.scrollIntoView({ behavior: "instant" });
    history.pushState(null, "", href);
  }

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
