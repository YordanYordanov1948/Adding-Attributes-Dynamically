import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const spanPrice = document.querySelector(".price");
  const priceValue = spanPrice.innerText;
  spanPrice.setAttribute("data-price", priceValue);
});
