const colorPalette = ["--gray", "--yellow", "--red"];
const animations = ["slideInUp", "slideInDown", "slideOutUp", "slideOutDown"];
const serviceItems = document.querySelectorAll(
  "#service .service-desktop .service-item"
);
const serviceImages = document.querySelectorAll(
  "#service .service-desktop .service-img-item"
);

const servicePagination = document.querySelector(
  "#service .service-desktop .pagination"
);

const serviceDots = document.querySelectorAll(
  "#service .service-desktop .pagination .dot"
);

const serviceWrapper = document.querySelector(
  "#service .service-desktop .service-wrapper"
);

const buttonControl = document.querySelector(
  "#service .service-desktop .button-control"
);

const serviceWebsiteImages = [
  `<svg width="224" height="224" viewBox="0 0 224 224" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="112" cy="112" r="111.5" stroke="black"/><circle cx="112.655" cy="112.655" r="72.8567" stroke="black"/><circle cx="112" cy="112" r="42.0731" fill="black" stroke="black"/></svg>`,
  `<svg width="224" height="224" viewBox="0 0 224 224" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="112" cy="112" r="111.5" stroke="black"/><mask id="path-2-inside-1_7_54" fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M112.655 186.012C153.169 186.012 186.012 153.169 186.012 112.655C186.012 72.1412 153.169 39.2982 112.655 39.2982C72.1412 39.2982 39.2982 72.1412 39.2982 112.655C39.2982 153.169 72.1412 186.012 112.655 186.012ZM112 154.573C135.512 154.573 154.573 135.512 154.573 112C154.573 88.4875 135.512 69.4269 112 69.4269C88.4875 69.4269 69.4269 88.4875 69.4269 112C69.4269 135.512 88.4875 154.573 112 154.573Z"/></mask><path fill-rule="evenodd" clip-rule="evenodd" d="M112.655 186.012C153.169 186.012 186.012 153.169 186.012 112.655C186.012 72.1412 153.169 39.2982 112.655 39.2982C72.1412 39.2982 39.2982 72.1412 39.2982 112.655C39.2982 153.169 72.1412 186.012 112.655 186.012ZM112 154.573C135.512 154.573 154.573 135.512 154.573 112C154.573 88.4875 135.512 69.4269 112 69.4269C88.4875 69.4269 69.4269 88.4875 69.4269 112C69.4269 135.512 88.4875 154.573 112 154.573Z" fill="black"/><path d="M185.012 112.655C185.012 152.616 152.616 185.012 112.655 185.012V187.012C153.721 187.012 187.012 153.721 187.012 112.655H185.012ZM112.655 40.2982C152.616 40.2982 185.012 72.6935 185.012 112.655H187.012C187.012 71.5889 153.721 38.2982 112.655 38.2982V40.2982ZM40.2982 112.655C40.2982 72.6935 72.6935 40.2982 112.655 40.2982V38.2982C71.5889 38.2982 38.2982 71.5889 38.2982 112.655H40.2982ZM112.655 185.012C72.6935 185.012 40.2982 152.616 40.2982 112.655H38.2982C38.2982 153.721 71.5889 187.012 112.655 187.012V185.012ZM153.573 112C153.573 134.96 134.96 153.573 112 153.573V155.573C136.065 155.573 155.573 136.065 155.573 112H153.573ZM112 70.4269C134.96 70.4269 153.573 89.0398 153.573 112H155.573C155.573 87.9352 136.065 68.4269 112 68.4269V70.4269ZM70.4269 112C70.4269 89.0398 89.0398 70.4269 112 70.4269V68.4269C87.9352 68.4269 68.4269 87.9352 68.4269 112H70.4269ZM112 153.573C89.0398 153.573 70.4269 134.96 70.4269 112H68.4269C68.4269 136.065 87.9352 155.573 112 155.573V153.573Z" fill="black" mask="url(#path-2-inside-1_7_54)"/></svg>`,
  `<svg width="224" height="224" viewBox="0 0 224 224" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M224 112C224 173.856 173.856 224 112 224C50.1441 224 0 173.856 0 112C0 50.1441 50.1441 0 112 0C173.856 0 224 50.1441 224 112ZM111.573 153.146C134.533 153.146 153.146 134.533 153.146 111.573C153.146 88.6129 134.533 70 111.573 70C88.6129 70 70 88.6129 70 111.573C70 134.533 88.6129 153.146 111.573 153.146ZM111.573 154.146C135.086 154.146 154.146 135.086 154.146 111.573C154.146 88.0606 135.086 69 111.573 69C88.0606 69 69 88.0606 69 111.573C69 135.086 88.0606 154.146 111.573 154.146ZM112.357 185.713C152.871 185.713 185.713 152.871 185.713 112.357C185.713 71.8429 152.871 39 112.357 39C71.8429 39 39 71.8429 39 112.357C39 152.871 71.8429 185.713 112.357 185.713Z" fill="black"/></svg>`,
];

let count = 0;

const changeImages = () => {
  let i = 0;
  setInterval(() => {
    if (i < serviceWebsiteImages.length) {
      serviceImages[0].innerHTML = `${serviceWebsiteImages[i]}`;
      i++;
    } else {
      i = 0;
    }
  }, 500);
};

changeImages();

const handleActive = (elRemove, elSet) => {
  if (elRemove === "service-item") {
    document.querySelector(
      `.${elRemove}.active`
    ).style.animationName = `${animations[2]}`;
  } else {
    document.querySelector(
      `.${elRemove}.active`
    ).style.animationName = `${animations[3]}`;
  }

  setTimeout(() => {
    document.querySelector(`.${elRemove}.active`).classList.remove("active");
    elSet.classList.add("active");
    if (elSet.classList == "service-item active") {
      document.querySelector(
        `.${elRemove}.active`
      ).style.animationName = `${animations[0]}`;
    } else {
      document.querySelector(
        `.${elRemove}.active`
      ).style.animationName = `${animations[1]}`;
    }
  }, 500);
};

const handleControl = (action) => {
  if (action === "next") {
    if (count < serviceItems.length - 1) {
      count++;
      handleActive("service-item", serviceItems[count]);
      handleActive("service-img-item", serviceImages[count]);
      handleActive("dot", serviceDots[count]);
      serviceWrapper.style.backgroundColor = `var(${colorPalette[count]})`;
    }
  } else if (action === "prev") {
    if (0 < count) {
      count--;
      handleActive("service-item", serviceItems[count]);
      handleActive("service-img-item", serviceImages[count]);
      handleActive("dot", serviceDots[count]);
      serviceWrapper.style.backgroundColor = `var(${colorPalette[count]})`;
    }
  }
  if (count === serviceItems.length - 1) {
    servicePagination.classList.add("white");
    buttonControl.classList.add("white");
  } else {
    servicePagination.classList.remove("white");
    buttonControl.classList.remove("white");
  }
};
