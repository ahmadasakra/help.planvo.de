/* Planvo Hilfe – Portal-Startseite & Header-CTAs
   Fix: planvo-home Klasse so früh wie möglich setzen,
   damit CSS-Regeln ohne :has()-Support greifen. */

/* ── 1. Frühzeitig auf body setzen ──────────────────────────────── */
(function () {
  // Sofort bei Script-Ausführung prüfen (kein DOMContentLoaded nötig)
  var isHome =
    window.location.pathname === "/" ||
    window.location.pathname === "/index.html" ||
    window.location.pathname.replace(/\/$/, "") === "";

  if (isHome) {
    document.documentElement.classList.add("planvo-home-early");
    // body ist zu diesem Zeitpunkt evtl. noch nicht da → via rAF
    requestAnimationFrame(function () {
      if (document.body) {
        document.body.classList.add("planvo-home");
      }
    });
  }
})();

/* ── 2. Nach DOM-Ready: sauber initialisieren ────────────────────── */
document.addEventListener("DOMContentLoaded", function () {
  var portal = document.querySelector(".planvo-portal");

  if (portal) {
    document.body.classList.add("planvo-home");
    initPortalSearch();
  }

  injectHeaderCtas();
});

/* ── 3. MkDocs navigation.instant: nach jeder Navigation prüfen ─── */
document.addEventListener("DOMContentLoaded", function () {
  // Material for MkDocs feuert dieses Event nach SPA-Navigation
  document.addEventListener("content.ready", function () {
    var portal = document.querySelector(".planvo-portal");
    if (portal) {
      document.body.classList.add("planvo-home");
    } else {
      document.body.classList.remove("planvo-home");
    }
    injectHeaderCtas();
  });
});

/* ── Suche: Portal-Input → Material-Suchfeld ────────────────────── */
function openMaterialSearch() {
  var toggle =
    document.querySelector('label[for="__search"]') ||
    document.querySelector(".md-header__button[for='__search']");

  if (toggle) {
    toggle.click();
  }

  setTimeout(function () {
    var searchInput = document.querySelector(".md-search__input");
    if (searchInput) {
      searchInput.focus();
    }
  }, 80);
}

function initPortalSearch() {
  var portalInput = document.getElementById("planvo-portal-search-input");
  if (!portalInput) return;

  ["focus", "click"].forEach(function (evt) {
    portalInput.addEventListener(evt, function (e) {
      e.preventDefault();
      openMaterialSearch();
    });
  });

  portalInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      openMaterialSearch();
    }
  });
}

/* ── Header-CTAs (Anmelden / Kostenlos testen) ───────────────────── */
function injectHeaderCtas() {
  // Nicht doppelt einfügen
  if (document.querySelector(".planvo-header-cta")) return;

  var headerInner = document.querySelector(".md-header__inner");
  if (!headerInner) return;

  var cta = document.createElement("nav");
  cta.className = "planvo-header-cta";
  cta.setAttribute("aria-label", "Planvo Aktionen");
  cta.innerHTML =
    '<a class="planvo-header-cta__link" href="https://demo.planvo.de">Anmelden</a>' +
    '<a class="planvo-header-cta__link planvo-header-cta__link--primary" href="https://www.planvo.de/register?open=1">Kostenlos testen</a>';

  var searchWrap = headerInner.querySelector("[data-md-component='search']");
  if (searchWrap) {
    headerInner.insertBefore(cta, searchWrap);
  } else {
    headerInner.appendChild(cta);
  }
}
