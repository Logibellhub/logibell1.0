/* LogiBell — site chrome: AnnouncementBar, TopNav (with Services dropdown), Footer.
   One consistent nav + footer is reused across every routed page. */
(function () {
  const { Button } = window.DS;
  const Icon = window.Icon;
  const LOGO = "./assets/logo/logibell-wordmark.png";
  const LOGO_NAVY = "./assets/logo/logibell-wordmark-onnavy.png";

  function AnnouncementBar() {
    return (
      <div style={{ background: "var(--navy-900)", color: "var(--on-navy)", borderBottom: "1px solid var(--navy-700)", position: "sticky", top: 0, zIndex: 51 }}>
        <div className="lb-wrap" style={{ height: "var(--announce-height)", display: "flex", alignItems: "center", justifyContent: "center", gap: 18, fontFamily: "var(--font-sans)", fontSize: 13.5, flexWrap: "wrap" }}>
          <span className="lb-announce-label" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--on-navy-soft)" }}>
            <Icon name="tag" size={15} color="var(--gold-500)" />
            <span><strong style={{ color: "#fff", fontWeight: 600 }}>Published dispatch pricing</strong></span>
          </span>
          <span style={{ color: "var(--on-navy-soft)" }}>Semi&nbsp;<strong style={{ color: "var(--gold-500)" }}>6%</strong>&nbsp;· Box / Hotshot&nbsp;<strong style={{ color: "var(--gold-500)" }}>6–8%</strong></span>
          <span className="lb-announce-detail" style={{ color: "var(--on-navy-faint)", display: "inline-flex", alignItems: "center", gap: 6 }}><Icon name="check" size={14} color="var(--success)" />No setup fees · No monthly minimums</span>
        </div>
      </div>
    );
  }

  /* Services dropdown — core flow in order (Dispatch → Operations → Partner &
     Growth → Special Treatment); LogiGuard rides along as an added feature. */
  const SERVICES_MENU = [
    { label: "Dispatch & Load Sourcing", desc: "Stay loaded and represented in the market.", icon: "route", page: "services", anchor: "dispatch" },
    { label: "Operations & Back-Office", desc: "The admin work that keeps the operation organized.", icon: "clipboard-check", page: "services", anchor: "operations" },
    { label: "Partner & Growth Support", desc: "Opportunities that open as the relationship develops.", icon: "trending-up", page: "services", anchor: "partner-growth" },
    { label: "Special Treatment Program — Newer Authorities", desc: "Authority age isn't the barrier here.", icon: "rocket", page: "authority", feature: true },
  ];
  const SERVICES_EXTRA = { label: "LogiGuard — free verification check", desc: "Verify any broker, MC, or load before you haul.", icon: "shield-check", page: "services", anchor: "logiguard" };

  const NAV = [
    { id: "services", label: "Services", page: "services", menu: SERVICES_MENU },
    { id: "pricing", label: "Pricing", page: "pricing" },
    { id: "about", label: "Who We Are", page: "about" },
    { id: "partners", label: "Partner Access", page: "partners" },
    { id: "feedback", label: "Feedback", page: "home", anchor: "feedback" },
    { id: "contact", label: "Contact", page: "contact" },
  ];

  function TopNav({ page, navigate }) {
    const [scrolled, setScrolled] = React.useState(false);
    const [open, setOpen] = React.useState(false);       // mobile sheet
    const [menuOpen, setMenuOpen] = React.useState(false); // desktop services dropdown
    const closeTimer = React.useRef(null);

    React.useEffect(() => {
      const el = document.getElementById("lb-scroll") || window;
      const onScroll = () => setScrolled((el.scrollTop || window.scrollY || 0) > 8);
      el.addEventListener("scroll", onScroll);
      return () => el.removeEventListener("scroll", onScroll);
    }, []);

    function openMenu() { clearTimeout(closeTimer.current); setMenuOpen(true); }
    function scheduleClose() { clearTimeout(closeTimer.current); closeTimer.current = setTimeout(() => setMenuOpen(false), 140); }

    function go(item, e) {
      if (e) e.preventDefault();
      setOpen(false); setMenuOpen(false);
      navigate(item.page, item.anchor);
    }

    return (
      <header style={{ position: "sticky", top: "var(--announce-height)", zIndex: 50, background: scrolled ? "rgba(246,248,252,0.96)" : "var(--surface-page)", backdropFilter: scrolled ? "saturate(180%) blur(12px)" : "none", borderBottom: `1px solid ${scrolled ? "var(--hairline)" : "transparent"}`, transition: "background var(--dur-base), border-color var(--dur-base)" }}>
        <div className="lb-wrap" style={{ height: "var(--nav-height)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
          <a href="#/" onClick={(e) => { e.preventDefault(); navigate("home"); }} style={{ display: "flex", alignItems: "center", padding: "4px 0" }} aria-label="LogiBell home">
            <img src={LOGO} alt="LogiBell" style={{ height: 42, width: "auto", display: "block" }} />
          </a>

          <nav style={{ display: "flex", alignItems: "center", gap: 4 }} className="lb-desktop-nav">
            {NAV.map((item) => {
              const active = item.id !== "feedback" && (item.page === page || (item.id === "services" && page === "authority"));
              if (item.menu) {
                return (
                  <div key={item.id} style={{ position: "relative" }} onMouseEnter={openMenu} onMouseLeave={scheduleClose}
                    onFocusCapture={openMenu} onBlurCapture={scheduleClose}
                    onKeyDown={(e) => { if (e.key === "Escape") setMenuOpen(false); }}>
                    <a href="#/services" onClick={(e) => go(item, e)} aria-haspopup="true" aria-expanded={menuOpen}
                      style={{ display: "inline-flex", alignItems: "center", gap: 5, fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 500, color: active ? "var(--navy-800)" : "var(--text-body)", padding: "8px 14px", borderRadius: "var(--radius-sm)", transition: "color var(--dur-base), background var(--dur-base)" }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = "var(--navy-800)"; e.currentTarget.style.background = "var(--mist-100)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = active ? "var(--navy-800)" : "var(--text-body)"; e.currentTarget.style.background = "transparent"; }}>
                      {item.label}<Icon name="chevron-down" size={15} style={{ transition: "transform var(--dur-base)", transform: menuOpen ? "rotate(180deg)" : "none" }} />
                    </a>
                    {menuOpen ? (
                      <div style={{ position: "absolute", top: "calc(100% + 10px)", left: 0, width: "min(620px, calc(100vw - 48px))", background: "var(--white)", border: "1px solid var(--hairline)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-xl)", padding: 10, zIndex: 60 }}>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
                          {item.menu.map((m, i) => (
                            <a key={i} href={"#/" + m.page} onClick={(e) => go(m, e)}
                              style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "11px 12px", borderRadius: "var(--radius-md)", textDecoration: "none", transition: "background var(--dur-base)" }}
                              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--mist-100)")} onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}>
                              <span style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--navy-800)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none", marginTop: 2 }}>
                                <Icon name={m.icon} size={17} color="var(--gold-500)" />
                              </span>
                              <span style={{ minWidth: 0, whiteSpace: "normal" }}>
                                <span style={{ display: "block", fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 600, color: "var(--text-heading)", lineHeight: 1.3, whiteSpace: "normal" }}>{m.label}</span>
                                <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: 12.5, color: "var(--text-muted)", lineHeight: 1.4, marginTop: 3, whiteSpace: "normal" }}>{m.desc}</span>
                              </span>
                            </a>
                          ))}
                        </div>
                        <a href={"#/" + SERVICES_EXTRA.page} onClick={(e) => go(SERVICES_EXTRA, e)}
                          style={{ display: "flex", gap: 10, alignItems: "center", margin: "8px 2px 2px", padding: "10px 12px", borderRadius: "var(--radius-md)", textDecoration: "none", background: "var(--surface-soft)", border: "1px solid var(--hairline-soft)", transition: "background var(--dur-base)" }}
                          onMouseEnter={(e) => (e.currentTarget.style.background = "var(--mist-100)")} onMouseLeave={(e) => (e.currentTarget.style.background = "var(--surface-soft)")}>
                          <span style={{ width: 28, height: 28, borderRadius: "50%", background: "var(--navy-800)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                            <Icon name={SERVICES_EXTRA.icon} size={14} color="var(--gold-500)" />
                          </span>
                          <span style={{ flex: 1, minWidth: 0, fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, color: "var(--text-heading)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{SERVICES_EXTRA.label}</span>
                          <span style={{ flex: "none", fontFamily: "var(--font-sans)", fontSize: 10.5, fontWeight: 700, letterSpacing: "0.8px", textTransform: "uppercase", color: "var(--gold-700)", background: "rgba(255,203,31,0.16)", borderRadius: "var(--radius-pill)", padding: "4px 9px" }}>Added feature</span>
                        </a>
                      </div>
                    ) : null}
                  </div>
                );
              }
              return (
                <a key={item.id} href={"#/" + item.page} onClick={(e) => go(item, e)}
                  style={{ fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 500, color: active ? "var(--navy-800)" : "var(--text-body)", padding: "8px 14px", borderRadius: "var(--radius-sm)", transition: "color var(--dur-base), background var(--dur-base)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "var(--navy-800)"; e.currentTarget.style.background = "var(--mist-100)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = active ? "var(--navy-800)" : "var(--text-body)"; e.currentTarget.style.background = "transparent"; }}>
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }} className="lb-desktop-actions">
            {/* Phone confirmed by owner (June 2026) */}
            <a className="lb-nav-phone" href="tel:+19092777177" aria-label="Call LogiBell">
              <Icon name="phone" size={15} color="var(--gold-500)" /> (909) 277-7177
            </a>
            <Button variant="primary" size="sm" iconLeft={<Icon name="bell" size={16} color="#FFCB1F" className="lb-cta-bell-float" />} onClick={() => navigate("contact", "onboard")}><span style={{ color: "#F6F7F8" }}>Ring the LogiBell</span></Button>
          </div>

          <button className="lb-burger" onClick={() => setOpen((o) => !o)} aria-label="Menu" style={{ display: "none", background: "transparent", border: "none", cursor: "pointer", color: "var(--navy-800)", padding: 8 }}>
            <Icon name={open ? "x" : "menu"} size={26} />
          </button>
        </div>

        {open ? (
          <div className="lb-mobile-sheet" style={{ borderTop: "1px solid var(--hairline)", background: "var(--surface-page)", padding: "12px 20px 20px", maxHeight: "calc(100vh - var(--nav-height))", overflowY: "auto" }}>
            <a href="#/services" onClick={(e) => go({ page: "services" }, e)} style={{ display: "block", fontFamily: "var(--font-display)", fontSize: 19, fontWeight: 600, color: "var(--navy-800)", padding: "14px 0 8px" }}>Services</a>
            <div style={{ paddingLeft: 4, marginBottom: 8 }}>
              {SERVICES_MENU.concat([SERVICES_EXTRA]).map((m, i) => (
                <a key={i} href={"#/" + m.page} onClick={(e) => go(m, e)} style={{ display: "flex", gap: 10, alignItems: "center", fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 500, color: m.feature ? "var(--gold-700)" : "var(--text-body)", padding: "9px 0" }}>
                  <Icon name={m.icon} size={17} color={m.feature ? "var(--gold-700)" : "var(--navy-700)"} />{m.label}
                </a>
              ))}
            </div>
            {NAV.filter((n) => n.id !== "services").map((item) => (
              <a key={item.id} href={"#/" + item.page} onClick={(e) => go(item, e)} style={{ display: "block", fontFamily: "var(--font-display)", fontSize: 19, fontWeight: 600, color: "var(--navy-800)", padding: "14px 0", borderTop: "1px solid var(--hairline-soft)" }}>{item.label}</a>
            ))}
            <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 12 }}>
              <Button variant="primary" full size="md" iconLeft={<Icon name="bell" size={16} />} onClick={() => { setOpen(false); navigate("contact", "onboard"); }}>Ring the LogiBell</Button>
              <a href="tel:+19092777177" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 9, fontFamily: "var(--font-sans)", fontSize: 15.5, fontWeight: 600, color: "var(--navy-800)", textDecoration: "none", padding: "12px 0", border: "1px solid var(--line)", borderRadius: "var(--radius-md)", background: "var(--white)" }}>
                <Icon name="phone" size={16} color="var(--gold-500)" /> Call (909) 277-7177
              </a>
            </div>
          </div>
        ) : null}
      </header>
    );
  }

  /* Footer — every link routes to a real page (no dead preventDefault stubs). */
  const FOOT = {
    Services: [
      { label: "Dispatch & Load Sourcing", page: "services", anchor: "dispatch" },
      { label: "Operations & Back-Office", page: "services", anchor: "operations" },
      { label: "Partner & Growth Support", page: "services", anchor: "partner-growth" },
      { label: "Published Pricing", page: "pricing" },
    ],
    Company: [
      { label: "Who We Are", page: "about" },
      { label: "Special Treatment Program", page: "authority" },
      { label: "Partner Access", page: "partners" },
      { label: "Contact", page: "contact" },
    ],
    "Get Started": [
      { label: "Ring the LogiBell", page: "contact", anchor: "onboard" },
      { label: "See Pricing", page: "pricing" },
      { label: "Free LogiGuard Check", page: "services", anchor: "logiguard" },
      { label: "Referral Program", page: "contact", anchor: "referral" },
      { label: "Insurance & Lease-On", page: "partners" },
    ],
  };

  function Footer({ navigate }) {
    const link = (l) => (e) => { e.preventDefault(); navigate(l.page, l.anchor); };
    return (
      <footer style={{ background: "var(--navy-900)", color: "var(--on-navy-soft)", position: "relative", overflow: "hidden" }}>
        {/* signature watermark — oversized cropped bell mark, ~2.5% opacity, decorative only */}
        <img src={"./assets/logo/logibell-mark.svg"} alt="" aria-hidden="true" style={{ position: "absolute", right: -140, bottom: -200, width: 580, height: "auto", opacity: 0.025, pointerEvents: "none", userSelect: "none" }} />
        <div className="lb-wrap" style={{ paddingTop: 64, paddingBottom: 40, position: "relative", zIndex: 1 }}>
          <div className="lb-foot-grid" style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", gap: 40 }}>
            <div>
              <a href="#/" onClick={(e) => { e.preventDefault(); navigate("home"); }} style={{ display: "inline-block" }} aria-label="LogiBell home">
                <img src={LOGO_NAVY} alt="LogiBell" style={{ height: 30, width: "auto", marginBottom: 18, display: "block" }} />
              </a>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 14.5, lineHeight: 1.6, color: "var(--on-navy-soft)", maxWidth: 320, margin: "0 0 20px" }}>
                Carrier-focused operations support, starting with dispatch — built for carriers of every size, from owner-operators to small and larger fleets. Your operation, fully backed.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, fontFamily: "var(--font-sans)", fontSize: 14 }}>
                {/* PROVISIONAL — confirm before launch: phone, email (see PRE-LAUNCH note). Address per brand strategy v1.9. */}
                <a href="tel:+19092777177" style={{ display: "inline-flex", alignItems: "center", gap: 9, color: "var(--on-navy-soft)", textDecoration: "none" }}><Icon name="phone" size={15} color="var(--gold-500)" /> (909) 277-7177</a>
                <a href="mailto:info@logibell.com" style={{ display: "inline-flex", alignItems: "center", gap: 9, color: "var(--on-navy-soft)", textDecoration: "none" }}><Icon name="mail" size={15} color="var(--gold-500)" /> info@logibell.com</a>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 9 }}><Icon name="map-pin" size={15} color="var(--gold-500)" /> 5320 Harmony Ave, Los Angeles, CA 91601</span>
              </div>
              {/* Social — LogiBell Instagram + Facebook */}
              <div style={{ display: "flex", gap: 10, marginTop: 22 }}>
                <a href="https://www.instagram.com/logibell.dispatch?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="LogiBell on Instagram" className="lb-social-link" style={{ width: 36, height: 36, borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--navy-700)", color: "var(--on-navy-soft)", transition: "background var(--dur-base), border-color var(--dur-base), color var(--dur-base)" }}>
                  <Icon name="instagram" size={17} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61588442100021&mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="LogiBell on Facebook" className="lb-social-link" style={{ width: 36, height: 36, borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--navy-700)", color: "var(--on-navy-soft)", transition: "background var(--dur-base), border-color var(--dur-base), color var(--dur-base)" }}>
                  <Icon name="facebook" size={17} />
                </a>
              </div>
            </div>
            {Object.keys(FOOT).map((col) => (
              <div key={col}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px", color: "#fff", marginBottom: 16 }}>{col}</div>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 11 }}>
                  {FOOT[col].map((l) => (
                    <li key={l.label}><a href={"#/" + l.page} onClick={link(l)} style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--on-navy-soft)", textDecoration: "none", transition: "color var(--dur-base)" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold-500)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--on-navy-soft)")}>{l.label}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ height: 1, background: "var(--navy-700)", margin: "40px 0 24px" }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap", fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--on-navy-faint)" }}>
            <span>© 2026 LogiBell. Carrier-focused operations support.</span>
            <span style={{ display: "flex", gap: 20 }}>
              <a href="#/privacy" onClick={(e) => { e.preventDefault(); navigate("privacy"); }} style={{ color: "var(--on-navy-faint)", textDecoration: "none" }}>Privacy</a>
              <a href="#/terms" onClick={(e) => { e.preventDefault(); navigate("terms"); }} style={{ color: "var(--on-navy-faint)", textDecoration: "none" }}>Terms</a>
            </span>
          </div>
        </div>
      </footer>
    );
  }

  window.LBChrome = { AnnouncementBar, TopNav, Footer };
})();
