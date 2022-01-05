import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const products = Array.from(document.querySelectorAll(".product"));
  products.forEach(function (product) {
    product.setAttribute(
      "data-price",
      product.querySelectorAll(".price").innerText
    );
  });
});
