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

// Mobile Product Images carousel
let count = 1;

const mobileFigElement = document.querySelector("figure.mobile");
const productImg = document.querySelector(".mobile-product-image");
const btnPrevImage = document.querySelector("#btn-previous");
const btnNextImage = document.querySelector("#btn-next");

function displayProductImage() {
  const imgSrc = `./images/image-product-${count}.jpg`;
  productImg.src = imgSrc;
}
displayProductImage(count);

btnPrevImage.addEventListener("click", (e) => {
  count--;
  if (count < 1) {
    count = 4;
  }
  displayProductImage();
});

btnNextImage.addEventListener("click", (e) => {
  count++;
  if (count > 4) {
    count = 1;
  }
  displayProductImage();
});
