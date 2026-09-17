"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "sg-cookie-notice-dismissed";

// Notice-style consent: analytics (GA4 + Microsoft Clarity via GTM) load for every
// visitor, and continued use of the site counts as acceptance. This banner only
// informs and remembers that it was dismissed.
export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = window.localStorage.getItem(STORAGE_KEY) === "1";
    } catch {}
    // Read after mount so server and client HTML match.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!dismissed) setVisible(true);
  }, []);

  if (!visible) return null;

  function dismiss() {
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {}
    setVisible(false);
  }

  return (
    <section className="cookie-notice" role="region" aria-label="Cookie notice">
      <p>
        We use cookies from Google Analytics and Microsoft Clarity to understand how this site is used and improve it.
        By continuing to use this site, you accept their use. <Link href="/privacy#cookies">Learn more</Link>
      </p>
      <button type="button" className="cookie-notice-button" onClick={dismiss}>
        Got it
      </button>
    </section>
  );
}
