"use strict";

const btnCart = document.querySelector(".cart-btn");
const cartContainer = document.querySelector(".cart");
const cartContent = cartContainer.querySelector(".cart-content");
const productCountContainer = document.querySelector(
  ".product-count-container"
);
const btnIncreaseCount = document.querySelector(".btn-plus");
const btnDecreaseCount = document.querySelector(".btn-minus");
const btnAddToCart = document.querySelector(".btn-add-to-cart");
const cartCount = btnCart.querySelector("span");

class Cart {
  constructor(products = []) {
    this.products = products;
  }
  get count() {
    return this.products.length;
  }

  addItem() {}
  removeItem() {}
}
const userCart = new Cart();

const generateCartContent = () => {
  const sneaker = userCart.products[0];
  cartContent.querySelector(".product").classList.add("hidden");
  cartContent.querySelector(".btn-checkout").classList.add("hidden");

  if (userCart.count < 1) {
    cartContent.querySelector("p").classList.remove("hidden");
  } else {
    cartContent.querySelector("p").classList.add("hidden");

    cartContent.querySelector("img").src = sneaker.imgSrc;
    cartContent.querySelector("h4").textContent = sneaker.title;
    cartContent.querySelector(
      ".price-count"
    ).textContent = `$${sneaker.price} * ${sneaker.count}`;
    cartContent.querySelector(".price-total").textContent = `$${
      sneaker.price * sneaker.count
    }`;

    cartContent.querySelector(".product").classList.remove("hidden");
    cartContent.querySelector(".btn-checkout").classList.remove("hidden");
  }

  cartContainer.classList.toggle("hidden");
};
// Check cart contents
btnCart.addEventListener("click", generateCartContent);

// Remove cart contents
document.querySelector(".btn-remove-product").addEventListener("click", () => {
  userCart.products.pop();
  generateCartContent();

  cartCount.textContent = userCart.count;
  cartCount.classList.add("hidden");
});

productCountContainer.addEventListener("click", (e) => {
  const currCountSpan = productCountContainer.querySelector(".count");
  let currCount = Number(currCountSpan.textContent.trim());

  if (e.target.classList.contains("btn-plus")) {
    currCount++;
    currCountSpan.textContent = currCount;
  } else if (e.target.classList.contains("btn-minus")) {
    currCount == 0 ? (currCount = 0) : currCount--;
    currCountSpan.textContent = currCount;
  }
});

btnAddToCart.addEventListener("click", (e) => {
  const productCount = Number(
    e.target.closest("article").querySelector(".count").textContent.trim()
  );

  if (productCount < 1) {
    alert("Make sure the count is greater than 0");
    return;
  }

  const productName = e.target
    .closest("article")
    .querySelector("h1")
    .textContent.trim();

  const productImageSrc = e.target
    .closest("section")
    .querySelector("img.mobile-product-image")
    .getAttribute("src")
    .trim();

  const productSneaker = {
    title: productName,
    price: 125,
    count: productCount,
    imgSrc: productImageSrc,
  };

  if (!userCart.products.length) {
    userCart.products.push(productSneaker);
  }

  cartCount.textContent = productSneaker.count;
  cartCount.classList.remove("hidden");
  e.target.closest("article").querySelector(".count").textContent = 0;
});
