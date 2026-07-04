# LogiBell — Site Evaluation & Launch Readiness (June 14, 2026)

Method: source-code + brand-strategy audit (structure, UX, accessibility, brand
compliance, performance, launch config). Pure-visual judgments — exact spacing,
color feel, photo quality — still need a human eye on the rendered pages.

---

## What's already strong

- **Clear, on-strategy information architecture.** Section order matches the brand
  spec (Hero → What LogiBell Is → Services → Differentiators → Who We Are → Special
  Treatment → Pricing → Partner/Insurance → LogiGuard → Feedback → FAQ → CTA → Footer).
- **One shared nav + footer** across every page (`Chrome.jsx`) — consistent.
- **Real routed pages** with per-route titles/descriptions and canonical/OG tags.
- **Accessibility basics in place:** all 6 images have `alt`; semantic headings used
  (6× h1, 19× h2, 17× h3); ARIA on nav/dropdown/interactive bits; all 3
  `target="_blank"` links carry `rel="noopener"`.
- **Brand voice guardrails respected** — no guarantees, no competitor framing, no
  "cheap" pricing language, published rates surfaced early.
- **Published pricing, LogiGuard, and contact are surfaced early** — trust signals up front.

---

## P0 — Launch blockers (must fix before going live)

1. **Two of three forms are dead on Vercel.**
   - `Contact.jsx` (onboarding / "Ring the LogiBell" lead form) and `LogiGuard.jsx`
     (security check) still use **Netlify Forms** (`data-netlify="true"`). Netlify
     Forms only work on Netlify hosting — on **Vercel they submit nowhere**. Every
     onboarding lead and every LogiGuard request would silently vanish.
   - The Feedback form (`Extras.jsx`) was already migrated to **Formspree**
     (`formspree.io/f/mpqeoedr`) and works. Apply that same pattern to the other two.
   - Fix: create a Formspree endpoint for each, replace the Netlify plumbing with a
     `fetch()` POST (mirror `Extras.jsx`), and verify a real submission lands in the inbox.

2. **Production build / performance.** The site ships **React development builds** and
   transpiles JSX **in the browser via Babel + unpkg** at every page load. This is the
   same fragility that just caused the white screen (one bad file or CDN hiccup = blank
   page) and it **will not hit the brand's Lighthouse 90+ target**. Precompile the JSX
   and switch to production React (bundle with Vite/esbuild). Biggest single quality + reliability upgrade.

3. **Real domain.** `logibell.com` is referenced as canonical/OG but is marked
   provisional. Confirm it's registered, add it in Vercel, and point DNS.

4. **Legal pages need review.** Privacy Policy and Terms are drafts (with visible draft
   flags). Have them reviewed before launch — the no-guarantee language lives here.

5. **Confirm contact details exist.** Email `info@logibell.com` is provisional — confirm
   the mailbox is live (forms and replies depend on it). Phone/address are confirmed.

---

## P1 — High-value improvements

- **Clean URLs.** Routing is hash-based (`/#/services`). Works on static hosting but
  looks dated and is weaker for sharing/SEO. With a real build you can switch to clean
  paths (`/services`) using Vercel's SPA fallback, and align `sitemap.xml` to match.
- **Intro animation vs first impression.** The home page holds a ~3s vector intro overlay
  before content. Re-check that it (a) doesn't delay perceived load / LCP, (b) never
  blocks content if JS is slow, and (c) only plays once per session.
- **Favicon polish.** Bell mark is set; add a multi-size `.ico` + 180px apple-touch for
  crisp rendering in tabs/bookmarks/home-screen.
- **Run a real Lighthouse + axe pass** once on production build — verify color contrast
  (navy/gold), focus states, and mobile tap-target sizes against WCAG 2.1 AA.

---

## P2 — Content to finalize (from PRE-LAUNCH.md)

- **Load board (`lanes.js`)** — populate with real, anonymized booked lanes weekly, or
  set `LB_LANES = []` for the clean "updated weekly" empty state. No fabricated volume.
- **Referral reward** — decide the structure and whether to state it.
- **"Schedule a Call"** — currently routes to Contact; swap to a real calendar link
  (e.g. Calendly) if one exists.
- **Reviews** — keep adding real ones to the `REVIEWS` array as they arrive; never fabricate.
- **sitemap.xml / robots.txt** — confirm paths against the final domain + routing model.
- **Page titles/descriptions** — final business review of copy.

---

## Suggested order of operations to "go live"

1. Migrate the two Netlify forms to Formspree; test a real submission on each. *(P0-1)*
2. Confirm domain + `info@` mailbox; wire domain in Vercel. *(P0-3, P0-5)*
3. Move to a production build (Vite) — fixes perf, fragility, and enables clean URLs. *(P0-2, P1)*
4. Legal review of Privacy + Terms; remove draft flags. *(P0-4)*
5. Finalize content (load board, referral, reviews, metadata). *(P2)*
6. Final Lighthouse + accessibility pass on production. *(P1)*
