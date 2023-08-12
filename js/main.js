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

function displayProductImage(num = count) {
  const imgSrc = `./images/image-product-${num}.jpg`;
  productImg.src = imgSrc;
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

mobileFigElement.addEventListener("click", (e) => {
  e.preventDefault();
  const target = e.target;
  // console.log(e.querySelector(".mobile-product-image"));
  if (e.target.classList.contains("prev-btn")) showPrevImage();
  if (e.target.classList.contains("next-btn")) showNextImage();
  if (e.target.classList.contains("thumbnail")) showThumbnailImage(target);
});
// displayProductImage();

// // Zoom-in on product image on desktop devices
// productImg.addEventListener("click", () => {
//   const isLargeScreen = window.innerWidth >= "960";
// });
