"use strict";

const btnCart = document.querySelector(".cart-btn");
const cartContainer = document.querySelector(".cart");
const cartContent = cartContainer.querySelector(".cart-content");

const sneaker = {
  name: "Fall Limited Edition Sneakers",
  price: 125,
  count: 2,
  imgSrc: "./images/image-product-1-thumbnail.jpg",
};

class Cart {
  constructor(imgSrc = "", products = [sneaker]) {
    this.imgSrc = imgSrc;
    this.products = products;
  }
  get count() {
    return this.products.length;
  }

  addItem() {}
  removeItem() {}
}
const userCart = new Cart();

btnCart.addEventListener("click", () => {
  cartContainer.classList.toggle("hidden");

  if (userCart.count < 1) {
    const emptyCartText = document.createElement("p");
    emptyCartText.classList.add(
      "font-bold",
      "text-dark-grayish-blue",
      "text-center"
    );
    emptyCartText.textContent = "Your cart is empty";

    cartContent.appendChild(emptyCartText);
  }

  //   Create cart item for each cart product
  userCart.products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add(
      "product",
      "flex",
      "gap-2",
      "justify-start",
      "items-center"
    );

    const productImg = document.createElement("img");
    productImg.classList.add("rounded-[1rem]", "h-[5rem]");
    productImg.src = product.imgSrc;

    const productInfoDiv = document.createElement("div");
    productInfoDiv.classList.add("product-info", "mr-auto");
    // child elements of productInfoDiv
    const productName = document.createElement("h4");
    productName.textContent = product.name;
    const productCount = document.createElement("span");
    productCount.textContent = `$${product.price} * ${product.count}`;
    const productTotalPrice = document.createElement("span");
    productTotalPrice.classList.add("total", "font-bold");
    productTotalPrice.textContent = `$${product.price * product.count}`;
    productInfoDiv.appendChild(productName);
    productInfoDiv.appendChild(productCount);
    productInfoDiv.appendChild(productTotalPrice);

    const btnRemoveProduct = document.createElement("button");
    btnRemoveProduct.classList.add("btn-remove-product");
    const deleteImg = document.createElement("img");
    deleteImg.src = "./images/icon-delete.svg";
    btnRemoveProduct.appendChild(deleteImg);

    productDiv.appendChild(productImg);
    productDiv.appendChild(productInfoDiv);
    productDiv.appendChild(btnRemoveProduct);

    cartContent.appendChild(productDiv);
  });
});
