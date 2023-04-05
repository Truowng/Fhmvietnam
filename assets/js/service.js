const serviceItems = document.querySelectorAll(
  "#service .service-desktop .service-item"
);
const serviceImages = document.querySelectorAll(
  "#service .service-desktop .service-img-item"
);

const setActive = (el) => {
  document.querySelector(`${el.classList}.active`).remove("active")
    ? el.classList.add("active")
    : "";
};

const handleControl = (action) => {
  for (i = 0; i < serviceItems.length; i++) {
    if (action === "next") {
      i;
      console.log(i);
    } else {
    }
  }
};
