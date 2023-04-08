const serviceMobileItems = document.querySelectorAll(
  "#service .service-mobile .service-item"
);

serviceMobileItems.forEach((serviceMobileItem) => {
  serviceMobileItem.addEventListener("click", () => {
    switch (
      document.querySelector("#service .service-mobile .service-item.active") ==
      null
    ) {
      case true:
        serviceMobileItem.classList.add("active");
        break;
      case false:
        document
          .querySelector("#service .service-mobile .service-item.active")
          .classList.remove("active")
          ? serviceMobileItem.classList.add("active")
          : "";
        break;
    }
  });
});
