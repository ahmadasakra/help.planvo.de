/* Planvo Hilfe – Portal-Startseite & Header-CTAs */
document.addEventListener("DOMContentLoaded", function () {
  const portal = document.querySelector(".planvo-portal");
  if (portal) {
    document.body.classList.add("planvo-home");
    initPortalSearch();
  }

  injectHeaderCtas();
});

function openMaterialSearch() {
  const toggle =
    document.querySelector('label[for="__search"]') ||
    document.querySelector(".md-header__button[for='__search']") ||
    document.querySelector("[data-md-component='search'] label");

  toggle?.click();

  window.setTimeout(function () {
    const searchInput = document.querySelector(".md-search__input");
    searchInput?.focus();
  }, 80);
}

function initPortalSearch() {
  const portalInput = document.getElementById("planvo-portal-search-input");
  if (!portalInput) return;

  portalInput.addEventListener("focus", function (event) {
    event.preventDefault();
    openMaterialSearch();
  });

  portalInput.addEventListener("click", function () {
    openMaterialSearch();
  });

  portalInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      openMaterialSearch();
    }
  });
}

function injectHeaderCtas() {
  const headerInner = document.querySelector(".md-header__inner");
  if (!headerInner || document.querySelector(".planvo-header-cta")) return;

  const cta = document.createElement("nav");
  cta.className = "planvo-header-cta";
  cta.setAttribute("aria-label", "Planvo Aktionen");
  cta.innerHTML =
    '<a class="planvo-header-cta__link" href="https://demo.planvo.de">Anmelden</a>' +
    '<a class="planvo-header-cta__link planvo-header-cta__link--primary" href="https://www.planvo.de/register?open=1">Kostenlos testen</a>';

  const searchWrap = headerInner.querySelector("[data-md-component='search']");
  if (searchWrap) {
    headerInner.insertBefore(cta, searchWrap);
  } else {
    headerInner.appendChild(cta);
  }
}
