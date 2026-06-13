/* @ds-bundle: {"format":3,"namespace":"LogibellDesignSystem_20d6f4","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Tabs","sourcePath":"components/core/Tabs.jsx"},{"name":"PricingCard","sourcePath":"components/marketing/PricingCard.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"73f54f2b409e","components/core/Button.jsx":"d74da33622af","components/core/Card.jsx":"78d650f90326","components/core/Input.jsx":"1107a7210f78","components/core/Tabs.jsx":"72cf5b7e0a2f","components/marketing/PricingCard.jsx":"5112af5b61bb","ui_kits/website/App.jsx":"9f1cce6cae54","ui_kits/website/Chrome.jsx":"996b7a7ee90b","ui_kits/website/Contact.jsx":"930944b5753f","ui_kits/website/Extras.jsx":"35bc96ec9ccc","ui_kits/website/FlipCard.jsx":"8d036cc6f8e2","ui_kits/website/Home.jsx":"f4025125f97b","ui_kits/website/Home2.jsx":"d6c03ee78897","ui_kits/website/Legal.jsx":"b0cb674a86cd","ui_kits/website/LogiGuard.jsx":"22be7a024d9c","ui_kits/website/Pages.jsx":"8c4d80457d95","ui_kits/website/Pricing.jsx":"13958f48961a","ui_kits/website/ambient.jsx":"825b52013442","ui_kits/website/ds.jsx":"0b6aa2fc1b9e","ui_kits/website/icons.jsx":"0db675ffe745","ui_kits/website/lanes.js":"7368e699ce5a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LogibellDesignSystem_20d6f4 = window.LogibellDesignSystem_20d6f4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * LogiBell Badge — small status / category pill.
 * Tones map to the brand: navy (default), gold (highlight), soft (neutral),
 * plus success / warning for operational status (e.g. lane availability).
 */
function Badge({
  children,
  tone = "soft",
  dot = false,
  uppercase = false,
  ...rest
}) {
  const tones = {
    soft: {
      bg: "var(--mist-200)",
      fg: "var(--ink-700)",
      dot: "var(--ink-500)"
    },
    navy: {
      bg: "var(--navy-800)",
      fg: "var(--on-navy)",
      dot: "var(--gold-500)"
    },
    gold: {
      bg: "var(--gold-500)",
      fg: "var(--navy-800)",
      dot: "var(--navy-800)"
    },
    /* goldsoft: neutral navy-tinted label. Gold is reserved for active/fill
       states — passive category pills read quiet, not yellow. */
    goldsoft: {
      bg: "rgba(25,57,96,0.06)",
      fg: "var(--navy-800)",
      dot: "var(--navy-600)"
    },
    outline: {
      bg: "transparent",
      fg: "var(--navy-800)",
      dot: "var(--navy-800)",
      border: "var(--line-strong)"
    },
    success: {
      bg: "var(--success-soft)",
      fg: "var(--green-600)",
      dot: "var(--success)"
    },
    warning: {
      bg: "var(--warning-soft)",
      fg: "var(--warning)",
      dot: "var(--warning)"
    }
  };
  const t = tones[tone] || tones.soft;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      background: t.bg,
      color: t.fg,
      border: t.border ? `1px solid ${t.border}` : "1px solid transparent",
      fontFamily: "var(--font-sans)",
      fontSize: uppercase ? 11.5 : 13,
      fontWeight: 600,
      letterSpacing: uppercase ? "0.8px" : 0,
      textTransform: uppercase ? "uppercase" : "none",
      lineHeight: 1,
      padding: uppercase ? "5px 11px" : "5px 12px",
      borderRadius: "var(--radius-pill)",
      whiteSpace: "nowrap"
    }
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: t.dot,
      flex: "none"
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * LogiBell Button — the primary action control.
 * Navy is the trustworthy default; gold is reserved for high-emphasis
 * "Ring the LogiBell" moments. Ghost/link for low-emphasis actions.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  iconLeft = null,
  iconRight = null,
  full = false,
  disabled = false,
  onClick,
  type = "button",
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "9px 16px",
      fontSize: 14,
      height: 38,
      gap: 7
    },
    md: {
      padding: "13px 22px",
      fontSize: 15,
      height: 46,
      gap: 9
    },
    lg: {
      padding: "16px 28px",
      fontSize: 16,
      height: 54,
      gap: 10
    }
  };
  const s = sizes[size] || sizes.md;
  const base = {
    display: full ? "flex" : "inline-flex",
    width: full ? "100%" : "auto",
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: s.fontSize,
    lineHeight: 1,
    height: s.height,
    padding: s.padding,
    borderRadius: "var(--radius-md)",
    border: "1.5px solid transparent",
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
    whiteSpace: "nowrap",
    textDecoration: "none"
  };
  const variants = {
    primary: {
      background: "var(--navy-800)",
      color: "var(--on-primary)",
      boxShadow: "var(--shadow-sm)"
    },
    gold: {
      background: "var(--gold-500)",
      color: "var(--navy-800)",
      boxShadow: "var(--shadow-sm)"
    },
    secondary: {
      background: "var(--white)",
      color: "var(--navy-800)",
      borderColor: "var(--line-strong)"
    },
    "on-dark": {
      background: "var(--navy-700)",
      color: "var(--on-navy)",
      borderColor: "var(--navy-600)"
    },
    ghost: {
      background: "transparent",
      color: "var(--navy-800)"
    },
    link: {
      background: "transparent",
      color: "var(--navy-800)",
      height: "auto",
      padding: 0,
      borderRadius: 0
    }
  };
  const disabledStyle = disabled ? {
    background: "var(--primary-disabled)",
    color: "var(--text-faint)",
    borderColor: "transparent",
    boxShadow: "none"
  } : {};
  const style = {
    ...base,
    ...(variants[variant] || variants.primary),
    ...disabledStyle
  };
  function handleEnter(e) {
    if (disabled) return;
    const el = e.currentTarget;
    if (variant === "primary") {
      el.style.background = "var(--navy-700)";
      el.style.boxShadow = "0 8px 24px -12px rgba(255,203,31,0.5)";
    } else if (variant === "gold") {
      el.style.background = "var(--gold-400)";
      el.style.boxShadow = "0 8px 24px -12px rgba(255,203,31,0.5)";
    } else if (variant === "secondary") {
      el.style.borderColor = "var(--navy-800)";
      el.style.background = "var(--mist-100)";
    } else if (variant === "on-dark") el.style.background = "var(--navy-600)";else if (variant === "ghost") el.style.background = "var(--mist-100)";else if (variant === "link") el.style.color = "var(--navy-700)";
    if (variant !== "link") el.style.transform = "translateY(-1px)";
  }
  function handleLeave(e) {
    if (disabled) return;
    const el = e.currentTarget;
    const v = variants[variant] || variants.primary;
    el.style.background = v.background;
    el.style.borderColor = v.borderColor || "transparent";
    el.style.color = v.color;
    el.style.boxShadow = v.boxShadow || "none";
    el.style.transform = "translateY(0)";
  }
  function handleDown(e) {
    if (!disabled && variant !== "link") e.currentTarget.style.transform = "translateY(0) scale(0.985)";
  }
  function handleUp(e) {
    if (!disabled && variant !== "link") e.currentTarget.style.transform = "translateY(-1px)";
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    style: style,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: handleEnter,
    onMouseLeave: handleLeave,
    onMouseDown: handleDown,
    onMouseUp: handleUp
  }, rest), iconLeft ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex"
    }
  }, iconLeft) : null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex"
    }
  }, iconRight) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * LogiBell Card — the core content container.
 * `surface`: white (default), soft (mist), dark (navy band), gold (accent wash).
 * Restrained elevation; depth comes from surface contrast, not heavy shadow.
 */
