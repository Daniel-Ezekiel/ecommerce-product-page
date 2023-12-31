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
const desktopFigElement = document.querySelector("figure.desktop");
const mobileProductImg = document.querySelector(".mobile-product-image");
const desktopProductImg = document.querySelector(".desktop-product-image");
const btnCloseOverlay = document.querySelector(".btn-close-overlay");
const btnPrevImage = document.querySelector("#btn-previous");
const btnNextImage = document.querySelector("#btn-next");

function displayProductImage(num = count) {
  const imgSrc = `./images/image-product-${num}.jpg`;
  mobileProductImg.src = imgSrc;
  desktopProductImg.src = imgSrc;
}

const showPrevImage = () => {
  count--;
  if (count < 1) {
    count = 4;
  }
  displayProductImage();
};

const showNextImage = () => {
  count++;
  if (count > 4) {
    count = 1;
  }
  displayProductImage();
};

const showThumbnailImage = (target) => {
  const num = target.dataset.num;
  displayProductImage(num);
};

// Image overlay zoom on larger screens
const toggleImageOverlay = (target) => {
  console.log(target);
  desktopFigElement.classList.toggle("hidden");
};

// All events functions on the product image for both mobile and desktop views
const runImageOperation = (e) => {
  e.preventDefault();
  const target = e.target;
  // console.log(e.querySelector(".mobile-product-image"));
  if (target.classList.contains("prev-btn")) showPrevImage();
  if (target.classList.contains("next-btn")) showNextImage();
  if (target.classList.contains("thumbnail")) showThumbnailImage(target);
  if (target.classList.contains("mobile-product-image"))
    toggleImageOverlay(target);
  if (target.classList.contains("btn-close-overlay")) toggleImageOverlay();
};

mobileFigElement.addEventListener("click", runImageOperation);
desktopFigElement.addEventListener("click", runImageOperation);
