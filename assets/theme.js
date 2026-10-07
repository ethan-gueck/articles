/*
 * theme.js — the moon/sun button in the top-right corner. Shares the portfolio's light / dark
 * choice (localStorage "pp-theme", same origin), so an article opens in the mode the portfolio
 * was in and switching here switches there too. The inline script in each page's <head> applies
 * the saved choice before first paint.
 */
(function () {
  "use strict";
  var KEY = "pp-theme";
  var button = document.querySelector("[data-theme-toggle]");
  var dark = function () { return document.documentElement.dataset.theme === "dark"; };
  function apply(mode) {
    if (mode === "dark") document.documentElement.dataset.theme = "dark";
    else delete document.documentElement.dataset.theme;
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = mode === "dark" ? "#102a43" : "#0B3D2E";
    if (!button) return;
    button.setAttribute("aria-pressed", String(mode === "dark"));
    button.setAttribute("aria-label", mode === "dark" ? "Switch to light mode" : "Switch to dark mode");
    button.title = mode === "dark" ? "Light mode" : "Dark mode";
  }
  apply(dark() ? "dark" : "light");
  if (button) button.addEventListener("click", function () {
    var mode = dark() ? "light" : "dark";
    try { localStorage.setItem(KEY, mode); } catch (e) { /* private mode: still switch for this visit */ }
    apply(mode);
  });
  window.addEventListener("storage", function (e) { if (e.key === KEY) apply(e.newValue === "dark" ? "dark" : "light"); });
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
