// jshint esversion:6
const hamburgerEl = document.querySelector(".hamburger");
const navMenuEl = document.querySelector(".nav-menu");

hamburgerEl.addEventListener("click", () => {
  hamburgerEl.classList.toggle("active");
  navMenuEl.classList.toggle("active");
});
