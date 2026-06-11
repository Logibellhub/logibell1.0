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

  function Icon({ name, size = 20, stroke = 2, color = "currentColor", style = {}, ...rest }) {
    const node = SET[toPascal(name)] || SET[name];
    const children = Array.isArray(node) ? node : (node && node.length ? node : null);
    // lucide IconNode: array of [tag, attrs] children
    const kids = (children || []).map((c, i) => {
      const [tag, attrs] = c;
      return React.createElement(tag, { key: i, ...attrs });
    });
    return React.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: stroke,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        style: { display: "block", flex: "none", ...style },
        ...rest,
      },
      kids
    );
  }

  window.Icon = Icon;
})();
