# LogiBell — Design Review & Polish Pass (June 12, 2026)

Branch: `design-polish-v1.9` · Base: latest Claude Design handoff (brand strategy v1.9)

## What changed in this pass

### Critical fixes
- **Pricing-minimum contradiction** — Services page said "with an affordable minimum"; everywhere else says "No monthly minimums." Aligned to the published-pricing anchors.
- **Pricing + Partner Access added to Home** — brand strategy §L requires both in the Home flow. Added a compact `PricingBand` (three tiers incl. Trusted Partner as the higher tier, perks row) and a slim `PartnerBand` strip after the Special Treatment section (`Home2.jsx`, wired in `App.jsx`).
- **WCAG AA contrast** —
  - `--on-navy-faint` `#7E8AA8` → `#97A5C6` (3.39:1 → 4.74:1 on navy-800); fixes footer legal bar, dark-card fine print, active tab sublabels, load-board captions.
  - New token `--success-on-dark: #4CC38A` (5.28:1) for the "On the road" status text on navy.
  - Services panel sub-headers `#828BA3` → `#5A6480` (3.40:1 → 5.88:1 on white).
- **Services dropdown keyboard access** — opens on focus, closes on blur/Escape, `aria-haspopup` + `aria-expanded` on the trigger (`Chrome.jsx`).
- **Asset paths** — handoff `../../assets/…` rewritten to `./assets/…` for the repo root layout (index.html + 6 JSX files).

### Copy alignment to v1.9
- Hero eyebrow and intro tagline: "Carrier-Focused Operations" → **"Carrier-Focused Operations Support"** (approved anchor, verbatim).
- "negotiating rates" / "Rate negotiation support" → **"rate-discussion support during booking"** (outcome-neutral, §F.A); removed the duplicate bullet.
- "Quarterly lane and market review" (unproven cadence, §N) → "Trusted Partner tier — earned over time" (§F.C).
- Founder attribution: "Founder & Operations Lead, LogiBell" → **"Founder, LogiBell"** (§D sign-off).
- Address: "Los Angeles, CA" → full **5320 Harmony Ave, Los Angeles, CA 91601** (v1.9 Company Information) in footer + contact.

### UX / conversion
- Trusted Partner "See how it's earned" now scrolls to the comparison table on the same Pricing page (`#trusted-partner` anchor) instead of dumping to generic Contact.
- "No setup fees / No monthly minimums" pricing perks: green ✕ icons → green ✓ (consistent success semantics).

### Assets / meta
- New purpose-built **1200×630 OG card** (`assets/brand/og-card.png`) — navy gradient, wordmark, gold underline; wired into `og:image` / `twitter:image` with dimensions.
- PRE-LAUNCH.md updated: OG ✅, address ✅, added a performance note (precompile JSX + production React before launch; dev builds won't reach Lighthouse 90+).

## Verified
- All 14 JSX files parse (esbuild).
- All changed color pairs pass WCAG AA (4.74–6.58:1).
- §N "wording to avoid" grep: clean (only intentional Terms "No guarantees" clause and code comments).
- "minimum" consistency grep: only "no monthly minimums" remains.

## Known items deliberately left
- React development builds + in-browser Babel: prototype constraint, flagged in PRE-LAUNCH for the production bundle step.
- Header has phone + "Ring the LogiBell" but no separate "Schedule a Call" button (strategy §C suggests one in header *and* hero; hero has it). Left out to avoid nav crowding — revisit if desired.
- Home FAQ omits the "Do you guarantee loads?" Q (§M includes it; owner direction in PRE-LAUNCH keeps no-guarantee language in Terms only). Owner direction followed.
- ReferralBand stays on Home (owner addition; not in §L order, but consistent with tone).
