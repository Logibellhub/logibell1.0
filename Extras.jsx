/* LogiBell — Home page extras: Feedback (real reviews only) + FAQ accordion. */
(function () {
  const { Button, Card, Badge, Input, Tabs } = window.DS;
  const Icon = window.Icon;
  const { Section, Eyebrow } = window.LBHome;

  /* =================== FEEDBACK ===================
     REAL REVIEWS ONLY. Paste reviews below as they come in — each entry:
       { quote: "…", name: "First L.", company: "…" (optional), role: "owner-operator" | "driver" | "dispatcher" | "broker" }
     Reviews are moderated. */
  const REVIEWS = [
    {
      quote: "Thank you so much, Thomas, for your constant support and for always taking care of me while I travel from origin to destination. Your communication, attention, and help on the road make a real difference.",
      name: "Pedro",
      company: "Rosales Express",
      role: "driver",
    },
  ];

  const ROLES = [
    { id: "carrier", label: "Carrier" },
    { id: "driver", label: "Driver" },
    { id: "owner-operator", label: "Owner-operator" },
    { id: "dispatcher", label: "Dispatcher" },
    { id: "broker", label: "Broker" },
  ];
  /* The form keeps it simple: Carrier / Broker / Other (free text). */
  const FORM_ROLES = [
    { id: "carrier", label: "Carrier" },
    { id: "broker", label: "Broker" },
    { id: "other", label: "Other" },
  ];
  const roleLabel = (id) => (ROLES.find((r) => r.id === id) || {}).label || id;

  /* PROVISIONAL: form submissions post to Formspree (free tier, no backend
     needed — works on Vercel, unlike the previous Netlify-only setup).
     Setup (one-time, ~2 min): create a free form at https://formspree.io,
     then replace "YOUR_FORM_ID" below with the ID it gives you. Submissions
     land in your email + the Formspree dashboard, where you can read each
     one and decide whether to approve it. To publish an approved review,
     add it to the REVIEWS array above (or send it to me and I'll add it
     and push the update). */
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mpqeoedr";

  /* PROVISIONAL: link to your Google Business review form. Find it in your
     Google Business Profile under "Get more reviews," or build one at
     https://search.google.com/local/writereview using your Place ID. */
  const GOOGLE_REVIEW_URL = "https://share.google/R94XivQ8cRbL0OLaA";

  function FeedbackForm() {
    const [sent, setSent] = React.useState(false);
    const [sending, setSending] = React.useState(false);
    const [submitError, setSubmitError] = React.useState(false);
    const [role, setRole] = React.useState("carrier");
    const [customRole, setCustomRole] = React.useState("");
    const [form, setForm] = React.useState({ name: "", text: "" });
    const [errors, setErrors] = React.useState({});
    const set = (k) => (e) => {
      const v = e.target.value;
      setForm((f) => ({ ...f, [k]: v }));
      setErrors((er) => (er[k] ? { ...er, [k]: undefined } : er));
    };

    async function handleSubmit(e) {
      e.preventDefault();
      const submitter = e.nativeEvent && e.nativeEvent.submitter;
      if (submitter && submitter.getAttribute("type") !== "submit") return;
      const errs = {};
      if (!form.name.trim()) errs.name = "Please add your name.";
      if (!form.text.trim()) errs.text = "Tell us how it went — a sentence is plenty.";
      if (Object.keys(errs).length) { setErrors(errs); return; }
      setErrors({});
      setSubmitError(false);
      setSending(true);
      const roleValue = role === "other" ? (customRole.trim() || "other") : role;
      try {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ name: form.name, role: roleValue, feedback: form.text, _subject: "New LogiBell website feedback" }),
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
      <Card surface="white" radius="xl" pad="xl" style={{ boxShadow: "var(--shadow-md)" }}>
        {sent ? (
          <div style={{ textAlign: "center", padding: "28px 14px" }}>
            <span style={{ width: 58, height: 58, borderRadius: "50%", background: "var(--success-soft)", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
              <Icon name="check" size={28} color="var(--success)" />
            </span>
            <h3 className="lb-display-sm" style={{ marginBottom: 8 }}>Thank you.</h3>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--text-body)", maxWidth: 340, margin: "0 auto", lineHeight: 1.6 }}>
              Your feedback goes through moderation before it appears — we keep it genuine in both directions.
            </p>
          </div>
        ) : (
          <form noValidate onSubmit={handleSubmit}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 21, fontWeight: 600, color: "var(--text-heading)", marginBottom: 6 }}>Share your experience</h3>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-muted)", marginBottom: 20 }}>Worked with us? We'd like to hear how it went.</p>
            <div style={{ marginBottom: 16 }}>
              <label style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, color: "var(--ink-700)", display: "block", marginBottom: 9 }}>I am a…</label>
              <Tabs value={role} onChange={setRole} tabs={FORM_ROLES} />
              {role === "other" ? (
                <div style={{ marginTop: 10 }}>
                  <Input label="Your role" name="role-other" placeholder="Owner-operator, fleet manager, vendor…" value={customRole} onChange={(e) => setCustomRole(e.target.value)} />
                </div>
              ) : null}
            </div>
            <div style={{ marginBottom: 16 }}>
              <Input label="Name" name="name" placeholder="Jordan C." required error={errors.name} value={form.name} onChange={set("name")} />
            </div>
            <div style={{ marginBottom: 20 }}>
              <Input label="Your feedback" name="text" multiline rows={4} placeholder="How was working with LogiBell?" required error={errors.text} value={form.text} onChange={set("text")} />
            </div>
            {submitError ? (
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--danger)", marginBottom: 12 }}>
                Something went wrong sending this. Please try again, or email us directly at info@logibell.com.
              </p>
            ) : null}
            <Button variant="primary" full size="md" type="submit" disabled={sending}>{sending ? "Sending…" : "Submit feedback"}</Button>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 12.5, color: "var(--text-muted)", textAlign: "center", marginTop: 12 }}>
              Reviews are moderated before they appear, to keep feedback genuine.
            </p>
          </form>
        )}
      </Card>
    );
  }

  function FeedbackSection() {
    const [filter, setFilter] = React.useState("all");
    const shown = filter === "all" ? REVIEWS : REVIEWS.filter((r) => r.role === filter);
    // role chips only once there's something to filter: 2+ reviews across 2+ roles
    const presentRoles = ROLES.filter((r) => REVIEWS.some((v) => v.role === r.id));
    const showChips = REVIEWS.length > 1 && presentRoles.length > 1;
    return (
      <Section id="feedback" bg="var(--surface-soft)">
        <div className="lb-who-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }}>
          <div>
            <Eyebrow>Feedback</Eyebrow>
            <h2 className="lb-display-md" style={{ marginBottom: 18 }}>What carriers say.</h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 16.5, lineHeight: 1.65, color: "var(--text-body)", maxWidth: 460, marginBottom: 14 }}>
              Honest feedback from the carriers, drivers, and brokers we work with — shared as it comes in and moderated to keep it genuine.
            </p>
            <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-sans)", fontSize: 13.5, fontWeight: 600, color: "var(--navy-800)", textDecoration: "none", border: "1px solid var(--line)", borderRadius: "var(--radius-pill)", padding: "9px 16px", marginBottom: 24, background: "var(--white)" }}>
              <Icon name="star" size={15} color="var(--gold-500)" />
              Leave us a Google review
              <Icon name="arrow-up-right" size={13} color="var(--text-muted)" />
            </a>
            {REVIEWS.length === 0 ? (
              <React.Fragment>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.6, color: "var(--text-muted)", maxWidth: 480, display: "flex", gap: 8, alignItems: "flex-start" }}>
                  <Icon name="badge-check" size={17} color="var(--navy-700)" style={{ marginTop: 1, flex: "none" }} />
                  As more reviews come in, they'll appear right here.
                </p>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {showChips ? (
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
                    {[{ id: "all", label: "All" }].concat(presentRoles).map((r) => (
                      <button key={r.id} type="button" onClick={() => setFilter(r.id)}
                        style={{ fontFamily: "var(--font-sans)", fontSize: 13.5, fontWeight: 600, padding: "7px 15px", borderRadius: "var(--radius-pill)", cursor: "pointer", border: "1px solid " + (filter === r.id ? "var(--navy-800)" : "var(--line)"), background: filter === r.id ? "var(--navy-800)" : "var(--white)", color: filter === r.id ? "#fff" : "var(--text-body)", transition: "background var(--dur-base), border-color var(--dur-base)" }}>
                        {r.label}
                      </button>
                    ))}
                  </div>
                ) : null}
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {shown.map((r, i) => (
                    <Card key={i} surface="white" radius="lg" pad="lg">
                      <Icon name="quote" size={22} color="var(--gold-500)" />
                      <p style={{ fontFamily: "var(--font-sans)", fontSize: 15.5, lineHeight: 1.6, color: "var(--text-strong)", margin: "10px 0 14px" }}>{r.quote}</p>
                      <div style={{ fontFamily: "var(--font-sans)", fontSize: 13.5, color: "var(--text-muted)" }}>
                        <strong style={{ color: "var(--text-heading)", fontWeight: 600 }}>{r.name}</strong>{r.company ? ", " + r.company : ""} · {roleLabel(r.role)}
                      </div>
                    </Card>
                  ))}
                </div>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--text-muted)", marginTop: 18, display: "flex", gap: 8, alignItems: "center" }}>
                  <Icon name="badge-check" size={15} color="var(--navy-700)" /> Reviews are moderated to keep feedback genuine.
                </p>
              </React.Fragment>
            )}
          </div>
          <FeedbackForm />
        </div>
      </Section>
    );
  }

  /* =================== FAQ ===================
     Conservative answers, consistent with the site's tone — confident,
     no over-promising. Placed above the final CTA per the brand doc. */
  const FAQ_ITEMS = [
    {
      q: "What does LogiBell do?",
      a: "LogiBell is a carrier-focused operations support company. We start with dispatch — load sourcing and broker communication — and support the operation around it: paperwork coordination, issue resolution, and access to trusted partners.",
    },
    {
      q: "What does it cost?",
      a: "Pricing is published. Semi trucks are a 6% flat dispatch fee; box trucks, hotshots, and sprinters are 6–8% based on equipment and service needs. No setup fees and no monthly minimums — your exact rate is confirmed at onboarding.",
    },
    {
      q: "Do you work with new authorities?",
      a: "Yes — it's one of our core strengths. The Special Treatment Program gives newer authorities structured early-stage support: first-load strategy, broker-readiness guidance, rate education, compliance guidance, and insurance setup support during the first months on the road.",
    },
    {
      q: "How does LogiGuard work?",
      a: "LogiGuard is our verification practice. We work to confirm the brokers, partners, and vendors involved in a load — authority, MC number, and insurance status — and stay current on freight-fraud tactics. Anyone, client or not, can submit a broker, MC, or load for a free check and get a result by email.",
    },
    {
      q: "How do I get started?",
      a: "Ring the LogiBell to speak with a dispatch specialist, or schedule a call. Our published pricing means you know the cost before you reach out.",
    },
  ];

  function FAQItem({ item, open, onToggle, idx }) {
    return (
      <div style={{ borderBottom: "1px solid var(--hairline)" }}>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={"lb-faq-a-" + idx}
          onClick={onToggle}
          style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 18, background: "transparent", border: "none", cursor: "pointer", padding: "22px 4px", textAlign: "left" }}
        >
          <span style={{ fontFamily: "var(--font-display)", fontSize: 17.5, fontWeight: 600, color: open ? "var(--navy-800)" : "var(--text-heading)", lineHeight: 1.35 }}>{item.q}</span>
          <span style={{ width: 30, height: 30, borderRadius: "50%", background: open ? "var(--navy-800)" : "rgba(25,57,96,0.07)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none", transition: "background var(--dur-base)" }}>
            <Icon name="chevron-down" size={17} color={open ? "var(--gold-500)" : "var(--navy-800)"} style={{ transition: "transform var(--dur-base)", transform: open ? "rotate(180deg)" : "none" }} />
          </span>
        </button>
        <div id={"lb-faq-a-" + idx} role="region" style={{ display: "grid", gridTemplateRows: open ? "1fr" : "0fr", transition: "grid-template-rows 260ms var(--ease-out)" }}>
          <div style={{ overflow: "hidden" }}>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 15.5, lineHeight: 1.65, color: "var(--text-body)", margin: "0 4px", paddingBottom: 24, maxWidth: 680 }}>{item.a}</p>
          </div>
        </div>
      </div>
    );
  }

  function FAQSection({ navigate }) {
    const go = navigate || window.__lbnav || (() => {});
    const [open, setOpen] = React.useState(0);
    return (
      <Section id="faq">
        <div className="lb-who-grid" style={{ display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: 56, alignItems: "start" }}>
          <div>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="lb-display-md" style={{ marginBottom: 16 }}>Common questions.</h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.6, color: "var(--text-body)", maxWidth: 380, marginBottom: 24 }}>
              Services, pricing, and how the relationship works. Anything else — ask us directly.
            </p>
            <Button variant="secondary" size="md" iconLeft={<Icon name="phone" size={16} />} onClick={() => go("contact")}>Schedule a Call</Button>
          </div>
          <div style={{ borderTop: "1px solid var(--hairline)" }}>
            {FAQ_ITEMS.map((item, i) => (
              <FAQItem key={i} item={item} idx={i} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
            ))}
          </div>
        </div>
      </Section>
    );
  }

  window.LBExtras = { FeedbackSection, FAQSection, REVIEWS };
})();
