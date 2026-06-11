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
  const MARK = "./assets/logo/logibell-mark.svg";

  function Aff({ dark, label, back }) {
    return (
      <span className={"lb-flip-aff" + (dark ? " lb-flip-aff--dark" : "")} aria-hidden="true">
        {back ? <span className="lb-aff-ic"><Icon name="arrow-left" size={13} stroke={2.4} /></span> : null}
        <span>{label}</span>
        {back ? null : <span className="lb-aff-ic"><Icon name="rotate-cw" size={13} stroke={2.4} /></span>}
      </span>
    );
  }

  function FlipCard({
    front, back, frontDark = false, backDark = false,
    label = "Flip card for details",
    frontHint = "Tap for details", backHint = "Back",
    style = {}, className = "",
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
      const io = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            el.classList.add("lb-aff-nudge");
            setTimeout(() => el.classList.remove("lb-aff-nudge"), 800);
            io.unobserve(en.target);
          }
        });
      }, { threshold: 0.45 });
      io.observe(el);
      return () => io.disconnect();
    }, []);

    function toggle() {
      const now = Date.now();
      if (now - last.current < 400) return; // ghost-click / double-tap guard (touch)
      last.current = now;
      setFlipped((f) => !f);
    }
    function onClick(e) {
      // interactive children keep their own behavior — they never flip the card
      if (e.target.closest && e.target.closest("a, button, input, textarea, select, [data-no-flip]")) return;
      toggle();
    }
    function onKeyDown(e) {
      if (e.target !== e.currentTarget) return; // don't hijack inner controls
      if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") { e.preventDefault(); toggle(); }
    }

    return (
      <div
        ref={rootRef}
        className={"lb-flip" + (flipped ? " is-flipped" : "") + (className ? " " + className : "")}
        style={style}
        tabIndex={0}
        role="button"
        aria-pressed={flipped}
        aria-label={label}
        onClick={onClick}
        onKeyDown={onKeyDown}
      >
        <div className="lb-flip-inner">
          <div className="lb-flip-face lb-flip-front" ref={frontRef} aria-hidden={flipped}>
            {front}
            <Aff dark={frontDark} label={frontHint} />
          </div>
          <div className="lb-flip-face lb-flip-back" ref={backRef} aria-hidden={!flipped}>
            {back}
            <Aff dark={backDark} label={backHint} back />
          </div>
        </div>
      </div>
    );
  }

  window.LBFlip = { FlipCard };
})();
