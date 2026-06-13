/* LogiBell — App shell & hash-based page router.
   Real routed pages (one URL each, browser back/forward, shareable, deep-link
   anchors) over a static deploy. One consistent nav + footer wraps every page. */
(function () {
  const { AnnouncementBar, TopNav, Footer } = window.LBChrome;
  const Icon = window.Icon;
  const { Hero, WhatIs, Services, ReferralBand } = window.LBHome;
  const { Different, WhoWeAre, NewAuthority, FinalCTA } = window.LBHome2;
  const { PricingPage } = window.LBPricing;
  const { ContactPage } = window.LBContact;
  const { ServicesPage, WhoWeArePage, NewAuthorityPage, PartnerPage } = window.LBPages;
  const { PrivacyPage, TermsPage, NotFound } = window.LBLegal;
  const { LogiGuardStrip } = window.LBGuard;
  const { FeedbackSection, FAQSection } = window.LBExtras;

  /* Per-page SEO metadata (title + description). Canonical/OG base lives in
     index.html; we update title + description + canonical path on navigation. */
  const SITE = "https://logibell.com"; // PROVISIONAL domain — confirm before launch
  const META = {
    home: { path: "/", title: "LogiBell — Carrier-Focused Operations Support", desc: "Carrier-focused operations support for carriers of every size — dispatch, broker communication, paperwork, and partner access. Published pricing. Your operation, fully backed." },
    services: { path: "/services", title: "Services — LogiBell", desc: "Dispatch & load sourcing, operations & back-office, and partner & growth support — plus LogiGuard, a free verification check on any broker, MC, or load." },
    pricing: { path: "/pricing", title: "Published Pricing — LogiBell", desc: "Published dispatch pricing: Semi 6%, Box/Hotshot/Sprinter 6–8%. No setup fees, no monthly minimums. Know your rate before you call." },
    authority: { path: "/new-authority", title: "Special Treatment Program for Newer Authorities — LogiBell", desc: "Authority age isn't the barrier. The same dispatch service with extra effort and established broker relationships, structured for newer authorities through their first year." },
    about: { path: "/who-we-are", title: "Who We Are — LogiBell", desc: "A carrier-focused operations team built for carriers of every size — from owner-operators to small and larger fleets — supporting the work behind the wheel." },
    partners: { path: "/partner-access", title: "Partner Access — LogiBell", desc: "Free, competitive insurance quotes through vetted partners, lease-on referrals, and factoring/compliance contacts that open up as the relationship develops." },
    contact: { path: "/contact", title: "Ring the LogiBell — Get Onboarded", desc: "Tell us about your operation and we'll get you set up. Published pricing, no setup fees, no monthly minimums." },
    privacy: { path: "/privacy", title: "Privacy Policy — LogiBell", desc: "How LogiBell collects, uses, and protects your information." },
    terms: { path: "/terms", title: "Terms of Service — LogiBell", desc: "The terms that govern your use of the LogiBell website and services." },
    notfound: { path: "/404", title: "Page not found — LogiBell", desc: "The page you're looking for moved or never existed." },
  };

  const PAGES = ["home", "services", "pricing", "authority", "about", "partners", "contact", "privacy", "terms"];

  // friendly URL slugs <-> internal page keys, so URLs read /new-authority etc.
  const KEY_TO_SLUG = { home: "", authority: "new-authority", about: "who-we-are", partners: "partner-access" };
  const SLUG_TO_KEY = { "": "home", "new-authority": "authority", "who-we-are": "about", "partner-access": "partners" };
  const slugFor = (key) => (key in KEY_TO_SLUG ? KEY_TO_SLUG[key] : key);
  const keyFor = (slug) => (slug in SLUG_TO_KEY ? SLUG_TO_KEY[slug] : slug);

  function parseHash() {
    const raw = (window.location.hash || "").replace(/^#\/?/, "");
    const [slug, anchor] = raw.split("/");
    const key = keyFor(slug || "");
    const valid = PAGES.includes(key) ? key : (slug ? "notfound" : "home");
    return { page: valid, anchor: anchor || null };
  }

  function hashFor(key, anchor) {
    const slug = slugFor(key === "notfound" ? "404" : key);
    return "#/" + slug + (anchor ? (slug ? "/" : "") + anchor : "");
  }

  function setMetaTag(page) {
    const m = META[page] || META.notfound;
    document.title = m.title;
    const setTag = (sel, attr, val) => { const el = document.head.querySelector(sel); if (el) el.setAttribute(attr, val); };
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

    const scrollToAnchor = React.useCallback((anchor) => {
      const root = scrollRef.current;
      if (!root) return;
      if (anchor) {
        const el = document.getElementById(anchor);
        if (el) {
          const top = el.getBoundingClientRect().top - root.getBoundingClientRect().top + root.scrollTop - 128;
          root.scrollTo({ top, behavior: "smooth" });
          return;
        }
      }
      root.scrollTo({ top: 0, behavior: "auto" });
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
        setNavTick((t) => t + 1); // same hash (e.g. anchor re-click): force a scroll
      }
    }, []);

    // react to hash changes (back/forward, manual edits, deep links)
    React.useEffect(() => {
      function onHash() {
        const { page: p, anchor } = parseHash();
        pendingAnchor.current = anchor;
        setPage(p);
        setNavTick((t) => t + 1);
      }
      window.addEventListener("hashchange", onHash);
      window.__lbnav = navigate;
      return () => window.removeEventListener("hashchange", onHash);
    }, [navigate]);

    // meta updates follow the page key
    React.useEffect(() => { setMetaTag(page); }, [page]);

    // back-to-top button: reveal once the user scrolls roughly one screen down.
    // Uses an IntersectionObserver sentinel (robust across browsers / programmatic
    // scrolls) rather than a scroll listener.
    const [showTop, setShowTop] = React.useState(false);
    const topSentinel = React.useRef(null);
    React.useEffect(() => {
      const root = scrollRef.current;
      const sentinel = topSentinel.current;
      if (!root || !sentinel || typeof IntersectionObserver === "undefined") return;
      const io = new IntersectionObserver(
        (entries) => { setShowTop(!entries[0].isIntersecting); },
        { root, threshold: 0 }
      );
      io.observe(sentinel);
      return () => io.disconnect();
    }, []);
    const scrollToTop = React.useCallback(() => {
      const root = scrollRef.current;
      if (!root) return;
      const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      root.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    }, []);

    // scroll on every navigation (anchor or top) — fires even when page key is unchanged
    React.useEffect(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => { scrollToAnchor(pendingAnchor.current); pendingAnchor.current = null; });
      });
    }, [navTick, scrollToAnchor]);

    // scroll-reveal: soft entrance (600ms, 24px rise, 80ms sibling stagger) for
    // section content. Transform/opacity only (no CLS); skipped entirely under
    // prefers-reduced-motion. Applied to direct children of each section wrap.
    React.useEffect(() => {
      if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const root = scrollRef.current;
      if (!root || typeof IntersectionObserver === "undefined") return;
      const io = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
      root.querySelectorAll("main section > .lb-wrap").forEach((wrap) => {
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
          return (
            <React.Fragment>
              <Hero navigate={navigate} />
              <WhatIs />
              <Services navigate={navigate} />
              <Different />
              <WhoWeAre navigate={navigate} />
              <NewAuthority navigate={navigate} />
              <LogiGuardStrip navigate={navigate} />
              <ReferralBand navigate={navigate} />
              <FeedbackSection />
              <FAQSection navigate={navigate} />
              <FinalCTA navigate={navigate} />
            </React.Fragment>
          );
        case "services": return <ServicesPage navigate={navigate} />;
        case "pricing": return <PricingPage navigate={navigate} />;
        case "authority": return <NewAuthorityPage navigate={navigate} />;
        case "about": return <WhoWeArePage navigate={navigate} />;
        case "partners": return <PartnerPage navigate={navigate} />;
        case "contact": return <ContactPage navigate={navigate} />;
        case "privacy": return <PrivacyPage navigate={navigate} />;
        case "terms": return <TermsPage navigate={navigate} />;
        default: return <NotFound navigate={navigate} />;
      }
    }

    return (
      <div ref={scrollRef} id="lb-scroll" style={{ height: "100vh", overflowY: "auto", overflowX: "hidden", background: "var(--surface-page)", position: "relative" }}>
        <div ref={topSentinel} aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, width: 1, height: "85vh", pointerEvents: "none", opacity: 0 }}></div>
        <AnnouncementBar />
        <TopNav page={page} navigate={navigate} />
        <main>{renderPage()}</main>
        <Footer navigate={navigate} />
        <button
          type="button"
          className={"lb-back-top" + (showTop ? " is-on" : "")}
          onClick={scrollToTop}
          aria-label="Back to top"
          tabIndex={showTop ? 0 : -1}
        >
          <Icon name="arrow-up-to-line" size={22} stroke={2.4} />
          <span className="lb-back-top-label">Top</span>
        </button>
      </div>
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
})();
