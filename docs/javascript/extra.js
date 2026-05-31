/* Planvo Hilfe – Portal-Startseite & Header-CTAs
   SPA-sicher via MutationObserver: body.planvo-home wird synchron
   mit dem DOM-Swap entfernt, bevor der Browser den nächsten Frame zeichnet. */

/* ── Portal aktivieren ───────────────────────────────────────────── */
function activatePortal() {
  document.body.classList.add("planvo-home");
  initPortalSearch();
  startPortalWatcher();
}

/* ── Portal deaktivieren ─────────────────────────────────────────── */
function deactivatePortal() {
  document.body.classList.remove("planvo-home");
}

/* ── MutationObserver: wartet auf Entfernung von .planvo-portal ──── */
/* Läuft als Microtask — synchron nach DOM-Swap, vor nächstem Paint.
   Damit gibt es keinen sichtbaren Frame mit fehlendem Sidebar. */
var portalWatcher = null;

function startPortalWatcher() {
  if (portalWatcher) return; // Nur einmal registrieren

  portalWatcher = new MutationObserver(function () {
    if (!document.querySelector(".planvo-portal")) {
      deactivatePortal();
      portalWatcher.disconnect();
      portalWatcher = null;
    }
  });

  portalWatcher.observe(document.body, { childList: true, subtree: true });
}

/* ── Initialisierung bei Seitenload ─────────────────────────────── */
function initPage() {
  var portal = document.querySelector(".planvo-portal");

  if (portal) {
    activatePortal();
  } else {
    deactivatePortal();
  }

  injectHeaderCtas();
}

/* ── DOMContentLoaded: erster Seitenaufruf ───────────────────────── */
document.addEventListener("DOMContentLoaded", initPage);

/* ── content.ready: navigation.instant SPA-Navigation ───────────── */
/* Direkt auf document registriert (NICHT in DOMContentLoaded),
   damit es bei jeder SPA-Navigation zuverlässig feuert. */
document.addEventListener("content.ready", function () {
  // Observer beenden falls noch aktiv (neuer Content = neuer Zustand)
  if (portalWatcher) {
    portalWatcher.disconnect();
    portalWatcher = null;
  }

  initPage();
});

/* ── Suche: Portal-Input → Material-Suchfeld ────────────────────── */
function openMaterialSearch() {
  var toggle =
    document.querySelector('label[for="__search"]') ||
    document.querySelector(".md-header__button[for='__search']");

  if (toggle) toggle.click();

  setTimeout(function () {
    var input = document.querySelector(".md-search__input");
    if (input) input.focus();
  }, 80);
}

function initPortalSearch() {
  var portalInput = document.getElementById("planvo-portal-search-input");
  if (!portalInput) return;

  // Listener nicht doppelt anhängen
  if (portalInput._planvoSearchBound) return;
  portalInput._planvoSearchBound = true;

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
