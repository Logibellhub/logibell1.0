/* LogiBell UI kit — primitive resolver.
   Prefers the compiled design-system bundle; falls back to compact local
   equivalents (same API) so the kit always renders. Consumers should use
   the real components from `components/` — these mirrors exist only to keep
   the kit self-contained. */
(function () {
  const NS = window.LogibellDesignSystem_20d6f4 || {};

  // ---- Fallback Button ----
  function FButton({ children, variant = "primary", size = "md", iconLeft, iconRight, full, disabled, onClick, type = "button", ...rest }) {
    const sizes = { sm: { p: "9px 16px", f: 14, h: 38 }, md: { p: "13px 22px", f: 15, h: 46 }, lg: { p: "16px 28px", f: 16, h: 54 } };
    const s = sizes[size] || sizes.md;
    const v = {
      primary: { background: "var(--navy-800)", color: "#fff", border: "1.5px solid transparent", boxShadow: "var(--shadow-sm)" },
      gold: { background: "var(--gold-500)", color: "var(--navy-800)", border: "1.5px solid transparent", boxShadow: "var(--shadow-sm)" },
      secondary: { background: "#fff", color: "var(--navy-800)", border: "1.5px solid var(--line-strong)" },
      "on-dark": { background: "var(--navy-700)", color: "#fff", border: "1.5px solid var(--navy-600)" },
      ghost: { background: "transparent", color: "var(--navy-800)", border: "1.5px solid transparent" },
      link: { background: "transparent", color: "var(--navy-800)", border: "none", height: "auto", padding: 0 },
    }[variant] || {};
    const [h, setH] = React.useState(false);
    const hov = !disabled && h ? (variant === "primary" ? { background: "var(--navy-700)", boxShadow: "0 8px 24px -12px rgba(255,203,31,0.5)" } : variant === "gold" ? { background: "var(--gold-400)" } : variant === "secondary" ? { background: "var(--mist-100)", borderColor: "var(--navy-800)" } : variant === "on-dark" ? { background: "var(--navy-600)" } : variant === "ghost" ? { background: "var(--mist-100)" } : {}) : {};
    return React.createElement("button", {
      type, onClick, disabled,
      onMouseEnter: () => setH(true), onMouseLeave: () => setH(false),
      style: {
        display: full ? "flex" : "inline-flex", width: full ? "100%" : "auto", alignItems: "center", justifyContent: "center", gap: 9,
        fontFamily: "var(--font-display)", fontWeight: 600, fontSize: s.f, lineHeight: 1, height: variant === "link" ? "auto" : s.h, padding: variant === "link" ? 0 : s.p,
        borderRadius: variant === "link" ? 0 : "var(--radius-md)", cursor: disabled ? "not-allowed" : "pointer", whiteSpace: "nowrap",
        transition: "all var(--dur-base) var(--ease-out)", transform: h && !disabled && variant !== "link" ? "translateY(-1px)" : "none",
        ...v, ...(disabled ? { background: "var(--mist-200)", color: "var(--text-faint)", borderColor: "transparent", boxShadow: "none" } : {}), ...hov,
      }, ...rest,
    }, iconLeft, children, iconRight);
  }

  // ---- Fallback Badge ----
  function FBadge({ children, tone = "soft", dot, uppercase }) {
    const t = {
      soft: ["var(--mist-200)", "var(--ink-700)", "var(--ink-500)"], navy: ["var(--navy-800)", "#fff", "var(--gold-500)"],
      gold: ["var(--gold-500)", "var(--navy-800)", "var(--navy-800)"], goldsoft: ["rgba(25,57,96,0.06)", "var(--navy-800)", "var(--navy-600)"],
      outline: ["transparent", "var(--navy-800)", "var(--navy-800)"], success: ["var(--success-soft)", "var(--green-600)", "var(--success)"], warning: ["var(--warning-soft)", "var(--warning)", "var(--warning)"],
    }[tone] || ["var(--mist-200)", "var(--ink-700)", "var(--ink-500)"];
    return React.createElement("span", {
      style: { display: "inline-flex", alignItems: "center", gap: 6, background: t[0], color: t[1], border: tone === "outline" ? "1px solid var(--line-strong)" : "1px solid transparent", fontFamily: "var(--font-sans)", fontSize: uppercase ? 11.5 : 13, fontWeight: 600, letterSpacing: uppercase ? "0.8px" : 0, textTransform: uppercase ? "uppercase" : "none", lineHeight: 1, padding: "5px 12px", borderRadius: "var(--radius-pill)", whiteSpace: "nowrap" },
    }, dot ? React.createElement("span", { style: { width: 7, height: 7, borderRadius: "50%", background: t[2], flex: "none" } }) : null, children);
  }

  // ---- Fallback Card ----
  function FCard({ children, surface = "white", pad = "lg", radius = "lg", interactive, bordered = true, style = {}, ...rest }) {
    const pads = { none: 0, sm: 16, md: 20, lg: 28, xl: 36 };
    const radii = { md: "var(--radius-md)", lg: "var(--radius-lg)", xl: "var(--radius-xl)", "2xl": "var(--radius-2xl)" };
    const surf = {
      white: ["var(--surface-card)", "var(--text-body)", "var(--hairline)"], soft: ["var(--surface-soft)", "var(--text-body)", "var(--hairline)"],
      dark: ["var(--surface-dark)", "var(--text-on-dark-soft)", "var(--hairline-on-dark)"], darker: ["var(--surface-darker)", "var(--text-on-dark-soft)", "var(--navy-700)"],
      gold: ["var(--gold-500)", "var(--navy-800)", "transparent"], goldsoft: ["var(--surface-soft)", "var(--text-body)", "var(--hairline)"],
    }[surface] || ["var(--surface-card)", "var(--text-body)", "var(--hairline)"];
    const [h, setH] = React.useState(false);
    return React.createElement("div", {
      onMouseEnter: () => interactive && setH(true), onMouseLeave: () => interactive && setH(false),
      style: { background: surf[0], color: surf[1], border: bordered ? `1px solid ${surf[2]}` : "1px solid transparent", borderRadius: radii[radius], padding: pads[pad], boxShadow: h ? "var(--shadow-lg)" : (surface === "white" ? "var(--shadow-sm)" : "none"), transform: h ? "translateY(-3px)" : "none", transition: "all var(--dur-base) var(--ease-out)", ...style }, ...rest,
    }, children);
  }

  // ---- Fallback Input ----
  function FInput({ label, hint, error, type = "text", multiline, rows = 4, required, value, onChange, placeholder, id, ...rest }) {
    const [f, setF] = React.useState(false);
    const fid = id || (label ? "lb-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
    const fs = { width: "100%", fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--ink-700)", background: "#fff", border: `1.5px solid ${error ? "var(--error)" : f ? "var(--navy-800)" : "var(--line-strong)"}`, borderRadius: "var(--radius-md)", padding: multiline ? "12px 14px" : "0 14px", height: multiline ? "auto" : 48, boxShadow: f ? "var(--focus-ring)" : "none", outline: "none", boxSizing: "border-box", transition: "all var(--dur-base) var(--ease-out)", resize: multiline ? "vertical" : undefined };
    const shared = { id: fid, value, onChange, placeholder, style: fs, onFocus: () => setF(true), onBlur: () => setF(false), ...rest };
    return React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 7 } },
      label ? React.createElement("label", { htmlFor: fid, style: { fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, color: "var(--ink-700)" } }, label, required ? React.createElement("span", { style: { color: "var(--error)", marginLeft: 3 } }, "*") : null) : null,
      multiline ? React.createElement("textarea", { rows, ...shared }) : React.createElement("input", { type, ...shared }),
      error ? React.createElement("span", { style: { fontSize: 12.5, color: "var(--error)", fontFamily: "var(--font-sans)" } }, error) : hint ? React.createElement("span", { style: { fontSize: 12.5, color: "var(--text-muted)", fontFamily: "var(--font-sans)" } }, hint) : null
    );
  }

  // ---- Fallback Tabs ----
  function FTabs({ tabs = [], value, defaultValue, onChange, style = {} }) {
    const [int, setInt] = React.useState(defaultValue ?? (tabs[0] && tabs[0].id));
    const active = value !== undefined ? value : int;
    return React.createElement("div", { role: "tablist", style: { display: "inline-flex", gap: 4, padding: 5, background: "var(--mist-100)", border: "1px solid var(--hairline)", borderRadius: "var(--radius-pill)", ...style } },
      tabs.map((t) => {
        const a = t.id === active;
        return React.createElement("button", { key: t.id, type: "button", role: "tab", "aria-selected": a, onClick: () => { if (value === undefined) setInt(t.id); onChange && onChange(t.id); }, style: { fontFamily: "var(--font-display)", fontSize: 14.5, fontWeight: 600, color: a ? "var(--navy-800)" : "var(--text-muted)", background: a ? "#fff" : "transparent", border: "none", borderRadius: "var(--radius-pill)", padding: "9px 18px", cursor: "pointer", boxShadow: a ? "var(--shadow-sm)" : "none", whiteSpace: "nowrap", transition: "all var(--dur-base) var(--ease-out)" } }, t.label);
      })
    );
  }

  // ---- Fallback PricingCard ----
  function FPricingCard({ name, rate, rateUnit = "flat dispatch fee", description, features = [], badge, featured, ctaLabel = "Ring the LogiBell", onCta }) {
    const dark = featured;
    const Check = () => React.createElement("svg", { viewBox: "0 0 24 24", width: 18, height: 18, fill: "none", stroke: dark ? "var(--gold-500)" : "var(--navy-800)", strokeWidth: 2.4, strokeLinecap: "round", strokeLinejoin: "round", style: { flex: "none", marginTop: 1 } }, React.createElement("path", { d: "M20 6 9 17l-5-5" }));
    const Btn = window.DS.Button;
    return React.createElement("div", { style: { display: "flex", flexDirection: "column", background: dark ? "var(--surface-dark)" : "var(--surface-card)", border: `1px solid ${dark ? "var(--navy-700)" : "var(--hairline)"}`, borderRadius: "var(--radius-xl)", padding: "32px 30px", boxShadow: dark ? "var(--shadow-lg)" : "var(--shadow-sm)", height: "100%" } },
      React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 } },
        React.createElement("h3", { style: { fontFamily: "var(--font-display)", fontSize: 21, fontWeight: 600, letterSpacing: "-0.2px", color: dark ? "#fff" : "var(--text-heading)", margin: 0 } }, name),
        badge ? React.createElement(window.DS.Badge, { tone: dark ? "gold" : "goldsoft", uppercase: true }, badge) : null),
      React.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: 8, marginTop: 12 } },
        React.createElement("span", { style: { fontFamily: "var(--font-display)", fontSize: 46, fontWeight: 700, letterSpacing: "-1px", lineHeight: 1, color: dark ? "var(--gold-500)" : "var(--navy-800)" } }, rate),
        React.createElement("span", { style: { fontFamily: "var(--font-sans)", fontSize: 14, color: dark ? "var(--on-navy-soft)" : "var(--text-muted)" } }, rateUnit)),
      description ? React.createElement("p", { style: { fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.55, color: dark ? "var(--on-navy-soft)" : "var(--text-body)", margin: "16px 0 0" } }, description) : null,
      React.createElement("div", { style: { height: 1, background: dark ? "var(--navy-700)" : "var(--hairline)", margin: "22px 0" } }),
      React.createElement("ul", { style: { listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12, flex: 1 } },
        features.map((ff, i) => React.createElement("li", { key: i, style: { display: "flex", gap: 10, fontFamily: "var(--font-sans)", fontSize: 14.5, lineHeight: 1.45, color: dark ? "#fff" : "var(--text-strong)" } }, React.createElement(Check), React.createElement("span", null, ff)))),
      React.createElement("div", { style: { marginTop: 28 } }, React.createElement(Btn, { variant: dark ? "gold" : "primary", full: true, size: "md", onClick: onCta }, ctaLabel))
    );
  }

  window.DS = {
    Button: NS.Button || FButton,
    Badge: NS.Badge || FBadge,
    Card: NS.Card || FCard,
    Input: NS.Input || FInput,
    Tabs: NS.Tabs || FTabs,
    PricingCard: NS.PricingCard || FPricingCard,
    usingBundle: !!NS.Button,
  };
})();
