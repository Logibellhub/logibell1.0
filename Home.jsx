/* LogiBell — Home page sections */
(function () {
  const { Button, Card, Badge } = window.DS;
  const Icon = window.Icon;
  const { FlipCard } = window.LBFlip;
  const { RouteMotif, FreightNetwork } = window.LBAmbient;

  /* Atmosphere pass: generous default section rhythm. Explicit pt/pb still
     override for intentionally tight bands. */
  const SECTION_PAD = "clamp(48px, 6vw, 88px)";
  const HEAD_GAP = "clamp(32px, 4vw, 56px)";
  const GRID_GAP = "clamp(20px, 3vw, 32px)";

  const Section = ({ id, bg = "var(--surface-page)", pt = SECTION_PAD, pb = SECTION_PAD, children, style = {} }) => (
    <section id={id} style={{ background: bg, paddingTop: pt, paddingBottom: pb, ...style }}>
      <div className="lb-wrap">{children}</div>
    </section>
  );

  const Eyebrow = ({ children, onDark }) => (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 9, marginBottom: 18 }}>
      <span style={{ width: 22, height: 2, background: "var(--gold-500)", borderRadius: 2 }} />
      <span style={{ fontFamily: "var(--font-sans)", fontSize: 12.5, fontWeight: 600, letterSpacing: "1.6px", textTransform: "uppercase", color: onDark ? "var(--gold-400)" : "var(--gold-700)" }}>{children}</span>
    </div>
  );

  /* ---------- LOAD BOARD (hero visual) ----------
     Modern "live lane activity" board. Data comes from window.LB_LANES
     (see lanes.js) so the owner can update booked lanes weekly without
     touching layout. Anonymized lanes only — no names. */
  function LoadBoard({ navigate }) {
    const lanes = (typeof window !== "undefined" && window.LB_LANES) || [];
    const updated = (typeof window !== "undefined" && window.LB_LANES_UPDATED) || "Updated weekly";
    const goContact = () => { if (navigate) navigate("contact", "onboard"); };

    // Auto-scroll the lane list with JS (requestAnimationFrame) instead of a CSS
    // animation: iOS Safari pauses CSS animations under Low Power Mode, which
    // froze the board on iPhone. JS keeps it moving. Honors prefers-reduced-motion
    // and pauses on hover. Rows are rendered twice, so we loop at half the height.
    const trackRef = React.useRef(null);
    const winRef = React.useRef(null);
    React.useEffect(() => {
      const track = trackRef.current, win = winRef.current;
      if (!track || !win) return;
      if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      let raf, y = 0, last = null, paused = false;
      const SPEED = 26; // px per second
      const step = (t) => {
        if (last == null) last = t;
        const dt = Math.min((t - last) / 1000, 0.05); last = t;
        if (!paused) {
          const half = track.scrollHeight / 2;
          y += SPEED * dt;
          if (half > 0 && y >= half) y -= half;
          track.style.transform = "translateY(" + (-y).toFixed(2) + "px)";
        }
        raf = requestAnimationFrame(step);
      };
      const enter = () => { paused = true; }, leave = () => { paused = false; };
      win.addEventListener("mouseenter", enter);
      win.addEventListener("mouseleave", leave);
      raf = requestAnimationFrame(step);
      return () => { cancelAnimationFrame(raf); win.removeEventListener("mouseenter", enter); win.removeEventListener("mouseleave", leave); };
    }, [lanes.length]);

    return (
      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", inset: "-26px -26px auto auto", width: 116, height: 116, background: "var(--white)", border: "1px solid var(--line)", borderRadius: "var(--radius-2xl)", boxShadow: "var(--shadow-md)", zIndex: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: 14 }}>
          <img src="./assets/logo/logibell-emblem.jpg" alt="" aria-hidden="true" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
        </div>
        <Card surface="dark" radius="2xl" pad="none" style={{ position: "relative", zIndex: 1, overflow: "hidden", boxShadow: "var(--shadow-xl)" }}>
          {/* header */}
          <div style={{ padding: "20px 22px", borderBottom: "1px solid var(--navy-700)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15.5, color: "#fff" }}>
              <Icon name="radio" size={17} color="var(--gold-500)" /> Lane activity
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 7, fontFamily: "var(--font-sans)", fontSize: 12.5, fontWeight: 600, color: "var(--success-on-dark)" }}>
              <span className="lb-live-dot" style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--success)", display: "inline-block" }} /> On the road
            </span>
          </div>
          {/* column header */}
          <div className="lb-lane-row lb-lane-headrow" style={{ display: "grid", gridTemplateColumns: "2fr 0.82fr 0.45fr 0.7fr", gap: 10, padding: "11px 20px", background: "var(--navy-950)", borderBottom: "1px solid var(--navy-700)", fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: "1px", textTransform: "uppercase", color: "var(--on-navy-faint)" }}>
            <span>Lane</span><span>Equipment</span><span>Mode</span><span style={{ textAlign: "right" }}>Rate</span>
          </div>
          {/* rows — JS-driven auto-scroll (see the effect above). Lanes are
             rendered twice so the upward scroll loops seamlessly at half height. */}
          {lanes.length === 0 ? (
            <div style={{ padding: "34px 22px", textAlign: "center", fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--on-navy-soft)" }}>
              Recent lanes — updated weekly.
            </div>
          ) : (
            <div className="lb-lane-scroll" ref={winRef}>
              <div className="lb-lane-track" ref={trackRef}>
                {lanes.concat(lanes).map((l, idx) => {
                  const clone = idx >= lanes.length;
                  return (
                    <div
                      key={idx}
                      className="lb-lane-row"
                      role="button"
                      tabIndex={clone ? -1 : 0}
                      aria-hidden={clone ? "true" : undefined}
                      aria-label={"Lane " + l.from + " to " + l.to + " — Ring the LogiBell to get onboarded"}
                      onClick={goContact}
                      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); goContact(); } }}
                      style={{ display: "grid", gridTemplateColumns: "2fr 0.82fr 0.45fr 0.7fr", gap: 10, alignItems: "center", padding: "14px 20px", borderBottom: "1px solid var(--navy-800)" }}
                    >
                      <span style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 500, color: "#fff", minWidth: 0 }}>
                        <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{l.from}</span>
                        <Icon name="arrow-right" size={13} color="var(--gold-500)" className="lb-lane-arrow" style={{ flex: "none" }} />
                        <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{l.to}</span>
                      </span>
                      <span><span style={{ display: "inline-block", fontFamily: "var(--font-sans)", fontSize: 11.5, fontWeight: 600, color: "var(--on-navy)", background: "var(--navy-700)", border: "1px solid var(--navy-600)", borderRadius: "var(--radius-pill)", padding: "3px 10px", whiteSpace: "nowrap" }}>{l.equipment}</span></span>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--on-navy-soft)" }}>{l.mode}</span>
                      <span className="lb-lane-rate" style={{ fontFamily: "var(--font-mono)", fontSize: 14, fontWeight: 600, color: "var(--gold-500)", textAlign: "right", display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 6 }}>
                        <span className="lb-lane-rate-num">{l.rate}</span>
                        <Icon name="arrow-up-right" size={13} color="var(--gold-500)" className="lb-lane-go" style={{ flex: "none" }} />
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {/* footer */}
          <div className="lb-lane-foot" style={{ padding: "15px 22px", borderTop: "1px solid var(--navy-700)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, flexWrap: "wrap", background: "var(--navy-950)" }}>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: 12.5, color: "var(--on-navy-faint)", display: "inline-flex", alignItems: "center", gap: 7 }}>
              {updated}
              <span className="lb-lane-hint" style={{ color: "var(--on-navy-faint)" }}>· Tap a lane to get started</span>
            </span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 13.5, color: "var(--gold-500)", fontWeight: 600 }}>Flat fee · Semi 6% · Box 6–8%</span>
          </div>
        </Card>
      </div>
    );
  }

  /* ---------- HERO ---------- */
  function Hero({ navigate }) {
    return (
      <Section pt={76} pb={88} style={{ position: "relative", overflow: "hidden" }}>
        <FreightNetwork />
        <div className="lb-hero-grid" style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 64, alignItems: "center", position: "relative" }}>
          <div>
            <Eyebrow>Carrier-Focused Operations Support</Eyebrow>
            <h1 className="lb-display-xl" style={{ marginBottom: 22 }}>Your Operation.<br /><span style={{ color: "var(--navy-700)" }}>Fully Backed.</span></h1>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 19, lineHeight: 1.55, color: "var(--text-strong)", maxWidth: 520, marginBottom: 14, fontWeight: 500 }}>
              The business behind every load — handled, so you can keep your focus on the road.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 16.5, lineHeight: 1.6, color: "var(--text-body)", maxWidth: 520, marginBottom: 30 }}>
              From sourcing loads to broker calls, rate confirmations, and paperwork, we handle the back office behind every load — and connect you to a vetted partner network as you grow. Stay as hands-on as you want; you keep control of your operation.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
              <Button variant="primary" size="lg" iconLeft={<Icon name="bell" size={18} color="rgb(255, 203, 31)" />} onClick={() => navigate("contact", "onboard")}>Ring the LogiBell — Get Onboarded</Button>
              <Button variant="secondary" size="lg" iconRight={<Icon name="arrow-right" size={16} />} onClick={() => navigate("pricing")}>See our pricing</Button>
            </div>
            <div style={{ display: "flex", gap: 22, flexWrap: "wrap", alignItems: "center", marginTop: 18 }}>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 13.5, color: "var(--text-muted)", margin: 0, display: "inline-flex", alignItems: "center", gap: 8 }}>
                <Icon name="circle-check" size={15} color="var(--success)" /> Our pricing is published, so you know the cost before you call.
              </p>
              {/* Phone confirmed by owner (June 2026) */}
              <a href="tel:+19092777177" style={{ fontFamily: "var(--font-sans)", fontSize: 13.5, fontWeight: 600, color: "var(--navy-800)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 7 }}>
                <Icon name="phone" size={14} color="var(--gold-500)" /> (909) 277-7177
              </a>
            </div>
          </div>

          {/* Right: live load board */}
          <LoadBoard navigate={navigate} />
        </div>
      </Section>
    );
  }

  /* ---------- WHAT LOGIBELL IS ---------- */
  function WhatIs() {
    return (
      <Section bg="var(--surface-soft)" style={{ position: "relative", overflow: "hidden" }}>
        <RouteMotif corner="tl" width={380} />
        <div style={{ maxWidth: 880, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <Eyebrow>What LogiBell Is</Eyebrow>
          <p className="lb-display-md" style={{ color: "var(--text-heading)", lineHeight: 1.3, letterSpacing: "-0.5px" }}>
            For carriers of every size — from owner-operators to larger fleets — LogiBell handles <span style={{ color: "var(--navy-700)", borderBottom: "3px solid var(--gold-500)" }}>dispatch</span>, broker communication, paperwork, and partner access, so your authority is represented and your back office stays organized.
          </p>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.6, color: "var(--text-body)", marginTop: 26, maxWidth: 640, marginLeft: "auto", marginRight: "auto" }}>
            Dispatch starts the relationship. Operational support builds the business.
          </p>
        </div>
      </Section>
    );
  }

  /* ---------- SERVICE CATEGORIES ----------
     Single source of truth for the three categories. The Home preview shows a
     trimmed 3-up grid; the Services page renders full stacked detail sections.
     Anchor ids (dispatch / operations / partner-growth) are the deep-link
     targets used by the nav dropdown and footer. */
  const SERVICE_CATS = [
    { icon: "route", tag: "A", anchor: "dispatch", title: "Dispatch & Load Sourcing",
      promise: "Where the relationship starts.",
      blurb: "We keep carriers loaded and represented in the market — the entry point every other service builds on.",
      points: [
        "Load sourcing & lane matching to your equipment",
        "Lane planning and market guidance",
        "Broker communication on your behalf",
        "Rate-discussion support during booking",
        "Access to broker relationships and off-board opportunities that may not be on public boards",
      ] },
    { icon: "clipboard-check", tag: "B", anchor: "operations", title: "Operations & Back-Office",
      promise: "The work that keeps the operation organized after the load is booked.",
      blurb: "Paperwork and coordination handled alongside the load — not left for later.",
      points: [
        "Rate confirmations & document handling",
        "POD follow-up and paperwork coordination",
        "Appointment and scheduling details",
        "Help resolving detention, lumper fees, and unexpected issues",
        "After-hours communication when needed",
        "Basic performance reporting",
      ] },
    { icon: "trending-up", tag: "C", anchor: "partner-growth", title: "Partner & Growth Support",
      promise: "Opportunities that open as the relationship develops — not standard day-one features.",
      blurb: "Access and referrals that grow with the working relationship.",
      points: [
        "Early-stage MC guidance & broker-readiness",
        "Free, competitive insurance quotes through vetted partners",
        "Lease-on referrals for carriers without an active MC",
        "Factoring & compliance access as the network expands",
      ] },
  ];

  /* Home preview — flip cards: front is the trimmed summary, back is the full
     "What this includes" list. Click/Enter/Space flips; links inside don't. */
  function ServiceGrid({ navigate }) {
    const go = navigate || window.__lbnav || (() => {});
    const linkBtn = { display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 600, background: "transparent", border: "none", padding: 0, cursor: "pointer" };
    return (
      <div className="lb-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: GRID_GAP }}>
        {SERVICE_CATS.map((c) => (
          <FlipCard
            key={c.tag}
            className="lb-flip-lift"
            backDark
            label={c.title + " — flip for everything included"}
            frontHint="What's included"
            backHint="Back"
            front={
              <Card surface="white" pad="lg" radius="xl" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                  <span style={{ width: 50, height: 50, borderRadius: "50%", background: "var(--navy-800)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon name={c.icon} size={24} color="var(--gold-500)" />
                  </span>
                </div>
                <h3 className="lb-title-lg" style={{ marginBottom: 6 }}>{c.title}</h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600, color: "var(--navy-700)", marginBottom: 14 }}>{c.promise}</p>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10, marginBottom: 16 }}>
                  {c.points.slice(0, 3).map((p, i) => (
                    <li key={i} style={{ display: "flex", gap: 10, fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.45, color: "var(--text-strong)" }}>
                      <Icon name="check" size={16} color="var(--navy-700)" style={{ marginTop: 1, flex: "none" }} /><span>{p}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            }
            back={
              <Card surface="dark" pad="lg" radius="xl" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 700, letterSpacing: "1.4px", textTransform: "uppercase", color: "var(--gold-400)", marginBottom: 8 }}>What this includes</div>
                <div style={{ width: 40, height: 2, background: "var(--gold-500)", borderRadius: 2, marginBottom: 18 }}></div>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12, marginBottom: 18 }}>
                  {c.points.map((p, i) => (
                    <li key={i} style={{ display: "flex", gap: 10, fontFamily: "var(--font-sans)", fontSize: 13.5, lineHeight: 1.45, color: "#fff" }}>
                      <Icon name="circle-check" size={16} color="var(--gold-500)" style={{ marginTop: 1, flex: "none" }} /><span>{p}</span>
                    </li>
                  ))}
                </ul>
                <button type="button" onClick={() => go("services", c.anchor)} style={{ ...linkBtn, marginTop: "auto", marginBottom: 4, color: "var(--gold-500)" }}>
                  View full details <Icon name="arrow-right" size={15} />
                </button>
              </Card>
            }
          />
        ))}
      </div>
    );
  }

  /* Condensed services block for Home — three preview cards + link forward. */
  function Services({ navigate }) {
    return (
      <Section id="services">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, marginBottom: HEAD_GAP, flexWrap: "wrap" }}>
          <div style={{ maxWidth: 640 }}>
            <Eyebrow>Service Categories</Eyebrow>
            <h2 className="lb-display-lg">Three ways we back your operation</h2>
          </div>
          {navigate ? (
            <Button variant="link" iconRight={<Icon name="arrow-right" size={16} />} onClick={() => navigate("services")}>See all services</Button>
          ) : null}
        </div>
        <ServiceGrid navigate={navigate} />
      </Section>
    );
  }

  /* ---------- REFERRAL PROGRAM (Home band, links forward) ---------- */
  function ReferralBand({ navigate }) {
    const go = navigate || window.__lbnav || (() => {});
    return (
      <Section pt={16}>
        <div style={{ background: "var(--navy-800)", borderRadius: "var(--radius-2xl)", padding: "40px 44px", position: "relative", overflow: "hidden", display: "flex", gap: 32, alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
          <div style={{ position: "absolute", top: -70, right: -50, width: 260, height: 260, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,203,31,0.12), transparent 70%)" }} />
          <div style={{ position: "relative", display: "flex", gap: 20, alignItems: "center", maxWidth: 680 }}>
            <span style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--navy-700)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
              <Icon name="users" size={26} color="var(--gold-500)" />
            </span>
            <div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 700, color: "#fff", margin: "0 0 8px", letterSpacing: "-0.3px" }}>Refer a carrier, get rewarded.</h2>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 15.5, lineHeight: 1.6, color: "var(--on-navy-soft)", margin: 0 }}>
                Know another carrier who could use LogiBell? Refer them — when they come on board, you're rewarded for the connection.
              </p>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <Button variant="gold" size="lg" iconRight={<Icon name="arrow-right" size={17} />} onClick={() => go("contact", "referral")}>Refer a carrier</Button>
          </div>
        </div>
      </Section>
    );
  }

  window.LBHome = { Hero, WhatIs, Services, ServiceGrid, SERVICE_CATS, LoadBoard, ReferralBand, Section, Eyebrow };
})();
