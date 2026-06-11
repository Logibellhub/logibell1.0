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
      <section id="different" style={{ background: "var(--navy-800)", paddingTop: "clamp(72px, 10vw, 128px)", paddingBottom: "clamp(72px, 10vw, 128px)", position: "relative", overflow: "hidden" }}>
        <NavyDrift variant={0} />
        <div style={{ position: "absolute", top: -80, right: -80, width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,203,31,0.10), transparent 70%)" }} />
        <div className="lb-wrap" style={{ position: "relative" }}>
          <div style={{ maxWidth: 700, marginBottom: "clamp(48px, 6vw, 80px)" }}>
            <Eyebrow onDark>What Makes LogiBell Different</Eyebrow>
            <h2 className="lb-display-lg" style={{ color: "#fff", marginBottom: 18 }}>Most carrier relationships start and end with booking a load.</h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 17.5, lineHeight: 1.6, color: "var(--on-navy-soft)", maxWidth: 620 }}>
              LogiBell is built differently. Dispatch is where we begin — but the relationship is operational. It is a support relationship around your operation, not a single transaction.
            </p>
          </div>
          <div className="lb-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(20px, 3vw, 32px)" }}>
            {points.map(([ic, t, d], i) => (
              <div key={i} style={{ display: "flex", gap: 18, padding: 24, background: "var(--navy-900)", border: "1px solid var(--navy-700)", borderRadius: "var(--radius-lg)" }}>
                <span style={{ width: 46, height: 46, borderRadius: "var(--radius-md)", background: "var(--navy-700)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
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
  const NEW_AUTH_ITEMS = ["First-load strategy", "Broker-readiness guidance", "Rate education", "Compliance guidance", "Tunnelling to the source ", "Structure through the first year"];

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
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 13.5, color: "var(--on-navy-soft)" }}>Founder & Operations Lead, LogiBell</div>
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
            <h2 className="lb-display-lg" style={{ margin: "18px 0 18px" }}>Most won't work with you yet.<br /><span style={{ color: "var(--navy-700)" }}>We will.</span></h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 16.5, lineHeight: 1.65, color: "var(--text-body)", maxWidth: 480 }}>
              Authority age isn't the barrier here. Brokers already know and trust LogiBell, so a young MC isn't a reason to turn you away — it's the same dispatch service, with extra effort and our established relationships working behind you.
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

  /* ---------- FINAL CTA ---------- */
  function FinalCTA({ navigate }) {
    return (
      <Section pt={48}>
        <div style={{ background: "var(--navy-800)", borderRadius: "var(--radius-2xl)", padding: "64px 56px", position: "relative", overflow: "hidden" }}>
          <NavyDrift variant={1} />
          {/* Full-color brand emblem in a clean white tile — reads cleanly on the navy band */}
          <div className="lb-cta-bell" aria-hidden="true" style={{ position: "absolute", right: 56, top: "50%", transform: "translateY(-50%)", width: 150, height: 150, borderRadius: "var(--radius-xl)", background: "#FFFFFF", border: "1px solid rgba(255,255,255,0.7)", boxShadow: "var(--shadow-lg)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1, pointerEvents: "none", overflow: "hidden" }}>
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

  window.LBHome2 = { Different, WhoWeAre, NewAuthority, FinalCTA, NEW_AUTH_ITEMS };
})();
