window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  preloader.classList.add("fade-out");
  setTimeout(() => {
    preloader.style.display = "none";
  }, 500);
});
let links = document.querySelector("header .containter nav .links");

let buttonOpneLinks = document.querySelector(
  "header .containter nav .toggle-menu"
);

buttonOpneLinks.addEventListener("click", (e) => {
  if (!links.classList.contains("open")) {
    buttonOpneLinks.innerHTML = `<i class="fa-solid fa-x"></i>`;
  } else {
    buttonOpneLinks.innerHTML = `<i class="fas fa-bars"></i>`;
  }
  links.classList.toggle("open");
});
// Theme toggle functionality
const themeToggle = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme");

// Set initial theme
if (currentTheme === "light") {
  document.documentElement.setAttribute("data-theme", "light");
  themeToggle.checked = true;
}

// Toggle theme on checkbox change
themeToggle.addEventListener("change", function () {
  if (this.checked) {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", "dark");
  }
});
