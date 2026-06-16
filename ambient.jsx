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

  /* Freight route network — a faint city/route map with small semi-trucks
     tracing the lanes. Trucking-native depth for the hero. Route lines stay
     very low opacity and the left third is masked out so headline contrast is
     never affected. Trucks animate via SMIL and are omitted entirely under
     prefers-reduced-motion. */
  function FreightNetwork() {
    const reduce = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const Truck = ({ pathId, dur, begin, color }) => (
      <g>
        <g fill={color} fillOpacity="0.9">
          <rect x="-12" y="-6" width="15" height="10" rx="1.4" />
          <rect x="3" y="-3.6" width="6" height="7.6" rx="1" />
          <circle cx="-7" cy="5.4" r="1.8" fill="var(--navy-900)" />
          <circle cx="-1" cy="5.4" r="1.8" fill="var(--navy-900)" />
          <circle cx="7" cy="5.4" r="1.8" fill="var(--navy-900)" />
        </g>
        <animateMotion dur={dur + "s"} begin={(begin || 0) + "s"} repeatCount="indefinite" rotate="auto">
          <mpath href={"#" + pathId} />
        </animateMotion>
      </g>
    );
    return (
      <div className="lb-amb" aria-hidden="true">
        <svg viewBox="0 0 1200 560" preserveAspectRatio="xMidYMid slice"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%",
            WebkitMaskImage: "linear-gradient(90deg, transparent 0%, #000 32%, #000 100%)",
            maskImage: "linear-gradient(90deg, transparent 0%, #000 32%, #000 100%)" }}>
          <g stroke="var(--navy-800)" strokeOpacity="0.07" strokeWidth="1.4" fill="none">
            <path d="M150 150 L370 230" /><path d="M370 230 L620 170" /><path d="M620 170 L1000 150" />
            <path d="M370 230 L560 360" /><path d="M560 360 L840 250" /><path d="M840 250 L1000 150" />
            <path d="M840 250 L910 410" /><path d="M910 410 L1090 340" /><path d="M620 170 L840 250" />
            <path d="M330 400 L560 360" /><path d="M370 230 L330 400" />
          </g>
          <g fill="var(--navy-800)" fillOpacity="0.11">
            <circle cx="150" cy="150" r="3.5" /><circle cx="370" cy="230" r="3.5" /><circle cx="330" cy="400" r="3" />
            <circle cx="560" cy="360" r="3.5" /><circle cx="1000" cy="150" r="3.5" /><circle cx="910" cy="410" r="3" />
            <circle cx="1090" cy="340" r="3" />
          </g>
          <g fill="var(--gold-500)" fillOpacity="0.5">
            <circle cx="620" cy="170" r="4" /><circle cx="840" cy="250" r="4" />
          </g>
          <path id="lbfn-r1" d="M150 150 L370 230 L620 170 L840 250 L1000 150" fill="none" stroke="none" />
          <path id="lbfn-r2" d="M330 400 L560 360 L910 410 L1090 340" fill="none" stroke="none" />
          <path id="lbfn-r3" d="M370 230 L560 360 L840 250" fill="none" stroke="none" />
          {!reduce ? (
            <React.Fragment>
              <Truck pathId="lbfn-r1" dur={21} begin={0} color="var(--gold-500)" />
              <Truck pathId="lbfn-r2" dur={26} begin={4} color="var(--gold-600)" />
              <Truck pathId="lbfn-r3" dur={24} begin={8} color="var(--navy-600)" />
            </React.Fragment>
          ) : null}
        </svg>
      </div>
    );
  }

  window.LBAmbient = { NavyDrift, RouteMotif, FreightNetwork };
})();
