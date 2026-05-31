/* Planvo Hilfe – kleine UX-Verbesserungen */
document.addEventListener("DOMContentLoaded", function () {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  const isHome =
    path === "" ||
    path === "/" ||
    path.endsWith("/index.html") ||
    (!path.includes("/") && path.endsWith(".html") === false && document.querySelector(".planvo-hero"));

  if (document.querySelector(".planvo-hero")) {
    document.body.classList.add("planvo-home");
  }

  if (isHome && document.querySelector(".planvo-hero") && !document.querySelector(".planvo-hero-search")) {
    const search = document.querySelector(".md-search__input");
    if (search && search.placeholder) {
      search.setAttribute("data-planvo-home-placeholder", search.placeholder);
      search.placeholder = "Suche in der Hilfe … (z. B. Zeiterfassung, Abwesenheiten)";
    }
  }
});
