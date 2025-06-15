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
