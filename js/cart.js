"use strict";

const btnCart = document.querySelector(".cart-btn");
const cartContainer = document.querySelector(".cart");

btnCart.addEventListener("click", () => {
  cartContainer.classList.toggle("hidden");
});

class Cart {
  constructor(count = 0, products = []) {
    this.count = count;
    this.products = products;
  }

  addItem() {}
  removeItem() {}
}

const userCart = new Cart();
