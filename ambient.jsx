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
  function NavyDrift({ variant = 0 }) {
    const sets = [
      [
        { size: 520, top: "-18%", left: "-8%", o: 0.05, a: 1 },
        { size: 380, top: "42%", right: "-9%", o: 0.04, a: 2 },
        { size: 260, bottom: "-24%", left: "32%", o: 0.03, a: 3 },
      ],
      [
        { size: 460, top: "-26%", right: "4%", o: 0.04, a: 2 },
        { size: 340, bottom: "-20%", left: "-6%", o: 0.05, a: 1 },
      ],
      [
        { size: 420, top: "8%", left: "-10%", o: 0.04, a: 3 },
        { size: 300, bottom: "-26%", right: "-4%", o: 0.05, a: 2 },
      ],
    ];
    const shapes = sets[variant % sets.length];
    return (
      <div className="lb-amb" aria-hidden="true">
        {shapes.map((s, i) => (
          <span
            key={i}
            className={"lb-drift lb-drift-" + s.a}
            style={{
              width: s.size, height: s.size,
              top: s.top, left: s.left, right: s.right, bottom: s.bottom,
              background: "radial-gradient(circle, rgba(255,255,255," + s.o + ") 0%, rgba(255,255,255,0) 70%)",
            }}
          ></span>
        ))}
      </div>
    );
  }

  /* Dotted route-line motif for light sections — anchored in a corner so text
     columns stay clean. Dots flow gently along the route like lane markings
     (.lb-route-line in styles.css); fully disabled under reduced-motion. */
  function RouteMotif({ corner = "tr", width = 440 }) {
    const pos = {
      tr: { top: -24, right: -36 },
      br: { bottom: -24, right: -36 },
      tl: { top: -24, left: -36 },
      bl: { bottom: -24, left: -36 },
    }[corner] || { top: -24, right: -36 };
    return (
      <div className="lb-amb" aria-hidden="true">
        <svg width={width} height={Math.round(width * 0.55)} viewBox="0 0 440 242" fill="none" style={{ position: "absolute", ...pos }}>
          <path className="lb-route-line" d="M8 222 C 96 158, 158 206, 224 136 S 348 44, 432 20" stroke="var(--navy-800)" strokeOpacity="0.07" strokeWidth="2" strokeDasharray="1 10" strokeLinecap="round"></path>
          <circle cx="8" cy="222" r="4" fill="var(--navy-800)" fillOpacity="0.07"></circle>
          <circle cx="432" cy="20" r="4" fill="var(--navy-800)" fillOpacity="0.07"></circle>
        </svg>
      </div>
    );
  }

  window.LBAmbient = { NavyDrift, RouteMotif };
})();
