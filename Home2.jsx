/* LogiBell — Home page sections (part 2) */
(function () {
  const { Button, Card, Badge } = window.DS;
  const Icon = window.Icon;
  const { Section, Eyebrow } = window.LBHome;
  const { NavyDrift } = window.LBAmbient;

  /* ---------- WHY LOGIBELL (navy band) ---------- */
  function Different() {
    const points = [
      ["shield-check", "Professional representation", "Your MC authority is spoken for by experienced staff in broker communication — not left to negotiate alone."],
      ["repeat", "A relationship, not a transaction", "Dispatch is the entry point. Operational support is the ongoing relationship around your business."],
      ["folder-check", "Back-office handled alongside the load", "Paperwork and confirmations are coordinated with the load, not after it."],
      ["badge-dollar-sign", "Transparent published pricing", "The cost is clear before the conversation starts — published openly, every time."],
    ];
    return (
      <section id="different" style={{ background: "var(--navy-800)", paddingTop: "clamp(48px, 6vw, 88px)", paddingBottom: "clamp(48px, 6vw, 88px)", position: "relative", overflow: "hidden" }}>
        <NavyDrift variant={0} />
        <div style={{ position: "absolute", top: -80, right: -80, width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,203,31,0.10), transparent 70%)" }} />
        <div className="lb-wrap" style={{ position: "relative" }}>
          <div style={{ maxWidth: 700, marginBottom: "clamp(32px, 4vw, 56px)" }}>
            <Eyebrow onDark>What Makes LogiBell Different</Eyebrow>
            <h2 className="lb-display-lg" style={{ color: "#fff", marginBottom: 18 }}>Most carrier relationships start and end with booking a load.</h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 17.5, lineHeight: 1.6, color: "var(--on-navy-soft)", maxWidth: 620 }}>
              LogiBell is built differently. Dispatch is where we begin — but the relationship is operational. It is a support relationship around your operation, not a single transaction.
            </p>
          </div>
          <div className="lb-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(20px, 3vw, 32px)" }}>
            {points.map(([ic, t, d], i) => (
              <div key={i} style={{ display: "flex", gap: 18, padding: 24, background: "var(--navy-900)", border: "1px solid var(--navy-700)", borderRadius: "var(--radius-lg)" }}>
                <span style={{ width: 46, height: 46, borderRadius: "50%", background: "var(--navy-700)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                  <Icon name={ic} size={22} color="var(--gold-500)" />
                </span>
                <div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17.5, fontWeight: 600, color: "#fff", margin: "2px 0 7px" }}>{t}</h3>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 14.5, lineHeight: 1.55, color: "var(--on-navy-soft)", margin: 0 }}>{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  /* ---------- WHO WE ARE (reusable section) ---------- */
  const NEW_AUTH_ITEMS = ["First-load strategy", "Early-stage authority support", "Broker-readiness guidance", "Rate education", "Compliance guidance", "Insurance setup support"];

  function WhoWeAre({ navigate }) {
    return (
      <Section>
        <div className="lb-who-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
          <div>
            <Eyebrow>Who We Are</Eyebrow>
            <h2 className="lb-display-md" style={{ marginBottom: 20 }}>A team behind the carrier's authority.</h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 16.5, lineHeight: 1.65, color: "var(--text-body)", marginBottom: 16 }}>
              LogiBell is a carrier-focused operations team built for carriers of every size — from owner-operators to small and larger fleets. We support the work behind the wheel: load sourcing, broker communication, paperwork, issue coordination, and access to trusted service partners.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 16.5, lineHeight: 1.65, color: "var(--text-body)" }}>
              Our goal is simple — help carriers operate with more structure, more clarity, and stronger representation.
            </p>
            {navigate ? (
              <div style={{ marginTop: 24 }}>
                <Button variant="link" iconRight={<Icon name="arrow-right" size={16} />} onClick={() => navigate("about")}>About the team</Button>
              </div>
            ) : null}
          </div>
          <Card surface="dark" radius="xl" pad="xl">
            <Icon name="quote" size={30} color="var(--gold-500)" />
            <p style={{ fontFamily: "var(--font-display)", fontSize: 21, lineHeight: 1.5, fontWeight: 500, color: "#fff", letterSpacing: "-0.2px", margin: "16px 0 22px" }}>
              “Thank you for visiting LogiBell. This company was built with respect for the people behind the wheel and the teams supporting them every day. Whether we work together or not, I wish you safe roads, reliable freight, and continued success in your business.”
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 13 }}>
              <span style={{ width: 46, height: 46, borderRadius: "50%", background: "var(--gold-500)", color: "var(--navy-900)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18 }}>T</span>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, color: "#fff" }}>Thomas</div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 13.5, color: "var(--on-navy-soft)" }}>Founder, LogiBell</div>
              </div>
            </div>
          </Card>
        </div>
      </Section>
    );
  }

  /* ---------- NEW AUTHORITY (condensed Home teaser — links forward) ----------
     The full repositioned program lives on its own page (Pages.jsx).
     No disclaimer banner here — just the headline and a forward link. */
  function NewAuthority({ navigate }) {
    const go = navigate || window.__lbnav || (() => {});
    return (
      <Section id="authority" bg="var(--surface-soft)">
        <div className="lb-auth-grid" style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 56, alignItems: "center" }}>
          <div>
            <Badge tone="goldsoft" uppercase>Special Treatment Program — Newer Authorities</Badge>
            <h2 className="lb-display-lg" style={{ margin: "18px 0 18px" }}>Authority age<br /><span style={{ color: "var(--navy-700)" }}>isn't the barrier here.</span></h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 16.5, lineHeight: 1.65, color: "var(--text-body)", maxWidth: 480 }}>
              Most brokers won't touch a new MC. We design a clear roadmap that channels you to the right sources — the same dispatch service, with extra effort and our established broker relationships working behind you while your authority gains age.
            </p>
            <div style={{ marginTop: 26 }}>
              <Button variant="primary" size="md" iconRight={<Icon name="arrow-right" size={16} />} onClick={() => go("authority")}>The Special Treatment Program</Button>
            </div>
          </div>
          <Card surface="white" radius="xl" pad="lg">
            <div style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px", color: "var(--text-muted)", marginBottom: 18 }}>What's included</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {NEW_AUTH_ITEMS.map((it, i) => (
                <div key={i} style={{ display: "flex", gap: 11, alignItems: "flex-start", padding: "12px 0", borderBottom: i < 4 ? "1px solid var(--hairline-soft)" : "none" }}>
                  <Icon name="circle-check" size={19} color="var(--gold-700)" style={{ marginTop: 1 }} />
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 14.5, color: "var(--text-strong)", lineHeight: 1.4 }}>{it}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Section>
    );
  }

  /* ---------- PRICING (Home band) ----------
     Brand strategy §L: published pricing belongs on the Home flow, with
     Trusted Partner shown as the higher tier. Compact snapshot; the full
     breakdown (worked examples, comparison table) lives on the Pricing page. */
  function PricingBand({ navigate }) {
    const go = navigate || window.__lbnav || (() => {});
    const tiers = [
      { name: "Semi trucks", rate: "6%", unit: "flat dispatch fee", desc: "Dry van, reefer, flatbed, power only — one flat dispatch fee." },
      { name: "Box / Hotshot / Sprinter", rate: "6–8%", unit: "flat dispatch fee", desc: "Based on equipment and service needs. Your exact rate is confirmed at onboarding — not after." },
      { name: "Trusted Partner", rate: "Below", unit: "standard rate", desc: "A higher tier every carrier can grow into — earned through the relationship, never purchased at signup.", dark: true, badge: "Higher tier" },
    ];
    return (
      <Section id="pricing" pb={64}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, marginBottom: "clamp(40px, 5vw, 64px)", flexWrap: "wrap" }}>
          <div style={{ maxWidth: 640 }}>
            <Eyebrow>Published Pricing</Eyebrow>
            <h2 className="lb-display-lg" style={{ marginBottom: 14 }}>The cost is clear before you call.</h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 16.5, lineHeight: 1.6, color: "var(--text-body)", margin: 0 }}>
              Our pricing is published because carriers should understand the cost of service before investing time in a conversation.
            </p>
          </div>
          <Button variant="link" iconRight={<Icon name="arrow-right" size={16} />} onClick={() => go("pricing")}>See full pricing</Button>
        </div>
        <div className="lb-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "clamp(20px, 3vw, 32px)", alignItems: "stretch" }}>
          {tiers.map((t, i) => (
            <Card key={i} surface={t.dark ? "dark" : "white"} radius="xl" pad="lg" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 14 }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17.5, fontWeight: 600, color: t.dark ? "#fff" : "var(--text-heading)", margin: 0 }}>{t.name}</h3>
                {t.badge ? <Badge tone="gold" uppercase>{t.badge}</Badge> : null}
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 12 }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: 38, fontWeight: 700, letterSpacing: "-1px", lineHeight: 1, color: t.dark ? "var(--gold-500)" : "var(--navy-800)" }}>{t.rate}</span>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: 13.5, color: t.dark ? "var(--on-navy-soft)" : "var(--text-muted)" }}>{t.unit}</span>
              </div>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 14.5, lineHeight: 1.55, color: t.dark ? "var(--on-navy-soft)" : "var(--text-body)", margin: 0 }}>{t.desc}</p>
            </Card>
          ))}
        </div>
        <div style={{ display: "flex", gap: 22, flexWrap: "wrap", marginTop: 26 }}>
          {[["circle-check", "No setup fees"], ["circle-check", "No monthly minimums"], ["gift", "Free first ELD cycle or week"]].map(([ic, t], i) => (
            <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-sans)", fontSize: 14.5, fontWeight: 500, color: "var(--text-strong)" }}>
              <Icon name={ic} size={17} color="var(--success)" /> {t}
            </span>
          ))}
        </div>
      </Section>
    );
  }

  /* ---------- PARTNER & INSURANCE ACCESS (Home strip) ----------
     Brand strategy §L: partner-network framing on the Home flow, no
     guaranteed outcomes. Slim strip; full detail on the Partner Access page. */
  function PartnerBand({ navigate }) {
    const go = navigate || window.__lbnav || (() => {});
    return (
      <Section pt={0} pb={28}>
        <div style={{ background: "var(--surface-card)", border: "1px solid var(--hairline)", borderRadius: "var(--radius-2xl)", padding: "26px 32px", display: "flex", gap: 22, alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", boxShadow: "var(--shadow-xs)" }}>
          <div style={{ display: "flex", gap: 18, alignItems: "center", maxWidth: 700 }}>
            <span style={{ width: 50, height: 50, borderRadius: "50%", background: "var(--navy-800)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
              <Icon name="handshake" size={24} color="var(--gold-500)" />
            </span>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 15.5, lineHeight: 1.55, color: "var(--text-body)", margin: 0 }}>
              <strong style={{ color: "var(--text-heading)", fontWeight: 600 }}>Partner &amp; insurance access.</strong>{" "}
              A free, competitive insurance quote through vetted partners — plus lease-on and factoring contacts that open up as the relationship develops.
            </p>
          </div>
          <Button variant="secondary" size="md" iconRight={<Icon name="arrow-right" size={16} />} onClick={() => go("partners")}>Explore partner access</Button>
        </div>
      </Section>
    );
  }

  /* ---------- FINAL CTA ---------- */
  function FinalCTA({ navigate }) {
    return (
      <Section pt={48}>
        <div style={{ background: "var(--navy-800)", borderRadius: "var(--radius-2xl)", padding: "64px 56px", position: "relative", overflow: "hidden" }}>
          <NavyDrift variant={1} />
          {/* Full-color brand emblem in a clean white tile — reads cleanly on the navy band */}
          <div className="lb-cta-bell" aria-hidden="true" style={{ position: "absolute", right: 56, top: "50%", transform: "translateY(-50%)", width: 150, height: 150, borderRadius: "50%", background: "#FFFFFF", border: "1px solid rgba(255,255,255,0.7)", boxShadow: "var(--shadow-lg)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1, pointerEvents: "none", overflow: "hidden" }}>
            <img src="./assets/logo/logibell-emblem.jpg" alt="" style={{ width: 130, height: 130, objectFit: "contain", display: "block" }} />
          </div>
          <div style={{ position: "relative", maxWidth: 640 }}>
            <Eyebrow onDark>Get Onboarded</Eyebrow>
            <h2 className="lb-display-lg" style={{ color: "#fff", marginBottom: 16 }}>Ready when you are. Ring the LogiBell.</h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.6, color: "var(--on-navy-soft)", marginBottom: 30, maxWidth: 540 }}>
              Dispatch is where we start. Our pricing is published, so you know the cost before you call — no setup fees, no monthly minimums.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Button variant="gold" size="lg" iconLeft={<Icon name="bell" size={18} />} onClick={() => navigate("contact", "onboard")}>Ring the LogiBell</Button>
              <Button variant="on-dark" size="lg" iconRight={<Icon name="arrow-right" size={16} />} onClick={() => navigate("pricing")}>See published pricing</Button>
            </div>
          </div>
        </div>
      </Section>
    );
  }

  window.LBHome2 = { Different, WhoWeAre, NewAuthority, PricingBand, PartnerBand, FinalCTA, NEW_AUTH_ITEMS };
})();
