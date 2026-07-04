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
        updated="June 15, 2026"
        intro="This policy describes how LogiBell collects, uses, and protects the information you share with us when you contact us or use our services."
        sections={[
          { h: "Information we collect", p: [
            "Information you give us: when you submit our onboarding or contact form, request a verification check, or reach us directly, we collect details such as your name, company or MC/DOT number, phone number, email, equipment and lane information, and any notes you share about your operation.",
            "Information collected automatically: like most websites, we collect basic technical data — IP address, browser and device type, and how you use the site — through cookies and similar analytics tools.",
            "Information from other sources: to run a LogiGuard verification or coordinate partner access, we may review information about brokers, carriers, or partners from public and third-party sources.",
          ] },
          { h: "How we use your information", p: [
            "We use your information to respond to inquiries, onboard you, coordinate dispatch and operational support, confirm your published rate, run verification checks, send service-related messages, keep the site secure, prevent fraud, improve our services, and meet legal obligations.",
            "We do not sell your personal information, and we do not use it for unrelated marketing without your consent.",
          ] },
          { h: "Cookies & analytics", p: ["We use cookies and analytics tools to keep the site working and understand how it is used. You can control cookies through your browser settings; disabling some may affect how the site functions."] },
          { h: "SMS / text messaging", p: [
            "By providing your mobile number and opting in, you consent to receive text messages from LogiBell LLC about onboarding, dispatch coordination, your loads, and account or service updates.",
            "Message frequency varies based on your activity. Message and data rates may apply. Reply STOP at any time to unsubscribe, or reply HELP for help; you can also reach us at info@logibell.com or (909) 277-7177.",
            "We do not sell, rent, or share your mobile phone number or your SMS opt-in consent with any third parties or affiliates for their marketing or promotional purposes. Your consent to receive text messages from LogiBell is never shared with third parties for marketing.",
          ] },
          { h: "How we share information", p: ["We share information only as needed: with service providers who help us operate (under contract), with vetted partners you ask us to connect you with (for example insurance, lease-on, factoring, or compliance — sharing only what the introduction requires), when required by law or to protect safety, and in connection with a business transfer. Partners are independent and operate under their own terms and policies."] },
          { h: "Data retention & security", p: [
            "We keep your information only as long as needed to support our working relationship and meet legal, tax, and accounting obligations, then delete or de-identify it.",
            "We use reasonable technical and organizational safeguards to protect your information. No method of transmission or storage is completely secure, so we cannot promise absolute security.",
          ] },
          { h: "Your privacy rights", p: ["Depending on your U.S. state of residence, you may have the right to access, correct, delete, or receive a copy of your personal information, and to opt out of certain processing. To make a request, contact us using the details below; we may need to verify your identity first."] },
          { h: "Children", p: ["Our services are intended for businesses and adults. We do not knowingly collect information from anyone under 18. If you believe a minor has provided us information, contact us and we will remove it."] },
          { h: "Changes & contact", p: ["We may update this policy from time to time; the date above will reflect any changes. Questions or requests can be directed to info@logibell.com or (909) 277-7177."] },
        ]}
      />
    );
  }

  function TermsPage() {
    return (
      <LegalLayout
        title="Terms of Service"
        updated="June 15, 2026"
        intro="These terms govern your use of the LogiBell website and services."
        sections={[
          { h: "Agreement to these terms", p: ["By using the LogiBell website or services, you agree to these terms. If you do not agree, please do not use them. These terms form an agreement between you (the carrier or visitor) and LogiBell LLC, referred to here as LogiBell."] },
          { h: "Our services", p: [
            "LogiBell provides carrier-focused operations support, starting with dispatch — load sourcing, broker communication, paperwork coordination, and access to vetted partners.",
            "LogiBell is not a freight broker, does not hold your operating authority, and does not operate as the carrier. You remain the motor carrier of record, responsible for your authority, your equipment, and the loads you accept.",
          ] },
          { h: "Fees & payment", p: [
            "Dispatch is charged as a flat dispatch fee, published openly: Semi 6%; Box, Hotshot, and Sprinter 6–8%; with no setup fees and no monthly minimums. Carriers with added compliance or record challenges (Conditional Carriers) are quoted a custom flat rate after a review.",
            "Your exact rate is confirmed at onboarding before any work begins. Fees are billed for the loads we dispatch, as described at onboarding.",
          ] },
          { h: "Ending the relationship", p: ["Either party may end the working relationship. Fees for dispatch and services already provided remain payable. Any specific notice period will be confirmed at onboarding."] },
          { h: "No guarantees", p: ["LogiBell does not guarantee loads, broker acceptance, specific rates, savings, or outcomes. Our support is structured to back your operation, but results depend on your operation, your lanes, and market conditions."] },
          { h: "Your responsibilities", p: ["You are responsible for maintaining valid operating authority and required insurance, providing accurate information, complying with FMCSA, DOT, and other applicable laws, maintaining your equipment, and using qualified drivers. You decide which loads to accept or decline and are responsible for safe, lawful operation."] },
          { h: "Partner access & referrals", p: ["Connections to insurance, lease-on, factoring, or compliance partners are access and referral relationships that may open up as our relationship develops. Partners are independent, operate under their own agreements, and are responsible for their own services. LogiBell does not control or guarantee partner outcomes."] },
          { h: "LogiGuard verification", p: ["LogiGuard works to confirm brokers, partners, and vendors and to reduce your exposure to fraud. It is not a guarantee against every bad actor, and final booking decisions remain yours."] },
          { h: "Website & content", p: ["The LogiBell name, logo, site content, and design are owned by LogiBell and may not be copied or reused without permission. You receive a limited right to use the site for its intended purpose."] },
          { h: "Disclaimers & limitation of liability", p: ["The website and services are provided on an as-is basis to the extent permitted by law. To the fullest extent the law allows, LogiBell is not liable for indirect, incidental, or consequential damages, or for losses arising from loads, brokers, partners, or market conditions outside our control."] },
          { h: "Indemnification", p: ["You agree to indemnify and hold LogiBell harmless from claims, damages, and costs arising out of your operation, your use of the services, or your violation of these terms or applicable law."] },
          { h: "Governing law & changes", p: ["These terms are governed by the laws of the State of California, without regard to conflict-of-law rules. We may update these terms; material changes will be posted on this page, and continued use of our services means you accept the current terms. Questions: info@logibell.com or (909) 277-7177."] },
        ]}
      />
    );
  }

  function NotFound({ navigate }) {
    return (
      <section style={{ background: "var(--surface-page)", minHeight: "60vh", display: "flex", alignItems: "center", paddingTop: 80, paddingBottom: 96 }}>
        <div className="lb-wrap" style={{ textAlign: "center", maxWidth: 560 }}>
          <img src="./assets/logo/logibell-wordmark.png" alt="LogiBell" style={{ height: 40, width: "auto", margin: "0 auto 28px", display: "block" }} />
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
