/* SHE GLOBAL MOBILE OVERRIDE — runs after page styles */
document.addEventListener("DOMContentLoaded", () => {
  const mobileFix = document.createElement("style");
  mobileFix.innerHTML = `
    @media (max-width: 900px) {
      html, body {
        width: 100% !important;
        max-width: 100% !important;
        overflow-x: hidden !important;
      }

      * {
        box-sizing: border-box !important;
      }

      img, video, iframe {
        max-width: 100% !important;
        height: auto !important;
      }

      .wrap,
      .container,
      .she-demo-shell,
      .helps-shell {
        width: 100% !important;
        max-width: 100% !important;
        padding-left: 18px !important;
        padding-right: 18px !important;
        margin-left: auto !important;
        margin-right: auto !important;
      }

      .links,
      .nav .btn {
        display: none !important;
      }

      .nav-inner {
        width: 100% !important;
        padding: 14px 18px !important;
      }

      .brand-name,
      .logo span {
        font-size: 34px !important;
      }

      .brand-tag,
      .logo small {
        font-size: 11px !important;
        line-height: 1.1 !important;
      }

      /* HOMEPAGE HERO FIX */
      .hero,
      .hero-grid {
        width: 100% !important;
        max-width: 100% !important;
        display: block !important;
        padding-left: 18px !important;
        padding-right: 18px !important;
      }

      .hero-text,
      .hero-image {
        width: 100% !important;
        max-width: 100% !important;
      }

      .hero-text h1,
      .hero h1 {
        font-size: clamp(42px, 12vw, 58px) !important;
        line-height: 1.05 !important;
        max-width: 100% !important;
        overflow-wrap: break-word !important;
      }

      .hero-text p,
      .hero p {
        font-size: 17px !important;
        line-height: 1.55 !important;
        max-width: 100% !important;
      }

      .hero-image img {
        width: 100% !important;
        max-width: 420px !important;
        margin: 40px auto 0 !important;
        display: block !important;
      }

      /* SHE FACTS + SHE FINDS FIX */
      .she-product-demo {
        width: 100% !important;
        max-width: 100% !important;
        padding: 34px 0 52px !important;
        overflow-x: hidden !important;
      }

      .she-demo-header {
        display: block !important;
        width: 100% !important;
        margin-bottom: 22px !important;
      }

      .she-demo-title {
        font-size: clamp(42px, 12vw, 56px) !important;
        line-height: 1.02 !important;
        letter-spacing: -0.055em !important;
        max-width: 100% !important;
        overflow-wrap: break-word !important;
      }

      .she-demo-intro {
        font-size: 18px !important;
        line-height: 1.55 !important;
        max-width: 100% !important;
        margin-top: 18px !important;
      }

      .she-demo-card {
        width: 100% !important;
        max-width: 100% !important;
        min-width: 0 !important;
        border-radius: 24px !important;
        overflow: hidden !important;
      }

      .she-demo-topbar {
        display: block !important;
        padding: 18px !important;
      }

      .she-demo-pills {
        display: flex !important;
        flex-wrap: wrap !important;
        gap: 10px !important;
      }

      .she-demo-status {
        display: block !important;
        margin-top: 18px !important;
      }

      .she-demo-main {
        display: block !important;
        width: 100% !important;
        max-width: 100% !important;
      }

      .she-demo-sidebar {
        width: 100% !important;
        max-width: 100% !important;
        border-right: 0 !important;
        border-bottom: 1px solid #efd5df !important;
        padding: 18px !important;
        overflow: hidden !important;
      }

      .she-demo-search input {
        width: 100% !important;
        max-width: 100% !important;
        font-size: 16px !important;
      }

      .she-topic-list {
        display: flex !important;
        flex-direction: row !important;
        gap: 12px !important;
        overflow-x: auto !important;
        overflow-y: hidden !important;
        padding-bottom: 10px !important;
        scroll-snap-type: x mandatory !important;
        -webkit-overflow-scrolling: touch !important;
      }

      .she-topic-btn {
        min-width: 240px !important;
        max-width: 240px !important;
        flex: 0 0 auto !important;
        scroll-snap-align: start !important;
        white-space: normal !important;
      }

      .she-topic-name,
      .she-topic-meta {
        white-space: normal !important;
        overflow: visible !important;
        text-overflow: unset !important;
      }

      .she-demo-content {
        width: 100% !important;
        max-width: 100% !important;
        padding: 20px !important;
        overflow: hidden !important;
      }

      .she-content-top {
        display: block !important;
      }

      .she-content-title {
        font-size: clamp(34px, 10vw, 46px) !important;
        line-height: 1.05 !important;
        max-width: 100% !important;
        overflow-wrap: break-word !important;
      }

      .she-content-summary,
      .she-info-block p,
      .she-info-block li {
        font-size: 16px !important;
        line-height: 1.55 !important;
        overflow-wrap: break-word !important;
      }

      .she-action-button {
        width: 100% !important;
        margin-top: 16px !important;
      }

      .she-content-grid {
        display: grid !important;
        grid-template-columns: 1fr !important;
        grid-template-areas:
          "pattern"
          "symptoms"
          "what"
          "know"
          "next"
          "facts"
          "finds" !important;
        gap: 14px !important;
      }

      .she-pattern-card,
      .she-info-block {
        width: 100% !important;
        max-width: 100% !important;
      }

      .she-pattern-card { grid-area: pattern !important; }
      .she-block-symptoms { grid-area: symptoms !important; }
      .she-block-what { grid-area: what !important; }
      .she-block-know { grid-area: know !important; }
      .she-block-next { grid-area: next !important; }
      .she-block-facts { grid-area: facts !important; }
      .she-block-finds { grid-area: finds !important; }

      /* SHE HELPS */
      .helps-header,
      .result-grid,
      .helps-options {
        display: grid !important;
        grid-template-columns: 1fr !important;
      }

      .helps-page {
        padding: 34px 0 52px !important;
      }

      .helps-body {
        padding: 20px !important;
      }

      .helps-btn,
      .result-links a {
        width: 100% !important;
        text-align: center !important;
      }

      /* FOOTER */
      .footer-inner,
      .footer-grid {
        display: grid !important;
        grid-template-columns: 1fr !important;
        gap: 18px !important;
        text-align: center !important;
      }
    }
  `;

  document.head.appendChild(mobileFix);
});
