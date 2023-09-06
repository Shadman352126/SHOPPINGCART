const addProductToCart = (event) => {
  if (event.target.classList.contains("add-to-cart")) {
    const productCard = event.target.closest(".product-card");
    const productName = productCard.querySelector(".card-title").innerText;
    const productPrice = productCard.querySelector(".item-price").innerText;
    addToCart(productName, productPrice);
  }
};

const addToCart = (productName, productPrice) => {
  const ul = document.getElementById("item-Card");
  const li = document.createElement("li");
  li.innerText = `${productName} : ${productPrice}`;
  const removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.classList.add("btn-error", "rounded-lg", "py-2", "px-4");
  li.appendChild(removeButton);
  ul.appendChild(li);
};

const removeFromCart = (event) => {
  if (event.target.classList.contains("btn-error")) {
    const li = event.target.closest("li");
    const productName = li.dataset.productName;
    li.remove();
  }
};

document.addEventListener("click", addProductToCart);
document.addEventListener("click", removeFromCart);
