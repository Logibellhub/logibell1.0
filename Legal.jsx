/* LogiBell — Privacy, Terms, and 404.
   PROVISIONAL: Privacy & Terms copy is placeholder pending legal review —
   confirm before launch (see PRE-LAUNCH note). A visible draft flag is shown. */
(function () {
  const { Button, Badge } = window.DS;
  const Icon = window.Icon;
  const { Eyebrow } = window.LBHome;

  function DraftFlag() {
    return (
      <div style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "var(--warning-soft)", color: "var(--warning)", border: "1px solid var(--warning)", borderRadius: "var(--radius-pill)", padding: "6px 14px", fontFamily: "var(--font-sans)", fontSize: 12.5, fontWeight: 600, marginBottom: 20 }}>
        <Icon name="triangle-alert" size={14} color="var(--warning)" />
        Provisional draft — pending legal review before launch
      </div>
    );
  }

  function LegalLayout({ title, updated, intro, sections }) {
    return (
      <section style={{ background: "var(--surface-page)", paddingTop: 56, paddingBottom: 96 }}>
        <div className="lb-wrap" style={{ maxWidth: 820 }}>
          <DraftFlag />
          <Eyebrow>Legal</Eyebrow>
          <h1 className="lb-display-lg" style={{ marginBottom: 12 }}>{title}</h1>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-muted)", marginBottom: 28 }}>Last updated: {updated}</p>
          {intro ? <p style={{ fontFamily: "var(--font-sans)", fontSize: 16.5, lineHeight: 1.65, color: "var(--text-body)", marginBottom: 36 }}>{intro}</p> : null}
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {sections.map((s, i) => (
              <div key={i}>
                <h2 className="lb-title-lg" style={{ marginBottom: 10 }}>{s.h}</h2>
                {s.p.map((para, j) => (
                  <p key={j} style={{ fontFamily: "var(--font-sans)", fontSize: 15.5, lineHeight: 1.68, color: "var(--text-body)", margin: j ? "12px 0 0" : 0 }}>{para}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  function PrivacyPage() {
    return (
      <LegalLayout
        title="Privacy Policy"
        updated="Provisional — TBD"
        intro="This policy describes how LogiBell collects, uses, and protects the information you share with us when you contact us or use our services. This is a provisional draft and will be finalized with counsel before launch."
        sections={[
          { h: "Information we collect", p: ["When you reach out through our onboarding form or contact us directly, we collect the details you provide — such as your name, company or MC name, phone number, email, and notes about your operation.", "We do not sell your information."] },
          { h: "How we use your information", p: ["We use your information solely to respond to your inquiry, walk you through onboarding, coordinate dispatch and operational support, and confirm your published rate. We do not use it for unrelated marketing without your consent."] },
          { h: "Sharing with partners", p: ["Where you ask us to connect you with vetted partners (for example, insurance or lease-on contacts), we share only what is needed to make that introduction. These are access and referral relationships — partners operate under their own terms and policies."] },
          { h: "Data retention & security", p: ["We retain your information only as long as needed to support our working relationship and meet our obligations. We take reasonable measures to protect it."] },
          { h: "Contact", p: ["Questions about this policy can be directed to info@logibell.com. (Email is provisional pending launch confirmation.)"] },
        ]}
      />
    );
  }

  function TermsPage() {
    return (
      <LegalLayout
        title="Terms of Service"
        updated="Provisional — TBD"
        intro="These terms govern your use of the LogiBell website and services. This is a provisional draft and will be finalized with counsel before launch."
        sections={[
          { h: "Our services", p: ["LogiBell provides carrier-focused operations support, starting with dispatch — including load sourcing, broker communication, paperwork coordination, and access to vetted partners. Dispatch pricing is published and confirmed at onboarding."] },
          { h: "No guarantees", p: ["LogiBell does not guarantee loads, broker acceptance, specific rates, savings, or outcomes. Support is structured to back your operation, but results depend on your operation, lanes, and market conditions."] },
          { h: "Partner access & referrals", p: ["Connections to insurance, lease-on, factoring, or compliance partners are access and referral relationships that may open up as our relationship develops. LogiBell does not hold your authority and does not operate as the carrier. Partners are independent and operate under their own agreements."] },
          { h: "Pricing", p: ["Dispatch is charged as a flat dispatch fee, published openly: Semi 6%, Box/Hotshot/Sprinter 6–8%, with no setup fees and no monthly minimums. Your exact rate is confirmed at onboarding."] },
          { h: "Changes", p: ["We may update these terms; material changes will be reflected on this page. Continued use of our services constitutes acceptance of the current terms."] },
        ]}
      />
    );
  }

  function NotFound({ navigate }) {
    return (
      <section style={{ background: "var(--surface-page)", minHeight: "60vh", display: "flex", alignItems: "center", paddingTop: 80, paddingBottom: 96 }}>
        <div className="lb-wrap" style={{ textAlign: "center", maxWidth: 560 }}>
          <img src="../../assets/logo/logibell-wordmark.png" alt="LogiBell" style={{ height: 40, width: "auto", margin: "0 auto 28px", display: "block" }} />
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 14, color: "var(--gold-700)", letterSpacing: "2px", marginBottom: 10 }}>404</div>
          <h1 className="lb-display-md" style={{ marginBottom: 14 }}>This route isn't on the board.</h1>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 16.5, lineHeight: 1.6, color: "var(--text-body)", marginBottom: 28 }}>
            The page you're looking for moved or never existed. Let's get you back on the road.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Button variant="primary" size="lg" iconLeft={<Icon name="home" size={17} />} onClick={() => navigate("home")}>Back to home</Button>
            <Button variant="secondary" size="lg" iconLeft={<Icon name="bell" size={17} />} onClick={() => navigate("contact", "onboard")}>Ring the LogiBell</Button>
          </div>
        </div>
      </section>
    );
  }

  window.LBLegal = { PrivacyPage, TermsPage, NotFound };
})();