function Card({
  children,
  surface = "white",
  pad = "lg",
  radius = "lg",
  interactive = false,
  bordered = true,
  style = {},
  ...rest
}) {
  const pads = {
    none: 0,
    sm: 16,
    md: 20,
    lg: 28,
    xl: 36
  };
  const radii = {
    md: "var(--radius-md)",
    lg: "var(--radius-lg)",
    xl: "var(--radius-xl)",
    "2xl": "var(--radius-2xl)"
  };
  const surfaces = {
    white: {
      background: "var(--surface-card)",
      color: "var(--text-body)",
      border: "var(--hairline)"
    },
    soft: {
      background: "var(--surface-soft)",
      color: "var(--text-body)",
      border: "var(--hairline)"
    },
    dark: {
      background: "var(--surface-dark)",
      color: "var(--text-on-dark-soft)",
      border: "var(--hairline-on-dark)"
    },
    darker: {
      background: "var(--surface-darker)",
      color: "var(--text-on-dark-soft)",
      border: "var(--navy-700)"
    },
    gold: {
      background: "var(--gold-500)",
      color: "var(--navy-800)",
      border: "transparent"
    },
    goldsoft: {
      background: "var(--surface-soft)",
      color: "var(--text-body)",
      border: "var(--hairline)"
    }
  };
  const s = surfaces[surface] || surfaces.white;
  const base = {
    background: s.background,
    color: s.color,
    border: bordered ? `1px solid ${s.border}` : "1px solid transparent",
    borderRadius: radii[radius] || radii.lg,
    padding: pads[pad] ?? pads.lg,
    boxShadow: surface === "white" ? "var(--shadow-sm)" : "none",
    transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)",
    ...style
  };
  function enter(e) {
    if (!interactive) return;
    e.currentTarget.style.transform = "translateY(-3px)";
    e.currentTarget.style.boxShadow = "var(--shadow-lg)";
    if (surface === "white") e.currentTarget.style.borderColor = "var(--line-strong)";
  }
  function leave(e) {
    if (!interactive) return;
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = surface === "white" ? "var(--shadow-sm)" : "none";
    e.currentTarget.style.borderColor = s.border;
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: base,
    onMouseEnter: enter,
    onMouseLeave: leave
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * LogiBell Input — text field for contact / onboarding forms.
 * Navy focus ring; hairline border; supports label, hint, error, and
 * textarea mode for the "Tell us about your operation" field.
 */
function Input({
  label,
  hint,
  error,
  type = "text",
  multiline = false,
  rows = 4,
  required = false,
  value,
  onChange,
  placeholder,
  id,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const fieldId = id || (label ? `lb-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  const fieldStyle = {
    width: "100%",
    fontFamily: "var(--font-sans)",
    fontSize: 16,
    lineHeight: 1.5,
    color: "var(--ink-700)",
    background: "var(--white)",
    border: `1.5px solid ${error ? "var(--error)" : focused ? "var(--navy-800)" : "var(--line-strong)"}`,
    borderRadius: "var(--radius-md)",
    padding: multiline ? "12px 14px" : "0 14px",
    height: multiline ? "auto" : 48,
    boxShadow: focused ? error ? "0 0 0 3px var(--error-soft)" : "var(--focus-ring)" : "none",
    outline: "none",
    transition: "border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
    resize: multiline ? "vertical" : undefined,
    fontFamily: "var(--font-sans)",
    boxSizing: "border-box"
  };
  const sharedProps = {
    id: fieldId,
    value,
    onChange,
    placeholder,
    style: fieldStyle,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    "aria-invalid": !!error,
    ...rest
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 7
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      fontWeight: 600,
      color: "var(--ink-700)"
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--error)",
      marginLeft: 3
    }
  }, "*") : null) : null, multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows
  }, sharedProps)) : /*#__PURE__*/React.createElement("input", _extends({
    type: type
  }, sharedProps)), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12.5,
      color: "var(--error)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12.5,
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Tabs.jsx
try { (() => {
/**
 * LogiBell Tabs — segmented filter used on service / pricing sections.
 * Active tab fills with mist + navy text and a gold underline accent.
 * Buttons are explicitly type="button" so the control is safe inside <form>
 * (a bare <button> defaults to type="submit" and would submit the form).
 */
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  style = {}
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? (tabs[0] && tabs[0].id));
  const active = value !== undefined ? value : internal;
  const refs = React.useRef([]);
  function select(id) {
    if (value === undefined) setInternal(id);
    onChange && onChange(id);
  }
  function onKeyDown(e, idx) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const dir = e.key === "ArrowRight" ? 1 : -1;
    const next = (idx + dir + tabs.length) % tabs.length;
    select(tabs[next].id);
    const el = refs.current[next];
    if (el) el.focus();
  }
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: "inline-flex",
      gap: 4,
      padding: 5,
      background: "var(--mist-100)",
      border: "1px solid var(--hairline)",
      borderRadius: "var(--radius-pill)",
      ...style
    }
  }, tabs.map((t, idx) => {
    const isActive = t.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      type: "button",
      role: "tab",
      "aria-selected": isActive,
      tabIndex: isActive ? 0 : -1,
      ref: el => {
        refs.current[idx] = el;
      },
      onClick: () => select(t.id),
      onKeyDown: e => onKeyDown(e, idx),
      style: {
        position: "relative",
        fontFamily: "var(--font-display)",
        fontSize: 14.5,
        fontWeight: 600,
        color: isActive ? "var(--navy-800)" : "var(--text-muted)",
        background: isActive ? "var(--white)" : "transparent",
        border: "none",
        borderRadius: "var(--radius-pill)",
        padding: "9px 18px",
        cursor: "pointer",
        boxShadow: isActive ? "var(--shadow-sm)" : "none",
        transition: "color var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)",
        whiteSpace: "nowrap"
      },
      onMouseEnter: e => {
        if (!isActive) e.currentTarget.style.color = "var(--navy-800)";
      },
      onMouseLeave: e => {
        if (!isActive) e.currentTarget.style.color = "var(--text-muted)";
      }
    }, t.label, t.count != null ? /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 7,
        fontFamily: "var(--font-mono)",
        fontSize: 12,
        color: isActive ? "var(--gold-700)" : "var(--text-faint)"
      }
    }, t.count) : null);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/marketing/PricingCard.jsx
try { (() => {
/**
 * LogiBell PricingCard — published-pricing tier.
 * `featured` flips the surface to navy (the dark surface IS the featured signal).
 * Built around the strategy's flat dispatch-fee model.
 */
function PricingCard({
  name,
  rate,
  rateUnit = "flat dispatch fee",
  description,
  features = [],
  badge,
  featured = false,
  ctaLabel = "Ring the LogiBell",
  onCta
}) {
  const dark = featured;
  const Check = () => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    fill: "none",
    stroke: dark ? "var(--gold-500)" : "var(--navy-800)",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flex: "none",
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      background: dark ? "var(--surface-dark)" : "var(--surface-card)",
      border: `1px solid ${dark ? "var(--navy-700)" : "var(--hairline)"}`,
      borderRadius: "var(--radius-xl)",
      padding: "32px 30px",
      boxShadow: dark ? "var(--shadow-lg)" : "var(--shadow-sm)",
      position: "relative",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 21,
      fontWeight: 600,
      letterSpacing: "-0.2px",
      color: dark ? "var(--on-navy)" : "var(--text-heading)",
      margin: 0
    }
  }, name), badge ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: dark ? "gold" : "goldsoft",
    uppercase: true
  }, badge) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 8,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 46,
      fontWeight: 700,
      letterSpacing: "-1px",
      lineHeight: 1,
      color: dark ? "var(--gold-500)" : "var(--navy-800)"
    }
  }, rate), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      color: dark ? "var(--on-navy-soft)" : "var(--text-muted)"
    }
  }, rateUnit)), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      lineHeight: 1.55,
      color: dark ? "var(--on-navy-soft)" : "var(--text-body)",
      margin: "16px 0 0"
    }
  }, description) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: dark ? "var(--navy-700)" : "var(--hairline)",
      margin: "22px 0"
    }
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      flex: 1
    }
  }, features.map((f, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      gap: 10,
      fontFamily: "var(--font-sans)",
      fontSize: 14.5,
      lineHeight: 1.45,
      color: dark ? "var(--on-navy)" : "var(--text-strong)"
    }
  }, /*#__PURE__*/React.createElement(Check, null), /*#__PURE__*/React.createElement("span", null, f)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: dark ? "gold" : "primary",
    full: true,
    size: "md",
    onClick: onCta
  }, ctaLabel)));
}
Object.assign(__ds_scope, { PricingCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/PricingCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
/* LogiBell — App shell & hash-based page router.
   Real routed pages (one URL each, browser back/forward, shareable, deep-link
   anchors) over a static deploy. One consistent nav + footer wraps every page. */
(function () {
  const {
    AnnouncementBar,
    TopNav,
    Footer
  } = window.LBChrome;
  const Icon = window.Icon;
  const {
    Hero,
    WhatIs,
    Services,
    ReferralBand
  } = window.LBHome;
  const {
    Different,
    WhoWeAre,
    NewAuthority,
    FinalCTA
  } = window.LBHome2;
  const {
    PricingPage
  } = window.LBPricing;
  const {
    ContactPage
  } = window.LBContact;
  const {
    ServicesPage,
    WhoWeArePage,
    NewAuthorityPage,
    PartnerPage
  } = window.LBPages;
  const {
    PrivacyPage,
    TermsPage,
    NotFound
  } = window.LBLegal;
  const {
    LogiGuardStrip
  } = window.LBGuard;
  const {
    FeedbackSection,
    FAQSection
  } = window.LBExtras;

  /* Per-page SEO metadata (title + description). Canonical/OG base lives in
     index.html; we update title + description + canonical path on navigation. */
  const SITE = "https://logibell.com"; // PROVISIONAL domain — confirm before launch
  const META = {
    home: {
      path: "/",
      title: "LogiBell — Carrier-Focused Operations Support",
      desc: "Carrier-focused operations support for carriers of every size — dispatch, broker communication, paperwork, and partner access. Published pricing. Your operation, fully backed."
    },
    services: {
      path: "/services",
      title: "Services — LogiBell",
      desc: "Dispatch & load sourcing, operations & back-office, and partner & growth support — plus LogiGuard, a free verification check on any broker, MC, or load."
    },
    pricing: {
      path: "/pricing",
      title: "Published Pricing — LogiBell",
      desc: "Published dispatch pricing: Semi 6%, Box/Hotshot/Sprinter 6–8%. No setup fees, no monthly minimums. Know your rate before you call."
    },
    authority: {
      path: "/new-authority",
      title: "Special Treatment Program for Newer Authorities — LogiBell",
      desc: "Authority age isn't the barrier. The same dispatch service with extra effort and established broker relationships, structured for newer authorities through their first year."
    },
    about: {
      path: "/who-we-are",
      title: "Who We Are — LogiBell",
      desc: "A carrier-focused operations team built for carriers of every size — from owner-operators to small and larger fleets — supporting the work behind the wheel."
    },
    partners: {
      path: "/partner-access",
      title: "Partner Access — LogiBell",
      desc: "Free, competitive insurance quotes through vetted partners, lease-on referrals, and factoring/compliance contacts that open up as the relationship develops."
    },
    contact: {
      path: "/contact",
      title: "Ring the LogiBell — Get Onboarded",
      desc: "Tell us about your operation and we'll get you set up. Published pricing, no setup fees, no monthly minimums."
    },
    privacy: {
      path: "/privacy",
      title: "Privacy Policy — LogiBell",
      desc: "How LogiBell collects, uses, and protects your information."
    },
    terms: {
      path: "/terms",
      title: "Terms of Service — LogiBell",
      desc: "The terms that govern your use of the LogiBell website and services."
    },
    notfound: {
      path: "/404",
      title: "Page not found — LogiBell",
      desc: "The page you're looking for moved or never existed."
    }
  };
  const PAGES = ["home", "services", "pricing", "authority", "about", "partners", "contact", "privacy", "terms"];

  // friendly URL slugs <-> internal page keys, so URLs read /new-authority etc.
  const KEY_TO_SLUG = {
    home: "",
    authority: "new-authority",
    about: "who-we-are",
    partners: "partner-access"
  };
  const SLUG_TO_KEY = {
    "": "home",
    "new-authority": "authority",
    "who-we-are": "about",
    "partner-access": "partners"
  };
  const slugFor = key => key in KEY_TO_SLUG ? KEY_TO_SLUG[key] : key;
  const keyFor = slug => slug in SLUG_TO_KEY ? SLUG_TO_KEY[slug] : slug;
  function parseHash() {
    const raw = (window.location.hash || "").replace(/^#\/?/, "");
    const [slug, anchor] = raw.split("/");
    const key = keyFor(slug || "");
    const valid = PAGES.includes(key) ? key : slug ? "notfound" : "home";
    return {
      page: valid,
      anchor: anchor || null
    };
  }
  function hashFor(key, anchor) {
    const slug = slugFor(key === "notfound" ? "404" : key);
    return "#/" + slug + (anchor ? (slug ? "/" : "") + anchor : "");
  }
  function setMetaTag(page) {
    const m = META[page] || META.notfound;
    document.title = m.title;
    const setTag = (sel, attr, val) => {
      const el = document.head.querySelector(sel);
      if (el) el.setAttribute(attr, val);
    };
    setTag('meta[name="description"]', "content", m.desc);
    setTag('link[rel="canonical"]', "href", SITE + m.path);
    setTag('meta[property="og:title"]', "content", m.title);
    setTag('meta[property="og:description"]', "content", m.desc);
    setTag('meta[property="og:url"]', "content", SITE + m.path);
    setTag('meta[name="twitter:title"]', "content", m.title);
    setTag('meta[name="twitter:description"]', "content", m.desc);
  }
  function App() {
    const init = parseHash();
    const [page, setPage] = React.useState(init.page);
    const [navTick, setNavTick] = React.useState(0);
    const scrollRef = React.useRef(null);
    const pendingAnchor = React.useRef(init.anchor || null);
    const scrollToAnchor = React.useCallback(anchor => {
      const root = scrollRef.current;
      if (!root) return;
      if (anchor) {
        const el = document.getElementById(anchor);
        if (el) {
          const top = el.getBoundingClientRect().top - root.getBoundingClientRect().top + root.scrollTop - 128;
          root.scrollTo({
            top,
            behavior: "smooth"
          });
          return;
        }
      }
      root.scrollTo({
        top: 0,
        behavior: "auto"
      });
    }, []);
    const navigate = React.useCallback((to, anchor) => {
      const target = PAGES.includes(to) ? to : "notfound";
      // Replay the brand intro film whenever the user returns Home via the logo.
      if (target === "home" && !anchor && typeof window.__lbPlayIntro === "function") {
        window.__lbPlayIntro();
      }
      pendingAnchor.current = anchor || null;
      const newHash = hashFor(target, anchor);
      if (window.location.hash !== newHash) {
        window.location.hash = newHash; // triggers hashchange -> setPage + scroll
      } else {
        setPage(target);
        setNavTick(t => t + 1); // same hash (e.g. anchor re-click): force a scroll
      }
    }, []);

    // react to hash changes (back/forward, manual edits, deep links)
    React.useEffect(() => {
      function onHash() {
        const {
          page: p,
          anchor
        } = parseHash();
        pendingAnchor.current = anchor;
        setPage(p);
        setNavTick(t => t + 1);
      }
      window.addEventListener("hashchange", onHash);
      window.__lbnav = navigate;
      return () => window.removeEventListener("hashchange", onHash);
    }, [navigate]);

    // meta updates follow the page key
    React.useEffect(() => {
      setMetaTag(page);
    }, [page]);

    // back-to-top button: reveal once the user scrolls roughly one screen down.
    // Uses an IntersectionObserver sentinel (robust across browsers / programmatic
    // scrolls) rather than a scroll listener.
    const [showTop, setShowTop] = React.useState(false);
    const topSentinel = React.useRef(null);
    React.useEffect(() => {
      const root = scrollRef.current;
      const sentinel = topSentinel.current;
      if (!root || !sentinel || typeof IntersectionObserver === "undefined") return;
      const io = new IntersectionObserver(entries => {
        setShowTop(!entries[0].isIntersecting);
      }, {
        root,
        threshold: 0
      });
      io.observe(sentinel);
      return () => io.disconnect();
    }, []);
    const scrollToTop = React.useCallback(() => {
      const root = scrollRef.current;
      if (!root) return;
      const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      root.scrollTo({
        top: 0,
        behavior: reduce ? "auto" : "smooth"
      });
    }, []);

    // scroll on every navigation (anchor or top) — fires even when page key is unchanged
    React.useEffect(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          scrollToAnchor(pendingAnchor.current);
          pendingAnchor.current = null;
        });
      });
    }, [navTick, scrollToAnchor]);

    // scroll-reveal: soft entrance (600ms, 24px rise, 80ms sibling stagger) for
    // section content. Transform/opacity only (no CLS); skipped entirely under
    // prefers-reduced-motion. Applied to direct children of each section wrap.
    React.useEffect(() => {
      if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const root = scrollRef.current;
      if (!root || typeof IntersectionObserver === "undefined") return;
      const io = new IntersectionObserver(entries => {
        entries.forEach(en => {
          if (en.isIntersecting) {
            en.target.classList.add("is-in");
            io.unobserve(en.target);
          }
        });
      }, {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.05
      });
      root.querySelectorAll("main section > .lb-wrap").forEach(wrap => {
        Array.from(wrap.children).forEach((el, i) => {
          if (el.dataset.rv || !el.offsetHeight) return; // skip handled + zero-height anchor markers
          el.dataset.rv = "1";
          el.classList.add("lb-reveal");
          el.style.setProperty("--rv-delay", Math.min(i, 4) * 80 + "ms");
          io.observe(el);
        });
      });
      return () => io.disconnect();
    }, [page, navTick]);
    function renderPage() {
      switch (page) {
        case "home":
          return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
            navigate: navigate
          }), /*#__PURE__*/React.createElement(WhatIs, null), /*#__PURE__*/React.createElement(Services, {
            navigate: navigate
          }), /*#__PURE__*/React.createElement(Different, null), /*#__PURE__*/React.createElement(WhoWeAre, {
            navigate: navigate
          }), /*#__PURE__*/React.createElement(NewAuthority, {
            navigate: navigate
          }), /*#__PURE__*/React.createElement(LogiGuardStrip, {
            navigate: navigate
          }), /*#__PURE__*/React.createElement(ReferralBand, {
            navigate: navigate
          }), /*#__PURE__*/React.createElement(FeedbackSection, null), /*#__PURE__*/React.createElement(FAQSection, {
            navigate: navigate
          }), /*#__PURE__*/React.createElement(FinalCTA, {
            navigate: navigate
          }));
        case "services":
          return /*#__PURE__*/React.createElement(ServicesPage, {
            navigate: navigate
          });
        case "pricing":
          return /*#__PURE__*/React.createElement(PricingPage, {
            navigate: navigate
          });
        case "authority":
          return /*#__PURE__*/React.createElement(NewAuthorityPage, {
            navigate: navigate
          });
        case "about":
          return /*#__PURE__*/React.createElement(WhoWeArePage, {
            navigate: navigate
          });
        case "partners":
          return /*#__PURE__*/React.createElement(PartnerPage, {
            navigate: navigate
          });
        case "contact":
          return /*#__PURE__*/React.createElement(ContactPage, {
            navigate: navigate
          });
        case "privacy":
          return /*#__PURE__*/React.createElement(PrivacyPage, {
            navigate: navigate
          });
        case "terms":
          return /*#__PURE__*/React.createElement(TermsPage, {
            navigate: navigate
          });
        default:
          return /*#__PURE__*/React.createElement(NotFound, {
            navigate: navigate
          });
      }
    }
    return /*#__PURE__*/React.createElement("div", {
      ref: scrollRef,
      id: "lb-scroll",
      style: {
        height: "100vh",
        overflowY: "auto",
        overflowX: "hidden",
        background: "var(--surface-page)",
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("div", {
      ref: topSentinel,
      "aria-hidden": "true",
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        width: 1,
        height: "85vh",
        pointerEvents: "none",
        opacity: 0
      }
    }), /*#__PURE__*/React.createElement(AnnouncementBar, null), /*#__PURE__*/React.createElement(TopNav, {
      page: page,
      navigate: navigate
    }), /*#__PURE__*/React.createElement("main", null, renderPage()), /*#__PURE__*/React.createElement(Footer, {
      navigate: navigate
    }), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "lb-back-top" + (showTop ? " is-on" : ""),
      onClick: scrollToTop,
      "aria-label": "Back to top",
      tabIndex: showTop ? 0 : -1
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-up-to-line",
      size: 22,
      stroke: 2.4
    }), /*#__PURE__*/React.createElement("span", {
      className: "lb-back-top-label"
    }, "Top")));
  }
  ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
/* LogiBell — site chrome: AnnouncementBar, TopNav (with Services dropdown), Footer.
   One consistent nav + footer is reused across every routed page. */
(function () {
  const {
    Button
  } = window.DS;
  const Icon = window.Icon;
  const LOGO = "../../assets/logo/logibell-wordmark.png";
  const LOGO_NAVY = "../../assets/logo/logibell-wordmark-onnavy.png";
  function AnnouncementBar() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--navy-900)",
        color: "var(--on-navy)",
        borderBottom: "1px solid var(--navy-700)",
        position: "sticky",
        top: 0,
        zIndex: 51
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "lb-wrap",
      style: {
        height: "var(--announce-height)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 18,
        fontFamily: "var(--font-sans)",
        fontSize: 13.5,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "lb-announce-label",
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        color: "var(--on-navy-soft)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "tag",
      size: 15,
      color: "var(--gold-500)"
    }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "#fff",
        fontWeight: 600
      }
    }, "Published dispatch pricing"))), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--on-navy-soft)"
      }
    }, "Semi\xA0", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "var(--gold-500)"
      }
    }, "6%"), "\xA0\xB7 Box / Hotshot\xA0", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "var(--gold-500)"
      }
    }, "6\u20138%")), /*#__PURE__*/React.createElement("span", {
      className: "lb-announce-detail",
      style: {
        color: "var(--on-navy-faint)",
        display: "inline-flex",
        alignItems: "center",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 14,
      color: "var(--success)"
    }), "No setup fees \xB7 No monthly minimums")));
  }

  /* Services dropdown — core flow in order (Dispatch → Operations → Partner &
     Growth → Special Treatment); LogiGuard rides along as an added feature. */
  const SERVICES_MENU = [{
    label: "Dispatch & Load Sourcing",
    desc: "Stay loaded and represented in the market.",
    icon: "route",
    page: "services",
    anchor: "dispatch"
  }, {
    label: "Operations & Back-Office",
    desc: "The admin work that keeps the operation organized.",
    icon: "clipboard-check",
    page: "services",
    anchor: "operations"
  }, {
    label: "Partner & Growth Support",
    desc: "Opportunities that open as the relationship develops.",
    icon: "trending-up",
    page: "services",
    anchor: "partner-growth"
  }, {
    label: "Special Treatment Program — Newer Authorities",
    desc: "Authority age isn't the barrier here.",
    icon: "rocket",
    page: "authority",
    feature: true
  }];
  const SERVICES_EXTRA = {
    label: "LogiGuard — free verification check",
    desc: "Verify any broker, MC, or load before you haul.",
    icon: "shield-check",
    page: "services",
    anchor: "logiguard"
  };
  const NAV = [{
    id: "services",
    label: "Services",
    page: "services",
    menu: SERVICES_MENU
  }, {
    id: "pricing",
    label: "Pricing",
    page: "pricing"
  }, {
    id: "about",
    label: "Who We Are",
    page: "about"
  }, {
    id: "partners",
    label: "Partner Access",
    page: "partners"
  }, {
    id: "feedback",
    label: "Feedback",
    page: "home",
    anchor: "feedback"
  }, {
    id: "contact",
    label: "Contact",
    page: "contact"
  }];
  function TopNav({
    page,
    navigate
  }) {
    const [scrolled, setScrolled] = React.useState(false);
    const [open, setOpen] = React.useState(false); // mobile sheet
    const [menuOpen, setMenuOpen] = React.useState(false); // desktop services dropdown
    const closeTimer = React.useRef(null);
    React.useEffect(() => {
      const el = document.getElementById("lb-scroll") || window;
      const onScroll = () => setScrolled((el.scrollTop || window.scrollY || 0) > 8);
      el.addEventListener("scroll", onScroll);
      return () => el.removeEventListener("scroll", onScroll);
    }, []);
    function openMenu() {
      clearTimeout(closeTimer.current);
      setMenuOpen(true);
    }
    function scheduleClose() {
      clearTimeout(closeTimer.current);
      closeTimer.current = setTimeout(() => setMenuOpen(false), 140);
    }
    function go(item, e) {
      if (e) e.preventDefault();
      setOpen(false);
      setMenuOpen(false);
      navigate(item.page, item.anchor);
    }
    return /*#__PURE__*/React.createElement("header", {
      style: {
        position: "sticky",
        top: "var(--announce-height)",
        zIndex: 50,
        background: scrolled ? "rgba(246,248,252,0.85)" : "var(--surface-page)",
        backdropFilter: scrolled ? "saturate(180%) blur(12px)" : "none",
        borderBottom: `1px solid ${scrolled ? "var(--hairline)" : "transparent"}`,
        transition: "background var(--dur-base), border-color var(--dur-base)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "lb-wrap",
      style: {
        height: "var(--nav-height)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 24
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#/",
      onClick: e => {
        e.preventDefault();
        navigate("home");
      },
      style: {
        display: "flex",
        alignItems: "center",
        padding: "4px 0"
      },
      "aria-label": "LogiBell home"
    }, /*#__PURE__*/React.createElement("img", {
      src: LOGO,
      alt: "LogiBell",
      style: {
        height: 42,
        width: "auto",
        display: "block"
      }
    })), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 4
      },
      className: "lb-desktop-nav"
    }, NAV.map(item => {
      const active = item.id !== "feedback" && (item.page === page || item.id === "services" && page === "authority");
      if (item.menu) {
        return /*#__PURE__*/React.createElement("div", {
          key: item.id,
          style: {
            position: "relative"
          },
          onMouseEnter: openMenu,
          onMouseLeave: scheduleClose
        }, /*#__PURE__*/React.createElement("a", {
          href: "#/services",
          onClick: e => go(item, e),
          style: {
            display: "inline-flex",
            alignItems: "center",
            gap: 5,
            fontFamily: "var(--font-sans)",
            fontSize: 15,
            fontWeight: 500,
            color: active ? "var(--navy-800)" : "var(--text-body)",
            padding: "8px 14px",
            borderRadius: "var(--radius-sm)",
            transition: "color var(--dur-base), background var(--dur-base)"
          },
          onMouseEnter: e => {
            e.currentTarget.style.color = "var(--navy-800)";
            e.currentTarget.style.background = "var(--mist-100)";
          },
          onMouseLeave: e => {
            e.currentTarget.style.color = active ? "var(--navy-800)" : "var(--text-body)";
            e.currentTarget.style.background = "transparent";
          }
        }, item.label, /*#__PURE__*/React.createElement(Icon, {
          name: "chevron-down",
          size: 15,
          style: {
            transition: "transform var(--dur-base)",
            transform: menuOpen ? "rotate(180deg)" : "none"
          }
        })), menuOpen ? /*#__PURE__*/React.createElement("div", {
          style: {
            position: "absolute",
            top: "calc(100% + 10px)",
            left: 0,
            width: "min(620px, calc(100vw - 48px))",
            background: "var(--white)",
            border: "1px solid var(--hairline)",
            borderRadius: "var(--radius-lg)",
            boxShadow: "var(--shadow-xl)",
            padding: 10,
            zIndex: 60
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 2
          }
        }, item.menu.map((m, i) => /*#__PURE__*/React.createElement("a", {
          key: i,
          href: "#/" + m.page,
          onClick: e => go(m, e),
          style: {
            display: "flex",
            gap: 12,
            alignItems: "flex-start",
            padding: "11px 12px",
            borderRadius: "var(--radius-md)",
            textDecoration: "none",
            transition: "background var(--dur-base)"
          },
          onMouseEnter: e => e.currentTarget.style.background = "var(--mist-100)",
          onMouseLeave: e => e.currentTarget.style.background = "transparent"
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: "var(--navy-800)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: "none",
            marginTop: 2
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: m.icon,
          size: 17,
          color: "var(--gold-500)"
        })), /*#__PURE__*/React.createElement("span", {
          style: {
            minWidth: 0,
            whiteSpace: "normal"
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            display: "block",
            fontFamily: "var(--font-display)",
            fontSize: 14,
            fontWeight: 600,
            color: "var(--text-heading)",
            lineHeight: 1.3,
            whiteSpace: "normal"
          }
        }, m.label), /*#__PURE__*/React.createElement("span", {
          style: {
            display: "block",
            fontFamily: "var(--font-sans)",
            fontSize: 12.5,
            color: "var(--text-muted)",
            lineHeight: 1.4,
            marginTop: 3,
            whiteSpace: "normal"
          }
        }, m.desc))))), /*#__PURE__*/React.createElement("a", {
          href: "#/" + SERVICES_EXTRA.page,
          onClick: e => go(SERVICES_EXTRA, e),
          style: {
            display: "flex",
            gap: 10,
            alignItems: "center",
            margin: "8px 2px 2px",
            padding: "10px 12px",
            borderRadius: "var(--radius-md)",
            textDecoration: "none",
            background: "var(--surface-soft)",
            border: "1px solid var(--hairline-soft)",
            transition: "background var(--dur-base)"
          },
          onMouseEnter: e => e.currentTarget.style.background = "var(--mist-100)",
          onMouseLeave: e => e.currentTarget.style.background = "var(--surface-soft)"
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            width: 28,
            height: 28,
            borderRadius: "50%",
            background: "var(--navy-800)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: "none"
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: SERVICES_EXTRA.icon,
          size: 14,
          color: "var(--gold-500)"
        })), /*#__PURE__*/React.createElement("span", {
          style: {
            flex: 1,
            minWidth: 0,
            fontFamily: "var(--font-sans)",
            fontSize: 13,
            fontWeight: 600,
            color: "var(--text-heading)",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis"
          }
        }, SERVICES_EXTRA.label), /*#__PURE__*/React.createElement("span", {
          style: {
            flex: "none",
            fontFamily: "var(--font-sans)",
            fontSize: 10.5,
            fontWeight: 700,
            letterSpacing: "0.8px",
            textTransform: "uppercase",
            color: "var(--gold-700)",
            background: "rgba(255,203,31,0.16)",
            borderRadius: "var(--radius-pill)",
            padding: "4px 9px"
          }
        }, "Added feature"))) : null);
      }
      return /*#__PURE__*/React.createElement("a", {
        key: item.id,
        href: "#/" + item.page,
        onClick: e => go(item, e),
        style: {
          fontFamily: "var(--font-sans)",
          fontSize: 15,
          fontWeight: 500,
          color: active ? "var(--navy-800)" : "var(--text-body)",
          padding: "8px 14px",
          borderRadius: "var(--radius-sm)",
          transition: "color var(--dur-base), background var(--dur-base)"
        },
        onMouseEnter: e => {
          e.currentTarget.style.color = "var(--navy-800)";
          e.currentTarget.style.background = "var(--mist-100)";
        },
        onMouseLeave: e => {
          e.currentTarget.style.color = active ? "var(--navy-800)" : "var(--text-body)";
          e.currentTarget.style.background = "transparent";
        }
      }, item.label);
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12
      },
      className: "lb-desktop-actions"
    }, /*#__PURE__*/React.createElement("a", {
      className: "lb-nav-phone",
      href: "tel:+18184811886",
      "aria-label": "Call LogiBell"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 15,
      color: "var(--gold-500)"
    }), " (818) 481-1886"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "bell",
        size: 16,
        color: "#FFCB1F",
        className: "lb-cta-bell-float"
      }),
      onClick: () => navigate("contact", "onboard")
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#F6F7F8"
      }
    }, "Ring the LogiBell"))), /*#__PURE__*/React.createElement("button", {
      className: "lb-burger",
      onClick: () => setOpen(o => !o),
      "aria-label": "Menu",
      style: {
        display: "none",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        color: "var(--navy-800)",
        padding: 8
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: open ? "x" : "menu",
      size: 26
    }))), open ? /*#__PURE__*/React.createElement("div", {
      className: "lb-mobile-sheet",
      style: {
        borderTop: "1px solid var(--hairline)",
        background: "var(--surface-page)",
        padding: "12px 20px 20px",
        maxHeight: "calc(100vh - var(--nav-height))",
        overflowY: "auto"
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#/services",
      onClick: e => go({
        page: "services"
      }, e),
      style: {
        display: "block",
        fontFamily: "var(--font-display)",
        fontSize: 19,
        fontWeight: 600,
        color: "var(--navy-800)",
        padding: "14px 0 8px"
      }
    }, "Services"), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingLeft: 4,
        marginBottom: 8
      }
    }, SERVICES_MENU.concat([SERVICES_EXTRA]).map((m, i) => /*#__PURE__*/React.createElement("a", {
      key: i,
      href: "#/" + m.page,
      onClick: e => go(m, e),
      style: {
        display: "flex",
        gap: 10,
        alignItems: "center",
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        fontWeight: 500,
        color: m.feature ? "var(--gold-700)" : "var(--text-body)",
        padding: "9px 0"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: m.icon,
      size: 17,
      color: m.feature ? "var(--gold-700)" : "var(--navy-700)"
    }), m.label))), NAV.filter(n => n.id !== "services").map(item => /*#__PURE__*/React.createElement("a", {
      key: item.id,
      href: "#/" + item.page,
      onClick: e => go(item, e),
      style: {
        display: "block",
        fontFamily: "var(--font-display)",
        fontSize: 19,
        fontWeight: 600,
        color: "var(--navy-800)",
        padding: "14px 0",
        borderTop: "1px solid var(--hairline-soft)"
      }
    }, item.label)), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16,
        display: "flex",
        flexDirection: "column",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      full: true,
      size: "md",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "bell",
        size: 16
      }),
      onClick: () => {
        setOpen(false);
        navigate("contact", "onboard");
      }
    }, "Ring the LogiBell"), /*#__PURE__*/React.createElement("a", {
      href: "tel:+18184811886",
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 9,
        fontFamily: "var(--font-sans)",
        fontSize: 15.5,
        fontWeight: 600,
        color: "var(--navy-800)",
        textDecoration: "none",
        padding: "12px 0",
        border: "1px solid var(--line)",
        borderRadius: "var(--radius-md)",
        background: "var(--white)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 16,
      color: "var(--gold-700)"
    }), " Call (818) 481-1886"))) : null);
  }

  /* Footer — every link routes to a real page (no dead preventDefault stubs). */
  const FOOT = {
    Services: [{
      label: "Dispatch & Load Sourcing",
      page: "services",
      anchor: "dispatch"
    }, {
      label: "Operations & Back-Office",
      page: "services",
      anchor: "operations"
    }, {
      label: "Partner & Growth Support",
      page: "services",
      anchor: "partner-growth"
    }, {
      label: "Published Pricing",
      page: "pricing"
    }],
    Company: [{
      label: "Who We Are",
      page: "about"
    }, {
      label: "Special Treatment Program",
      page: "authority"
    }, {
      label: "Partner Access",
      page: "partners"
    }, {
      label: "Contact",
      page: "contact"
    }],
    "Get Started": [{
      label: "Ring the LogiBell",
      page: "contact",
      anchor: "onboard"
    }, {
      label: "See Pricing",
      page: "pricing"
    }, {
      label: "Free LogiGuard Check",
      page: "services",
      anchor: "logiguard"
    }, {
      label: "Referral Program",
      page: "contact",
      anchor: "referral"
    }, {
      label: "Insurance & Lease-On",
      page: "partners"
    }]
  };
  function Footer({
    navigate
  }) {
    const link = l => e => {
      e.preventDefault();
      navigate(l.page, l.anchor);
    };
    return /*#__PURE__*/React.createElement("footer", {
      style: {
        background: "var(--navy-900)",
        color: "var(--on-navy-soft)",
        position: "relative",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo/logibell-mark.svg",
      alt: "",
      "aria-hidden": "true",
      style: {
        position: "absolute",
        right: -140,
        bottom: -200,
        width: 580,
        height: "auto",
        opacity: 0.025,
        pointerEvents: "none",
        userSelect: "none"
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "lb-wrap",
      style: {
        paddingTop: 64,
        paddingBottom: 40,
        position: "relative",
        zIndex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "lb-foot-grid",
      style: {
        display: "grid",
        gridTemplateColumns: "1.6fr 1fr 1fr 1fr",
        gap: 40
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
      href: "#/",
      onClick: e => {
        e.preventDefault();
        navigate("home");
      },
      style: {
        display: "inline-block"
      },
      "aria-label": "LogiBell home"
    }, /*#__PURE__*/React.createElement("img", {
      src: LOGO_NAVY,
      alt: "LogiBell",
      style: {
        height: 30,
        width: "auto",
        marginBottom: 18,
        display: "block"
      }
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 14.5,
        lineHeight: 1.6,
        color: "var(--on-navy-soft)",
        maxWidth: 320,
        margin: "0 0 20px"
      }
    }, "Carrier-focused operations support, starting with dispatch \u2014 built for carriers of every size, from owner-operators to small and larger fleets. Your operation, fully backed."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8,
        fontFamily: "var(--font-sans)",
        fontSize: 14
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "tel:+18184811886",
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 9,
        color: "var(--on-navy-soft)",
        textDecoration: "none"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 15,
      color: "var(--gold-500)"
    }), " (818) 481-1886"), /*#__PURE__*/React.createElement("a", {
      href: "mailto:info@logibell.com",
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 9,
        color: "var(--on-navy-soft)",
        textDecoration: "none"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: 15,
      color: "var(--gold-500)"
    }), " info@logibell.com"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 9
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin",
      size: 15,
      color: "var(--gold-500)"
    }), " Los Angeles, CA"))), Object.keys(FOOT).map(col => /*#__PURE__*/React.createElement("div", {
      key: col
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 13,
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "1px",
        color: "#fff",
        marginBottom: 16
      }
    }, col), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: "none",
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirection: "column",
        gap: 11
      }
    }, FOOT[col].map(l => /*#__PURE__*/React.createElement("li", {
      key: l.label
    }, /*#__PURE__*/React.createElement("a", {
      href: "#/" + l.page,
      onClick: link(l),
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        color: "var(--on-navy-soft)",
        textDecoration: "none",
        transition: "color var(--dur-base)"
      },
      onMouseEnter: e => e.currentTarget.style.color = "var(--gold-500)",
      onMouseLeave: e => e.currentTarget.style.color = "var(--on-navy-soft)"
    }, l.label))))))), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 1,
        background: "var(--navy-700)",
        margin: "40px 0 24px"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 16,
        flexWrap: "wrap",
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        color: "var(--on-navy-faint)"
      }
    }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 LogiBell. Carrier-focused operations support."), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#/privacy",
      onClick: e => {
        e.preventDefault();
        navigate("privacy");
      },
      style: {
        color: "var(--on-navy-faint)",
        textDecoration: "none"
      }
    }, "Privacy"), /*#__PURE__*/React.createElement("a", {
      href: "#/terms",
      onClick: e => {
        e.preventDefault();
        navigate("terms");
      },
      style: {
        color: "var(--on-navy-faint)",
        textDecoration: "none"
      }
    }, "Terms")))));
  }
  window.LBChrome = {
    AnnouncementBar,
    TopNav,
    Footer
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
/* LogiBell — Contact page.
   Two distinct intents on one page:
     • "Contact" (nav)        → lands at the top: general ways to reach the team.
     • "Ring the LogiBell"    → deep-links to #onboard: the get-started form.
   A referral block sits between them (#referral). */
(function () {
  const {
    Button,
    Card,
    Badge,
    Input,
    Tabs
  } = window.DS;
  const Icon = window.Icon;
  function ContactPage({
    navigate
  }) {
    const go = navigate || window.__lbnav || (() => {});
    const [equip, setEquip] = React.useState("semi");
    const [sent, setSent] = React.useState(false);
    const [form, setForm] = React.useState({
      name: "",
      company: "",
      phone: "",
      email: "",
      mc: "",
      notes: ""
    });
    const [errors, setErrors] = React.useState({});
    const set = k => e => {
      const v = e.target.value;
      setForm(f => ({
        ...f,
        [k]: v
      }));
      setErrors(er => er[k] ? {
        ...er,
        [k]: undefined
      } : er);
    };

    /* The confirmation state is ONLY reachable through this explicit, validated
       submit — never from change/click/keydown on a field. */
    function validate() {
      const errs = {};
      if (!form.name.trim()) errs.name = "Please enter your name.";
      if (!form.phone.trim()) errs.phone = "Please enter a phone number.";else if (!/^[\d\s()+.\-]{7,}$/.test(form.phone.trim())) errs.phone = "That phone number doesn't look right.";
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
      if (Object.keys(errs).length) {
        setErrors(errs);
        return;
      }
      /* PROVISIONAL: wire to real backend before launch. Default destination =
         Netlify Forms (name="onboarding"). Confirm destination + notification email. */
      setErrors({});
      setSent(true);
    }

    /* PROVISIONAL — confirm phone, email, address, hours before launch (PRE-LAUNCH.md) */
    const methods = [{
      ic: "phone",
      t: "Call us",
      v: "(818) 481-1886",
      href: "tel:+18184811886"
    }, {
      ic: "mail",
      t: "Email",
      v: "info@logibell.com",
      href: "mailto:info@logibell.com"
    }, {
      ic: "map-pin",
      t: "Office",
      v: "Los Angeles, CA",
      href: null
    }, {
      ic: "clock",
      t: "Hours",
      v: "Mon–Fri · after-hours when time-sensitive",
      href: null
    }];
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--surface-page)",
        paddingTop: 60,
        paddingBottom: 52
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "lb-wrap",
      style: {
        maxWidth: 980
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 9,
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 22,
        height: 2,
        background: "var(--gold-500)",
        borderRadius: 2
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 12.5,
        fontWeight: 600,
        letterSpacing: "1.6px",
        textTransform: "uppercase",
        color: "var(--gold-700)"
      }
    }, "Contact")), /*#__PURE__*/React.createElement("h1", {
      className: "lb-display-lg",
      style: {
        marginBottom: 16,
        maxWidth: 640
      }
    }, "Reach the LogiBell team."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 17,
        lineHeight: 1.6,
        color: "var(--text-body)",
        maxWidth: 600,
        marginBottom: 34
      }
    }, "Questions, partnerships, or want to talk through your operation? Here's how to reach us. Ready to get started? Ring the LogiBell to begin onboarding."), /*#__PURE__*/React.createElement("div", {
      className: "lb-3col",
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 16,
        marginBottom: 32
      }
    }, methods.map((m, i) => {
      const inner = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 44,
          height: 44,
          borderRadius: "50%",
          background: "var(--navy-800)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: "none",
          marginBottom: 14
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: m.ic,
        size: 20,
        color: "var(--gold-500)"
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: "var(--font-sans)",
          fontSize: 12.5,
          color: "var(--text-muted)",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.6px",
          marginBottom: 5
        }
      }, m.t), /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: "var(--font-display)",
          fontSize: 15.5,
          fontWeight: 600,
          color: "var(--text-heading)",
          lineHeight: 1.35
        }
      }, m.v));
      const cardStyle = {
        display: "block",
        padding: "20px",
        background: "var(--surface-card)",
        border: "1px solid var(--hairline)",
        borderRadius: "var(--radius-lg)",
        boxShadow: "var(--shadow-xs)",
        textDecoration: "none"
      };
      return m.href ? /*#__PURE__*/React.createElement("a", {
        key: i,
        href: m.href,
        style: cardStyle
      }, inner) : /*#__PURE__*/React.createElement("div", {
        key: i,
        style: cardStyle
      }, inner);
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 14,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "bell",
        size: 18,
        color: "rgb(255, 203, 31)"
      }),
      onClick: () => go("contact", "onboard")
    }, "Ring the LogiBell \u2014 start onboarding"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "lg",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 16
      }),
      onClick: () => go("pricing")
    }, "See pricing")))), /*#__PURE__*/React.createElement("section", {
      id: "referral",
      style: {
        background: "var(--surface-soft)",
        paddingTop: 56,
        paddingBottom: 56,
        scrollMarginTop: 128
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "lb-wrap",
      style: {
        maxWidth: 980
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 26,
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 20,
        alignItems: "center",
        maxWidth: 660
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 56,
        height: 56,
        borderRadius: "50%",
        background: "var(--navy-800)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "users",
      size: 26,
      color: "var(--gold-500)"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "goldsoft",
      uppercase: true
    }, "Referral Program")), /*#__PURE__*/React.createElement("h2", {
      className: "lb-title-lg",
      style: {
        marginBottom: 8
      }
    }, "Refer a carrier, get rewarded."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 15.5,
        lineHeight: 1.6,
        color: "var(--text-body)",
        margin: 0
      }
    }, "Know another carrier who could use LogiBell? Refer them \u2014 when they come on board, you're rewarded for the connection. Ask us how it works."))), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "md",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "phone",
        size: 16
      }),
      onClick: () => go("contact", "onboard")
    }, "Ask about the referral program")))), /*#__PURE__*/React.createElement("section", {
      id: "onboard",
      style: {
        background: "var(--surface-page)",
        paddingTop: "clamp(72px, 9vw, 112px)",
        paddingBottom: "clamp(72px, 10vw, 128px)",
        scrollMarginTop: 124
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "lb-wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "lb-contact-grid",
      style: {
        display: "grid",
        gridTemplateColumns: "0.85fr 1.15fr",
        gap: 48,
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 9,
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 22,
        height: 2,
        background: "var(--gold-500)",
        borderRadius: 2
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 12.5,
        fontWeight: 600,
        letterSpacing: "1.6px",
        textTransform: "uppercase",
        color: "var(--gold-700)"
      }
    }, "Get Onboarded")), /*#__PURE__*/React.createElement("h2", {
      className: "lb-display-md",
      style: {
        marginBottom: 18
      }
    }, "Ring the LogiBell."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 16.5,
        lineHeight: 1.6,
        color: "var(--text-body)",
        marginBottom: 28,
        maxWidth: 380
      }
    }, "Tell us about your operation and we'll get you set up. Your rate is confirmed at onboarding \u2014 published, with no setup fees and no monthly minimums."), /*#__PURE__*/React.createElement(Card, {
      surface: "soft",
      radius: "lg",
      pad: "md",
      style: {
        display: "flex",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "clock",
      size: 20,
      color: "var(--navy-700)",
      style: {
        flex: "none",
        marginTop: 1
      }
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 13.5,
        lineHeight: 1.55,
        color: "var(--text-body)",
        margin: 0
      }
    }, "After-hours communication is available for time-sensitive situations once you're onboarded."))), /*#__PURE__*/React.createElement(Card, {
      surface: "white",
      radius: "xl",
      pad: "xl",
      style: {
        boxShadow: "var(--shadow-md)"
      }
    }, sent ? /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        padding: "40px 20px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 64,
        height: 64,
        borderRadius: "50%",
        background: "var(--success-soft)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 32,
      color: "var(--success)"
    })), /*#__PURE__*/React.createElement("h2", {
      className: "lb-display-sm",
      style: {
        marginBottom: 10
      }
    }, "You've rung the LogiBell."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 15.5,
        color: "var(--text-body)",
        maxWidth: 360,
        margin: "0 auto 24px",
        lineHeight: 1.6
      }
    }, "Thanks, ", form.name || "carrier", ". We'll reach out shortly to walk you through onboarding and confirm your published rate."), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "md",
      onClick: () => setSent(false)
    }, "Submit another")) : /*#__PURE__*/React.createElement("form", {
      name: "onboarding",
      method: "POST",
      "data-netlify": "true",
      "netlify-honeypot": "bot-field",
      noValidate: true,
      onSubmit: handleSubmit
    }, /*#__PURE__*/React.createElement("input", {
      type: "hidden",
      name: "form-name",
      value: "onboarding"
    }), /*#__PURE__*/React.createElement("input", {
      type: "hidden",
      name: "equipment",
      value: equip
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        display: "none"
      }
    }, /*#__PURE__*/React.createElement("label", null, "Don't fill this out: ", /*#__PURE__*/React.createElement("input", {
      name: "bot-field"
    }))), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 22,
        fontWeight: 600,
        color: "var(--text-heading)",
        marginBottom: 6
      }
    }, "Start onboarding"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        color: "var(--text-muted)",
        marginBottom: 24
      }
    }, "We'll only use this to get you set up."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("label", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        fontWeight: 600,
        color: "var(--ink-700)",
        display: "block",
        marginBottom: 9
      }
    }, "Equipment type"), /*#__PURE__*/React.createElement(Tabs, {
      value: equip,
      onChange: setEquip,
      tabs: [{
        id: "semi",
        label: "Semi"
      }, {
        id: "box",
        label: "Box / Hotshot"
      }, {
        id: "sprinter",
        label: "Sprinter / Non-CDL"
      }]
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 16,
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Full name",
      name: "name",
      placeholder: "Jordan Carter",
      required: true,
      error: errors.name,
      value: form.name,
      onChange: set("name")
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Company / MC name",
      name: "company",
      placeholder: "Carter Freight LLC",
      value: form.company,
      onChange: set("company")
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 16,
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Phone",
      name: "phone",
      type: "tel",
      placeholder: "(000) 000-0000",
      required: true,
      error: errors.phone,
      value: form.phone,
      onChange: set("phone")
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "you@company.com",
      error: errors.email,
      value: form.email,
      onChange: set("email")
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "MC number (if active)",
      name: "mc",
      placeholder: "MC-000000",
      hint: "New authority? Leave blank \u2014 we support early-stage carriers too.",
      value: form.mc,
      onChange: set("mc")
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 24
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Tell us about your operation",
      name: "notes",
      multiline: true,
      rows: 4,
      placeholder: "Lanes you prefer, current setup, what you need help with\u2026",
      value: form.notes,
      onChange: set("notes")
    })), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      full: true,
      size: "lg",
      type: "submit",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "bell",
        size: 18,
        color: "rgb(255, 203, 31)"
      })
    }, "Ring the LogiBell"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 12.5,
        color: "var(--text-muted)",
        textAlign: "center",
        marginTop: 14,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 7
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "lock",
      size: 13,
      color: "var(--text-muted)"
    }), " Your details stay between us. No spam, no obligations.")))))));
  }
  window.LBContact = {
    ContactPage
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Extras.jsx
try { (() => {
/* LogiBell — Home page extras: Feedback (real reviews only) + FAQ accordion. */
(function () {
  const {
    Button,
    Card,
    Badge,
    Input,
    Tabs
  } = window.DS;
  const Icon = window.Icon;
  const {
    Section,
    Eyebrow
  } = window.LBHome;

  /* =================== FEEDBACK ===================
     REAL REVIEWS ONLY. Paste reviews below as they come in — each entry:
       { quote: "…", name: "First L.", company: "…" (optional), role: "owner-operator" | "driver" | "dispatcher" | "broker" }
     Reviews are moderated. */
  const REVIEWS = [{
    quote: "Thank you so much, Thomas, for your constant support and for always taking care of me while I travel from origin to destination. Your communication, attention, and help on the road make a real difference.",
    name: "Pedro",
    company: "Rosales Express",
    role: "driver"
  }];
  const ROLES = [{
    id: "carrier",
    label: "Carrier"
  }, {
    id: "driver",
    label: "Driver"
  }, {
    id: "owner-operator",
    label: "Owner-operator"
  }, {
    id: "dispatcher",
    label: "Dispatcher"
  }, {
    id: "broker",
    label: "Broker"
  }];
  /* The form keeps it simple: Carrier / Broker / Other (free text). */
  const FORM_ROLES = [{
    id: "carrier",
    label: "Carrier"
  }, {
    id: "broker",
    label: "Broker"
  }, {
    id: "other",
    label: "Other"
  }];
  const roleLabel = id => (ROLES.find(r => r.id === id) || {}).label || id;
  function FeedbackForm() {
    const [sent, setSent] = React.useState(false);
    const [role, setRole] = React.useState("carrier");
    const [customRole, setCustomRole] = React.useState("");
    const [form, setForm] = React.useState({
      name: "",
      text: ""
    });
    const [errors, setErrors] = React.useState({});
    const set = k => e => {
      const v = e.target.value;
      setForm(f => ({
        ...f,
        [k]: v
      }));
      setErrors(er => er[k] ? {
        ...er,
        [k]: undefined
      } : er);
    };
    function handleSubmit(e) {
      e.preventDefault();
      const submitter = e.nativeEvent && e.nativeEvent.submitter;
      if (submitter && submitter.getAttribute("type") !== "submit") return;
      const errs = {};
      if (!form.name.trim()) errs.name = "Please add your name.";
      if (!form.text.trim()) errs.text = "Tell us how it went — a sentence is plenty.";
      if (Object.keys(errs).length) {
        setErrors(errs);
        return;
      }
      /* PROVISIONAL: Netlify Forms (name="feedback") — confirm destination before launch. */
      setErrors({});
      setSent(true);
    }
    return /*#__PURE__*/React.createElement(Card, {
      surface: "white",
      radius: "xl",
      pad: "xl",
      style: {
        boxShadow: "var(--shadow-md)"
      }
    }, sent ? /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        padding: "28px 14px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 58,
        height: 58,
        borderRadius: "50%",
        background: "var(--success-soft)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 28,
      color: "var(--success)"
    })), /*#__PURE__*/React.createElement("h3", {
      className: "lb-display-sm",
      style: {
        marginBottom: 8
      }
    }, "Thank you."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        color: "var(--text-body)",
        maxWidth: 340,
        margin: "0 auto",
        lineHeight: 1.6
      }
    }, "Your feedback goes through moderation before it appears \u2014 we keep it genuine in both directions.")) : /*#__PURE__*/React.createElement("form", {
      name: "feedback",
      method: "POST",
      "data-netlify": "true",
      "netlify-honeypot": "bot-field",
      noValidate: true,
      onSubmit: handleSubmit
    }, /*#__PURE__*/React.createElement("input", {
      type: "hidden",
      name: "form-name",
      value: "feedback"
    }), /*#__PURE__*/React.createElement("input", {
      type: "hidden",
      name: "role",
      value: role === "other" ? customRole.trim() || "other" : role
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        display: "none"
      }
    }, /*#__PURE__*/React.createElement("label", null, "Don't fill this out: ", /*#__PURE__*/React.createElement("input", {
      name: "bot-field"
    }))), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 21,
        fontWeight: 600,
        color: "var(--text-heading)",
        marginBottom: 6
      }
    }, "Share your experience"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        color: "var(--text-muted)",
        marginBottom: 20
      }
    }, "Worked with us? We'd like to hear how it went."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("label", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        fontWeight: 600,
        color: "var(--ink-700)",
        display: "block",
        marginBottom: 9
      }
    }, "I am a\u2026"), /*#__PURE__*/React.createElement(Tabs, {
      value: role,
      onChange: setRole,
      tabs: FORM_ROLES
    }), role === "other" ? /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 10
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Your role",
      name: "role-other",
      placeholder: "Owner-operator, fleet manager, vendor\u2026",
      value: customRole,
      onChange: e => setCustomRole(e.target.value)
    })) : null), /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Name",
      name: "name",
      placeholder: "Jordan C.",
      required: true,
      error: errors.name,
      value: form.name,
      onChange: set("name")
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 20
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Your feedback",
      name: "text",
      multiline: true,
      rows: 4,
      placeholder: "How was working with LogiBell?",
      required: true,
      error: errors.text,
      value: form.text,
      onChange: set("text")
    })), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      full: true,
      size: "md",
      type: "submit"
    }, "Submit feedback"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 12.5,
        color: "var(--text-muted)",
        textAlign: "center",
        marginTop: 12
      }
    }, "Reviews are moderated before they appear, to keep feedback genuine.")));
  }
  function FeedbackSection() {
    const [filter, setFilter] = React.useState("all");
    const shown = filter === "all" ? REVIEWS : REVIEWS.filter(r => r.role === filter);
    // role chips only once there's something to filter: 2+ reviews across 2+ roles
    const presentRoles = ROLES.filter(r => REVIEWS.some(v => v.role === r.id));
    const showChips = REVIEWS.length > 1 && presentRoles.length > 1;
    return /*#__PURE__*/React.createElement(Section, {
      id: "feedback",
      bg: "var(--surface-soft)"
    }, /*#__PURE__*/React.createElement("div", {
      className: "lb-who-grid",
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 56,
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Feedback"), /*#__PURE__*/React.createElement("h2", {
      className: "lb-display-md",
      style: {
        marginBottom: 18
      }
    }, "What carriers say."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 16.5,
        lineHeight: 1.65,
        color: "var(--text-body)",
        maxWidth: 460,
        marginBottom: 14
      }
    }, "Real feedback from the people we work with \u2014 collected as we go, never invented, and moderated to keep it genuine."), REVIEWS.length === 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        lineHeight: 1.6,
        color: "var(--text-muted)",
        maxWidth: 480,
        display: "flex",
        gap: 8,
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "badge-check",
      size: 17,
      color: "var(--navy-700)",
      style: {
        marginTop: 1,
        flex: "none"
      }
    }), "As more reviews come in, they'll appear right here.")) : /*#__PURE__*/React.createElement(React.Fragment, null, showChips ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap",
        marginBottom: 24
      }
    }, [{
      id: "all",
      label: "All"
    }].concat(presentRoles).map(r => /*#__PURE__*/React.createElement("button", {
      key: r.id,
      type: "button",
      onClick: () => setFilter(r.id),
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 13.5,
        fontWeight: 600,
        padding: "7px 15px",
        borderRadius: "var(--radius-pill)",
        cursor: "pointer",
        border: "1px solid " + (filter === r.id ? "var(--navy-800)" : "var(--line)"),
        background: filter === r.id ? "var(--navy-800)" : "var(--white)",
        color: filter === r.id ? "#fff" : "var(--text-body)",
        transition: "background var(--dur-base), border-color var(--dur-base)"
      }
    }, r.label))) : null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 16
      }
    }, shown.map((r, i) => /*#__PURE__*/React.createElement(Card, {
      key: i,
      surface: "white",
      radius: "lg",
      pad: "lg"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "quote",
      size: 22,
      color: "var(--gold-500)"
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 15.5,
        lineHeight: 1.6,
        color: "var(--text-strong)",
        margin: "10px 0 14px"
      }
    }, r.quote), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 13.5,
        color: "var(--text-muted)"
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "var(--text-heading)",
        fontWeight: 600
      }
    }, r.name), r.company ? ", " + r.company : "", " \xB7 ", roleLabel(r.role))))), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        color: "var(--text-muted)",
        marginTop: 18,
        display: "flex",
        gap: 8,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "badge-check",
      size: 15,
      color: "var(--navy-700)"
    }), " Reviews are moderated to keep feedback genuine."))), /*#__PURE__*/React.createElement(FeedbackForm, null)));
  }

  /* =================== FAQ ===================
     Conservative answers, consistent with the site's tone — confident,
     no over-promising. Placed above the final CTA per the brand doc. */
  const FAQ_ITEMS = [{
    q: "What does LogiBell do?",
    a: "LogiBell is a carrier-focused operations support company. We start with dispatch — load sourcing and broker communication — and support the operation around it: paperwork coordination, issue resolution, and access to trusted partners."
  }, {
    q: "What does it cost?",
    a: "Pricing is published. Semi trucks are a 6% flat dispatch fee; box trucks, hotshots, and sprinters are 6–8% based on equipment and service needs. No setup fees and no monthly minimums — your exact rate is confirmed at onboarding."
  }, {
    q: "Do you work with new authorities?",
    a: "Yes — it's one of our core strengths. The Special Treatment Program gives newer authorities structured early-stage support: first-load strategy, broker-readiness guidance, rate education, compliance guidance, and insurance setup support during the first months on the road."
  }, {
    q: "How does LogiGuard work?",
    a: "LogiGuard is our verification practice. We work to confirm the brokers, partners, and vendors involved in a load — authority, MC number, and insurance status — and stay current on freight-fraud tactics. Anyone, client or not, can submit a broker, MC, or load for a free check and get a result by email."
  }, {
    q: "How do I get started?",
    a: "Ring the LogiBell to speak with a dispatch specialist, or schedule a call. Our published pricing means you know the cost before you reach out."
  }];
  function FAQItem({
    item,
    open,
    onToggle,
    idx
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        borderBottom: "1px solid var(--hairline)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-expanded": open,
      "aria-controls": "lb-faq-a-" + idx,
      onClick: onToggle,
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 18,
        background: "transparent",
        border: "none",
        cursor: "pointer",
        padding: "22px 4px",
        textAlign: "left"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 17.5,
        fontWeight: 600,
        color: open ? "var(--navy-800)" : "var(--text-heading)",
        lineHeight: 1.35
      }
    }, item.q), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 30,
        height: 30,
        borderRadius: "50%",
        background: open ? "var(--navy-800)" : "rgba(25,57,96,0.07)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: "none",
        transition: "background var(--dur-base)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-down",
      size: 17,
      color: open ? "var(--gold-500)" : "var(--navy-800)",
      style: {
        transition: "transform var(--dur-base)",
        transform: open ? "rotate(180deg)" : "none"
      }
    }))), /*#__PURE__*/React.createElement("div", {
      id: "lb-faq-a-" + idx,
      role: "region",
      style: {
        display: "grid",
        gridTemplateRows: open ? "1fr" : "0fr",
        transition: "grid-template-rows 260ms var(--ease-out)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 15.5,
        lineHeight: 1.65,
        color: "var(--text-body)",
        margin: "0 4px",
        paddingBottom: 24,
        maxWidth: 680
      }
    }, item.a))));
  }
  function FAQSection({
    navigate
  }) {
    const go = navigate || window.__lbnav || (() => {});
    const [open, setOpen] = React.useState(0);
    return /*#__PURE__*/React.createElement(Section, {
      id: "faq"
    }, /*#__PURE__*/React.createElement("div", {
      className: "lb-who-grid",
      style: {
        display: "grid",
        gridTemplateColumns: "0.8fr 1.2fr",
        gap: 56,
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "FAQ"), /*#__PURE__*/React.createElement("h2", {
      className: "lb-display-md",
      style: {
        marginBottom: 16
      }
    }, "Common questions."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 16,
        lineHeight: 1.6,
        color: "var(--text-body)",
        maxWidth: 380,
        marginBottom: 24
      }
    }, "Services, pricing, and how the relationship works. Anything else \u2014 ask us directly."), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "md",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "phone",
        size: 16
      }),
      onClick: () => go("contact")
    }, "Schedule a Call")), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: "1px solid var(--hairline)"
      }
    }, FAQ_ITEMS.map((item, i) => /*#__PURE__*/React.createElement(FAQItem, {
      key: i,
      item: item,
      idx: i,
      open: open === i,
      onToggle: () => setOpen(open === i ? -1 : i)
    })))));
  }
  window.LBExtras = {
    FeedbackSection,
    FAQSection,
    REVIEWS
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Extras.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/FlipCard.jsx
try { (() => {
/* LogiBell — FlipCard: click/keyboard-activated 3D Y-axis flip card.
   Canonical flip pattern shared by Services, Pricing, and Partner Access.
   · Both faces stack in one grid cell, so the container sizes to the taller
     face — no layout jump during the flip.
   · A persistent affordance pill (bottom-right) signals flippability:
     "Tap …" on the front, "← Back" on the back. Subtle by default, gold on
     hover/focus (gold = active). It one-time-wobbles on first scroll-in.
   · prefers-reduced-motion swaps the 3D flip for a cross-fade and disables
     the wobble (see the .lb-flip rules in index.html).
   · Clicks on interactive children (links, buttons) never flip.
   · The hidden face is aria-hidden + inert so SRs / tab order see one face. */
(function () {
  const Icon = window.Icon;
  const MARK = "../../assets/logo/logibell-mark.svg";
  function Aff({
    dark,
    label,
    back
  }) {
    return /*#__PURE__*/React.createElement("span", {
      className: "lb-flip-aff" + (dark ? " lb-flip-aff--dark" : ""),
      "aria-hidden": "true"
    }, back ? /*#__PURE__*/React.createElement("span", {
      className: "lb-aff-ic"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 13,
      stroke: 2.4
    })) : null, /*#__PURE__*/React.createElement("span", null, label), back ? null : /*#__PURE__*/React.createElement("span", {
      className: "lb-aff-ic"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "rotate-cw",
      size: 13,
      stroke: 2.4
    })));
  }
  function FlipCard({
    front,
    back,
    frontDark = false,
    backDark = false,
    label = "Flip card for details",
    frontHint = "Tap for details",
    backHint = "Back",
    style = {},
    className = ""
  }) {
    const [flipped, setFlipped] = React.useState(false);
    const last = React.useRef(0);
    const rootRef = React.useRef(null);
    const frontRef = React.useRef(null);
    const backRef = React.useRef(null);

    // keep the hidden face out of the tab order / accessibility tree
    React.useEffect(() => {
      if (frontRef.current) frontRef.current.inert = flipped;
      if (backRef.current) backRef.current.inert = !flipped;
    }, [flipped]);

    // one-time "wobble" nudge of the flip icon when the card scrolls into view
    React.useEffect(() => {
      const el = rootRef.current;
      if (!el || typeof IntersectionObserver === "undefined") return;
      if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const io = new IntersectionObserver(entries => {
        entries.forEach(en => {
          if (en.isIntersecting) {
            el.classList.add("lb-aff-nudge");
            setTimeout(() => el.classList.remove("lb-aff-nudge"), 800);
            io.unobserve(en.target);
          }
        });
      }, {
        threshold: 0.45
      });
      io.observe(el);
      return () => io.disconnect();
    }, []);
    function toggle() {
      const now = Date.now();
      if (now - last.current < 400) return; // ghost-click / double-tap guard (touch)
      last.current = now;
      setFlipped(f => !f);
    }
    function onClick(e) {
      // interactive children keep their own behavior — they never flip the card
      if (e.target.closest && e.target.closest("a, button, input, textarea, select, [data-no-flip]")) return;
      toggle();
    }
    function onKeyDown(e) {
      if (e.target !== e.currentTarget) return; // don't hijack inner controls
      if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
        e.preventDefault();
        toggle();
      }
    }
    return /*#__PURE__*/React.createElement("div", {
      ref: rootRef,
      className: "lb-flip" + (flipped ? " is-flipped" : "") + (className ? " " + className : ""),
      style: style,
      tabIndex: 0,
      role: "button",
      "aria-pressed": flipped,
      "aria-label": label,
      onClick: onClick,
      onKeyDown: onKeyDown
    }, /*#__PURE__*/React.createElement("div", {
      className: "lb-flip-inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "lb-flip-face lb-flip-front",
      ref: frontRef,
      "aria-hidden": flipped
    }, front, /*#__PURE__*/React.createElement(Aff, {
      dark: frontDark,
      label: frontHint
    })), /*#__PURE__*/React.createElement("div", {
      className: "lb-flip-face lb-flip-back",
      ref: backRef,
      "aria-hidden": !flipped
    }, back, /*#__PURE__*/React.createElement(Aff, {
      dark: backDark,
      label: backHint,
      back: true
    }))));
  }
  window.LBFlip = {
    FlipCard
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/FlipCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
/* LogiBell — Home page sections */
(function () {
  const {
    Button,
    Card,
    Badge
  } = window.DS;
  const Icon = window.Icon;
  const {
    FlipCard
  } = window.LBFlip;
  const {
    RouteMotif
  } = window.LBAmbient;

  /* Atmosphere pass: generous default section rhythm. Explicit pt/pb still
     override for intentionally tight bands. */
  const SECTION_PAD = "clamp(72px, 10vw, 128px)";
  const HEAD_GAP = "clamp(48px, 6vw, 80px)";
  const GRID_GAP = "clamp(20px, 3vw, 32px)";
  const Section = ({
    id,
    bg = "var(--surface-page)",
    pt = SECTION_PAD,
    pb = SECTION_PAD,
    children,
    style = {}
  }) => /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      background: bg,
      paddingTop: pt,
      paddingBottom: pb,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "lb-wrap"
  }, children));
  const Eyebrow = ({
    children,
    onDark
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 9,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 2,
      background: "var(--gold-500)",
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12.5,
      fontWeight: 600,
      letterSpacing: "1.6px",
      textTransform: "uppercase",
      color: onDark ? "var(--gold-400)" : "var(--gold-700)"
    }
  }, children));

  /* ---------- LOAD BOARD (hero visual) ----------
     Modern "live lane activity" board. Data comes from window.LB_LANES
     (see lanes.js) so the owner can update booked lanes weekly without
     touching layout. Anonymized lanes only — no names. */
  function LoadBoard() {
    const lanes = typeof window !== "undefined" && window.LB_LANES || [];
    const updated = typeof window !== "undefined" && window.LB_LANES_UPDATED || "Updated weekly";
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: "-26px -26px auto auto",
        width: 116,
        height: 116,
        background: "var(--white)",
        border: "1px solid var(--line)",
        borderRadius: "var(--radius-2xl)",
        boxShadow: "var(--shadow-md)",
        zIndex: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 14
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo/logibell-emblem.jpg",
      alt: "",
      "aria-hidden": "true",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "contain",
        display: "block"
      }
    })), /*#__PURE__*/React.createElement(Card, {
      surface: "dark",
      radius: "2xl",
      pad: "none",
      style: {
        position: "relative",
        zIndex: 1,
        overflow: "hidden",
        boxShadow: "var(--shadow-xl)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "20px 22px",
        borderBottom: "1px solid var(--navy-700)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        fontSize: 15.5,
        color: "#fff"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "radio",
      size: 17,
      color: "var(--gold-500)"
    }), " Lane activity"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        fontFamily: "var(--font-sans)",
        fontSize: 12.5,
        fontWeight: 600,
        color: "var(--success)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "lb-live-dot",
      style: {
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: "var(--success)",
        display: "inline-block"
      }
    }), " On the road")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "2fr 0.82fr 0.45fr 0.7fr",
        gap: 10,
        padding: "11px 20px",
        background: "var(--navy-950)",
        borderBottom: "1px solid var(--navy-700)",
        fontFamily: "var(--font-mono)",
        fontSize: 10.5,
        letterSpacing: "1px",
        textTransform: "uppercase",
        color: "var(--on-navy-faint)"
      }
    }, /*#__PURE__*/React.createElement("span", null, "Lane"), /*#__PURE__*/React.createElement("span", null, "Equipment"), /*#__PURE__*/React.createElement("span", null, "Mode"), /*#__PURE__*/React.createElement("span", {
      style: {
        textAlign: "right"
      }
    }, "Rate")), /*#__PURE__*/React.createElement("div", null, lanes.length === 0 ? /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "34px 22px",
        textAlign: "center",
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        color: "var(--on-navy-soft)"
      }
    }, "Recent lanes \u2014 updated weekly.") : lanes.map((l, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "lb-lane-row",
      style: {
        display: "grid",
        gridTemplateColumns: "2fr 0.82fr 0.45fr 0.7fr",
        gap: 10,
        alignItems: "center",
        padding: "14px 20px",
        borderBottom: i < lanes.length - 1 ? "1px solid var(--navy-800)" : "none",
        animationDelay: i * 90 + "ms"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        fontWeight: 500,
        color: "#fff",
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, l.from), /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 13,
      color: "var(--gold-500)",
      style: {
        flex: "none"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, l.to)), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-block",
        fontFamily: "var(--font-sans)",
        fontSize: 11.5,
        fontWeight: 600,
        color: "var(--on-navy)",
        background: "var(--navy-700)",
        border: "1px solid var(--navy-600)",
        borderRadius: "var(--radius-pill)",
        padding: "3px 10px",
        whiteSpace: "nowrap"
      }
    }, l.equipment)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 12,
        color: "var(--on-navy-soft)"
      }
    }, l.mode), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 14,
        fontWeight: 600,
        color: "var(--gold-500)",
        textAlign: "right"
      }
    }, l.rate)))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "15px 22px",
        borderTop: "1px solid var(--navy-700)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        background: "var(--navy-950)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 12.5,
        color: "var(--on-navy-faint)"
      }
    }, updated), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 13.5,
        color: "var(--gold-500)",
        fontWeight: 600
      }
    }, "Flat fee \xB7 Semi 6% \xB7 Box 6\u20138%"))));
  }

  /* ---------- HERO ---------- */
  function Hero({
    navigate
  }) {
    return /*#__PURE__*/React.createElement(Section, {
      pt: 76,
      pb: 88,
      style: {
        position: "relative",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement(RouteMotif, {
      corner: "br"
    }), /*#__PURE__*/React.createElement("div", {
      className: "lb-hero-grid",
      style: {
        display: "grid",
        gridTemplateColumns: "1.05fr 0.95fr",
        gap: 64,
        alignItems: "center",
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Carrier-Focused Operations"), /*#__PURE__*/React.createElement("h1", {
      className: "lb-display-xl",
      style: {
        marginBottom: 22
      }
    }, "Your Operation.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--navy-700)"
      }
    }, "Fully Backed.")), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 19,
        lineHeight: 1.55,
        color: "var(--text-strong)",
        maxWidth: 520,
        marginBottom: 14,
        fontWeight: 500
      }
    }, "Dispatch is the entry point; operational support builds the business."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 16.5,
        lineHeight: 1.6,
        color: "var(--text-body)",
        maxWidth: 520,
        marginBottom: 30
      }
    }, "We handle the administrative work behind every load \u2014 broker communication, paperwork, rate confirmations \u2014 and connect you to a vetted partner network as your operation grows. Stay as hands-on as you want: we carry as much of the business side as you'd like, and you stay in control of your operation."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 14,
        flexWrap: "wrap",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "bell",
        size: 18,
        color: "rgb(255, 203, 31)"
      }),
      onClick: () => navigate("contact", "onboard")
    }, "Ring the LogiBell \u2014 Get Onboarded"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "lg",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 16
      }),
      onClick: () => navigate("pricing")
    }, "See our pricing"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "lg",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "phone",
        size: 17
      }),
      onClick: () => navigate("contact")
    }, "Schedule a Call")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 22,
        flexWrap: "wrap",
        alignItems: "center",
        marginTop: 18
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 13.5,
        color: "var(--text-muted)",
        margin: 0,
        display: "inline-flex",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "circle-check",
      size: 15,
      color: "var(--success)"
    }), " Our pricing is published, so you know the cost before you call."), /*#__PURE__*/React.createElement("a", {
      href: "tel:+18184811886",
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 13.5,
        fontWeight: 600,
        color: "var(--navy-800)",
        textDecoration: "none",
        display: "inline-flex",
        alignItems: "center",
        gap: 7
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 14,
      color: "var(--gold-700)"
    }), " (818) 481-1886"))), /*#__PURE__*/React.createElement(LoadBoard, null)));
  }

  /* ---------- WHAT LOGIBELL IS ---------- */
  function WhatIs() {
    return /*#__PURE__*/React.createElement(Section, {
      bg: "var(--surface-soft)",
      style: {
        position: "relative",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement(RouteMotif, {
      corner: "tl",
      width: 380
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 880,
        margin: "0 auto",
        textAlign: "center",
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, null, "What LogiBell Is"), /*#__PURE__*/React.createElement("p", {
      className: "lb-display-md",
      style: {
        color: "var(--text-heading)",
        lineHeight: 1.3,
        letterSpacing: "-0.5px"
      }
    }, "LogiBell is a carrier-focused operations support company helping carriers of every size \u2014 from owner-operators to small and larger fleets \u2014 with ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--navy-700)",
        borderBottom: "3px solid var(--gold-500)"
      }
    }, "dispatch"), ", broker communication, paperwork coordination, and partner access."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 17,
        lineHeight: 1.6,
        color: "var(--text-body)",
        marginTop: 26,
        maxWidth: 640,
        marginLeft: "auto",
        marginRight: "auto"
      }
    }, "Dispatch starts the relationship. Operational support builds the business.")));
  }

  /* ---------- SERVICE CATEGORIES ----------
     Single source of truth for the three categories. The Home preview shows a
     trimmed 3-up grid; the Services page renders full stacked detail sections.
     Anchor ids (dispatch / operations / partner-growth) are the deep-link
     targets used by the nav dropdown and footer. */
  const SERVICE_CATS = [{
    icon: "route",
    tag: "A",
    anchor: "dispatch",
    title: "Dispatch & Load Sourcing",
    promise: "Where the relationship starts.",
    blurb: "We keep carriers loaded and represented in the market — the entry point every other service builds on.",
    points: ["Load sourcing & lane matching to your equipment", "Lane planning and market guidance", "Broker communication on your behalf", "Rate-discussion support during booking", "Access to broker relationships and off-board opportunities that may not be on public boards"]
  }, {
    icon: "clipboard-check",
    tag: "B",
    anchor: "operations",
    title: "Operations & Back-Office",
    promise: "The work that keeps the operation organized after the load is booked.",
    blurb: "Paperwork and coordination handled alongside the load — not left for later.",
    points: ["Rate confirmations & document handling", "POD follow-up and paperwork coordination", "Appointment and scheduling details", "Help resolving detention, lumper fees, and unexpected issues", "After-hours communication when needed", "Basic performance reporting"]
  }, {
    icon: "trending-up",
    tag: "C",
    anchor: "partner-growth",
    title: "Partner & Growth Support",
    promise: "Opportunities that open as the relationship develops — not standard day-one features.",
    blurb: "Access and referrals that grow with the working relationship.",
    points: ["Early-stage MC guidance & broker-readiness", "Free, competitive insurance quotes through vetted partners", "Lease-on referrals for carriers without an active MC", "Factoring & compliance access as the network expands"]
  }];

  /* Home preview — flip cards: front is the trimmed summary, back is the full
     "What this includes" list. Click/Enter/Space flips; links inside don't. */
  function ServiceGrid({
    navigate
  }) {
    const go = navigate || window.__lbnav || (() => {});
    const linkBtn = {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontFamily: "var(--font-display)",
      fontSize: 14,
      fontWeight: 600,
      background: "transparent",
      border: "none",
      padding: 0,
      cursor: "pointer"
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "lb-3col",
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: GRID_GAP
      }
    }, SERVICE_CATS.map(c => /*#__PURE__*/React.createElement(FlipCard, {
      key: c.tag,
      className: "lb-flip-lift",
      backDark: true,
      label: c.title + " — flip for everything included",
      frontHint: "What's included",
      backHint: "Back",
      front: /*#__PURE__*/React.createElement(Card, {
        surface: "white",
        pad: "lg",
        radius: "xl",
        style: {
          display: "flex",
          flexDirection: "column",
          height: "100%"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 16
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 50,
          height: 50,
          borderRadius: "50%",
          background: "var(--navy-800)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: c.icon,
        size: 24,
        color: "var(--gold-500)"
      })), /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: "var(--font-display)",
          fontSize: 13,
          fontWeight: 700,
          color: "var(--navy-800)",
          background: "rgba(25,57,96,0.08)",
          width: 26,
          height: 26,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }
      }, c.tag)), /*#__PURE__*/React.createElement("h3", {
        className: "lb-title-lg",
        style: {
          marginBottom: 6
        }
      }, c.title), /*#__PURE__*/React.createElement("p", {
        style: {
          fontFamily: "var(--font-sans)",
          fontSize: 14,
          fontWeight: 600,
          color: "var(--navy-700)",
          marginBottom: 14
        }
      }, c.promise), /*#__PURE__*/React.createElement("ul", {
        style: {
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          marginBottom: 16
        }
      }, c.points.slice(0, 3).map((p, i) => /*#__PURE__*/React.createElement("li", {
        key: i,
        style: {
          display: "flex",
          gap: 10,
          fontFamily: "var(--font-sans)",
          fontSize: 14,
          lineHeight: 1.45,
          color: "var(--text-strong)"
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "check",
        size: 16,
        color: "var(--navy-700)",
        style: {
          marginTop: 1,
          flex: "none"
        }
      }), /*#__PURE__*/React.createElement("span", null, p))))),
      back: /*#__PURE__*/React.createElement(Card, {
        surface: "dark",
        pad: "lg",
        radius: "xl",
        style: {
          display: "flex",
          flexDirection: "column",
          height: "100%"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: "var(--font-sans)",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "1.4px",
          textTransform: "uppercase",
          color: "var(--gold-400)",
          marginBottom: 8
        }
      }, "What this includes"), /*#__PURE__*/React.createElement("div", {
        style: {
          width: 40,
          height: 2,
          background: "var(--gold-500)",
          borderRadius: 2,
          marginBottom: 18
        }
      }), /*#__PURE__*/React.createElement("ul", {
        style: {
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "flex",
          flexDirection: "column",
          gap: 12,
          marginBottom: 18
        }
      }, c.points.map((p, i) => /*#__PURE__*/React.createElement("li", {
        key: i,
        style: {
          display: "flex",
          gap: 10,
          fontFamily: "var(--font-sans)",
          fontSize: 13.5,
          lineHeight: 1.45,
          color: "#fff"
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "circle-check",
        size: 16,
        color: "var(--gold-500)",
        style: {
          marginTop: 1,
          flex: "none"
        }
      }), /*#__PURE__*/React.createElement("span", null, p)))), /*#__PURE__*/React.createElement("button", {
        type: "button",
        onClick: () => go("services", c.anchor),
        style: {
          ...linkBtn,
          marginTop: "auto",
          marginBottom: 4,
          color: "var(--gold-500)"
        }
      }, "View full details ", /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 15
      })))
    })));
  }

  /* Condensed services block for Home — three preview cards + link forward. */
  function Services({
    navigate
  }) {
    return /*#__PURE__*/React.createElement(Section, {
      id: "services"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        gap: 24,
        marginBottom: HEAD_GAP,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 640
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, null, "Service Categories"), /*#__PURE__*/React.createElement("h2", {
      className: "lb-display-lg"
    }, "Three ways we back your operation")), navigate ? /*#__PURE__*/React.createElement(Button, {
      variant: "link",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 16
      }),
      onClick: () => navigate("services")
    }, "See all services") : null), /*#__PURE__*/React.createElement(ServiceGrid, {
      navigate: navigate
    }));
  }

  /* ---------- REFERRAL PROGRAM (Home band, links forward) ---------- */
  function ReferralBand({
    navigate
  }) {
    const go = navigate || window.__lbnav || (() => {});
    return /*#__PURE__*/React.createElement(Section, {
      pt: 16
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--navy-800)",
        borderRadius: "var(--radius-2xl)",
        padding: "40px 44px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        gap: 32,
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: -70,
        right: -50,
        width: 260,
        height: 260,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,203,31,0.12), transparent 70%)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        display: "flex",
        gap: 20,
        alignItems: "center",
        maxWidth: 680
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 56,
        height: 56,
        borderRadius: "50%",
        background: "var(--navy-700)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "users",
      size: 26,
      color: "var(--gold-500)"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 24,
        fontWeight: 700,
        color: "#fff",
        margin: "0 0 8px",
        letterSpacing: "-0.3px"
      }
    }, "Refer a carrier, get rewarded."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 15.5,
        lineHeight: 1.6,
        color: "var(--on-navy-soft)",
        margin: 0
      }
    }, "Know another carrier who could use LogiBell? Refer them \u2014 when they come on board, you're rewarded for the connection."))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "gold",
      size: "lg",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 17
      }),
      onClick: () => go("contact", "referral")
    }, "Refer a carrier"))));
  }
  window.LBHome = {
    Hero,
    WhatIs,
    Services,
    ServiceGrid,
    SERVICE_CATS,
    LoadBoard,
    ReferralBand,
    Section,
    Eyebrow
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home2.jsx
try { (() => {
/* LogiBell — Home page sections (part 2) */
(function () {
  const {
    Button,
    Card,
    Badge
  } = window.DS;
  const Icon = window.Icon;
  const {
    Section,
    Eyebrow
  } = window.LBHome;
  const {
    NavyDrift
  } = window.LBAmbient;

  /* ---------- WHY LOGIBELL (navy band) ---------- */
  function Different() {
    const points = [["shield-check", "Professional representation", "Your MC authority is spoken for by experienced staff in broker communication — not left to negotiate alone."], ["repeat", "A relationship, not a transaction", "Dispatch is the entry point. Operational support is the ongoing relationship around your business."], ["folder-check", "Back-office handled alongside the load", "Paperwork and confirmations are coordinated with the load, not after it."], ["badge-dollar-sign", "Transparent published pricing", "The cost is clear before the conversation starts — published openly, every time."]];
    return /*#__PURE__*/React.createElement("section", {
      id: "different",
      style: {
        background: "var(--navy-800)",
        paddingTop: "clamp(72px, 10vw, 128px)",
        paddingBottom: "clamp(72px, 10vw, 128px)",
        position: "relative",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement(NavyDrift, {
      variant: 0
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: -80,
        right: -80,
        width: 320,
        height: 320,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,203,31,0.10), transparent 70%)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "lb-wrap",
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 700,
        marginBottom: "clamp(48px, 6vw, 80px)"
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      onDark: true
    }, "What Makes LogiBell Different"), /*#__PURE__*/React.createElement("h2", {
      className: "lb-display-lg",
      style: {
        color: "#fff",
        marginBottom: 18
      }
    }, "Most carrier relationships start and end with booking a load."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 17.5,
        lineHeight: 1.6,
        color: "var(--on-navy-soft)",
        maxWidth: 620
      }
    }, "LogiBell is built differently. Dispatch is where we begin \u2014 but the relationship is operational. It is a support relationship around your operation, not a single transaction.")), /*#__PURE__*/React.createElement("div", {
      className: "lb-2col",
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "clamp(20px, 3vw, 32px)"
      }
    }, points.map(([ic, t, d], i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        gap: 18,
        padding: 24,
        background: "var(--navy-900)",
        border: "1px solid var(--navy-700)",
        borderRadius: "var(--radius-lg)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 46,
        height: 46,
        borderRadius: "50%",
        background: "var(--navy-700)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 22,
      color: "var(--gold-500)"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 17.5,
        fontWeight: 600,
        color: "#fff",
        margin: "2px 0 7px"
      }
    }, t), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 14.5,
        lineHeight: 1.55,
        color: "var(--on-navy-soft)",
        margin: 0
      }
    }, d)))))));
  }

  /* ---------- WHO WE ARE (reusable section) ---------- */
  const NEW_AUTH_ITEMS = ["First-load strategy", "Early-stage authority support", "Broker-readiness guidance", "Rate education", "Compliance guidance", "Insurance setup support"];
  function WhoWeAre({
    navigate
  }) {
    return /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
      className: "lb-who-grid",
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 56,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Who We Are"), /*#__PURE__*/React.createElement("h2", {
      className: "lb-display-md",
      style: {
        marginBottom: 20
      }
    }, "A team behind the carrier's authority."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 16.5,
        lineHeight: 1.65,
        color: "var(--text-body)",
        marginBottom: 16
      }
    }, "LogiBell is a carrier-focused operations team built for carriers of every size \u2014 from owner-operators to small and larger fleets. We support the work behind the wheel: load sourcing, broker communication, paperwork, issue coordination, and access to trusted service partners."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 16.5,
        lineHeight: 1.65,
        color: "var(--text-body)"
      }
    }, "Our goal is simple \u2014 help carriers operate with more structure, more clarity, and stronger representation."), navigate ? /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 24
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "link",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 16
      }),
      onClick: () => navigate("about")
    }, "About the team")) : null), /*#__PURE__*/React.createElement(Card, {
      surface: "dark",
      radius: "xl",
      pad: "xl"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "quote",
      size: 30,
      color: "var(--gold-500)"
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 21,
        lineHeight: 1.5,
        fontWeight: 500,
        color: "#fff",
        letterSpacing: "-0.2px",
        margin: "16px 0 22px"
      }
    }, "\u201CThank you for visiting LogiBell. This company was built with respect for the people behind the wheel and the teams supporting them every day. Whether we work together or not, I wish you safe roads, reliable freight, and continued success in your business.\u201D"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 13
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 46,
        height: 46,
        borderRadius: "50%",
        background: "var(--gold-500)",
        color: "var(--navy-900)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: 18
      }
    }, "T"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        fontSize: 15,
        color: "#fff"
      }
    }, "Thomas"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 13.5,
        color: "var(--on-navy-soft)"
      }
    }, "Founder & Operations Lead, LogiBell"))))));
  }

  /* ---------- NEW AUTHORITY (condensed Home teaser — links forward) ----------
     The full repositioned program lives on its own page (Pages.jsx).
     No disclaimer banner here — just the headline and a forward link. */
  function NewAuthority({
    navigate
  }) {
    const go = navigate || window.__lbnav || (() => {});
    return /*#__PURE__*/React.createElement(Section, {
      id: "authority",
      bg: "var(--surface-soft)"
    }, /*#__PURE__*/React.createElement("div", {
      className: "lb-auth-grid",
      style: {
        display: "grid",
        gridTemplateColumns: "0.9fr 1.1fr",
        gap: 56,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
      tone: "goldsoft",
      uppercase: true
    }, "Special Treatment Program \u2014 Newer Authorities"), /*#__PURE__*/React.createElement("h2", {
      className: "lb-display-lg",
      style: {
        margin: "18px 0 18px"
      }
    }, "Authority age", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--navy-700)"
      }
    }, "isn't the barrier here.")), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 16.5,
        lineHeight: 1.65,
        color: "var(--text-body)",
        maxWidth: 480
      }
    }, "Most brokers won't touch a new MC. We design a clear roadmap that channels you to the right sources \u2014 the same dispatch service, with extra effort and our established broker relationships working behind you while your authority gains age."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 26
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "md",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 16
      }),
      onClick: () => go("authority")
    }, "The Special Treatment Program"))), /*#__PURE__*/React.createElement(Card, {
      surface: "white",
      radius: "xl",
      pad: "lg"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 13,
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "1px",
        color: "var(--text-muted)",
        marginBottom: 18
      }
    }, "What's included"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 14
      }
    }, NEW_AUTH_ITEMS.map((it, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        gap: 11,
        alignItems: "flex-start",
        padding: "12px 0",
        borderBottom: i < 4 ? "1px solid var(--hairline-soft)" : "none"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "circle-check",
      size: 19,
      color: "var(--gold-700)",
      style: {
        marginTop: 1
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 14.5,
        color: "var(--text-strong)",
        lineHeight: 1.4
      }
    }, it)))))));
  }

  /* ---------- FINAL CTA ---------- */
  function FinalCTA({
    navigate
  }) {
    return /*#__PURE__*/React.createElement(Section, {
      pt: 48
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--navy-800)",
        borderRadius: "var(--radius-2xl)",
        padding: "64px 56px",
        position: "relative",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement(NavyDrift, {
      variant: 1
    }), /*#__PURE__*/React.createElement("div", {
      className: "lb-cta-bell",
      "aria-hidden": "true",
      style: {
        position: "absolute",
        right: 56,
        top: "50%",
        transform: "translateY(-50%)",
        width: 150,
        height: 150,
        borderRadius: "var(--radius-xl)",
        background: "#FFFFFF",
        border: "1px solid rgba(255,255,255,0.7)",
        boxShadow: "var(--shadow-lg)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
        pointerEvents: "none",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo/logibell-emblem.jpg",
      alt: "",
      style: {
        width: 130,
        height: 130,
        objectFit: "contain",
        display: "block"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        maxWidth: 640
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      onDark: true
    }, "Get Onboarded"), /*#__PURE__*/React.createElement("h2", {
      className: "lb-display-lg",
      style: {
        color: "#fff",
        marginBottom: 16
      }
    }, "Ready when you are. Ring the LogiBell."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 17,
        lineHeight: 1.6,
        color: "var(--on-navy-soft)",
        marginBottom: 30,
        maxWidth: 540
      }
    }, "Dispatch is where we start. Our pricing is published, so you know the cost before you call \u2014 no setup fees, no monthly minimums."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 14,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "gold",
      size: "lg",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "bell",
        size: 18
      }),
      onClick: () => navigate("contact", "onboard")
    }, "Ring the LogiBell"), /*#__PURE__*/React.createElement(Button, {
      variant: "on-dark",
      size: "lg",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 16
      }),
      onClick: () => navigate("pricing")
    }, "See published pricing")))));
  }
  window.LBHome2 = {
    Different,
    WhoWeAre,
    NewAuthority,
    FinalCTA,
    NEW_AUTH_ITEMS
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Legal.jsx
try { (() => {
/* LogiBell — Privacy, Terms, and 404.
   PROVISIONAL: Privacy & Terms copy is placeholder pending legal review —
   confirm before launch (see PRE-LAUNCH note). A visible draft flag is shown. */
(function () {
  const {
    Button,
    Badge
  } = window.DS;
  const Icon = window.Icon;
  const {
    Eyebrow
  } = window.LBHome;
  function DraftFlag() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 9,
        background: "var(--warning-soft)",
        color: "var(--warning)",
        border: "1px solid var(--warning)",
        borderRadius: "var(--radius-pill)",
        padding: "6px 14px",
        fontFamily: "var(--font-sans)",
        fontSize: 12.5,
        fontWeight: 600,
        marginBottom: 20
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "triangle-alert",
      size: 14,
      color: "var(--warning)"
    }), "Provisional draft \u2014 pending legal review before launch");
  }
  function LegalLayout({
    title,
    updated,
    intro,
    sections
  }) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--surface-page)",
        paddingTop: 56,
        paddingBottom: 96
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "lb-wrap",
      style: {
        maxWidth: 820
      }
    }, /*#__PURE__*/React.createElement(DraftFlag, null), /*#__PURE__*/React.createElement(Eyebrow, null, "Legal"), /*#__PURE__*/React.createElement("h1", {
      className: "lb-display-lg",
      style: {
        marginBottom: 12
      }
    }, title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        color: "var(--text-muted)",
        marginBottom: 28
      }
    }, "Last updated: ", updated), intro ? /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 16.5,
        lineHeight: 1.65,
        color: "var(--text-body)",
        marginBottom: 36
      }
    }, intro) : null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 32
      }
    }, sections.map((s, i) => /*#__PURE__*/React.createElement("div", {
      key: i
    }, /*#__PURE__*/React.createElement("h2", {
      className: "lb-title-lg",
      style: {
        marginBottom: 10
      }
    }, s.h), s.p.map((para, j) => /*#__PURE__*/React.createElement("p", {
      key: j,
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 15.5,
        lineHeight: 1.68,
        color: "var(--text-body)",
        margin: j ? "12px 0 0" : 0
      }
    }, para)))))));
  }
  function PrivacyPage() {
    return /*#__PURE__*/React.createElement(LegalLayout, {
      title: "Privacy Policy",
      updated: "Provisional \u2014 TBD",
      intro: "This policy describes how LogiBell collects, uses, and protects the information you share with us when you contact us or use our services. This is a provisional draft and will be finalized with counsel before launch.",
      sections: [{
        h: "Information we collect",
        p: ["When you reach out through our onboarding form or contact us directly, we collect the details you provide — such as your name, company or MC name, phone number, email, and notes about your operation.", "We do not sell your information."]
      }, {
        h: "How we use your information",
        p: ["We use your information solely to respond to your inquiry, walk you through onboarding, coordinate dispatch and operational support, and confirm your published rate. We do not use it for unrelated marketing without your consent."]
      }, {
        h: "Sharing with partners",
        p: ["Where you ask us to connect you with vetted partners (for example, insurance or lease-on contacts), we share only what is needed to make that introduction. These are access and referral relationships — partners operate under their own terms and policies."]
      }, {
        h: "Data retention & security",
        p: ["We retain your information only as long as needed to support our working relationship and meet our obligations. We take reasonable measures to protect it."]
      }, {
        h: "Contact",
        p: ["Questions about this policy can be directed to info@logibell.com. (Email is provisional pending launch confirmation.)"]
      }]
    });
  }
  function TermsPage() {
    return /*#__PURE__*/React.createElement(LegalLayout, {
      title: "Terms of Service",
      updated: "Provisional \u2014 TBD",
      intro: "These terms govern your use of the LogiBell website and services. This is a provisional draft and will be finalized with counsel before launch.",
      sections: [{
        h: "Our services",
        p: ["LogiBell provides carrier-focused operations support, starting with dispatch — including load sourcing, broker communication, paperwork coordination, and access to vetted partners. Dispatch pricing is published and confirmed at onboarding."]
      }, {
        h: "No guarantees",
        p: ["LogiBell does not guarantee loads, broker acceptance, specific rates, savings, or outcomes. Support is structured to back your operation, but results depend on your operation, lanes, and market conditions."]
      }, {
        h: "Partner access & referrals",
        p: ["Connections to insurance, lease-on, factoring, or compliance partners are access and referral relationships that may open up as our relationship develops. LogiBell does not hold your authority and does not operate as the carrier. Partners are independent and operate under their own agreements."]
      }, {
        h: "Pricing",
        p: ["Dispatch is charged as a flat dispatch fee, published openly: Semi 6%, Box/Hotshot/Sprinter 6–8%, with no setup fees and no monthly minimums. Your exact rate is confirmed at onboarding."]
      }, {
        h: "Changes",
        p: ["We may update these terms; material changes will be reflected on this page. Continued use of our services constitutes acceptance of the current terms."]
      }]
    });
  }
  function NotFound({
    navigate
  }) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--surface-page)",
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        paddingTop: 80,
        paddingBottom: 96
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "lb-wrap",
      style: {
        textAlign: "center",
        maxWidth: 560
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo/logibell-wordmark.png",
      alt: "LogiBell",
      style: {
        height: 40,
        width: "auto",
        margin: "0 auto 28px",
        display: "block"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 14,
        color: "var(--gold-700)",
        letterSpacing: "2px",
        marginBottom: 10
      }
    }, "404"), /*#__PURE__*/React.createElement("h1", {
      className: "lb-display-md",
      style: {
        marginBottom: 14
      }
    }, "This route isn't on the board."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 16.5,
        lineHeight: 1.6,
        color: "var(--text-body)",
        marginBottom: 28
      }
    }, "The page you're looking for moved or never existed. Let's get you back on the road."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 14,
        justifyContent: "center",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "home",
        size: 17
      }),
      onClick: () => navigate("home")
    }, "Back to home"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "lg",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "bell",
        size: 17
      }),
      onClick: () => navigate("contact", "onboard")
    }, "Ring the LogiBell"))));
  }
  window.LBLegal = {
    PrivacyPage,
    TermsPage,
    NotFound
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Legal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/LogiGuard.jsx
try { (() => {
/* LogiBell — LogiGuard (Security & Integrity).
   · LogiGuardSection — the full, prominent section on the Services page:
     verification practice + the free check form, open to everyone.
   · LogiGuardStrip — a slim mention band for the Home page welcome flow.
   Wording stays confident and protective: "work to confirm", "help protect",
   "reduce exposure" — never "fraud-proof" or "guaranteed safe". */
(function () {
  const {
    Button,
    Card,
    Badge,
    Input
  } = window.DS;
  const Icon = window.Icon;
  const {
    Section,
    Eyebrow
  } = window.LBHome;
  const GUARD_POINTS = [["shield-check", "Broker, partner & vendor verification", "Authority, MC number, and insurance status reviewed before loads are coordinated."], ["user-check", "A legitimate network", "Carrier onboarding includes identity and authority checks to help keep the network legitimate."], ["scan-search", "Current on the tactics", "We stay current on how freight fraud is evolving, applied to every booking decision."]];

  /* ---- Free check form (open to non-clients) ----
     PROVISIONAL: wire to real backend before launch. Default destination =
     Netlify Forms (name="logiguard-check") → reply goes out from info@logibell.com. */
  function LogiGuardCheckForm() {
    const [sent, setSent] = React.useState(false);
    const [form, setForm] = React.useState({
      broker: "",
      mc: "",
      email: "",
      details: ""
    });
    const [errors, setErrors] = React.useState({});
    const set = k => e => {
      const v = e.target.value;
      setForm(f => ({
        ...f,
        [k]: v
      }));
      setErrors(er => er[k] ? {
        ...er,
        [k]: undefined
      } : er);
    };
    function validate() {
      const errs = {};
      if (!form.broker.trim() && !form.mc.trim()) errs.broker = "Give us a broker or company name — or just an MC number below.";
      if (!form.email.trim()) errs.email = "We reply by email — please add one.";else if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) errs.email = "That email doesn't look right.";
      return errs;
    }
    function handleSubmit(e) {
      e.preventDefault();
      const submitter = e.nativeEvent && e.nativeEvent.submitter;
      if (submitter && submitter.getAttribute("type") !== "submit") return;
      const errs = validate();
      if (Object.keys(errs).length) {
        setErrors(errs);
        return;
      }
      setErrors({});
      setSent(true);
    }
    return /*#__PURE__*/React.createElement(Card, {
      surface: "white",
      radius: "xl",
      pad: "xl",
      style: {
        boxShadow: "var(--shadow-lg)"
      }
    }, sent ? /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        padding: "32px 16px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 64,
        height: 64,
        borderRadius: "50%",
        background: "var(--success-soft)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "shield-check",
      size: 30,
      color: "var(--success)"
    })), /*#__PURE__*/React.createElement("h3", {
      className: "lb-display-sm",
      style: {
        marginBottom: 10
      }
    }, "Check received."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 15.5,
        color: "var(--text-body)",
        maxWidth: 360,
        margin: "0 auto 22px",
        lineHeight: 1.6
      }
    }, "We'll run the verification and reply to ", form.email || "your email", " \u2014 usually well before you'd need to commit to the load."), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "md",
      onClick: () => {
        setSent(false);
        setForm({
          broker: "",
          mc: "",
          email: "",
          details: ""
        });
      }
    }, "Run another check")) : /*#__PURE__*/React.createElement("form", {
      name: "logiguard-check",
      method: "POST",
      "data-netlify": "true",
      "netlify-honeypot": "bot-field",
      noValidate: true,
      onSubmit: handleSubmit
    }, /*#__PURE__*/React.createElement("input", {
      type: "hidden",
      name: "form-name",
      value: "logiguard-check"
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        display: "none"
      }
    }, /*#__PURE__*/React.createElement("label", null, "Don't fill this out: ", /*#__PURE__*/React.createElement("input", {
      name: "bot-field"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 22,
        fontWeight: 600,
        color: "var(--text-heading)",
        margin: 0
      }
    }, "Run a free check"), /*#__PURE__*/React.createElement(Badge, {
      tone: "goldsoft",
      uppercase: true
    }, "Free")), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        color: "var(--text-muted)",
        marginBottom: 22
      }
    }, "Client or not \u2014 send the details and we'll reply by email with what we find."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 16,
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Broker / company name",
      name: "broker",
      placeholder: "Broker or company",
      error: errors.broker,
      value: form.broker,
      onChange: set("broker")
    }), /*#__PURE__*/React.createElement(Input, {
      label: "MC number",
      name: "mc",
      placeholder: "MC-000000",
      value: form.mc,
      onChange: set("mc")
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Your email",
      name: "email",
      type: "email",
      placeholder: "you@company.com",
      required: true,
      error: errors.email,
      value: form.email,
      onChange: set("email")
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 22
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Load details (optional)",
      name: "details",
      multiline: true,
      rows: 3,
      placeholder: "Lane, rate, pickup date, anything that felt off\u2026",
      value: form.details,
      onChange: set("details")
    })), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      full: true,
      size: "lg",
      type: "submit",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "shield-check",
        size: 18,
        color: "rgb(255, 203, 31)"
      })
    }, "Verify before you haul"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 12.5,
        color: "var(--text-muted)",
        textAlign: "center",
        marginTop: 14,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 7
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "lock",
      size: 13,
      color: "var(--text-muted)"
    }), " Results go to your email only. No spam, no obligations.")));
  }

  /* ---- Full section (Services page, anchor #logiguard) ---- */
  function LogiGuardSection() {
    return /*#__PURE__*/React.createElement("section", {
      id: "logiguard",
      style: {
        background: "var(--navy-900)",
        paddingTop: "clamp(56px, 8vw, 96px)",
        paddingBottom: "clamp(56px, 8vw, 96px)",
        position: "relative",
        overflow: "hidden",
        scrollMarginTop: 128
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: -90,
        left: -70,
        width: 340,
        height: 340,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,203,31,0.10), transparent 70%)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "lb-wrap",
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "lb-who-grid",
      style: {
        display: "grid",
        gridTemplateColumns: "1.05fr 0.95fr",
        gap: 56,
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "gold",
      uppercase: true
    }, "Added Feature"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 12.5,
        fontWeight: 600,
        letterSpacing: "1.6px",
        textTransform: "uppercase",
        color: "var(--gold-400)"
      }
    }, "LogiGuard \u2014 Security & Integrity")), /*#__PURE__*/React.createElement("h2", {
      className: "lb-display-md",
      style: {
        color: "#fff",
        margin: "16px 0 14px"
      }
    }, "Verify before ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--gold-500)"
      }
    }, "you haul.")), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 15.5,
        lineHeight: 1.65,
        color: "var(--on-navy-soft)",
        maxWidth: 520,
        marginBottom: 24
      }
    }, "Every service above comes with LogiGuard working in the background: before a load is coordinated, we work to confirm the brokers, partners, and vendors involved are legitimate \u2014 authority, MC number, and insurance status. And it's open to everyone: client or not, submit a broker, MC, or load for a free check."), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: "none",
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirection: "column",
        gap: 16
      }
    }, GUARD_POINTS.map(([ic, t, d], i) => /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: "flex",
        gap: 16,
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 42,
        height: 42,
        borderRadius: "50%",
        background: "var(--navy-700)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 20,
      color: "var(--gold-500)"
    })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        fontFamily: "var(--font-display)",
        fontSize: 16,
        fontWeight: 600,
        color: "#fff",
        marginBottom: 3
      }
    }, t), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        lineHeight: 1.55,
        color: "var(--on-navy-soft)"
      }
    }, d)))))), /*#__PURE__*/React.createElement(LogiGuardCheckForm, null))));
  }

  /* ---- Slim Home mention (sits in the welcome flow, links to Services) ---- */
  function LogiGuardStrip({
    navigate
  }) {
    const go = navigate || window.__lbnav || (() => {});
    return /*#__PURE__*/React.createElement(Section, {
      pt: 0,
      pb: 56
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface-card)",
        border: "1px solid var(--hairline)",
        borderRadius: "var(--radius-2xl)",
        padding: "26px 32px",
        display: "flex",
        gap: 22,
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        boxShadow: "var(--shadow-xs)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 18,
        alignItems: "center",
        maxWidth: 700
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 50,
        height: 50,
        borderRadius: "50%",
        background: "var(--navy-800)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "shield-check",
      size: 24,
      color: "var(--gold-500)"
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 15.5,
        lineHeight: 1.55,
        color: "var(--text-body)",
        margin: 0
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "var(--text-heading)",
        fontWeight: 600
      }
    }, "LogiGuard \u2014 verify before you haul."), " ", "A free verification check on any broker, MC, or load \u2014 open to every carrier, client or not.")), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "md",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 16
      }),
      onClick: () => go("services", "logiguard")
    }, "Run a free check")));
  }
  window.LBGuard = {
    LogiGuardSection,
    LogiGuardStrip
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/LogiGuard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Pages.jsx
try { (() => {
/* LogiBell — routed content pages built on the shared Home sections.
   ServicesPage · WhoWeArePage · NewAuthorityPage (repositioned) · PartnerPage */
(function () {
  const {
    Button,
    Card,
    Badge
  } = window.DS;
  const Icon = window.Icon;
  const {
    FlipCard
  } = window.LBFlip;
  const {
    Section,
    Eyebrow,
    ServiceGrid,
    WhatIs,
    SERVICE_CATS
  } = window.LBHome;
  const {
    Different,
    WhoWeAre,
    FinalCTA,
    NEW_AUTH_ITEMS
  } = window.LBHome2;
  const {
    LogiGuardSection
  } = window.LBGuard;

  /* Shared page header band. */
  function PageHero({
    eyebrow,
    title,
    intro,
    badge
  }) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--surface-page)",
        paddingTop: 64,
        paddingBottom: 28
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "lb-wrap",
      style: {
        maxWidth: 860
      }
    }, badge ? /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "goldsoft",
      uppercase: true
    }, badge)) : /*#__PURE__*/React.createElement(Eyebrow, null, eyebrow), /*#__PURE__*/React.createElement("h1", {
      className: "lb-display-lg",
      style: {
        marginBottom: 18,
        maxWidth: 760
      }
    }, title), intro ? /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 18,
        lineHeight: 1.6,
        color: "var(--text-body)",
        maxWidth: 660,
        margin: 0
      }
    }, intro) : null));
  }

  /* A reusable "newer authorities" callout strip for Services/other pages. */
  function AuthorityCallout({
    navigate
  }) {
    return /*#__PURE__*/React.createElement(Section, {
      pt: 20
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface-soft)",
        border: "1px solid var(--hairline)",
        borderRadius: "var(--radius-2xl)",
        padding: "44px 48px",
        display: "flex",
        gap: 32,
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 620
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "goldsoft",
      uppercase: true
    }, "Special Treatment Program \u2014 Newer Authorities"), /*#__PURE__*/React.createElement("h3", {
      className: "lb-display-sm",
      style: {
        margin: "16px 0 10px"
      }
    }, "Authority age isn't the barrier here."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 16,
        lineHeight: 1.6,
        color: "var(--text-body)",
        margin: 0
      }
    }, "A clear roadmap that channels a young authority to the right sources \u2014 the same dispatch service, with extra effort and our established broker relationships working behind you through the first stretch.")), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 17
      }),
      onClick: () => navigate("authority")
    }, "Learn about the program")));
  }

  /* Services — single-panel tab system. Only ONE panel is visible; clicking a
     tab swaps its content in place with a 150ms opacity fade (1 → 0 → 1). No
     page scroll on tab click. Deep links (dispatch/operations/partner-growth)
     select the matching tab; the page scrolls via the invisible markers below. */
  function readAnchor() {
    const raw = (window.location.hash || "").replace(/^#\/?/, "");
    return raw.split("/")[1] || null;
  }
  const SERVICE_PANELS = [{
    anchor: "dispatch",
    tag: "A",
    icon: "route",
    step: "Entry point",
    title: "Dispatch & Load Sourcing",
    tagline: "Where the working relationship starts.",
    desc: "We keep your truck moving by sourcing loads matched to your equipment, communicating directly with brokers on your behalf, and negotiating rates. Every load we book is confirmed in writing before you roll.",
    cta: {
      label: "Get started with dispatch",
      page: "contact",
      anchor: "onboard"
    },
    left: ["Load sourcing & lane matching", "Broker communication on your behalf", "Rate negotiation support", "Access to off-board opportunities"],
    right: ["Rate-discussion support during booking", "Lane planning and market guidance", "Check calls and in-transit coordination", "New-authority onboarding support"]
  }, {
    anchor: "operations",
    tag: "B",
    icon: "clipboard-check",
    step: "After the load",
    title: "Operations & Back-Office",
    tagline: "We handle the administrative load so you can stay on the road.",
    desc: "After the load is booked, the paperwork starts. We coordinate rate confirmations, POD collection, document organization, and follow-up with brokers — keeping your back office running without you having to manage it.",
    cta: {
      label: "Add back-office support",
      page: "contact",
      anchor: "onboard"
    },
    left: ["Rate confirmation & document handling", "POD follow-up and paperwork coordination", "BOL and document organization", "Broker follow-up on open items"],
    right: ["After-hours communication when needed", "Help resolving detention and lumper fees", "Appointment and scheduling details", "Basic performance reporting"]
  }, {
    anchor: "partner-growth",
    tag: "C",
    icon: "trending-up",
    step: "As you grow",
    title: "Partner & Growth Support",
    tagline: "What becomes possible as we build the relationship.",
    desc: "Over time, LogiBell connects carriers to vetted contacts in insurance, factoring, and compliance support. We also provide lane guidance based on market conditions to help you plan where your operation runs next.",
    cta: {
      label: "Learn about partner access",
      page: "partners"
    },
    left: ["Lane planning & market guidance", "Free, competitive insurance quotes", "Vetted factoring contact introductions", "Early-stage MC guidance & broker readiness"],
    right: ["Lease-on connections for carriers", "Compliance support contacts", "Quarterly lane and market review", "Carrier network access"]
  }];
  const PANEL_TEXT = "#39435C"; // slate body (brief spec)
  const PANEL_SUBHEAD = "#828BA3"; // muted sub-header (brief spec)

  function ServicesExplorer({
    navigate
  }) {
    const ids = SERVICE_PANELS.map(p => p.anchor);
    const initial = (() => {
      const a = readAnchor();
      return ids.includes(a) ? a : ids[0];
    })();
    const [active, setActive] = React.useState(initial); // selected tab
    const [shown, setShown] = React.useState(initial); // panel currently rendered
    const [fading, setFading] = React.useState(false); // opacity gate (1 → 0 → 1)
    const timer = React.useRef(null);
    const tabRefs = React.useRef([]);

    // swap the visible panel in place with a 150ms opacity fade (1 → 0 → 1)
    const goTo = React.useCallback(key => {
      setActive(key);
      setFading(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        setShown(key);
        setFading(false);
      }, 150);
    }, []);

    // clear the pending fade timer on unmount only
    React.useEffect(() => () => clearTimeout(timer.current), []);

    // deep links / dropdown: select the matching tab (router handles the scroll)
    React.useEffect(() => {
      function onHash() {
        const a = readAnchor();
        if (ids.includes(a) && a !== active) goTo(a);
      }
      window.addEventListener("hashchange", onHash);
      return () => window.removeEventListener("hashchange", onHash);
    }, [active, goTo]);

    // tab click: swap in place — no hash change, no page scroll
    function pick(key) {
      if (key !== active) goTo(key);
    }

    // arrow-key navigation across the tablist (roving tabindex)
    function onTabKey(e, idx) {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft" && e.key !== "Home" && e.key !== "End") return;
      e.preventDefault();
      let next = idx;
      if (e.key === "ArrowRight") next = (idx + 1) % ids.length;else if (e.key === "ArrowLeft") next = (idx - 1 + ids.length) % ids.length;else if (e.key === "Home") next = 0;else next = ids.length - 1;
      pick(ids[next]);
      const el = tabRefs.current[next];
      if (el) el.focus();
    }
    const panel = SERVICE_PANELS.find(p => p.anchor === shown) || SERVICE_PANELS[0];
    const go = navigate || window.__lbnav || (() => {});
    return /*#__PURE__*/React.createElement(Section, {
      pt: 24
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        height: 0
      }
    }, ids.map(id => /*#__PURE__*/React.createElement("span", {
      key: id,
      id: id,
      "aria-hidden": "true",
      style: {
        position: "absolute",
        top: -14,
        left: 0,
        width: 1,
        height: 1
      }
    }))), /*#__PURE__*/React.createElement("div", {
      className: "lb-svc-tabbar",
      role: "tablist",
      "aria-label": "Services"
    }, SERVICE_PANELS.map((p, i) => {
      const on = p.anchor === active;
      return /*#__PURE__*/React.createElement(React.Fragment, {
        key: p.anchor
      }, i > 0 ? /*#__PURE__*/React.createElement("span", {
        className: "lb-svc-sep",
        "aria-hidden": "true"
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "chevron-right",
        size: 16
      })) : null, /*#__PURE__*/React.createElement("button", {
        type: "button",
        role: "tab",
        id: "lb-svc-tab-" + p.anchor,
        "aria-selected": on,
        "aria-controls": "lb-svc-panel",
        tabIndex: on ? 0 : -1,
        ref: el => {
          tabRefs.current[i] = el;
        },
        onKeyDown: e => onTabKey(e, i),
        onClick: () => pick(p.anchor),
        className: "lb-svc-tab" + (on ? " is-active" : "")
      }, /*#__PURE__*/React.createElement("span", {
        className: "lb-svc-badge"
      }, p.tag), /*#__PURE__*/React.createElement("span", {
        style: {
          minWidth: 0
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          display: "block",
          fontFamily: "var(--font-display)",
          fontSize: 14.5,
          fontWeight: 600,
          color: on ? "#fff" : "var(--text-heading)",
          lineHeight: 1.25,
          whiteSpace: "nowrap"
        }
      }, p.title), /*#__PURE__*/React.createElement("span", {
        className: "lb-svc-tab-sub",
        style: {
          display: "block",
          fontFamily: "var(--font-sans)",
          fontSize: 12,
          color: on ? "var(--on-navy-faint)" : "var(--text-muted)",
          whiteSpace: "nowrap"
        }
      }, "Step ", p.tag, " \xB7 ", p.step))));
    })), /*#__PURE__*/React.createElement("div", {
      id: "lb-svc-panel",
      role: "tabpanel",
      "aria-labelledby": "lb-svc-tab-" + active,
      className: "lb-svc-panel" + (fading ? " is-fading" : ""),
      style: {
        marginTop: 22,
        background: "var(--surface-card)",
        border: "1px solid var(--line)",
        borderRadius: "var(--radius-2xl)",
        padding: "44px 46px",
        boxShadow: "var(--shadow-sm)",
        minHeight: 348
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "lb-svc-panel-grid",
      style: {
        display: "grid",
        gridTemplateColumns: "0.66fr 1fr",
        gap: 48
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 48,
        height: 48,
        borderRadius: "50%",
        background: "var(--navy-800)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: panel.icon,
      size: 24,
      color: "var(--gold-500)"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "1.4px",
        textTransform: "uppercase",
        color: "var(--gold-700)",
        marginBottom: 10
      }
    }, "Step ", panel.tag, " \xB7 ", panel.step.toUpperCase()), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 22,
        fontWeight: 700,
        color: "var(--navy-800)",
        letterSpacing: "-0.3px",
        margin: "0 0 10px"
      }
    }, panel.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        fontWeight: 600,
        color: "var(--navy-800)",
        margin: "0 0 12px",
        lineHeight: 1.45
      }
    }, panel.tagline), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        lineHeight: 1.6,
        color: PANEL_TEXT,
        margin: "0 0 24px"
      }
    }, panel.desc), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "md",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 16
      }),
      onClick: () => go(panel.cta.page, panel.cta.anchor)
    }, panel.cta.label)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 22
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "1.4px",
        textTransform: "uppercase",
        color: PANEL_SUBHEAD
      }
    }, "What this includes"), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 40,
        height: 2,
        background: "var(--gold-500)",
        marginTop: 8,
        borderRadius: 2
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "lb-svc-inc-grid",
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "0 36px"
      }
    }, [panel.left, panel.right].map((col, ci) => /*#__PURE__*/React.createElement("ul", {
      key: ci,
      style: {
        listStyle: "none",
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirection: "column",
        gap: 14
      }
    }, col.map((item, j) => /*#__PURE__*/React.createElement("li", {
      key: j,
      style: {
        display: "flex",
        gap: 10,
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        lineHeight: 1.45,
        color: PANEL_TEXT
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "circle-check",
      size: 16,
      color: "var(--gold-700)",
      style: {
        marginTop: 1,
        flex: "none"
      }
    }), /*#__PURE__*/React.createElement("span", null, item))))))))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 24,
        background: "var(--navy-800)",
        borderRadius: "var(--radius-2xl)",
        padding: "32px 38px",
        display: "flex",
        gap: 26,
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 20,
        alignItems: "center",
        maxWidth: 720
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 52,
        height: 52,
        borderRadius: "50%",
        background: "var(--navy-700)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "tag",
      size: 24,
      color: "var(--gold-500)"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 19,
        fontWeight: 600,
        color: "#fff",
        margin: "0 0 6px"
      }
    }, "Determining your cost"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 14.5,
        lineHeight: 1.6,
        color: "var(--on-navy-soft)",
        margin: 0
      }
    }, "A flat dispatch fee \u2014 ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        color: "var(--gold-500)"
      }
    }, "Semi 6%"), ", ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        color: "var(--gold-500)"
      }
    }, "Box/Hotshot 6\u20138%"), " \u2014 confirmed at onboarding, with an affordable minimum so it works for smaller operations too."))), /*#__PURE__*/React.createElement(Button, {
      variant: "gold",
      size: "md",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 16
      }),
      onClick: () => (navigate || window.__lbnav || (() => {}))("pricing")
    }, "See full pricing")));
  }

  /* ============ SERVICES PAGE ============ */
  function ServicesPage({
    navigate
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHero, {
      eyebrow: "Services",
      title: "Everything around the load \u2014 handled.",
      intro: "Dispatch starts the relationship. Operations support builds the business."
    }), /*#__PURE__*/React.createElement(ServicesExplorer, {
      navigate: navigate
    }), /*#__PURE__*/React.createElement(AuthorityCallout, {
      navigate: navigate
    }), /*#__PURE__*/React.createElement(LogiGuardSection, null), /*#__PURE__*/React.createElement(Different, null), /*#__PURE__*/React.createElement(FinalCTA, {
      navigate: navigate
    }));
  }

  /* ============ WHO WE ARE PAGE ============ */
  function WhoWeArePage({
    navigate
  }) {
    const values = [["users", "Carriers of every size", "From owner-operators to small and larger fleets — the operations support scales to the operation."], ["shield-check", "Professional representation", "Experienced staff speak for your authority in broker communication, so you're not negotiating alone."], ["eye", "Transparent by default", "Published pricing and clear expectations. You know the cost and the scope before the conversation starts."]];
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHero, {
      eyebrow: "Who We Are",
      title: "A team behind the carrier's authority.",
      intro: "LogiBell is a carrier-focused operations team supporting the work behind the wheel \u2014 built for carriers of every size, from owner-operators to small and larger fleets."
    }), /*#__PURE__*/React.createElement(WhoWeAre, null), /*#__PURE__*/React.createElement(Section, {
      bg: "var(--surface-soft)"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 640,
        marginBottom: "clamp(48px, 6vw, 80px)"
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, null, "What we stand on"), /*#__PURE__*/React.createElement("h2", {
      className: "lb-display-md"
    }, "How we work with carriers")), /*#__PURE__*/React.createElement("div", {
      className: "lb-3col",
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "clamp(20px, 3vw, 32px)"
      }
    }, values.map(([ic, t, d], i) => /*#__PURE__*/React.createElement(Card, {
      key: i,
      surface: "white",
      pad: "lg",
      radius: "xl",
      interactive: true
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 48,
        height: 48,
        borderRadius: "50%",
        background: "var(--navy-800)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 22,
      color: "var(--gold-500)"
    })), /*#__PURE__*/React.createElement("h3", {
      className: "lb-title-md",
      style: {
        marginBottom: 8
      }
    }, t), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 14.5,
        lineHeight: 1.55,
        color: "var(--text-body)",
        margin: 0
      }
    }, d))))), /*#__PURE__*/React.createElement(FinalCTA, {
      navigate: navigate
    }));
  }

  /* ============ NEW AUTHORITY PAGE (repositioned) ============
     The "Special Treatment Program" for newer authorities. No disclaimer
     banner; the honesty line lives low-key near the bottom. */
  function NewAuthorityPage({
    navigate
  }) {
    const how = [["handshake", "Brokers already know LogiBell", "Established broker relationships let us direct capacity to loads — your authority's age isn't the deciding factor in the conversation."], ["rocket", "More effort, same service", "It's the same dispatch service, with extra effort and stronger connections applied while your authority is young."], ["calendar-clock", "Through the first months", "Structured for the hardest stretch — your first months on the road — so the business keeps running while the authority gains age."]];
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHero, {
      badge: "Special Treatment Program \u2014 Newer Authorities",
      title: /*#__PURE__*/React.createElement(React.Fragment, null, "Authority age", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
        style: {
          color: "var(--navy-700)"
        }
      }, "isn't the barrier here."))
    }), /*#__PURE__*/React.createElement(Section, {
      pt: 8,
      pb: 84
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 720,
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement("p", {
      className: "lb-display-sm",
      style: {
        color: "var(--text-heading)",
        lineHeight: 1.35,
        marginBottom: 18
      }
    }, "Built for the hardest stretch \u2014 the first one."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 17.5,
        lineHeight: 1.65,
        color: "var(--text-body)"
      }
    }, "Most brokers won't touch a new MC. We design a clear roadmap that channels you to the right sources, so a young authority isn't a reason to be turned away. It's the same dispatch service \u2014 with extra effort and our established broker relationships working behind you \u2014 built to keep your business moving through the hardest stretch, the first one, while your authority gains age."))), /*#__PURE__*/React.createElement(Section, {
      bg: "var(--surface-soft)"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 640,
        marginBottom: "clamp(48px, 6vw, 80px)"
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, null, "How it works"), /*#__PURE__*/React.createElement("h2", {
      className: "lb-display-md"
    }, "Why a young authority isn't a dealbreaker")), /*#__PURE__*/React.createElement("div", {
      className: "lb-3col",
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "clamp(20px, 3vw, 32px)"
      }
    }, how.map(([ic, t, d], i) => /*#__PURE__*/React.createElement(Card, {
      key: i,
      surface: "white",
      pad: "lg",
      radius: "xl"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 48,
        height: 48,
        borderRadius: "50%",
        background: "var(--navy-800)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 22,
      color: "var(--gold-500)"
    })), /*#__PURE__*/React.createElement("h3", {
      className: "lb-title-md",
      style: {
        marginBottom: 8
      }
    }, t), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 14.5,
        lineHeight: 1.55,
        color: "var(--text-body)",
        margin: 0
      }
    }, d))))), /*#__PURE__*/React.createElement(Section, {
      pb: 40
    }, /*#__PURE__*/React.createElement("div", {
      className: "lb-auth-grid",
      style: {
        display: "grid",
        gridTemplateColumns: "0.9fr 1.1fr",
        gap: 56,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Included support"), /*#__PURE__*/React.createElement("h2", {
      className: "lb-display-md",
      style: {
        marginBottom: 16
      }
    }, "Structure for the first months on the road."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 16.5,
        lineHeight: 1.65,
        color: "var(--text-body)",
        maxWidth: 460
      }
    }, "The same operational support every LogiBell carrier gets \u2014 with the early-stage essentials a newer authority needs most."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 26
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "bell",
        size: 18
      }),
      onClick: () => navigate("contact", "onboard")
    }, "Ring the LogiBell"))), /*#__PURE__*/React.createElement(Card, {
      surface: "white",
      radius: "xl",
      pad: "lg"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 13,
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "1px",
        color: "var(--text-muted)",
        marginBottom: 18
      }
    }, "What's included"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 14
      }
    }, NEW_AUTH_ITEMS.map((it, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        gap: 11,
        alignItems: "flex-start",
        padding: "12px 0",
        borderBottom: i < 4 ? "1px solid var(--hairline-soft)" : "none"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "circle-check",
      size: 19,
      color: "var(--gold-700)",
      style: {
        marginTop: 1
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 14.5,
        color: "var(--text-strong)",
        lineHeight: 1.4
      }
    }, it))))))), /*#__PURE__*/React.createElement(FinalCTA, {
      navigate: navigate
    }));
  }

  /* ============ PARTNER ACCESS PAGE ============
     Relationship-based access / referral language only — never guarantees.
     Honest framing lives inside each item (no boxed meta-disclaimer). */
  function PartnerPage({
    navigate
  }) {
    const items = [{
      icon: "shield-check",
      tag: "Free quote",
      title: "Insurance",
      short: "A free, no-obligation quote through vetted insurance partners — built around your equipment, history, state, and coverage needs.",
      body: "Through our vetted insurance partners, we can arrange a free, no-obligation quote built around your equipment, history, state, and coverage needs. We're confident the options we bring you will be competitive — and there's no cost to find out where you stand.",
      note: "The quote is free and the choice stays yours — you deal directly with the provider."
    }, {
      icon: "git-branch-plus",
      tag: "Referral",
      title: "Lease-on connections",
      short: "For carriers without an active MC — a referral to vetted lease-on opportunities so you can keep moving freight.",
      body: "For carriers without an active MC, we can refer and connect you to vetted lease-on opportunities so you can keep moving freight while you decide on your own authority.",
      note: "We make the connection — the lease-on relationship is directly between you and the carrier you join."
    }, {
      icon: "network",
      tag: "Network",
      title: "Factoring & compliance",
      short: "Factoring and compliance introductions that open up as the relationship develops and our network expands.",
      body: "Potential partner access for factoring and compliance opens up as the relationship develops and our network expands — introductions where they're a genuine fit.",
      note: "Introductions are made where they're a genuine fit, as the network expands."
    }];
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHero, {
      eyebrow: "Partner Access",
      title: "A network that opens up as the relationship develops.",
      intro: "Beyond dispatch, LogiBell connects carriers to vetted partners \u2014 free, competitive insurance quotes, lease-on referrals, and factoring and compliance contacts that open up as the relationship develops."
    }), /*#__PURE__*/React.createElement(Section, {
      pt: 40
    }, /*#__PURE__*/React.createElement("div", {
      className: "lb-3col",
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "clamp(20px, 3vw, 32px)"
      }
    }, items.map((it, i) => /*#__PURE__*/React.createElement(FlipCard, {
      key: i,
      className: "lb-flip-lift",
      backDark: true,
      label: it.title + " — flip for the full detail",
      frontHint: "Tap for details",
      backHint: "Back",
      front: /*#__PURE__*/React.createElement(Card, {
        surface: "white",
        radius: "xl",
        pad: "lg",
        style: {
          display: "flex",
          flexDirection: "column",
          height: "100%"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          marginBottom: 16
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 52,
          height: 52,
          borderRadius: "50%",
          background: "var(--navy-800)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: "none"
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: it.icon,
        size: 24,
        color: "var(--gold-500)"
      })), /*#__PURE__*/React.createElement(Badge, {
        tone: "goldsoft",
        uppercase: true
      }, it.tag)), /*#__PURE__*/React.createElement("h3", {
        className: "lb-title-lg",
        style: {
          margin: "0 0 8px"
        }
      }, it.title), /*#__PURE__*/React.createElement("p", {
        style: {
          fontFamily: "var(--font-sans)",
          fontSize: 15,
          lineHeight: 1.6,
          color: "var(--text-body)",
          margin: 0
        }
      }, it.short)),
      back: /*#__PURE__*/React.createElement(Card, {
        surface: "dark",
        radius: "xl",
        pad: "lg",
        style: {
          display: "flex",
          flexDirection: "column",
          height: "100%"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: "var(--font-sans)",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "1.4px",
          textTransform: "uppercase",
          color: "var(--gold-400)",
          marginBottom: 8
        }
      }, it.title), /*#__PURE__*/React.createElement("div", {
        style: {
          width: 40,
          height: 2,
          background: "var(--gold-500)",
          borderRadius: 2,
          marginBottom: 16
        }
      }), /*#__PURE__*/React.createElement("p", {
        style: {
          fontFamily: "var(--font-sans)",
          fontSize: 14,
          lineHeight: 1.6,
          color: "#fff",
          margin: "0 0 16px"
        }
      }, it.body), /*#__PURE__*/React.createElement("p", {
        style: {
          fontFamily: "var(--font-sans)",
          fontSize: 12.5,
          lineHeight: 1.55,
          color: "var(--on-navy-soft)",
          margin: 0,
          display: "flex",
          gap: 8,
          alignItems: "flex-start"
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "info",
        size: 15,
        color: "var(--gold-500)",
        style: {
          marginTop: 1,
          flex: "none"
        }
      }), it.note))
    })))), /*#__PURE__*/React.createElement(FinalCTA, {
      navigate: navigate
    }));
  }
  window.LBPages = {
    ServicesPage,
    WhoWeArePage,
    NewAuthorityPage,
    PartnerPage,
    PageHero
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Pages.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Pricing.jsx
try { (() => {
/* LogiBell — Pricing page */
(function () {
  const {
    Button,
    Card,
    Badge,
    PricingCard,
    Tabs
  } = window.DS;
  const Icon = window.Icon;
  const {
    FlipCard
  } = window.LBFlip;
  const {
    NavyDrift
  } = window.LBAmbient;

  /* Back face of a pricing flip card — a worked example with round, honest
     numbers, clearly labelled as an example. */
  function ExampleBack({
    dark,
    title,
    rows,
    emphasis,
    note,
    ctaLabel,
    onCta
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        background: dark ? "var(--surface-dark)" : "var(--surface-card)",
        border: `1px solid ${dark ? "var(--navy-700)" : "var(--hairline)"}`,
        borderRadius: "var(--radius-xl)",
        padding: "32px 30px",
        boxShadow: dark ? "var(--shadow-lg)" : "var(--shadow-sm)",
        height: "100%"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
      tone: dark ? "gold" : "goldsoft",
      uppercase: true
    }, "Worked example")), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 19,
        fontWeight: 600,
        letterSpacing: "-0.2px",
        color: dark ? "#fff" : "var(--text-heading)",
        margin: "16px 0 4px"
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        marginTop: 14
      }
    }, rows.map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        gap: 12,
        padding: "11px 0",
        borderBottom: `1px solid ${dark ? "var(--navy-700)" : "var(--hairline)"}`
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        color: dark ? "var(--on-navy-soft)" : "var(--text-body)"
      }
    }, k), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 15,
        fontWeight: 600,
        color: dark ? "var(--on-navy)" : "var(--text-strong)",
        whiteSpace: "nowrap"
      }
    }, v))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        gap: 12,
        padding: "13px 0 0"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 15,
        fontWeight: 600,
        color: dark ? "#fff" : "var(--text-heading)"
      }
    }, emphasis[0]), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 19,
        fontWeight: 700,
        color: dark ? "var(--gold-500)" : "var(--navy-800)",
        whiteSpace: "nowrap"
      }
    }, emphasis[1]))), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 12.5,
        lineHeight: 1.55,
        color: dark ? "var(--on-navy-faint)" : "var(--text-muted)",
        margin: "14px 0 18px"
      }
    }, note), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "auto"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: dark ? "gold" : "primary",
      full: true,
      size: "md",
      onClick: onCta
    }, ctaLabel)));
  }
  function PricingPage({
    navigate
  }) {
    const compare = [["Published standard rate", "Preferred pricing below standard"], ["Basic performance reporting", "Weekly performance reporting"], ["Standard support", "Dedicated account management"], ["Standard load matching", "Priority load matching"], ["Available at signup", "Earned through a sustained relationship"]];
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--surface-page)",
        paddingTop: 64,
        paddingBottom: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "lb-wrap",
      style: {
        maxWidth: 820,
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 9,
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 22,
        height: 2,
        background: "var(--gold-500)",
        borderRadius: 2
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 12.5,
        fontWeight: 600,
        letterSpacing: "1.6px",
        textTransform: "uppercase",
        color: "var(--gold-700)"
      }
    }, "Published Pricing"), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 22,
        height: 2,
        background: "var(--gold-500)",
        borderRadius: 2
      }
    })), /*#__PURE__*/React.createElement("h1", {
      className: "lb-display-lg",
      style: {
        marginBottom: 18
      }
    }, "The cost is clear before you call."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 17,
        lineHeight: 1.6,
        color: "var(--text-body)",
        maxWidth: 620,
        margin: "0 auto"
      }
    }, "Our pricing is published because carriers should understand the cost of service before investing time in a conversation. These figures are the flat dispatch fee \u2014 operational support, representation, and partner access come with the relationship."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 22,
        justifyContent: "center",
        marginTop: 24,
        flexWrap: "wrap"
      }
    }, [["circle-x", "No setup fees"], ["circle-x", "No monthly minimums"], ["gift", "Free first ELD cycle or week"]].map(([ic, t], i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        fontFamily: "var(--font-sans)",
        fontSize: 14.5,
        fontWeight: 500,
        color: "var(--text-strong)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 17,
      color: "var(--success)"
    }), " ", t))))), /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--surface-page)",
        paddingTop: 40,
        paddingBottom: "clamp(72px, 10vw, 128px)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "lb-wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "lb-3col",
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "clamp(20px, 3vw, 32px)",
        alignItems: "stretch"
      }
    }, /*#__PURE__*/React.createElement(FlipCard, {
      className: "lb-flip-lift lb-flip-reserve",
      frontHint: "Cost example",
      backHint: "Back",
      label: "Semi Trucks \u2014 flip for a worked example",
      front: /*#__PURE__*/React.createElement(PricingCard, {
        name: "Semi Trucks",
        rate: "6%",
        badge: "Most carriers",
        description: "Dry van, reefer, flatbed, power only \u2014 one flat dispatch fee.",
        features: ["No setup fees", "No monthly minimums", "Broker communication handled for you", "Rate confirmations & paperwork coordinated", "Free first ELD cycle or week"],
        onCta: () => navigate("contact", "onboard")
      }),
      back: /*#__PURE__*/React.createElement(ExampleBack, {
        title: "On a $2,000 load at 6%",
        rows: [["Load pays", "$2,000"], ["Dispatch fee (6%)", "− $120"]],
        emphasis: ["You keep", "$1,880"],
        note: "Round numbers, for illustration. Your flat rate is confirmed at onboarding \u2014 published, with no setup fees.",
        ctaLabel: "Ring the LogiBell",
        onCta: () => navigate("contact", "onboard")
      })
    }), /*#__PURE__*/React.createElement(FlipCard, {
      className: "lb-flip-lift lb-flip-reserve",
      frontHint: "Cost example",
      backHint: "Back",
      label: "Box, Hotshot, Sprinter \u2014 flip for a worked example",
      front: /*#__PURE__*/React.createElement(PricingCard, {
        name: "Box / Hotshot / Sprinter",
        rate: "6\u20138%",
        description: "Based on equipment and service needs. You're told exactly where your rate lands at onboarding \u2014 not after.",
        features: ["No setup fees", "No monthly minimums", "More frequent dispatching & coordination", "Back-office support alongside the load", "After-hours communication when needed"],
        onCta: () => navigate("contact", "onboard")
      }),
      back: /*#__PURE__*/React.createElement(ExampleBack, {
        title: "On a $1,000 load at 7%",
        rows: [["Load pays", "$1,000"], ["Dispatch fee (7%, mid-range)", "− $70"]],
        emphasis: ["You keep", "$930"],
        note: "Example uses the middle of the 6\u20138% range. You're told exactly where your rate lands at onboarding \u2014 not after.",
        ctaLabel: "Ring the LogiBell",
        onCta: () => navigate("contact", "onboard")
      })
    }), /*#__PURE__*/React.createElement(FlipCard, {
      className: "lb-flip-lift lb-flip-reserve",
      frontDark: true,
      backDark: true,
      frontHint: "Cost example",
      backHint: "Back",
      label: "Trusted Partner \u2014 flip for how the rate compares",
      front: /*#__PURE__*/React.createElement(PricingCard, {
        featured: true,
        name: "Trusted Partner",
        rate: "Below",
        rateUnit: "standard rate",
        badge: "Higher tier",
        description: "Every type of carrier can grow into a Trusted Partner. Earned through the relationship \u2014 not purchased at signup.",
        features: ["Preferred pricing below standard", "Weekly performance reporting", "Dedicated account management", "Priority load matching"],
        ctaLabel: "See how it's earned",
        onCta: () => navigate("contact")
      }),
      back: /*#__PURE__*/React.createElement(ExampleBack, {
        dark: true,
        title: "Same $2,000 load, preferred rate",
        rows: [["Standard dispatch fee (6%)", "$120"], ["Trusted Partner fee", "Below $120"]],
        emphasis: ["You keep", "More per load"],
        note: "The exact preferred rate is set as the relationship grows \u2014 earned through sustained work together, never sold at signup.",
        ctaLabel: "See how it's earned",
        onCta: () => navigate("contact")
      })
    })), /*#__PURE__*/React.createElement(Card, {
      surface: "soft",
      radius: "lg",
      pad: "lg",
      style: {
        marginTop: 24,
        display: "flex",
        gap: 16,
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "info",
      size: 22,
      color: "var(--navy-700)",
      style: {
        marginTop: 2,
        flex: "none"
      }
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 16,
        fontWeight: 600,
        color: "var(--text-heading)",
        margin: "0 0 6px"
      }
    }, "Why the 6\u20138% range exists"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 14.5,
        lineHeight: 1.6,
        color: "var(--text-body)",
        margin: 0
      }
    }, "Box truck, hotshot, and sprinter operations generate lower gross revenue per load and require more frequent dispatching and coordination per dollar earned. The range reflects the real cost of the service. The carrier is told exactly where their rate lands at onboarding \u2014 not after."))))), /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--navy-800)",
        paddingTop: "clamp(72px, 10vw, 128px)",
        paddingBottom: "clamp(72px, 10vw, 128px)",
        position: "relative",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement(NavyDrift, {
      variant: 2
    }), /*#__PURE__*/React.createElement("div", {
      className: "lb-wrap",
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        maxWidth: 640,
        margin: "0 auto clamp(48px, 6vw, 80px)"
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "gold",
      uppercase: true
    }, "Higher Tier \u2014 Earned, Not Purchased"), /*#__PURE__*/React.createElement("h2", {
      className: "lb-display-md",
      style: {
        color: "#fff",
        margin: "18px 0 14px"
      }
    }, "Grow into a Trusted Partner"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 16,
        lineHeight: 1.6,
        color: "var(--on-navy-soft)"
      }
    }, "Long-term partners \u2014 semi or box/hotshot/sprinter \u2014 reach preferred pricing and expanded support. Reached by a sustained working relationship, consistent operation, and steady communication.")), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 760,
        margin: "0 auto",
        background: "var(--navy-900)",
        border: "1px solid var(--navy-700)",
        borderRadius: "var(--radius-xl)",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        borderBottom: "1px solid var(--navy-700)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "18px 24px",
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        fontSize: 15,
        color: "var(--on-navy-soft)"
      }
    }, "Standard"), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "18px 24px",
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        fontSize: 15,
        color: "var(--navy-900)",
        background: "var(--gold-500)",
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "star",
      size: 16,
      color: "var(--navy-800)"
    }), " Trusted Partner")), compare.map((row, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        borderBottom: i < compare.length - 1 ? "1px solid var(--navy-700)" : "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "16px 24px",
        fontFamily: "var(--font-sans)",
        fontSize: 14.5,
        color: "var(--on-navy-soft)"
      }
    }, row[0]), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "16px 24px",
        fontFamily: "var(--font-sans)",
        fontSize: 14.5,
        color: "#fff",
        fontWeight: 500,
        display: "flex",
        alignItems: "center",
        gap: 9,
        background: "rgba(255,203,31,0.06)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 16,
      color: "var(--gold-500)"
    }), row[1])))))), /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--surface-page)",
        paddingTop: "clamp(72px, 10vw, 128px)",
        paddingBottom: "clamp(72px, 10vw, 128px)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "lb-wrap",
      style: {
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("h2", {
      className: "lb-display-md",
      style: {
        marginBottom: 14
      }
    }, "Know your rate before you call."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 16,
        color: "var(--text-body)",
        marginBottom: 26
      }
    }, "Ring the LogiBell and we'll get you onboarded."), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "bell",
        size: 18,
        color: "var(--gold-500)"
      }),
      onClick: () => navigate("contact", "onboard")
    }, "Ring the LogiBell \u2014 Get Onboarded"))));
  }
  window.LBPricing = {
    PricingPage
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Pricing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ambient.jsx
try { (() => {
/* LogiBell — ambient background layers (atmosphere pass).
   Depth, not decoration. Hard rules baked in:
   · pointer-events: none, aria-hidden, position: absolute inside an
     overflow-hidden positioned section
   · transform-only animation (GPU-composited), fully disabled under
     prefers-reduced-motion (see .lb-drift rules in index.html)
   · opacities stay ≤5% so text contrast is never affected. */
(function () {
  /* Soft drifting circles for navy sections. `variant` shifts placement so
     repeated navy bands don't look identical. */
  function NavyDrift({
    variant = 0
  }) {
    const sets = [[{
      size: 520,
      top: "-18%",
      left: "-8%",
      o: 0.05,
      a: 1
    }, {
      size: 380,
      top: "42%",
      right: "-9%",
      o: 0.04,
      a: 2
    }, {
      size: 260,
      bottom: "-24%",
      left: "32%",
      o: 0.03,
      a: 3
    }], [{
      size: 460,
      top: "-26%",
      right: "4%",
      o: 0.04,
      a: 2
    }, {
      size: 340,
      bottom: "-20%",
      left: "-6%",
      o: 0.05,
      a: 1
    }], [{
      size: 420,
      top: "8%",
      left: "-10%",
      o: 0.04,
      a: 3
    }, {
      size: 300,
      bottom: "-26%",
      right: "-4%",
      o: 0.05,
      a: 2
    }]];
    const shapes = sets[variant % sets.length];
    return /*#__PURE__*/React.createElement("div", {
      className: "lb-amb",
      "aria-hidden": "true"
    }, shapes.map((s, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      className: "lb-drift lb-drift-" + s.a,
      style: {
        width: s.size,
        height: s.size,
        top: s.top,
        left: s.left,
        right: s.right,
        bottom: s.bottom,
        background: "radial-gradient(circle, rgba(255,255,255," + s.o + ") 0%, rgba(255,255,255,0) 70%)"
      }
    })));
  }

  /* Static dotted route-line motif for light sections — anchored in a corner
     so text columns stay clean. Non-animated by design. */
  function RouteMotif({
    corner = "tr",
    width = 440
  }) {
    const pos = {
      tr: {
        top: -24,
        right: -36
      },
      br: {
        bottom: -24,
        right: -36
      },
      tl: {
        top: -24,
        left: -36
      },
      bl: {
        bottom: -24,
        left: -36
      }
    }[corner] || {
      top: -24,
      right: -36
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "lb-amb",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("svg", {
      width: width,
      height: Math.round(width * 0.55),
      viewBox: "0 0 440 242",
      fill: "none",
      style: {
        position: "absolute",
        ...pos
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "M8 222 C 96 158, 158 206, 224 136 S 348 44, 432 20",
      stroke: "var(--navy-800)",
      strokeOpacity: "0.07",
      strokeWidth: "2",
      strokeDasharray: "1 10",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "8",
      cy: "222",
      r: "4",
      fill: "var(--navy-800)",
      fillOpacity: "0.07"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "432",
      cy: "20",
      r: "4",
      fill: "var(--navy-800)",
      fillOpacity: "0.07"
    })));
  }
  window.LBAmbient = {
    NavyDrift,
    RouteMotif
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ambient.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ds.jsx
try { (() => {
/* LogiBell UI kit — primitive resolver.
   Prefers the compiled design-system bundle; falls back to compact local
   equivalents (same API) so the kit always renders. Consumers should use
   the real components from `components/` — these mirrors exist only to keep
   the kit self-contained. */
(function () {
  const NS = window.LogibellDesignSystem_20d6f4 || {};

  // ---- Fallback Button ----
  function FButton({
    children,
    variant = "primary",
    size = "md",
    iconLeft,
    iconRight,
    full,
    disabled,
    onClick,
    type = "button",
    ...rest
  }) {
    const sizes = {
      sm: {
        p: "9px 16px",
        f: 14,
        h: 38
      },
      md: {
        p: "13px 22px",
        f: 15,
        h: 46
      },
      lg: {
        p: "16px 28px",
        f: 16,
        h: 54
      }
    };
    const s = sizes[size] || sizes.md;
    const v = {
      primary: {
        background: "var(--navy-800)",
        color: "#fff",
        border: "1.5px solid transparent",
        boxShadow: "var(--shadow-sm)"
      },
      gold: {
        background: "var(--gold-500)",
        color: "var(--navy-800)",
        border: "1.5px solid transparent",
        boxShadow: "var(--shadow-sm)"
      },
      secondary: {
        background: "#fff",
        color: "var(--navy-800)",
        border: "1.5px solid var(--line-strong)"
      },
      "on-dark": {
        background: "var(--navy-700)",
        color: "#fff",
        border: "1.5px solid var(--navy-600)"
      },
      ghost: {
        background: "transparent",
        color: "var(--navy-800)",
        border: "1.5px solid transparent"
      },
      link: {
        background: "transparent",
        color: "var(--navy-800)",
        border: "none",
        height: "auto",
        padding: 0
      }
    }[variant] || {};
    const [h, setH] = React.useState(false);
    const hov = !disabled && h ? variant === "primary" ? {
      background: "var(--navy-700)",
      boxShadow: "0 8px 24px -12px rgba(255,203,31,0.5)"
    } : variant === "gold" ? {
      background: "var(--gold-400)"
    } : variant === "secondary" ? {
      background: "var(--mist-100)",
      borderColor: "var(--navy-800)"
    } : variant === "on-dark" ? {
      background: "var(--navy-600)"
    } : variant === "ghost" ? {
      background: "var(--mist-100)"
    } : {} : {};
    return React.createElement("button", {
      type,
      onClick,
      disabled,
      onMouseEnter: () => setH(true),
      onMouseLeave: () => setH(false),
      style: {
        display: full ? "flex" : "inline-flex",
        width: full ? "100%" : "auto",
        alignItems: "center",
        justifyContent: "center",
        gap: 9,
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        fontSize: s.f,
        lineHeight: 1,
        height: variant === "link" ? "auto" : s.h,
        padding: variant === "link" ? 0 : s.p,
        borderRadius: variant === "link" ? 0 : "var(--radius-md)",
        cursor: disabled ? "not-allowed" : "pointer",
        whiteSpace: "nowrap",
        transition: "all var(--dur-base) var(--ease-out)",
        transform: h && !disabled && variant !== "link" ? "translateY(-1px)" : "none",
        ...v,
        ...(disabled ? {
          background: "var(--mist-200)",
          color: "var(--text-faint)",
          borderColor: "transparent",
          boxShadow: "none"
        } : {}),
        ...hov
      },
      ...rest
    }, iconLeft, children, iconRight);
  }

  // ---- Fallback Badge ----
  function FBadge({
    children,
    tone = "soft",
    dot,
    uppercase
  }) {
    const t = {
      soft: ["var(--mist-200)", "var(--ink-700)", "var(--ink-500)"],
      navy: ["var(--navy-800)", "#fff", "var(--gold-500)"],
      gold: ["var(--gold-500)", "var(--navy-800)", "var(--navy-800)"],
      goldsoft: ["rgba(25,57,96,0.06)", "var(--navy-800)", "var(--navy-600)"],
      outline: ["transparent", "var(--navy-800)", "var(--navy-800)"],
      success: ["var(--success-soft)", "var(--green-600)", "var(--success)"],
      warning: ["var(--warning-soft)", "var(--warning)", "var(--warning)"]
    }[tone] || ["var(--mist-200)", "var(--ink-700)", "var(--ink-500)"];
    return React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        background: t[0],
        color: t[1],
        border: tone === "outline" ? "1px solid var(--line-strong)" : "1px solid transparent",
        fontFamily: "var(--font-sans)",
        fontSize: uppercase ? 11.5 : 13,
        fontWeight: 600,
        letterSpacing: uppercase ? "0.8px" : 0,
        textTransform: uppercase ? "uppercase" : "none",
        lineHeight: 1,
        padding: "5px 12px",
        borderRadius: "var(--radius-pill)",
        whiteSpace: "nowrap"
      }
    }, dot ? React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: "50%",
        background: t[2],
        flex: "none"
      }
    }) : null, children);
  }

  // ---- Fallback Card ----
  function FCard({
    children,
    surface = "white",
    pad = "lg",
    radius = "lg",
    interactive,
    bordered = true,
    style = {},
    ...rest
  }) {
    const pads = {
      none: 0,
      sm: 16,
      md: 20,
      lg: 28,
      xl: 36
    };
    const radii = {
      md: "var(--radius-md)",
      lg: "var(--radius-lg)",
      xl: "var(--radius-xl)",
      "2xl": "var(--radius-2xl)"
    };
    const surf = {
      white: ["var(--surface-card)", "var(--text-body)", "var(--hairline)"],
      soft: ["var(--surface-soft)", "var(--text-body)", "var(--hairline)"],
      dark: ["var(--surface-dark)", "var(--text-on-dark-soft)", "var(--hairline-on-dark)"],
      darker: ["var(--surface-darker)", "var(--text-on-dark-soft)", "var(--navy-700)"],
      gold: ["var(--gold-500)", "var(--navy-800)", "transparent"],
      goldsoft: ["var(--surface-soft)", "var(--text-body)", "var(--hairline)"]
    }[surface] || ["var(--surface-card)", "var(--text-body)", "var(--hairline)"];
    const [h, setH] = React.useState(false);
    return React.createElement("div", {
      onMouseEnter: () => interactive && setH(true),
      onMouseLeave: () => interactive && setH(false),
      style: {
        background: surf[0],
        color: surf[1],
        border: bordered ? `1px solid ${surf[2]}` : "1px solid transparent",
        borderRadius: radii[radius],
        padding: pads[pad],
        boxShadow: h ? "var(--shadow-lg)" : surface === "white" ? "var(--shadow-sm)" : "none",
        transform: h ? "translateY(-3px)" : "none",
        transition: "all var(--dur-base) var(--ease-out)",
        ...style
      },
      ...rest
    }, children);
  }

  // ---- Fallback Input ----
  function FInput({
    label,
    hint,
    error,
    type = "text",
    multiline,
    rows = 4,
    required,
    value,
    onChange,
    placeholder,
    id,
    ...rest
  }) {
    const [f, setF] = React.useState(false);
    const fid = id || (label ? "lb-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
    const fs = {
      width: "100%",
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      color: "var(--ink-700)",
      background: "#fff",
      border: `1.5px solid ${error ? "var(--error)" : f ? "var(--navy-800)" : "var(--line-strong)"}`,
      borderRadius: "var(--radius-md)",
      padding: multiline ? "12px 14px" : "0 14px",
      height: multiline ? "auto" : 48,
      boxShadow: f ? "var(--focus-ring)" : "none",
      outline: "none",
      boxSizing: "border-box",
      transition: "all var(--dur-base) var(--ease-out)",
      resize: multiline ? "vertical" : undefined
    };
    const shared = {
      id: fid,
      value,
      onChange,
      placeholder,
      style: fs,
      onFocus: () => setF(true),
      onBlur: () => setF(false),
      ...rest
    };
    return React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 7
      }
    }, label ? React.createElement("label", {
      htmlFor: fid,
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        fontWeight: 600,
        color: "var(--ink-700)"
      }
    }, label, required ? React.createElement("span", {
      style: {
        color: "var(--error)",
        marginLeft: 3
      }
    }, "*") : null) : null, multiline ? React.createElement("textarea", {
      rows,
      ...shared
    }) : React.createElement("input", {
      type,
      ...shared
    }), error ? React.createElement("span", {
      style: {
        fontSize: 12.5,
        color: "var(--error)",
        fontFamily: "var(--font-sans)"
      }
    }, error) : hint ? React.createElement("span", {
      style: {
        fontSize: 12.5,
        color: "var(--text-muted)",
        fontFamily: "var(--font-sans)"
      }
    }, hint) : null);
  }

  // ---- Fallback Tabs ----
  function FTabs({
    tabs = [],
    value,
    defaultValue,
    onChange,
    style = {}
  }) {
    const [int, setInt] = React.useState(defaultValue ?? (tabs[0] && tabs[0].id));
    const active = value !== undefined ? value : int;
    return React.createElement("div", {
      role: "tablist",
      style: {
        display: "inline-flex",
        gap: 4,
        padding: 5,
        background: "var(--mist-100)",
        border: "1px solid var(--hairline)",
        borderRadius: "var(--radius-pill)",
        ...style
      }
    }, tabs.map(t => {
      const a = t.id === active;
      return React.createElement("button", {
        key: t.id,
        type: "button",
        role: "tab",
        "aria-selected": a,
        onClick: () => {
          if (value === undefined) setInt(t.id);
          onChange && onChange(t.id);
        },
        style: {
          fontFamily: "var(--font-display)",
          fontSize: 14.5,
          fontWeight: 600,
          color: a ? "var(--navy-800)" : "var(--text-muted)",
          background: a ? "#fff" : "transparent",
          border: "none",
          borderRadius: "var(--radius-pill)",
          padding: "9px 18px",
          cursor: "pointer",
          boxShadow: a ? "var(--shadow-sm)" : "none",
          whiteSpace: "nowrap",
          transition: "all var(--dur-base) var(--ease-out)"
        }
      }, t.label);
    }));
  }

  // ---- Fallback PricingCard ----
  function FPricingCard({
    name,
    rate,
    rateUnit = "flat dispatch fee",
    description,
    features = [],
    badge,
    featured,
    ctaLabel = "Ring the LogiBell",
    onCta
  }) {
    const dark = featured;
    const Check = () => React.createElement("svg", {
      viewBox: "0 0 24 24",
      width: 18,
      height: 18,
      fill: "none",
      stroke: dark ? "var(--gold-500)" : "var(--navy-800)",
      strokeWidth: 2.4,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: {
        flex: "none",
        marginTop: 1
      }
    }, React.createElement("path", {
      d: "M20 6 9 17l-5-5"
    }));
    const Btn = window.DS.Button;
    return React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        background: dark ? "var(--surface-dark)" : "var(--surface-card)",
        border: `1px solid ${dark ? "var(--navy-700)" : "var(--hairline)"}`,
        borderRadius: "var(--radius-xl)",
        padding: "32px 30px",
        boxShadow: dark ? "var(--shadow-lg)" : "var(--shadow-sm)",
        height: "100%"
      }
    }, React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12
      }
    }, React.createElement("h3", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 21,
        fontWeight: 600,
        letterSpacing: "-0.2px",
        color: dark ? "#fff" : "var(--text-heading)",
        margin: 0
      }
    }, name), badge ? React.createElement(window.DS.Badge, {
      tone: dark ? "gold" : "goldsoft",
      uppercase: true
    }, badge) : null), React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "baseline",
        gap: 8,
        marginTop: 12
      }
    }, React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 46,
        fontWeight: 700,
        letterSpacing: "-1px",
        lineHeight: 1,
        color: dark ? "var(--gold-500)" : "var(--navy-800)"
      }
    }, rate), React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        color: dark ? "var(--on-navy-soft)" : "var(--text-muted)"
      }
    }, rateUnit)), description ? React.createElement("p", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        lineHeight: 1.55,
        color: dark ? "var(--on-navy-soft)" : "var(--text-body)",
        margin: "16px 0 0"
      }
    }, description) : null, React.createElement("div", {
      style: {
        height: 1,
        background: dark ? "var(--navy-700)" : "var(--hairline)",
        margin: "22px 0"
      }
    }), React.createElement("ul", {
      style: {
        listStyle: "none",
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirection: "column",
        gap: 12,
        flex: 1
      }
    }, features.map((ff, i) => React.createElement("li", {
      key: i,
      style: {
        display: "flex",
        gap: 10,
        fontFamily: "var(--font-sans)",
        fontSize: 14.5,
        lineHeight: 1.45,
        color: dark ? "#fff" : "var(--text-strong)"
      }
    }, React.createElement(Check), React.createElement("span", null, ff)))), React.createElement("div", {
      style: {
        marginTop: 28
      }
    }, React.createElement(Btn, {
      variant: dark ? "gold" : "primary",
      full: true,
      size: "md",
      onClick: onCta
    }, ctaLabel)));
  }
  window.DS = {
    Button: NS.Button || FButton,
    Badge: NS.Badge || FBadge,
    Card: NS.Card || FCard,
    Input: NS.Input || FInput,
    Tabs: NS.Tabs || FTabs,
    PricingCard: NS.PricingCard || FPricingCard,
    usingBundle: !!NS.Button
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ds.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/icons.jsx
try { (() => {
/* LogiBell UI kit — icon helper.
   Wraps Lucide (CDN UMD) as a lightweight React <Icon> component so the
   kit uses a real, consistent icon set (clean 2px stroke) instead of
   hand-drawn SVG. */
(function () {
  const L = window.lucide || {};
  const SET = L.icons || L;
  function toPascal(name) {
    return name.replace(/(^|-)([a-z])/g, (_, __, c) => c.toUpperCase());
  }
  function Icon({
    name,
    size = 20,
    stroke = 2,
    color = "currentColor",
    style = {},
    ...rest
  }) {
    const node = SET[toPascal(name)] || SET[name];
    const children = Array.isArray(node) ? node : node && node.length ? node : null;
    // lucide IconNode: array of [tag, attrs] children
    const kids = (children || []).map((c, i) => {
      const [tag, attrs] = c;
      return React.createElement(tag, {
        key: i,
        ...attrs
      });
    });
    return React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: stroke,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: {
        display: "block",
        flex: "none",
        ...style
      },
      ...rest
    }, kids);
  }
  window.Icon = Icon;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/lanes.js
try { (() => {
/* LogiBell — Homepage load-board data.
   ───────────────────────────────────────────────────────────────────────────
   EDIT THIS FILE WEEKLY. This drives the "Lane activity" board in the hero.
   Keep it truthful: list only representative recent lanes that were actually
   booked. Anonymized lanes only — NO carrier, broker, shipper, or MC names.

   Fields per lane:
     from      "City, ST"
     to        "City, ST"
     equipment "Dry Van" | "Reefer" | "Flatbed" | "Power Only" | "Box" | "Hotshot" | "Sprinter"
     mode      "FTL" | "LTL"
     rate      "$1,850"  (linehaul; owner-maintained, representative)

   If a given week's lanes aren't ready, set LB_LANES = [] — the board falls
   back to a clean "Recent lanes — updated weekly" state (no fabricated volume).
   ─────────────────────────────────────────────────────────────────────────── */
window.LB_LANES_UPDATED = "Updated weekly"; // PROVISIONAL — set to a real week label, e.g. "Week of Jun 2"
window.LB_LANES = [{
  from: "Los Angeles, CA",
  to: "Phoenix, AZ",
  equipment: "Dry Van",
  mode: "FTL",
  rate: "$1,850"
}, {
  from: "Dallas, TX",
  to: "Memphis, TN",
  equipment: "Reefer",
  mode: "FTL",
  rate: "$2,300"
}, {
  from: "Atlanta, GA",
  to: "Miami, FL",
  equipment: "Flatbed",
  mode: "FTL",
  rate: "$1,650"
}, {
  from: "Chicago, IL",
  to: "Detroit, MI",
  equipment: "Power Only",
  mode: "FTL",
  rate: "$900"
}, {
  from: "Houston, TX",
  to: "New Orleans, LA",
  equipment: "Box",
  mode: "LTL",
  rate: "$780"
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/lanes.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.PricingCard = __ds_scope.PricingCard;

})();
