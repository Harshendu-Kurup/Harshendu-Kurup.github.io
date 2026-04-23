(() => {
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const header = document.querySelector("[data-elevate]");
  const setHeader = () => {
    if (!header) return;
    header.setAttribute("data-elevated", String(window.scrollY > 6));
  };
  setHeader();
  window.addEventListener("scroll", setHeader, { passive: true });

  const copyButtons = document.querySelectorAll("[data-copy]");
  copyButtons.forEach((btn) => {
    btn.addEventListener("click", async () => {
      const value = btn.getAttribute("data-copy");
      if (!value) return;
      try {
        await navigator.clipboard.writeText(value);
        const prev = btn.textContent;
        btn.textContent = "Copied";
        btn.setAttribute("aria-live", "polite");
        window.setTimeout(() => {
          btn.textContent = prev;
        }, 1200);
      } catch {
        // Clipboard API can be blocked; fall back gracefully.
        window.location.href = `mailto:${value}`;
      }
    });
  });

  // Active nav link (desktop only nav is hidden on small screens).
  const navLinks = Array.from(document.querySelectorAll(".navLink"));
  if (navLinks.length) {
    const linkById = new Map(
      navLinks
        .map((a) => {
          const href = a.getAttribute("href") || "";
          const id = href.startsWith("#") ? href.slice(1) : "";
          return id ? [id, a] : null;
        })
        .filter(Boolean)
    );

    const sections = Array.from(linkById.keys())
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const setCurrent = (id) => {
      navLinks.forEach((a) => a.removeAttribute("aria-current"));
      const a = linkById.get(id);
      if (a) a.setAttribute("aria-current", "true");
    };

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))[0];
        if (visible?.target?.id) setCurrent(visible.target.id);
      },
      { root: null, threshold: [0.2, 0.35, 0.5], rootMargin: "-20% 0px -70% 0px" }
    );

    sections.forEach((s) => io.observe(s));
  }
})();
