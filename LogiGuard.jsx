/* LogiBell — LogiGuard (Security & Integrity).
   · LogiGuardSection — the full, prominent section on the Services page:
     verification practice + the free check form, open to everyone.
   · LogiGuardStrip — a slim mention band for the Home page welcome flow.
   Wording stays confident and protective: "work to confirm", "help protect",
   "reduce exposure" — never "fraud-proof" or "guaranteed safe". */
(function () {
  const { Button, Card, Badge, Input } = window.DS;
  const Icon = window.Icon;
  const { Section, Eyebrow } = window.LBHome;

  const GUARD_POINTS = [
    ["shield-check", "Broker, partner & vendor verification", "Authority, MC number, and insurance status reviewed before loads are coordinated."],
    ["user-check", "A legitimate network", "Carrier onboarding includes identity and authority checks to help keep the network legitimate."],
    ["scan-search", "Current on the tactics", "We stay current on how freight fraud is evolving, applied to every booking decision."],
  ];

  /* ---- Free check form (open to non-clients) ----
     Submissions post to Formspree (works on Vercel - no backend needed). Create a
     form at https://formspree.io and paste its endpoint ID below, replacing
     mzdqyrzj. Replies go out from info@logibell.com. */
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mzdqyrzj";
  function LogiGuardCheckForm() {
    const [sent, setSent] = React.useState(false);
    const [sending, setSending] = React.useState(false);
    const [submitError, setSubmitError] = React.useState(false);
    const [form, setForm] = React.useState({ broker: "", mc: "", email: "", details: "" });
    const [errors, setErrors] = React.useState({});
    const set = (k) => (e) => {
      const v = e.target.value;
      setForm((f) => ({ ...f, [k]: v }));
      setErrors((er) => (er[k] ? { ...er, [k]: undefined } : er));
    };

    function validate() {
      const errs = {};
      if (!form.broker.trim() && !form.mc.trim()) errs.broker = "Give us a broker or company name — or just an MC number below.";
      if (!form.email.trim()) errs.email = "We reply by email — please add one.";
      else if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) errs.email = "That email doesn't look right.";
      return errs;
    }

    async function handleSubmit(e) {
      e.preventDefault();
      const submitter = e.nativeEvent && e.nativeEvent.submitter;
      if (submitter && submitter.getAttribute("type") !== "submit") return;
      const errs = validate();
      if (Object.keys(errs).length) { setErrors(errs); return; }
      setErrors({});
      setSubmitError(false);
      setSending(true);
      try {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            broker: form.broker, mc: form.mc, email: form.email, details: form.details,
            _subject: "New LogiGuard check - LogiBell website",
          }),
        });
        if (!res.ok) throw new Error("submit failed");
        setSent(true);
      } catch (err) {
        setSubmitError(true);
      } finally {
        setSending(false);
      }
    }

    return (
      <Card surface="white" radius="xl" pad="xl" style={{ boxShadow: "var(--shadow-lg)" }}>
        {sent ? (
          <div style={{ textAlign: "center", padding: "32px 16px" }}>
            <span style={{ width: 64, height: 64, borderRadius: "50%", background: "var(--success-soft)", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
              <Icon name="shield-check" size={30} color="var(--success)" />
            </span>
            <h3 className="lb-display-sm" style={{ marginBottom: 10 }}>Check received.</h3>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 15.5, color: "var(--text-body)", maxWidth: 360, margin: "0 auto 22px", lineHeight: 1.6 }}>
              We'll run the verification and reply to {form.email || "your email"} — usually well before you'd need to commit to the load.
            </p>
            <Button variant="secondary" size="md" onClick={() => { setSent(false); setForm({ broker: "", mc: "", email: "", details: "" }); }}>Run another check</Button>
          </div>
        ) : (
          <form noValidate onSubmit={handleSubmit}>
            {/* Formspree honeypot - bots fill this hidden field; real users never see it */}
            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" style={{ display: "none" }} />
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 600, color: "var(--text-heading)", margin: 0 }}>Run a free check</h3>
              <Badge tone="goldsoft" uppercase>Free</Badge>
            </div>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-muted)", marginBottom: 22 }}>Client or not — send the details and we'll reply by email with what we find.</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
              <Input label="Broker / company name" name="broker" placeholder="Broker or company" error={errors.broker} value={form.broker} onChange={set("broker")} />
              <Input label="MC number" name="mc" placeholder="MC-000000" value={form.mc} onChange={set("mc")} />
            </div>
            <div style={{ marginBottom: 16 }}>
              <Input label="Your email" name="email" type="email" placeholder="you@company.com" required error={errors.email} value={form.email} onChange={set("email")} />
            </div>
            <div style={{ marginBottom: 22 }}>
              <Input label="Load details (optional)" name="details" multiline rows={3} placeholder="Lane, rate, pickup date, anything that felt off…" value={form.details} onChange={set("details")} />
            </div>
            <Button variant="primary" full size="lg" type="submit" disabled={sending} iconLeft={<Icon name="shield-check" size={18} color="rgb(255, 203, 31)" />}>{sending ? "Checking..." : "Verify before you haul"}</Button>
            {submitError && (
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "#c0392b", textAlign: "center", marginTop: 12 }}>
                Something went wrong sending that. Please try again, or email info@logibell.com.
              </p>
            )}
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 12.5, color: "var(--text-muted)", textAlign: "center", marginTop: 14, display: "flex", alignItems: "center", justifyContent: "center", gap: 7 }}>
              <Icon name="lock" size={13} color="var(--text-muted)" /> Results go to your email only. No spam, no obligations.
            </p>
          </form>
        )}
      </Card>
    );
  }

  /* ---- Full section (Services page, anchor #logiguard) ---- */
  function LogiGuardSection() {
    return (
      <section id="logiguard" style={{ background: "var(--navy-900)", paddingTop: "clamp(56px, 8vw, 96px)", paddingBottom: "clamp(56px, 8vw, 96px)", position: "relative", overflow: "hidden", scrollMarginTop: 128 }}>
        <div style={{ position: "absolute", top: -90, left: -70, width: 340, height: 340, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,203,31,0.10), transparent 70%)" }} />
        <div className="lb-wrap" style={{ position: "relative" }}>
          <div className="lb-who-grid" style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 56, alignItems: "start" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                <Badge tone="gold" uppercase>Added Feature</Badge>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: 12.5, fontWeight: 600, letterSpacing: "1.6px", textTransform: "uppercase", color: "var(--gold-400)" }}>LogiGuard — Security &amp; Integrity</span>
              </div>
              <h2 className="lb-display-md" style={{ color: "#fff", margin: "16px 0 14px" }}>Verify before <span style={{ color: "var(--gold-500)" }}>you haul.</span></h2>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 15.5, lineHeight: 1.65, color: "var(--on-navy-soft)", maxWidth: 520, marginBottom: 24 }}>
                Every service above comes with LogiGuard working in the background: before a load is coordinated, we work to confirm the brokers, partners, and vendors involved are legitimate — authority, MC number, and insurance status. And it's open to everyone: client or not, submit a broker, MC, or load for a free check.
              </p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 16 }}>
                {GUARD_POINTS.map(([ic, t, d], i) => (
                  <li key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <span style={{ width: 42, height: 42, borderRadius: "50%", background: "var(--navy-700)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                      <Icon name={ic} size={20} color="var(--gold-500)" />
                    </span>
                    <span>
                      <span style={{ display: "block", fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 600, color: "#fff", marginBottom: 3 }}>{t}</span>
                      <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.55, color: "var(--on-navy-soft)" }}>{d}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <LogiGuardCheckForm />
          </div>
        </div>
      </section>
    );
  }

  /* ---- Slim Home mention (sits in the welcome flow, links to Services) ---- */
  function LogiGuardStrip({ navigate }) {
    const go = navigate || window.__lbnav || (() => {});
    return (
      <Section pt={0} pb={56}>
        <div style={{ background: "var(--surface-card)", border: "1px solid var(--hairline)", borderRadius: "var(--radius-2xl)", padding: "26px 32px", display: "flex", gap: 22, alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", boxShadow: "var(--shadow-xs)" }}>
          <div style={{ display: "flex", gap: 18, alignItems: "center", maxWidth: 700 }}>
            <span style={{ width: 50, height: 50, borderRadius: "50%", background: "var(--navy-800)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
              <Icon name="shield-check" size={24} color="var(--gold-500)" />
            </span>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 15.5, lineHeight: 1.55, color: "var(--text-body)", margin: 0 }}>
              <strong style={{ color: "var(--text-heading)", fontWeight: 600 }}>LogiGuard — verify before you haul.</strong>{" "}
              A free verification check on any broker, MC, or load — open to every carrier, client or not.
            </p>
          </div>
          <Button variant="secondary" size="md" iconRight={<Icon name="arrow-right" size={16} />} onClick={() => go("services", "logiguard")}>Run a free check</Button>
        </div>
      </Section>
    );
  }

  window.LBGuard = { LogiGuardSection, LogiGuardStrip };
})();
