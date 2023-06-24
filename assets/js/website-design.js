const pricePackages = document.querySelectorAll(
  "#website-design-price .price-package-item"
);

pricePackages.forEach((pricePackage) => {
  //   pricePackage.addEventListener("click", () => {
  //     document
  //       .querySelector("#website-design-price .price-package-item.active")
  //       .classList.remove("active");
  //     document.querySelector("price-package-item.active")
  //       ? pricePackage.classList.remove("active")
  //       : pricePackage.classList.add("active");
  //   });
  pricePackage.addEventListener("click", () => {
    if (
      document.querySelector(
        "#website-design-price .price-package-item.active"
      ) === null
    ) {
      pricePackage.classList.add("active");
    } else {
      if (pricePackage.classList.contains("active")) {
        pricePackage.classList.remove("active");
      } else {
        document
          .querySelector("#website-design-price .price-package-item.active")
          .classList.remove("active");
        pricePackage.classList.add("active");
      }
    }
  });
});
