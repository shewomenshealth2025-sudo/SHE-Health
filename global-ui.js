(() => {
  "use strict";

  const MOBILE_BREAKPOINT = 950;

  const mobileCss = `
    /* ===== SHE UNIFIED MOBILE SYSTEM ===== */
    html, body {
      max-width: 100%;
      overflow-x: hidden !important;
    }

    img, video, iframe, svg {
      max-width: 100%;
    }

    .she-unified-mobile-menu {
      display: none;
    }

    /* Kill older duplicate mobile menu systems */
    .mobile-menu-panel,
    #mobileSidebar,
    #mobileOverlay,
    .mobile-sidebar,
    .mobile-overlay,
    .she-mobile-header,
    .she-mobile-menu {
      display: none !important;
    }

    /* Never show the mobile control on desktop */
    .mobile-menu-btn,
    .menu-toggle,
    .she-unified-menu-btn {
      display: none !important;
    }

    @media (max-width: ${MOBILE_BREAKPOINT}px) {
      html {
        -webkit-text-size-adjust: 100%;
      }

      body {
        width: 100%;
        min-width: 0;
      }

      body.she-menu-open {
        overflow: hidden !important;
      }

      /* ---------- HEADER ---------- */
      .nav {
        position: sticky !important;
        top: 0 !important;
        z-index: 100000 !important;
        width: 100% !important;
        background: rgba(255,255,255,.98) !important;
        backdrop-filter: blur(14px);
      }

      .nav .wrap,
      .nav-inner {
        width: 100% !important;
        max-width: none !important;
      }

      .nav-inner {
        height: 76px !important;
        min-height: 76px !important;
        padding: 10px 16px !important;
        margin: 0 !important;
        display: flex !important;
        align-items: center !important;
        justify-content: space-between !important;
        flex-wrap: nowrap !important;
        gap: 10px !important;
      }

      .brand {
        min-width: 0 !important;
        flex: 1 1 auto !important;
        gap: 10px !important;
        overflow: hidden;
      }

      .brand-logo {
        width: 46px !important;
        height: 46px !important;
        flex: 0 0 46px !important;
      }

      .brand-text {
        min-width: 0 !important;
      }

      .brand-name {
        font-size: 30px !important;
        line-height: .95 !important;
      }

      .brand-tag {
        display: none !important;
      }

      .links,
      .header-early-access {
        display: none !important;
      }

      .mobile-menu-btn,
      .menu-toggle,
      .she-unified-menu-btn {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        flex: 0 0 46px !important;
        width: 46px !important;
        height: 46px !important;
        padding: 0 !important;
        margin: 0 !important;
        border: 0 !important;
        border-radius: 14px !important;
        background: #ec3d86 !important;
        color: #fff !important;
        font-size: 22px !important;
        line-height: 1 !important;
        font-family: Arial, Helvetica, sans-serif !important;
        font-weight: 900 !important;
        box-shadow: 0 10px 24px rgba(236,61,134,.22) !important;
        cursor: pointer !important;
        appearance: none !important;
      }

      .she-unified-mobile-menu {
        position: fixed !important;
        top: 76px !important;
        left: 0 !important;
        right: 0 !important;
        z-index: 99999 !important;
        max-height: calc(100svh - 76px) !important;
        overflow-y: auto !important;
        padding: 12px 18px 22px !important;
        background: rgba(255,255,255,.99) !important;
        border-bottom: 1px solid #f4d7e5 !important;
        box-shadow: 0 22px 50px rgba(53,16,45,.14) !important;
      }

      body.she-menu-open .she-unified-mobile-menu {
        display: block !important;
      }

      .she-unified-mobile-menu a {
        display: flex !important;
        align-items: center !important;
        min-height: 52px !important;
        padding: 12px 4px !important;
        color: #35102d !important;
        font-size: 17px !important;
        font-weight: 900 !important;
        border-bottom: 1px solid #f7ddea !important;
        text-decoration: none !important;
      }

      .she-unified-mobile-menu a.active {
        color: #ec3d86 !important;
      }

      .she-unified-mobile-menu a.she-mobile-cta {
        justify-content: center !important;
        min-height: 48px !important;
        margin-top: 12px !important;
        padding: 13px 18px !important;
        border: 0 !important;
        border-radius: 999px !important;
        background: #ec3d86 !important;
        color: #fff !important;
      }

      /* ---------- GLOBAL MOBILE LAYOUT ---------- */
      main,
      section {
        max-width: 100% !important;
      }

      h1, h2, h3, p, li {
        overflow-wrap: break-word;
      }

      .homepage-hero,
      .discover-hero,
      .forum-hero,
      .partners-hero,
      .contact-hero {
        padding-left: 18px !important;
        padding-right: 18px !important;
      }

      .homepage-hero {
        padding-top: 42px !important;
        padding-bottom: 24px !important;
      }

      .discover-hero,
      .forum-hero,
      .partners-hero,
      .contact-hero {
        padding-top: 46px !important;
        padding-bottom: 32px !important;
      }

      .home-hero-card,
      .what-card,
      .strategy-panel,
      .moderator-card,
      .audience-panel,
      .enquiry-panel,
      .about-panel,
      .contact-shell {
        grid-template-columns: 1fr !important;
      }

      .home-hero-card {
        min-height: 0 !important;
        gap: 24px !important;
      }

      .home-hero-copy {
        padding: 8px 0 0 !important;
      }

      .home-title,
      .discover-hero h1,
      .forum-hero h1,
      .partners-hero h1,
      .contact-hero h1 {
        font-size: clamp(40px, 12vw, 58px) !important;
        line-height: .96 !important;
        letter-spacing: -.055em !important;
      }

      .home-intro,
      .discover-intro,
      .forum-hero p,
      .partners-hero p,
      .contact-hero p {
        font-size: 17px !important;
        line-height: 1.6 !important;
      }

      .home-demo-note {
        width: 100% !important;
        border-radius: 18px !important;
        line-height: 1.45 !important;
      }

      .home-actions,
      .hero-actions,
      .discover-actions {
        display: grid !important;
        grid-template-columns: 1fr !important;
        width: 100% !important;
        gap: 10px !important;
      }

      .home-actions a,
      .hero-actions a,
      .discover-actions a,
      .discover-btn,
      .home-btn {
        width: 100% !important;
        text-align: center !important;
      }

      .home-visual {
        min-height: 0 !important;
      }

      .hero-women-image {
        width: 100% !important;
        max-width: 520px !important;
        margin: 0 auto !important;
      }

      /* ---------- HOME ---------- */
      .what-is-she {
        padding: 22px 18px 58px !important;
      }

      .what-card {
        padding: 24px !important;
        gap: 24px !important;
        border-radius: 28px !important;
      }

      .what-title {
        font-size: clamp(34px, 10vw, 48px) !important;
      }

      .what-text {
        font-size: 16px !important;
        line-height: 1.65 !important;
      }

      .what-grid {
        grid-template-columns: 1fr !important;
      }

      .what-pill {
        min-height: 0 !important;
        padding: 20px !important;
        border-radius: 22px !important;
      }

      /* ---------- DISCOVER / LIVE APP ---------- */
      .app-section {
        padding: 12px 12px 64px !important;
      }

      .app-meta {
        display: block !important;
        margin-bottom: 16px !important;
      }

      .app-meta h2 {
        font-size: clamp(30px, 9vw, 42px) !important;
      }

      .live-badge {
        margin-top: 14px !important;
      }

      .app-window {
        width: 100% !important;
        border-radius: 20px !important;
        overflow: hidden !important;
      }

      .browser-bar {
        height: 44px !important;
        padding: 0 10px !important;
      }

      .browser-dots {
        display: none !important;
      }

      .browser-address {
        width: 100% !important;
        max-width: none !important;
      }

      .app-frame {
        width: 100% !important;
        height: 76svh !important;
        min-height: 620px !important;
        border: 0 !important;
      }

      .app-note {
        display: block !important;
        padding: 14px 2px 0 !important;
      }

      .app-note a {
        display: inline-block !important;
        margin-top: 7px !important;
      }

      /* ---------- FORUM ---------- */
      .strategy-section,
      .programme-section,
      .moderator-section,
      .speakers-section,
      .audience-section,
      .registration-section,
      .sponsor-section,
      .forum-section {
        padding-left: 18px !important;
        padding-right: 18px !important;
      }

      .strategy-section,
      .programme-section,
      .moderator-section,
      .speakers-section,
      .audience-section,
      .registration-section {
        padding-bottom: 56px !important;
      }

      .sponsor-section {
        padding-bottom: 70px !important;
      }

      .strategy-panel,
      .moderator-card,
      .audience-panel,
      .registration-panel,
      .sponsor-panel {
        padding: 24px !important;
        border-radius: 26px !important;
        gap: 22px !important;
      }

      .programme-row {
        grid-template-columns: 1fr !important;
        gap: 6px !important;
        padding: 20px !important;
      }

      .panel-title {
        display: block !important;
      }

      .panel-title span {
        display: inline-flex !important;
        margin-bottom: 12px !important;
      }

      .panel-title h3 {
        font-size: 25px !important;
      }

      .speaker-grid {
        grid-template-columns: 1fr !important;
      }

      .speaker-card {
        padding: 22px !important;
        border-radius: 22px !important;
      }

      .registration-panel {
        flex-direction: column !important;
        align-items: stretch !important;
      }

      .registration-panel .btn,
      .sponsor-panel .btn {
        width: 100% !important;
        text-align: center !important;
      }

      /* ---------- PARTNERS ---------- */
      .partners-section,
      .why-section,
      .enquiry-section {
        padding-left: 18px !important;
        padding-right: 18px !important;
      }

      .partners-section {
        padding-bottom: 56px !important;
      }

      .why-section,
      .enquiry-section {
        padding-bottom: 60px !important;
      }

      .partners-grid {
        grid-template-columns: 1fr !important;
      }

      .partner-card {
        padding: 24px !important;
        border-radius: 24px !important;
      }

      .why-panel,
      .enquiry-panel {
        padding: 24px !important;
        border-radius: 26px !important;
      }

      .partner-form button {
        width: 100% !important;
      }

      /* ---------- CONTACT ---------- */
      .about-section,
      .contact-section {
        padding-left: 18px !important;
        padding-right: 18px !important;
      }

      .about-section {
        padding-bottom: 56px !important;
      }

      .contact-section {
        padding-bottom: 70px !important;
      }

      .about-panel,
      .contact-shell,
      .contact-cards {
        grid-template-columns: 1fr !important;
      }

      .about-panel,
      .about-box,
      .info-card,
      .form-card {
        padding: 24px !important;
        border-radius: 24px !important;
      }

      .contact-cards {
        gap: 14px !important;
      }

      .contact-form input,
      .contact-form select,
      .contact-form textarea,
      .partner-form input,
      .partner-form select,
      .partner-form textarea {
        min-width: 0 !important;
        font-size: 16px !important;
      }

      /* ---------- SHARED FOOTER ---------- */
      .site-footer {
        padding: 42px 18px !important;
        margin-top: 0 !important;
      }

      .footer-container {
        grid-template-columns: 1fr !important;
        gap: 30px !important;
      }

      .footer-form {
        width: 100% !important;
        max-width: 100% !important;
      }

      .footer-form input {
        min-width: 0 !important;
      }
    }

    @media (max-width: 390px) {
      .nav-inner {
        padding-left: 12px !important;
        padding-right: 12px !important;
      }

      .brand-logo {
        width: 42px !important;
        height: 42px !important;
        flex-basis: 42px !important;
      }

      .brand-name {
        font-size: 27px !important;
      }

      .mobile-menu-btn,
      .menu-toggle,
      .she-unified-menu-btn {
        width: 42px !important;
        height: 42px !important;
        flex-basis: 42px !important;
      }

      .home-title,
      .discover-hero h1,
      .forum-hero h1,
      .partners-hero h1,
      .contact-hero h1 {
        font-size: 39px !important;
      }

      .app-frame {
        min-height: 580px !important;
      }
    }
  `;

  function injectMobileCss() {
    if (document.getElementById("she-unified-mobile-css")) return;
    const style = document.createElement("style");
    style.id = "she-unified-mobile-css";
    style.textContent = mobileCss;
    document.head.appendChild(style);
  }

  function currentPage() {
    const path = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
    return path === "" ? "index.html" : path;
  }

  function setupUnifiedMenu() {
    const header = document.querySelector("header.nav");
    if (!header) return;

    const navInner = header.querySelector(".nav-inner");
    if (!navInner) return;

    // Keep only one page-level mobile button.
    const existingButtons = Array.from(
      navInner.querySelectorAll(".mobile-menu-btn, .menu-toggle")
    );

    let button = existingButtons[0];

    existingButtons.slice(1).forEach((item) => item.remove());

    if (!button) {
      button = document.createElement("button");
      navInner.appendChild(button);
    }

    button.className = "mobile-menu-btn she-unified-menu-btn";
    button.type = "button";
    button.innerHTML = "☰";
    button.setAttribute("aria-label", "Open navigation");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-controls", "sheUnifiedMobileMenu");

    // Remove old page-level menu panels so only one system remains.
    document
      .querySelectorAll(
        ".mobile-menu-panel, #mobileSidebar, #mobileOverlay, .mobile-sidebar, .mobile-overlay"
      )
      .forEach((el) => el.remove());

    let menu = document.getElementById("sheUnifiedMobileMenu");

    if (!menu) {
      menu = document.createElement("nav");
      menu.id = "sheUnifiedMobileMenu";
      menu.className = "she-unified-mobile-menu";
      menu.setAttribute("aria-label", "Mobile navigation");
      header.insertAdjacentElement("afterend", menu);
    }

    const page = currentPage();
    const links = [
      ["index.html", "Home"],
      ["platform.html", "Discover"],
      ["forum.html", "SHE Forum"],
      ["partners.html", "Partners"],
      ["contact.html", "Contact"],
    ];

    menu.innerHTML =
      links
        .map(([href, label]) => {
          const active = page === href ? ' class="active"' : "";
          return `<a href="${href}"${active}>${label}</a>`;
        })
        .join("") +
      `<a class="she-mobile-cta" href="https://forms.gle/8C21wsKWfFVxAec66" target="_blank" rel="noopener">Join Early Access</a>`;

    function closeMenu() {
      document.body.classList.remove("she-menu-open");
      button.innerHTML = "☰";
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-label", "Open navigation");
    }

    function openMenu() {
      document.body.classList.add("she-menu-open");
      button.innerHTML = "×";
      button.setAttribute("aria-expanded", "true");
      button.setAttribute("aria-label", "Close navigation");
    }

    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (document.body.classList.contains("she-menu-open")) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    menu.addEventListener("click", (event) => {
      if (event.target.closest("a")) closeMenu();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > MOBILE_BREAKPOINT) closeMenu();
    });
  }

  function setupLegacyHeaderMenu() {
    const button = document.querySelector(".she-menu-btn");
    const nav = document.querySelector(".she-mobile-nav");
    if (!button || !nav) return;

    button.addEventListener("click", () => {
      nav.classList.toggle("open");
      button.textContent = nav.classList.contains("open") ? "×" : "☰";
    });
  }

  function setupFilters() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const filterItems = document.querySelectorAll(".filter-item");

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.dataset.filter;

        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        filterItems.forEach((item) => {
          item.style.display =
            filter === "all" || item.dataset.category === filter ? "" : "none";
        });
      });
    });
  }

  function setupExpanders() {
    document.querySelectorAll(".expand-btn").forEach((button) => {
      if (button.dataset.sheBound === "1") return;
      button.dataset.sheBound = "1";

      const originalText = button.textContent;

      button.addEventListener("click", () => {
        const hiddenContent = button.nextElementSibling;
        if (!hiddenContent) return;

        hiddenContent.classList.toggle("open");
        button.textContent = hiddenContent.classList.contains("open")
          ? "Close"
          : originalText;
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    injectMobileCss();
    setupUnifiedMenu();
    setupLegacyHeaderMenu();
    setupFilters();
    setupExpanders();
  });
})();
