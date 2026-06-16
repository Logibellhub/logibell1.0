/* LogiBell — Pricing page */
(function () {
  const { Button, Card, Badge, PricingCard, Tabs } = window.DS;
  const Icon = window.Icon;
  const { FlipCard } = window.LBFlip;
  const { NavyDrift } = window.LBAmbient;

  /* Back face of a pricing flip card — a worked example with round, honest
     numbers, clearly labelled as an example. */
  function ExampleBack({ dark, title, rows, emphasis, note, ctaLabel, onCta }) {
    return (
      <div style={{ display: "flex", flexDirection: "column", background: dark ? "var(--surface-dark)" : "var(--surface-card)", border: `1px solid ${dark ? "var(--navy-700)" : "var(--hairline)"}`, borderRadius: "var(--radius-xl)", padding: "32px 30px", boxShadow: dark ? "var(--shadow-lg)" : "var(--shadow-sm)", height: "100%" }}>
        <div><Badge tone={dark ? "gold" : "goldsoft"} uppercase>Worked example</Badge></div>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: 19, fontWeight: 600, letterSpacing: "-0.2px", color: dark ? "#fff" : "var(--text-heading)", margin: "16px 0 4px" }}>{title}</h3>
        <div style={{ display: "flex", flexDirection: "column", marginTop: 14 }}>
          {rows.map(([k, v], i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12, padding: "11px 0", borderBottom: `1px solid ${dark ? "var(--navy-700)" : "var(--hairline)"}` }}>
              <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: dark ? "var(--on-navy-soft)" : "var(--text-body)" }}>{k}</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 15, fontWeight: 600, color: dark ? "var(--on-navy)" : "var(--text-strong)", whiteSpace: "nowrap" }}>{v}</span>
            </div>
          ))}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12, padding: "13px 0 0" }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 600, color: dark ? "#fff" : "var(--text-heading)" }}>{emphasis[0]}</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 19, fontWeight: 700, color: dark ? "var(--gold-500)" : "var(--navy-800)", whiteSpace: "nowrap" }}>{emphasis[1]}</span>
          </div>
        </div>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 12.5, lineHeight: 1.55, color: dark ? "var(--on-navy-faint)" : "var(--text-muted)", margin: "14px 0 18px" }}>{note}</p>
        <div style={{ marginTop: "auto" }}>
          <Button variant={dark ? "gold" : "primary"} full size="md" onClick={onCta}>{ctaLabel}</Button>
        </div>
      </div>
    );
  }

  function PricingPage({ navigate }) {
    const compare = [
      ["Published standard rate", "Preferred pricing below standard"],
      ["Basic performance reporting", "Weekly performance reporting"],
      ["Standard support", "Dedicated account management"],
      ["Standard load matching", "Priority load matching"],
      ["Available at signup", "Earned through a sustained relationship"],
    ];
    return (
      <div>
        {/* header */}
        <section style={{ background: "var(--surface-page)", paddingTop: 64, paddingBottom: 24 }}>
          <div className="lb-wrap" style={{ maxWidth: 820, textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 9, marginBottom: 18 }}>
              <span style={{ width: 22, height: 2, background: "var(--gold-500)", borderRadius: 2 }} />
              <span style={{ fontFamily: "var(--font-sans)", fontSize: 12.5, fontWeight: 600, letterSpacing: "1.6px", textTransform: "uppercase", color: "var(--gold-700)" }}>Published Pricing</span>
              <span style={{ width: 22, height: 2, background: "var(--gold-500)", borderRadius: 2 }} />
            </div>
            <h1 className="lb-display-lg" style={{ marginBottom: 18 }}>The cost is clear before you call.</h1>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.6, color: "var(--text-body)", maxWidth: 620, margin: "0 auto" }}>
              Our pricing is published because carriers should understand the cost of service before investing time in a conversation. These figures are the flat dispatch fee — operational support, representation, and partner access come with the relationship.
            </p>
            <div style={{ display: "flex", gap: 22, justifyContent: "center", marginTop: 24, flexWrap: "wrap" }}>
              {[["circle-check", "No setup fees"], ["circle-check", "No monthly minimums"], ["gift", "Free first ELD cycle or week"]].map(([ic, t], i) => (
                <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-sans)", fontSize: 14.5, fontWeight: 500, color: "var(--text-strong)" }}>
                  <Icon name={ic} size={17} color="var(--success)" /> {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* tiers — click/tap a card to flip it for a worked example */}
        <section style={{ background: "var(--surface-page)", paddingTop: 40, paddingBottom: "clamp(72px, 10vw, 128px)" }}>
          <div className="lb-wrap">
            <div className="lb-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "clamp(20px, 3vw, 32px)", alignItems: "stretch" }}>
              <FlipCard className="lb-flip-lift lb-flip-reserve" frontHint="Cost example" backHint="Back" label="Semi Trucks — flip for a worked example"
                front={<PricingCard name="Semi Trucks" rate="6%" badge="Most carriers" description="Dry van, reefer, flatbed, power only — one flat dispatch fee." features={["No setup fees", "No monthly minimums", "Broker communication handled for you", "Rate confirmations & paperwork coordinated", "Free first ELD cycle or week"]} onCta={() => navigate("contact", "onboard")} />}
                back={<ExampleBack title="On a $2,000 load at 6%" rows={[["Load pays", "$2,000"], ["Dispatch fee (6%)", "− $120"]]} emphasis={["You keep", "$1,880"]} note="Round numbers, for illustration. Your flat rate is confirmed at onboarding — published, with no setup fees." ctaLabel="Ring the LogiBell" onCta={() => navigate("contact", "onboard")} />}
              />
              <FlipCard className="lb-flip-lift lb-flip-reserve" frontHint="Cost example" backHint="Back" label="Box, Hotshot, Sprinter — flip for a worked example"
                front={<PricingCard name="Box / Hotshot / Sprinter" rate="6–8%" description="Based on equipment and service needs. You're told exactly where your rate lands at onboarding — not after." features={["No setup fees", "No monthly minimums", "More frequent dispatching & coordination", "Back-office support alongside the load", "After-hours communication when needed"]} onCta={() => navigate("contact", "onboard")} />}
                back={<ExampleBack title="On a $1,000 load at 7%" rows={[["Load pays", "$1,000"], ["Dispatch fee (7%, mid-range)", "− $70"]]} emphasis={["You keep", "$930"]} note="Example uses the middle of the 6–8% range. You're told exactly where your rate lands at onboarding — not after." ctaLabel="Ring the LogiBell" onCta={() => navigate("contact", "onboard")} />}
              />
              <FlipCard className="lb-flip-lift lb-flip-reserve" frontDark backDark frontHint="Cost example" backHint="Back" label="Trusted Partner — flip for how the rate compares"
                front={<PricingCard featured name="Trusted Partner" rate="Lower" rateUnit="than standard" badge="Higher tier" description="Every type of carrier can grow into a Trusted Partner. Earned through the relationship — not purchased at signup." features={["Preferred pricing below standard", "Weekly performance reporting", "Dedicated account management", "Priority load matching"]} ctaLabel="See how it's earned" onCta={() => navigate("pricing", "trusted-partner")} />}
                back={<ExampleBack dark title="Same $2,000 load, preferred rate" rows={[["Standard dispatch fee (6%)", "$120"], ["Trusted Partner fee", "Below $120"]]} emphasis={["You keep", "More per load"]} note="The exact preferred rate is set as the relationship grows — earned through sustained work together, never sold at signup." ctaLabel="See how it's earned" onCta={() => navigate("pricing", "trusted-partner")} />}
              />
            </div>
            {/* Conditional Carriers — secondary, by-quote tier. Deliberately not
                one of the three published cards, so the headline rates stay the
                anchor. Supportive framing; no vendor names, stats, or guarantees. */}
            <Card surface="white" radius="xl" pad="lg" style={{ marginTop: "clamp(20px, 3vw, 32px)", display: "flex", gap: 24, alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
              <div style={{ display: "flex", gap: 18, alignItems: "flex-start", maxWidth: 660 }}>
                <span style={{ width: 50, height: 50, borderRadius: "50%", background: "var(--navy-800)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                  <Icon name="shield-check" size={24} color="var(--gold-500)" />
                </span>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, flexWrap: "wrap" }}>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 600, color: "var(--text-heading)", margin: 0 }}>Conditional Carriers</h3>
                    <Badge tone="goldsoft" uppercase>Custom quote</Badge>
                  </div>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 14.5, lineHeight: 1.6, color: "var(--text-body)", margin: 0 }}>
                    If your authority carries added compliance or record flags, placing your trucks takes more legwork — and your custom rate includes us working with you to improve your standing over time. As your record strengthens, you can move down to our standard published pricing. The rate is quoted after a quick review and confirmed upfront — priced for the added effort while we build that foundation together.
                  </p>
                </div>
              </div>
              <Button variant="primary" size="md" iconRight={<Icon name="arrow-right" size={16} />} onClick={() => navigate("contact", "onboard")}>Talk to a dispatch specialist</Button>
            </Card>
            {/* why 6-8 note */}
            <Card surface="soft" radius="lg" pad="lg" style={{ marginTop: 24, display: "flex", gap: 16, alignItems: "flex-start" }}>
              <Icon name="info" size={22} color="var(--navy-700)" style={{ marginTop: 2, flex: "none" }} />
              <div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 600, color: "var(--text-heading)", margin: "0 0 6px" }}>Why the 6–8% range exists</h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 14.5, lineHeight: 1.6, color: "var(--text-body)", margin: 0 }}>
                  Box truck, hotshot, and sprinter operations generate lower gross revenue per load and require more frequent dispatching and coordination per dollar earned. The range reflects the real cost of the service. The carrier is told exactly where their rate lands at onboarding — not after.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* trusted partner comparison */}
        <section id="trusted-partner" style={{ background: "var(--navy-800)", paddingTop: "clamp(72px, 10vw, 128px)", paddingBottom: "clamp(72px, 10vw, 128px)", position: "relative", overflow: "hidden", scrollMarginTop: 128 }}>
          <NavyDrift variant={2} />
          <div className="lb-wrap" style={{ position: "relative" }}>
            <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto clamp(48px, 6vw, 80px)" }}>
              <Badge tone="gold" uppercase>Higher Tier — Earned, Not Purchased</Badge>
              <h2 className="lb-display-md" style={{ color: "#fff", margin: "18px 0 14px" }}>Grow into a Trusted Partner</h2>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.6, color: "var(--on-navy-soft)" }}>
                Long-term partners — semi or box/hotshot/sprinter — reach preferred pricing and expanded support. Reached by a sustained working relationship, consistent operation, and steady communication.
              </p>
            </div>
            <div style={{ maxWidth: 760, margin: "0 auto", background: "var(--navy-900)", border: "1px solid var(--navy-700)", borderRadius: "var(--radius-xl)", overflow: "hidden" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: "1px solid var(--navy-700)" }}>
                <div style={{ padding: "18px 24px", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, color: "var(--on-navy-soft)" }}>Standard</div>
                <div style={{ padding: "18px 24px", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, color: "var(--navy-900)", background: "var(--gold-500)", display: "flex", alignItems: "center", gap: 8 }}><Icon name="star" size={16} color="var(--navy-800)" /> Trusted Partner</div>
              </div>
              {compare.map((row, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: i < compare.length - 1 ? "1px solid var(--navy-700)" : "none" }}>
                  <div style={{ padding: "16px 24px", fontFamily: "var(--font-sans)", fontSize: 14.5, color: "var(--on-navy-soft)" }}>{row[0]}</div>
                  <div style={{ padding: "16px 24px", fontFamily: "var(--font-sans)", fontSize: 14.5, color: "#fff", fontWeight: 500, display: "flex", alignItems: "center", gap: 9, background: "rgba(255,203,31,0.06)" }}><Icon name="check" size={16} color="var(--gold-500)" />{row[1]}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "var(--surface-page)", paddingTop: "clamp(72px, 10vw, 128px)", paddingBottom: "clamp(72px, 10vw, 128px)" }}>
          <div className="lb-wrap" style={{ textAlign: "center" }}>
            <h2 className="lb-display-md" style={{ marginBottom: 14 }}>Know your rate before you call.</h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--text-body)", marginBottom: 26 }}>Ring the LogiBell and we'll get you onboarded.</p>
            <Button variant="primary" size="lg" iconLeft={<Icon name="bell" size={18} color="var(--gold-500)" />} onClick={() => navigate("contact", "onboard")}>Ring the LogiBell — Get Onboarded</Button>
          </div>
        </section>
      </div>
    );
  }

  window.LBPricing = { PricingPage };
})();
