const yearElement = document.getElementById("year");
const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");
const themeToggle = document.getElementById("themeToggle");

const THEME_STORAGE_KEY = "portfolio-theme";

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);

  if (themeToggle) {
    const isDark = theme === "dark";
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.textContent = isDark ? "Light" : "Dark";
    themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
  }
}

const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
const initialTheme = savedTheme || "light";

applyTheme(initialTheme);

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  });
}

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    siteNav.classList.toggle("show");
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuToggle.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("show");
    }
  });
}
