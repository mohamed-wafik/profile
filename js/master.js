// Cache DOM elements
const preloader = document.getElementById("preloader");
const navLinks = document.querySelector("header .containter nav .links");
const toggleMenuBtn = document.querySelector(
  "header .containter nav .toggle-menu",
);
const themeToggle = document.getElementById("theme-toggle");

// Handle preloader fade out
if (preloader) {
  window.addEventListener(
    "load",
    () => {
      preloader.classList.add("fade-out");
      setTimeout(() => {
        preloader.style.display = "none";
      }, 500);
    },
    { once: true },
  );
}

// Mobile menu toggle with event delegation
if (toggleMenuBtn && navLinks) {
  toggleMenuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const isOpen = navLinks.classList.toggle("open");
    toggleMenuBtn.innerHTML = isOpen
      ? '<i class="fa-solid fa-x"></i>'
      : '<i class="fas fa-bars"></i>';
  });

  // Close menu when clicking on nav links
  navLinks.addEventListener("click", (e) => {
    if (e.target.closest("a")) {
      navLinks.classList.remove("open");
      toggleMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
  });
}

// Theme toggle with localStorage persistence
if (themeToggle) {
  const currentTheme = localStorage.getItem("theme");

  // Set initial theme
  if (currentTheme === "light") {
    document.documentElement.setAttribute("data-theme", "light");
    themeToggle.checked = true;
  }

  // Toggle theme on checkbox change
  themeToggle.addEventListener("change", () => {
    const isDark = !themeToggle.checked;
    if (isDark) {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  });
}
