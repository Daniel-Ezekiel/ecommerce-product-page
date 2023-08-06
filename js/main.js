"use strict";

// Mobile Navigation
const btnOpenMenu = document.querySelector(".menu-open");
const btnCloseMenu = document.querySelector(".menu-close");
const mobileNav = document.querySelector(".nav-links");

btnOpenMenu.addEventListener("click", () => {
  mobileNav.classList.add("active");
});

btnCloseMenu.addEventListener("click", () => {
  mobileNav.classList.remove("active");
});
