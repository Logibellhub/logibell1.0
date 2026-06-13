/* LogiBell — Contact page.
   Two distinct intents on one page:
     • "Contact" (nav)        → lands at the top: general ways to reach the team.
     • "Ring the LogiBell"    → deep-links to #onboard: the get-started form.
   A referral block sits between them (#referral). */
(function () {
  const { Button, Card, Badge, Input, Tabs } = window.DS;
  const Icon = window.Icon;

  function ContactPage({ navigate }) {
    const go = navigate || window.__lbnav || (() => {});
    const [equip, setEquip] = React.useState("semi");
    const [sent, setSent] = React.useState(false);
    const [form, setForm] = React.useState({ name: "", company: "", phone: "", email: "", mc: "", notes: "" });
    const [errors, setErrors] = React.useState({});
    const set = (k) => (e) => {
      const v = e.target.value;
      setForm((f) => ({ ...f, [k]: v }));
      setErrors((er) => (er[k] ? { ...er, [k]: undefined } : er));
    };

    /* The confirmation state is ONLY reachable through this explicit, validated
       submit — never from change/click/keydown on a field. */
    function validate() {
      const errs = {};
      if (!form.name.trim()) errs.name = "Please enter your name.";
      if (!form.phone.trim()) errs.phone = "Please enter a phone number.";
      else if (!/^[\d\s()+.\-]{7,}$/.test(form.phone.trim())) errs.phone = "That phone number doesn't look right.";
      if (form.email.trim() && !/^\S+@\S+\.\S+$/.test(form.email.trim())) errs.email = "That email doesn't look right.";
      return errs;
    }

    function handleSubmit(e) {
      e.preventDefault();
      // Guard: only the explicit submit button (or implicit Enter-in-text-field
      // submission, submitter == null) may submit. Any other control inside the
      // form (e.g. a dropdown/tab trigger missing type="button") is ignored.
      const submitter = e.nativeEvent && e.nativeEvent.submitter;
      if (submitter && submitter.getAttribute("type") !== "submit") return;
      const errs = validate();
      if (Object.keys(errs).length) { setErrors(errs); return; }
      /* PROVISIONAL: wire to real backend before launch. Default destination =
         Netlify Forms (name="onboarding"). Confirm destination + notification email. */
      setErrors({});
      setSent(true);
    }

    /* PROVISIONAL — confirm phone, email, address, hours before launch (PRE-LAUNCH.md) */
    const methods = [
      { ic: "phone", t: "Call us", v: "(818) 481-1886", href: "tel:+18184811886" },
      { ic: "mail", t: "Email", v: "info@logibell.com", href: "mailto:info@logibell.com" },
      { ic: "map-pin", t: "Office", v: "5320 Harmony Ave, Los Angeles, CA 91601", href: null },
      { ic: "clock", t: "Hours", v: "Mon–Fri · after-hours when time-sensitive", href: null },
    ];

    return (
      <div>
        {/* ===== General contact (nav "Contact" lands here) ===== */}
        <section style={{ background: "var(--surface-page)", paddingTop: 60, paddingBottom: 52 }}>
          <div className="lb-wrap" style={{ maxWidth: 980 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 9, marginBottom: 18 }}>
              <span style={{ width: 22, height: 2, background: "var(--gold-500)", borderRadius: 2 }} />
              <span style={{ fontFamily: "var(--font-sans)", fontSize: 12.5, fontWeight: 600, letterSpacing: "1.6px", textTransform: "uppercase", color: "var(--gold-700)" }}>Contact</span>
            </div>
            <h1 className="lb-display-lg" style={{ marginBottom: 16, maxWidth: 640 }}>Reach the LogiBell team.</h1>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.6, color: "var(--text-body)", maxWidth: 600, marginBottom: 34 }}>
              Questions, partnerships, or want to talk through your operation? Here's how to reach us. Ready to get started? Ring the LogiBell to begin onboarding.
            </p>
            <div className="lb-3col" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 32 }}>
              {methods.map((m, i) => {
                const inner = (
                  <React.Fragment>
                    <span style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--navy-800)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none", marginBottom: 14 }}><Icon name={m.ic} size={20} color="var(--gold-500)" /></span>
                    <div style={{ fontFamily: "var(--font-sans)", fontSize: 12.5, color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.6px", marginBottom: 5 }}>{m.t}</div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 15.5, fontWeight: 600, color: "var(--text-heading)", lineHeight: 1.35 }}>{m.v}</div>
                  </React.Fragment>
                );
                const cardStyle = { display: "block", padding: "20px", background: "var(--surface-card)", border: "1px solid var(--hairline)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-xs)", textDecoration: "none" };
                return m.href
                  ? <a key={i} href={m.href} style={cardStyle}>{inner}</a>
                  : <div key={i} style={cardStyle}>{inner}</div>;
              })}
            </div>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Button variant="primary" size="lg" iconLeft={<Icon name="bell" size={18} color="rgb(255, 203, 31)" />} onClick={() => go("contact", "onboard")}>Ring the LogiBell — start onboarding</Button>
              <Button variant="secondary" size="lg" iconRight={<Icon name="arrow-right" size={16} />} onClick={() => go("pricing")}>See pricing</Button>
            </div>
          </div>
        </section>

        {/* ===== Referral program ===== */}
        <section id="referral" style={{ background: "var(--surface-soft)", paddingTop: 56, paddingBottom: 56, scrollMarginTop: 128 }}>
          <div className="lb-wrap" style={{ maxWidth: 980 }}>
            <div style={{ display: "flex", gap: 26, alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
              <div style={{ display: "flex", gap: 20, alignItems: "center", maxWidth: 660 }}>
                <span style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--navy-800)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}><Icon name="users" size={26} color="var(--gold-500)" /></span>
                <div>
                  <div style={{ marginBottom: 8 }}><Badge tone="goldsoft" uppercase>Referral Program</Badge></div>
                  <h2 className="lb-title-lg" style={{ marginBottom: 8 }}>Refer a carrier, get rewarded.</h2>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 15.5, lineHeight: 1.6, color: "var(--text-body)", margin: 0 }}>
                    Know another carrier who could use LogiBell? Refer them — when they come on board, you're rewarded for the connection. Ask us how it works.
                  </p>
                </div>
              </div>
              <Button variant="primary" size="md" iconLeft={<Icon name="phone" size={16} />} onClick={() => go("contact", "onboard")}>Ask about the referral program</Button>
            </div>
          </div>
        </section>

        {/* ===== Get onboarded ("Ring the LogiBell" deep-links here) ===== */}
        <section id="onboard" style={{ background: "var(--surface-page)", paddingTop: "clamp(72px, 9vw, 112px)", paddingBottom: "clamp(72px, 10vw, 128px)", scrollMarginTop: 124 }}>
          <div className="lb-wrap">
            <div className="lb-contact-grid" style={{ display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 48, alignItems: "start" }}>
              {/* Left: reassurance */}
              <div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 9, marginBottom: 18 }}>
                  <span style={{ width: 22, height: 2, background: "var(--gold-500)", borderRadius: 2 }} />
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 12.5, fontWeight: 600, letterSpacing: "1.6px", textTransform: "uppercase", color: "var(--gold-700)" }}>Get Onboarded</span>
                </div>
                <h2 className="lb-display-md" style={{ marginBottom: 18 }}>Ring the LogiBell.</h2>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 16.5, lineHeight: 1.6, color: "var(--text-body)", marginBottom: 28, maxWidth: 380 }}>
                  Tell us about your operation and we'll get you set up. Your rate is confirmed at onboarding — published, with no setup fees and no monthly minimums.
                </p>
                <Card surface="soft" radius="lg" pad="md" style={{ display: "flex", gap: 12 }}>
                  <Icon name="clock" size={20} color="var(--navy-700)" style={{ flex: "none", marginTop: 1 }} />
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 13.5, lineHeight: 1.55, color: "var(--text-body)", margin: 0 }}>
                    After-hours communication is available for time-sensitive situations once you're onboarded.
                  </p>
                </Card>
              </div>

              {/* Right: form */}
              <Card surface="white" radius="xl" pad="xl" style={{ boxShadow: "var(--shadow-md)" }}>
                {sent ? (
                  <div style={{ textAlign: "center", padding: "40px 20px" }}>
                    <span style={{ width: 64, height: 64, borderRadius: "50%", background: "var(--success-soft)", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                      <Icon name="check" size={32} color="var(--success)" />
                    </span>
                    <h2 className="lb-display-sm" style={{ marginBottom: 10 }}>You've rung the LogiBell.</h2>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 15.5, color: "var(--text-body)", maxWidth: 360, margin: "0 auto 24px", lineHeight: 1.6 }}>
                      Thanks, {form.name || "carrier"}. We'll reach out shortly to walk you through onboarding and confirm your published rate.
                    </p>
                    <Button variant="secondary" size="md" onClick={() => setSent(false)}>Submit another</Button>
                  </div>
                ) : (
                  <form name="onboarding" method="POST" data-netlify="true" netlify-honeypot="bot-field" noValidate onSubmit={handleSubmit}>
                    {/* Netlify Forms plumbing (no-op in prototype) */}
                    <input type="hidden" name="form-name" value="onboarding" />
                    <input type="hidden" name="equipment" value={equip} />
                    <p style={{ display: "none" }}><label>Don't fill this out: <input name="bot-field" /></label></p>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 600, color: "var(--text-heading)", marginBottom: 6 }}>Start onboarding</h3>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-muted)", marginBottom: 24 }}>We'll only use this to get you set up.</p>

                    <div style={{ marginBottom: 18 }}>
                      <label style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, color: "var(--ink-700)", display: "block", marginBottom: 9 }}>Equipment type</label>
                      <Tabs value={equip} onChange={setEquip} tabs={[{ id: "semi", label: "Semi" }, { id: "box", label: "Box / Hotshot" }, { id: "sprinter", label: "Sprinter / Non-CDL" }]} />
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                      <Input label="Full name" name="name" placeholder="Jordan Carter" required error={errors.name} value={form.name} onChange={set("name")} />
                      <Input label="Company / MC name" name="company" placeholder="Carter Freight LLC" value={form.company} onChange={set("company")} />
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                      <Input label="Phone" name="phone" type="tel" placeholder="(000) 000-0000" required error={errors.phone} value={form.phone} onChange={set("phone")} />
                      <Input label="Email" name="email" type="email" placeholder="you@company.com" error={errors.email} value={form.email} onChange={set("email")} />
                    </div>
                    <div style={{ marginBottom: 16 }}>
                      <Input label="MC number (if active)" name="mc" placeholder="MC-000000" hint="New authority? Leave blank — we support early-stage carriers too." value={form.mc} onChange={set("mc")} />
                    </div>
                    <div style={{ marginBottom: 24 }}>
                      <Input label="Tell us about your operation" name="notes" multiline rows={4} placeholder="Lanes you prefer, current setup, what you need help with…" value={form.notes} onChange={set("notes")} />
                    </div>

                    <Button variant="primary" full size="lg" type="submit" iconLeft={<Icon name="bell" size={18} color="rgb(255, 203, 31)" />}>Ring the LogiBell</Button>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 12.5, color: "var(--text-muted)", textAlign: "center", marginTop: 14, display: "flex", alignItems: "center", justifyContent: "center", gap: 7 }}>
                      <Icon name="lock" size={13} color="var(--text-muted)" /> Your details stay between us. No spam, no obligations.
                    </p>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </section>
      </div>
    );
  }

  window.LBContact = { ContactPage };
})();
