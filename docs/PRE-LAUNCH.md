# LogiBell — Pre-Launch Checklist

> **Do not publish until every PROVISIONAL item below is confirmed.**
> This site preserves the approved navy/gold design system, type scale, and component set. The items here are content/configuration values that must be verified by the business before going live. Each is also flagged in code with a `PROVISIONAL` comment.

## Provisional — confirm before launch

| Item | Where | Status |
|---|---|---|
| **Phone** `(909) 277-7177` | `Chrome.jsx` (header + footer + mobile), `Home.jsx` (hero), `Contact.jsx` | ✅ Confirmed by owner (June 2026) |
| **Address** `5320 Harmony Ave, Los Angeles, CA 91601` | `Chrome.jsx` (footer), `Contact.jsx` | ✅ Full address per brand strategy v1.9 Company Information |
| **Email** `info@logibell.com` | `Chrome.jsx`, `Contact.jsx`, `Legal.jsx` | ⚠️ Provisional — confirm mailbox exists |
| **Contact form destination** | `Contact.jsx` `<form name="onboarding" data-netlify="true">` | ⚠️ Defaults to **Netlify Forms**. Confirm destination + notification email, or swap to the real backend. Prototype currently shows a success state on submit. |
| **Domain** `logibell.com` | `App.jsx` (`SITE`), `index.html` (canonical/OG) | ⚠️ Provisional — confirm registered domain |
| **Page metadata** (titles/descriptions) | `App.jsx` `META`, `index.html` | ⚠️ Review copy with the business |
| **Canonical + OG tags** | `index.html`, updated per-route in `App.jsx` | ⚠️ Confirm domain; replace OG image (see below) |
| **OG / social image** | `index.html` (`og:image`) | ✅ Purpose-built 1200×630 card (`assets/brand/og-card.png`) — navy gradient, wordmark, gold underline. |
| **Favicon** | `index.html` (`<link rel="icon">`) | ✅ Now the LogiBell **bell mark** (`logibell-bell-gold-edge.png`). Optional: add multi-size `.ico` / 180px apple-touch for crisper small sizes. |
| **sitemap.xml** | `sitemap.xml` | ⚠️ Provisional — paths assume server-side routing on the real domain |
| **robots.txt** | `robots.txt` | ⚠️ Provisional — confirm before launch |
| **Privacy Policy** | `Legal.jsx` `PrivacyPage` | ⚠️ Draft — pending legal review (visible draft flag shown on page) |
| **Terms of Service** | `Legal.jsx` `TermsPage` | ⚠️ Draft — pending legal review (visible draft flag shown on page) |
| **Referral reward details** | `Home.jsx` `ReferralBand`, `Contact.jsx` `#referral` | ⚠️ Reward is intentionally non-specific. Decide the structure (and whether to state it) before launch. |
| **Load board data** | `lanes.js` (`window.LB_LANES`) | ⚠️ Edit weekly with real, representative booked lanes (anonymized — no names). Set `LB_LANES = []` to show the clean "updated weekly" empty state if a week isn't ready. Set `LB_LANES_UPDATED` to a real week label. |
| **LogiGuard check destination** | `LogiGuard.jsx` `<form name="logiguard-check" data-netlify="true">` | ⚠️ Defaults to **Netlify Forms**. Wire to a real inbox/backend so checks actually reach the team and replies go out from `info@logibell.com`. Prototype shows a success state on submit. |
| **Feedback form destination** | `Extras.jsx` `<form name="feedback" data-netlify="true">` | ⚠️ Defaults to **Netlify Forms**. Confirm destination + moderation workflow before launch. |
| **Real reviews** | `Extras.jsx` `REVIEWS` array | ✅ First real review live (Pedro, Rosales Express). Paste more as they come in (`{ quote, name, company, role }`). Never fabricate. |
| **Welcome film** | code-driven intro in `index.html` `#lb-intro` | ✅ Replaced the mp4 with a crisp vector intro (mark in a drawn ring, wordmark, gold underline, tagline) per owner direction — smooth scale/fade close. `assets/brand/logibell-intro.mp4` kept in the project but unwired. |
| **Schedule a Call target** | Hero + FAQ buttons → `#/contact` | ⚠️ Currently routes to the Contact page. Swap to a real calendar link (Calendly etc.) if/when one exists. |
| **Contact vs onboarding split** | `Contact.jsx`, `Chrome.jsx` | Nav "Contact" → top (general reach-us); "Ring the LogiBell" → `#onboard` (get-started form). Confirm the split reads correctly with final copy. |

## Production notes

- **Performance:** the prototype loads React *development* builds and compiles JSX in the browser via Babel standalone — fine for preview, but it will not reach Lighthouse 90+. Precompile the JSX and switch to production React (or bundle with Vite/esbuild) before launch.

- **Routing:** the prototype uses client-side **hash routing** (`#/services`, `#/new-authority`, …) so it works as a static file. For production with clean URLs (`/services`), serve `index.html` for all routes (SPA fallback) and keep the canonical paths in `App.jsx` `META` aligned with `sitemap.xml`.
- **No dead links:** all nav and footer links resolve to real routed pages — no `preventDefault` stubs remain.
- **One nav + footer** is shared across every page (`Chrome.jsx`).
- **Tone guardrails preserved (v1.9):** no over-promising, no competitor framing, no "cheap" pricing language, "network" not "hub", no emoji, no fabricated testimonials, no sign-in/portal. Per the owner's direction, the site also avoids repeating explicit "we do not guarantee…" disclaimers in marketing copy — conservative claims are made positively instead (the legal no-guarantee language lives in Terms only).
- **LogiGuard (v1.9):** full Security & Integrity section with the free check form lives on the Services page (`#/services/logiguard`); a slim mention strip sits in the Home welcome flow. Wording stays at "work to confirm / reduce exposure" — never "fraud-proof" or "guaranteed safe".
- **Hero load board:** driven by `lanes.js` so the owner can update booked lanes weekly without touching layout. Truthful representative lanes only; empty array falls back to a clean state (no fabricated volume).

## Deploy folder

A production deploy needs only: `index.html`, the `*.jsx` app files, `sitemap.xml`, `robots.txt`, plus the design-system assets it references (`../../styles.css`, `../../_ds_bundle.js`, `../../assets/logo/`). For a self-contained 