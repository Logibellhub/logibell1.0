/* LogiBell — routed content pages built on the shared Home sections.
   ServicesPage · WhoWeArePage · NewAuthorityPage (repositioned) · PartnerPage */
(function () {
  const { Button, Card, Badge } = window.DS;
  const Icon = window.Icon;
  const { FlipCard } = window.LBFlip;
  const { Section, Eyebrow, ServiceGrid, WhatIs, SERVICE_CATS } = window.LBHome;
  const { Different, WhoWeAre, FinalCTA, NEW_AUTH_ITEMS } = window.LBHome2;
  const { LogiGuardSection } = window.LBGuard;

  /* Shared page header band. */
  function PageHero({ eyebrow, title, intro, badge }) {
    return (
      <section style={{ background: "var(--surface-page)", paddingTop: 64, paddingBottom: 28 }}>
        <div className="lb-wrap" style={{ maxWidth: 860 }}>
          {badge ? <div style={{ marginBottom: 18 }}><Badge tone="goldsoft" uppercase>{badge}</Badge></div> : <Eyebrow>{eyebrow}</Eyebrow>}
          <h1 className="lb-display-lg" style={{ marginBottom: 18, maxWidth: 760 }}>{title}</h1>
          {intro ? <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, lineHeight: 1.6, color: "var(--text-body)", maxWidth: 660, margin: 0 }}>{intro}</p> : null}
        </div>
      </section>
    );
  }

  /* A reusable "newer authorities" callout strip for Services/other pages. */
  function AuthorityCallout({ navigate }) {
    return (
      <Section pt={20}>
        <div style={{ background: "var(--surface-soft)", border: "1px solid var(--hairline)", borderRadius: "var(--radius-2xl)", padding: "44px 48px", display: "flex", gap: 32, alignItems: "center", flexWrap: "wrap", justifyContent: "space-between" }}>
          <div style={{ maxWidth: 620 }}>
            <Badge tone="goldsoft" uppercase>Special Treatment Program — Newer Authorities</Badge>
            <h3 className="lb-display-sm" style={{ margin: "16px 0 10px" }}>Authority age isn't the barrier here.</h3>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.6, color: "var(--text-body)", margin: 0 }}>
              A clear roadmap that channels a young authority to the right sources — the same dispatch service, with extra effort and our established broker relationships working behind you through the first stretch.
            </p>
          </div>
          <Button variant="primary" size="lg" iconRight={<Icon name="arrow-right" size={17} />} onClick={() => navigate("authority")}>Learn about the program</Button>
        </div>
      </Section>
    );
  }

  /* Services — single-panel tab system. Only ONE panel is visible; clicking a
     tab swaps its content in place with a 150ms opacity fade (1 → 0 → 1). No
     page scroll on tab click. Deep links (dispatch/operations/partner-growth)
     select the matching tab; the page scrolls via the invisible markers below. */
  function readAnchor() {
    const raw = (window.location.hash || "").replace(/^#\/?/, "");
    return raw.split("/")[1] || null;
  }

  const SERVICE_PANELS = [
    {
      anchor: "dispatch", tag: "A", icon: "route", step: "Entry point",
      title: "Dispatch & Load Sourcing",
      tagline: "Where the working relationship starts.",
      desc: "We keep your truck moving by sourcing loads matched to your equipment, communicating directly with brokers on your behalf, and negotiating rates. Every load we book is confirmed in writing before you roll.",
      cta: { label: "Get started with dispatch", page: "contact", anchor: "onboard" },
      left: ["Load sourcing & lane matching", "Broker communication on your behalf", "Rate negotiation support", "Access to off-board opportunities"],
      right: ["Rate-discussion support during booking", "Lane planning and market guidance", "Check calls and in-transit coordination", "New-authority onboarding support"],
    },
    {
      anchor: "operations", tag: "B", icon: "clipboard-check", step: "After the load",
      title: "Operations & Back-Office",
      tagline: "We handle the administrative load so you can stay on the road.",
      desc: "After the load is booked, the paperwork starts. We coordinate rate confirmations, POD collection, document organization, and follow-up with brokers — keeping your back office running without you having to manage it.",
      cta: { label: "Add back-office support", page: "contact", anchor: "onboard" },
      left: ["Rate confirmation & document handling", "POD follow-up and paperwork coordination", "BOL and document organization", "Broker follow-up on open items"],
      right: ["After-hours communication when needed", "Help resolving detention and lumper fees", "Appointment and scheduling details", "Basic performance reporting"],
    },
    {
      anchor: "partner-growth", tag: "C", icon: "trending-up", step: "As you grow",
      title: "Partner & Growth Support",
      tagline: "What becomes possible as we build the relationship.",
      desc: "Over time, LogiBell connects carriers to vetted contacts in insurance, factoring, and compliance support. We also provide lane guidance based on market conditions to help you plan where your operation runs next.",
      cta: { label: "Learn about partner access", page: "partners" },
      left: ["Lane planning & market guidance", "Free, competitive insurance quotes", "Vetted factoring contact introductions", "Early-stage MC guidance & broker readiness"],
      right: ["Lease-on connections for carriers", "Compliance support contacts", "Quarterly lane and market review", "Carrier network access"],
    },
  ];

  const PANEL_TEXT = "#39435C";   // slate body (brief spec)
  const PANEL_SUBHEAD = "#828BA3"; // muted sub-header (brief spec)

  function ServicesExplorer({ navigate }) {
    const ids = SERVICE_PANELS.map((p) => p.anchor);
    const initial = (() => { const a = readAnchor(); return ids.includes(a) ? a : ids[0]; })();
    const [active, setActive] = React.useState(initial);  // selected tab
    const [shown, setShown] = React.useState(initial);    // panel currently rendered
    const [fading, setFading] = React.useState(false);    // opacity gate (1 → 0 → 1)
    const timer = React.useRef(null);
    const tabRefs = React.useRef([]);

    // swap the visible panel in place with a 150ms opacity fade (1 → 0 → 1)
    const goTo = React.useCallback((key) => {
      setActive(key);
      setFading(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => { setShown(key); setFading(false); }, 150);
    }, []);

    // clear the pending fade timer on unmount only
    React.useEffect(() => () => clearTimeout(timer.current), []);

    // deep links / dropdown: select the matching tab (router handles the scroll)
    React.useEffect(() => {
      function onHash() { const a = readAnchor(); if (ids.includes(a) && a !== active) goTo(a); }
      window.addEventListener("hashchange", onHash);
      return () => window.removeEventListener("hashchange", onHash);
    }, [active, goTo]);

    // tab click: swap in place — no hash change, no page scroll
    function pick(key) { if (key !== active) goTo(key); }

    // arrow-key navigation across the tablist (roving tabindex)
    function onTabKey(e, idx) {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft" && e.key !== "Home" && e.key !== "End") return;
      e.preventDefault();
      let next = idx;
      if (e.key === "ArrowRight") next = (idx + 1) % ids.length;
      else if (e.key === "ArrowLeft") next = (idx - 1 + ids.length) % ids.length;
      else if (e.key === "Home") next = 0;
      else next = ids.length - 1;
      pick(ids[next]);
      const el = tabRefs.current[next];
      if (el) el.focus();
    }

    const panel = SERVICE_PANELS.find((p) => p.anchor === shown) || SERVICE_PANELS[0];
    const go = navigate || window.__lbnav || (() => {});

    return (
      <Section pt={24}>
        {/* invisible anchor markers — let deep links scroll to this section */}
        <div style={{ position: "relative", height: 0 }}>
          {ids.map((id) => (
            <span key={id} id={id} aria-hidden="true" style={{ position: "absolute", top: -14, left: 0, width: 1, height: 1 }} />
          ))}
        </div>

        {/* tab bar — single rounded pill, three tabs in sequence (A → B → C) */}
        <div className="lb-svc-tabbar" role="tablist" aria-label="Services">
          {SERVICE_PANELS.map((p, i) => {
            const on = p.anchor === active;
            return (
              <React.Fragment key={p.anchor}>
                {i > 0 ? <span className="lb-svc-sep" aria-hidden="true"><Icon name="chevron-right" size={16} /></span> : null}
                <button
                  type="button"
                  role="tab"
                  id={"lb-svc-tab-" + p.anchor}
                  aria-selected={on}
                  aria-controls="lb-svc-panel"
                  tabIndex={on ? 0 : -1}
                  ref={(el) => { tabRefs.current[i] = el; }}
                  onKeyDown={(e) => onTabKey(e, i)}
                  onClick={() => pick(p.anchor)}
                  className={"lb-svc-tab" + (on ? " is-active" : "")}
                >
                  <span className="lb-svc-badge">{p.tag}</span>
                  <span style={{ minWidth: 0 }}>
                    <span style={{ display: "block", fontFamily: "var(--font-display)", fontSize: 14.5, fontWeight: 600, color: on ? "#fff" : "var(--text-heading)", lineHeight: 1.25, whiteSpace: "nowrap" }}>{p.title}</span>
                    <span className="lb-svc-tab-sub" style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: 12, color: on ? "var(--on-navy-faint)" : "var(--text-muted)", whiteSpace: "nowrap" }}>Step {p.tag} · {p.step}</span>
                  </span>
                </button>
              </React.Fragment>
            );
          })}
        </div>

        {/* single panel — swaps in place with a 150ms opacity fade */}
        <div id="lb-svc-panel" role="tabpanel" aria-labelledby={"lb-svc-tab-" + active} className={"lb-svc-panel" + (fading ? " is-fading" : "")} style={{ marginTop: 22, background: "var(--surface-card)", border: "1px solid var(--line)", borderRadius: "var(--radius-2xl)", padding: "44px 46px", boxShadow: "var(--shadow-sm)", minHeight: 348 }}>
          <div className="lb-svc-panel-grid" style={{ display: "grid", gridTemplateColumns: "0.66fr 1fr", gap: 48 }}>
            {/* left column */}
            <div>
              <span style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--navy-800)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                <Icon name={panel.icon} size={24} color="var(--gold-500)" />
              </span>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 700, letterSpacing: "1.4px", textTransform: "uppercase", color: "var(--gold-700)", marginBottom: 10 }}>Step {panel.tag} · {panel.step.toUpperCase()}</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, color: "var(--navy-800)", letterSpacing: "-0.3px", margin: "0 0 10px" }}>{panel.title}</h3>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 600, color: "var(--navy-800)", margin: "0 0 12px", lineHeight: 1.45 }}>{panel.tagline}</p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.6, color: PANEL_TEXT, margin: "0 0 24px" }}>{panel.desc}</p>
              <Button variant="ghost" size="md" iconLeft={<Icon name="arrow-right" size={16} />} onClick={() => go(panel.cta.page, panel.cta.anchor)}>{panel.cta.label}</Button>
            </div>
            {/* right column */}
            <div>
              <div style={{ marginBottom: 22 }}>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 700, letterSpacing: "1.4px", textTransform: "uppercase", color: PANEL_SUBHEAD }}>What this includes</div>
                <div style={{ width: 40, height: 2, background: "var(--gold-500)", marginTop: 8, borderRadius: 2 }} />
              </div>
              <div className="lb-svc-inc-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 36px" }}>
                {[panel.left, panel.right].map((col, ci) => (
                  <ul key={ci} style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                    {col.map((item, j) => (
                      <li key={j} style={{ display: "flex", gap: 10, fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.45, color: PANEL_TEXT }}>
                        <Icon name="circle-check" size={16} color="var(--gold-700)" style={{ marginTop: 1, flex: "none" }} /><span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* operating-cost clarity (links to full Pricing) */}
        <div style={{ marginTop: 24, background: "var(--navy-800)", borderRadius: "var(--radius-2xl)", padding: "32px 38px", display: "flex", gap: 26, alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
          <div style={{ display: "flex", gap: 20, alignItems: "center", maxWidth: 720 }}>
            <span style={{ width: 52, height: 52, borderRadius: "50%", background: "var(--navy-700)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
              <Icon name="tag" size={24} color="var(--gold-500)" />
            </span>
            <div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 19, fontWeight: 600, color: "#fff", margin: "0 0 6px" }}>Determining your cost</h3>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 14.5, lineHeight: 1.6, color: "var(--on-navy-soft)", margin: 0 }}>
                A flat dispatch fee — <span style={{ fontFamily: "var(--font-mono)", color: "var(--gold-500)" }}>Semi 6%</span>, <span style={{ fontFamily: "var(--font-mono)", color: "var(--gold-500)" }}>Box/Hotshot 6–8%</span> — confirmed at onboarding, with an affordable minimum so it works for smaller operations too.
              </p>
            </div>
          </div>
          <Button variant="gold" size="md" iconRight={<Icon name="arrow-right" size={16} />} onClick={() => (navigate || window.__lbnav || (() => {}))("pricing")}>See full pricing</Button>
        </div>
      </Section>
    );
  }

  /* ============ SERVICES PAGE ============ */
  function ServicesPage({ navigate }) {
    return (
      <div>
        <PageHero
          eyebrow="Services"
          title="Everything around the load — handled."
          intro="Dispatch starts the relationship. Operations support builds the business."
        />
        <ServicesExplorer navigate={navigate} />
        <AuthorityCallout navigate={navigate} />
        <LogiGuardSection />
        <Different />
        <FinalCTA navigate={navigate} />
      </div>
    );
  }

  /* ============ WHO WE ARE PAGE ============ */
  function WhoWeArePage({ navigate }) {
    const values = [
      ["users", "Carriers of every size", "From owner-operators to small and larger fleets — the operations support scales to the operation."],
      ["shield-check", "Professional representation", "Experienced staff speak for your authority in broker communication, so you're not negotiating alone."],
      ["eye", "Transparent by default", "Published pricing and clear expectations. You know the cost and the scope before the conversation starts."],
    ];
    return (
      <div>
        <PageHero
          eyebrow="Who We Are"
          title="A team behind the carrier's authority."
          intro="LogiBell is a carrier-focused operations team supporting the work behind the wheel — built for carriers of every size, from owner-operators to small and larger fleets."
        />
        <WhoWeAre />
        <Section bg="var(--surface-soft)">
          <div style={{ maxWidth: 640, marginBottom: "clamp(48px, 6vw, 80px)" }}>
            <Eyebrow>What we stand on</Eyebrow>
            <h2 className="lb-display-md">How we work with carriers</h2>
          </div>
          <div className="lb-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "clamp(20px, 3vw, 32px)" }}>
            {values.map(([ic, t, d], i) => (
              <Card key={i} surface="white" pad="lg" radius="xl" interactive>
                <span style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--navy-800)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  <Icon name={ic} size={22} color="var(--gold-500)" />
                </span>
                <h3 className="lb-title-md" style={{ marginBottom: 8 }}>{t}</h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 14.5, lineHeight: 1.55, color: "var(--text-body)", margin: 0 }}>{d}</p>
              </Card>
            ))}
          </div>
        </Section>
        <FinalCTA navigate={navigate} />
      </div>
    );
  }

  /* ============ NEW AUTHORITY PAGE (repositioned) ============
     The "Special Treatment Program" for newer authorities. No disclaimer
     banner; the honesty line lives low-key near the bottom. */
  function NewAuthorityPage({ navigate }) {
    const how = [
      ["handshake", "Brokers already know LogiBell", "Established broker relationships let us direct capacity to loads — your authority's age isn't the deciding factor in the conversation."],
      ["rocket", "More effort, same service", "It's the same dispatch service, with extra effort and stronger connections applied while your authority is young."],
      ["calendar-clock", "Through the first months", "Structured for the hardest stretch — your first months on the road — so the business keeps running while the authority gains age."],
    ];
    return (
      <div>
        <PageHero
          badge="Special Treatment Program — Newer Authorities"
          title={<React.Fragment>Authority age<br /><span style={{ color: "var(--navy-700)" }}>isn't the barrier here.</span></React.Fragment>}
        />
        <Section pt={8} pb={84}>
          <div style={{ maxWidth: 720, marginBottom: 8 }}>
            <p className="lb-display-sm" style={{ color: "var(--text-heading)", lineHeight: 1.35, marginBottom: 18 }}>Built for the hardest stretch — the first one.</p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 17.5, lineHeight: 1.65, color: "var(--text-body)" }}>
              Most brokers won't touch a new MC. We design a clear roadmap that channels you to the right sources, so a young authority isn't a reason to be turned away. It's the same dispatch service — with extra effort and our established broker relationships working behind you — built to keep your business moving through the hardest stretch, the first one, while your authority gains age.
            </p>
          </div>
        </Section>

        {/* How it works */}
        <Section bg="var(--surface-soft)">
          <div style={{ maxWidth: 640, marginBottom: "clamp(48px, 6vw, 80px)" }}>
            <Eyebrow>How it works</Eyebrow>
            <h2 className="lb-display-md">Why a young authority isn't a dealbreaker</h2>
          </div>
          <div className="lb-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "clamp(20px, 3vw, 32px)" }}>
            {how.map(([ic, t, d], i) => (
              <Card key={i} surface="white" pad="lg" radius="xl">
                <span style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--navy-800)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  <Icon name={ic} size={22} color="var(--gold-500)" />
                </span>
                <h3 className="lb-title-md" style={{ marginBottom: 8 }}>{t}</h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 14.5, lineHeight: 1.55, color: "var(--text-body)", margin: 0 }}>{d}</p>
              </Card>
            ))}
          </div>
        </Section>

        {/* What's included */}
        <Section pb={40}>
          <div className="lb-auth-grid" style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 56, alignItems: "center" }}>
            <div>
              <Eyebrow>Included support</Eyebrow>
              <h2 className="lb-display-md" style={{ marginBottom: 16 }}>Structure for the first months on the road.</h2>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 16.5, lineHeight: 1.65, color: "var(--text-body)", maxWidth: 460 }}>
                The same operational support every LogiBell carrier gets — with the early-stage essentials a newer authority needs most.
              </p>
              <div style={{ marginTop: 26 }}>
                <Button variant="primary" size="lg" iconLeft={<Icon name="bell" size={18} />} onClick={() => navigate("contact", "onboard")}>Ring the LogiBell</Button>
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

        {/* (the program speaks for itself — no disclaimer band, per brand voice) */}
        <FinalCTA navigate={navigate} />
      </div>
    );
  }

  /* ============ PARTNER ACCESS PAGE ============
     Relationship-based access / referral language only — never guarantees.
     Honest framing lives inside each item (no boxed meta-disclaimer). */
  function PartnerPage({ navigate }) {
    const items = [
      {
        icon: "shield-check", tag: "Free quote", title: "Insurance",
        short: "A free, no-obligation quote through vetted insurance partners — built around your equipment, history, state, and coverage needs.",
        body: "Through our vetted insurance partners, we can arrange a free, no-obligation quote built around your equipment, history, state, and coverage needs. We're confident the options we bring you will be competitive — and there's no cost to find out where you stand.",
        note: "The quote is free and the choice stays yours — you deal directly with the provider.",
      },
      {
        icon: "git-branch-plus", tag: "Referral", title: "Lease-on connections",
        short: "For carriers without an active MC — a referral to vetted lease-on opportunities so you can keep moving freight.",
        body: "For carriers without an active MC, we can refer and connect you to vetted lease-on opportunities so you can keep moving freight while you decide on your own authority.",
        note: "We make the connection — the lease-on relationship is directly between you and the carrier you join.",
      },
      {
        icon: "network", tag: "Network", title: "Factoring & compliance",
        short: "Factoring and compliance introductions that open up as the relationship develops and our network expands.",
        body: "Potential partner access for factoring and compliance opens up as the relationship develops and our network expands — introductions where they're a genuine fit.",
        note: "Introductions are made where they're a genuine fit, as the network expands.",
      },
    ];
    return (
      <div>
        <PageHero
          eyebrow="Partner Access"
          title="A network that opens up as the relationship develops."
          intro="Beyond dispatch, LogiBell connects carriers to vetted partners — free, competitive insurance quotes, lease-on referrals, and factoring and compliance contacts that open up as the relationship develops."
        />
        <Section pt={40}>
          <div className="lb-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "clamp(20px, 3vw, 32px)" }}>
            {items.map((it, i) => (
              <FlipCard
                key={i}
                className="lb-flip-lift"
                backDark
                label={it.title + " — flip for the full detail"}
                frontHint="Tap for details"
                backHint="Back"
                front={
                  <Card surface="white" radius="xl" pad="lg" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 16 }}>
                      <span style={{ width: 52, height: 52, borderRadius: "50%", background: "var(--navy-800)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                        <Icon name={it.icon} size={24} color="var(--gold-500)" />
                      </span>
                      <Badge tone="goldsoft" uppercase>{it.tag}</Badge>
                    </div>
                    <h3 className="lb-title-lg" style={{ margin: "0 0 8px" }}>{it.title}</h3>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.6, color: "var(--text-body)", margin: 0 }}>{it.short}</p>
                  </Card>
                }
                back={
                  <Card surface="dark" radius="xl" pad="lg" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                    <div style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 700, letterSpacing: "1.4px", textTransform: "uppercase", color: "var(--gold-400)", marginBottom: 8 }}>{it.title}</div>
                    <div style={{ width: 40, height: 2, background: "var(--gold-500)", borderRadius: 2, marginBottom: 16 }} />
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.6, color: "#fff", margin: "0 0 16px" }}>{it.body}</p>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 12.5, lineHeight: 1.55, color: "var(--on-navy-soft)", margin: 0, display: "flex", gap: 8, alignItems: "flex-start" }}>
                      <Icon name="info" size={15} color="var(--gold-500)" style={{ marginTop: 1, flex: "none" }} />{it.note}
                    </p>
                  </Card>
                }
              />
            ))}
          </div>
        </Section>
        <FinalCTA navigate={navigate} />
      </div>
    );
  }

  window.LBPages = { ServicesPage, WhoWeArePage, NewAuthorityPage, PartnerPage, PageHero };
})();
