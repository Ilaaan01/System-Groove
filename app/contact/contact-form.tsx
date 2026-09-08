"use client";

import { useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/constants";
import { servicePillars } from "@/lib/content/services";
import { emptyContactBrief, submitContactBrief, validateContactBrief, type ContactBrief, type ContactBriefErrors } from "@/lib/contact-brief";

const steps = ["Your project", "The context", "About you"];
const serviceLabels: Record<string, string> = {
  "meta-ads": "Meta Ads",
  "google-ads": "Google Ads",
  "google-business-profile-optimization": "Google Business Profile",
  "seo-local-seo-aeo-geo": "SEO & AI search",
  "campaign-landing-pages": "Landing pages",
  "automated-reviews": "Review automation",
  "websites": "Websites",
  "custom-software": "Custom software",
  "saas-platforms-customer-portals": "SaaS & portals",
  "mobile-apps": "Mobile apps",
  "ai-automation-workflows": "AI & automation",
  "lead-capture-crm-nurturing": "CRM & follow-up",
};

export function ContactForm() {
  const [brief, setBrief] = useState<ContactBrief>(emptyContactBrief);
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<ContactBriefErrors>({});
  const [draftPrepared, setDraftPrepared] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  function update<K extends keyof ContactBrief>(key: K, value: ContactBrief[K]) {
    setBrief((prev) => ({ ...prev, [key]: value }));
    setDraftPrepared(false);
    if (key === "name" || key === "email") setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function changeStep(next: number) {
    setStep(next);
    requestAnimationFrame(() => headingRef.current?.focus());
  }

  function toggleService(title: string) {
    update("services", brief.services.includes(title) ? brief.services.filter((s) => s !== title) : [...brief.services, title]);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (step < 2) {
      changeStep(step + 1);
      return;
    }
    const nextErrors = validateContactBrief(brief);
    setErrors(nextErrors);
    if (nextErrors.name) nameRef.current?.focus();
    else if (nextErrors.email) emailRef.current?.focus();
    else {
      setDraftPrepared(true);
      window.location.assign(submitContactBrief(brief).href);
    }
  }

  return (
    <form className="project-brief" onSubmit={handleSubmit} noValidate aria-label="Your project brief">
      <div className="brief-topline"><span>YOUR PROJECT BRIEF</span><span>0{step + 1} / 03</span></div>
      <ol className="brief-steps" aria-label="Brief steps">
        {steps.map((label, index) => <li key={label}><button type="button" aria-current={step === index ? "step" : undefined} onClick={() => changeStep(index)}><span>{index + 1}</span>{label}</button></li>)}
      </ol>

      <div className="brief-stage" key={step}>
        <h2 ref={headingRef} tabIndex={-1}>{["What can we help with?", "A little about your business.", "Who should we talk to?"][step]}</h2>
        <p className="brief-stage-intro">{["Choose any that apply. Not sure yet? You can skip ahead.", "Share what you know. Everything in this step is optional.", "Just your name and email are required to prepare the brief."][step]}</p>

        {step === 0 && <>
          <div className="brief-service-groups">
            {servicePillars.map((pillar) => <fieldset key={pillar.id} className="brief-service-group"><legend>{pillar.label}</legend><div className="brief-service-options">
              {pillar.services.map((service) => <label key={service.slug} className="brief-service-option"><input type="checkbox" checked={brief.services.includes(service.title)} onChange={() => toggleService(service.title)} /><span><i aria-hidden="true">{brief.services.includes(service.title) ? "✓" : "+"}</i>{serviceLabels[service.slug] || service.title}</span></label>)}
            </div></fieldset>)}
          </div>
          <label className="brief-field"><span>What would you like to improve? <small>Optional</small></span><textarea rows={3} placeholder="For example: We’re getting traffic, but not enough inquiries." value={brief.problem} onChange={(e) => update("problem", e.target.value)} /></label>
        </>}

        {step === 1 && <div className="brief-fields">
          <label className="brief-field brief-wide"><span>Your website</span><input type="url" autoComplete="url" placeholder="https://yourbusiness.com" value={brief.currentWebsite} onChange={(e) => update("currentWebsite", e.target.value)} /></label>
          <label className="brief-field"><span>Who do you serve?</span><input type="text" placeholder="Location or target customers" value={brief.serviceArea} onChange={(e) => update("serviceArea", e.target.value)} /></label>
          <label className="brief-field"><span>Your main service or offer</span><input type="text" placeholder="What your business does best" value={brief.mainOffer} onChange={(e) => update("mainOffer", e.target.value)} /></label>
          <label className="brief-field brief-wide"><span>What are you doing today?</span><textarea rows={3} placeholder="Ads, referrals, social media, existing tools…" value={brief.currentMarketing} onChange={(e) => update("currentMarketing", e.target.value)} /></label>
          <label className="brief-field brief-wide"><span>Anything else we should know?</span><textarea rows={2} placeholder="Goals, timing, or anything that matters to your project." value={brief.notes} onChange={(e) => update("notes", e.target.value)} /></label>
        </div>}

        {step === 2 && <>
          <div className="brief-fields">
            <label className="brief-field"><span>Your name <small>Required</small></span><input ref={nameRef} type="text" name="name" autoComplete="name" required placeholder="Full name" value={brief.name} onChange={(e) => update("name", e.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "brief-name-error" : undefined} />{errors.name && <span id="brief-name-error" className="brief-error" role="alert">{errors.name}</span>}</label>
            <label className="brief-field"><span>Email <small>Required</small></span><input ref={emailRef} type="email" name="email" autoComplete="email" required placeholder="you@company.com" value={brief.email} onChange={(e) => update("email", e.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "brief-email-error" : undefined} />{errors.email && <span id="brief-email-error" className="brief-error" role="alert">{errors.email}</span>}</label>
            <label className="brief-field"><span>Company <small>Optional</small></span><input type="text" autoComplete="organization" placeholder="Business name" value={brief.company} onChange={(e) => update("company", e.target.value)} /></label>
            <label className="brief-field"><span>Phone <small>Optional</small></span><input type="tel" autoComplete="tel" placeholder="Your phone number" value={brief.phone} onChange={(e) => update("phone", e.target.value)} /></label>
          </div>
          <div className="brief-review"><div><h3>Your project at a glance</h3><button type="button" onClick={() => changeStep(0)}>Edit project <span aria-hidden="true">↗</span></button></div><p>{brief.services.length ? brief.services.map((title) => { const service = servicePillars.flatMap((p) => p.services).find((s) => s.title === title); return service ? serviceLabels[service.slug] || title : title; }).join(" · ") : "Let’s explore the right starting point together."}</p>{brief.problem && <p>{brief.problem}</p>}</div>
          <p className="brief-email-note">Your email app will open with the complete brief addressed to {CONTACT_EMAIL}. Review it there, then send.</p>
          {draftPrepared && <p className="brief-draft-status" role="status">Your draft is prepared. If your email app didn’t open, <a href={submitContactBrief(brief).href}>try opening it again</a> or email us directly.</p>}
        </>}
      </div>

      <div className="brief-controls">
        {step > 0 ? <button className="brief-back" type="button" onClick={() => changeStep(step - 1)}><span aria-hidden="true">←</span> Back</button> : <span className="brief-no-pressure">Start with what you know.</span>}
        <button className="button button-lime" type="submit">{step < 2 ? "Continue" : "Open email draft"}<span aria-hidden="true">{step < 2 ? "→" : "↗"}</span></button>
      </div>
      <p className="brief-privacy">Your details stay in this page until you choose to email them. <Link href="/privacy">Privacy policy</Link></p>
    </form>
  );
}
