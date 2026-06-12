# CLAUDE.md — LogiBell

This file is loaded into every Claude Code session. It encodes the LogiBell brand so all work
stays on-strategy. **Source of truth:** `/docs/brand/brand-strategy-v1.9.md`. When this file and
the brand doc disagree, the brand doc wins — and flag the conflict.

## What LogiBell is

A carrier-focused **operations support** company for US truckload carriers — from owner-operators
to larger fleets, including new authorities. **Dispatch is the entry point; operational support is
the relationship.** Not a basic load board, not dispatch-only, and not a "transportation
management" platform. The site should feel like a capable, trustworthy operations partner that
adds real value to the trucking industry.

## Voice and tone (apply to all copy)

- Professional, grounded, **confident**, and **conservative**.
- Only claim what is true today. **No guarantees** of loads, rates, broker acceptance, savings, or
  outcomes.
- Frame everything **positively** around what LogiBell builds. **Never** position against
  competitors.
- Warm and human; respect the people behind the wheel. No emotional overstatement, no long
  personal narratives.
- Transparent about pricing; never "cheap" or discount-framed.

## Approved anchors (use verbatim where they fit)

- Positioning: *Carrier-focused operations support, starting with dispatch.*
- Hero headline: **Your Operation. Fully Backed.**
- Primary CTA: **Ring the LogiBell — Get Onboarded** (subtext: *Speak with a dispatch specialist*).
- Pricing: Semi **6% flat**; Box/Hotshot/Sprinter **6–8%**; no setup fees; no monthly minimums.
- Special Treatment Program (newer authorities): *Authority age isn't the barrier here.*
- LogiGuard (security): *Verify before you haul.* Free check open to everyone.
- Insurance: a **free, competitive quote** — never a promised premium reduction.

## Home page section order (do not reorder without reason)

Announcement bar → Hero → What LogiBell Is → Service Categories (3) → What Makes LogiBell
Different → Who We Are → Special Treatment Program (Newer Authorities) → Pricing (+ Trusted
Partner tier) → Partner & Insurance Access → Security & Integrity (LogiGuard) → Feedback →
FAQ → Final CTA → Footer.

## Wording to AVOID (hard rule — fails review)

- "Guaranteed loads" / "consistent first loads"
- "Brokers will work with you" / "we solve new authority problems"
- "Loads before they hit public boards"
- "Carriers have cut premiums significantly" / any guaranteed-savings claim
- "Highest-paying loads" / guaranteed-earnings claims
- "Fraud-proof," "guaranteed safe," "we eliminate fraud" (LogiGuard *reduces exposure*)
- "Real-time GPS tracking" or tech claims not yet supported (use *proactive status updates*)
- Competitor framing: "not a broker," "not a load board," "not a faceless brokerage"
- Unproven badges, certifications, partner logos, review counts, or metrics
- Discount / "cheap" framing around pricing

## Design principles

Express capability through clarity and craft, not decoration. Strong type hierarchy, generous
whitespace, confident navy/steel palette with one decisive accent, crisp bell/freight iconography
from the logo, real operational imagery where possible. Surface trust early (published pricing,
LogiGuard, clear contact). Mobile-first, WCAG 2.1 AA, fast (Lighthouse 90+). Pull real brand
colors from the existing logo assets — don't invent them if real ones exist.

## Engineering conventions

- Preserve the existing stack (detect from `package.json`). Upgrade in place.
- Work on a branch; small, logical commits; open PRs for Vercel previews.
- Plan before editing; show diffs; pause after each phase for review.
- Don't break existing routes or analytics without flagging.
- Ask before adding heavy dependencies.
- Accessibility and performance are requirements, not extras.
