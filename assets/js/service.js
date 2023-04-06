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
  `<svg width="224" height="224" viewBox="0 0 224 224" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="112" cy="112" r="111.5" stroke="black"/><circle cx="112.655" cy="112.655" r="72.8567" stroke="black"/><circle cx="112" cy="112" r="42.0731" fill="black" stroke="black"/></svg>`,
];

const serviceDigitalImages = [
  '<svg width="224" height="225" viewBox="0 0 224 225" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.10799 56.6364L112 0.560293L222.892 56.6364L112 112.712L1.10799 56.6364Z" stroke="black"/><path d="M31.2467 56.3275L111.345 16.2783L191.443 56.3275L111.345 96.3767L31.2467 56.3275Z" fill="black" stroke="black"/><path d="M222.69 56.3275V165.708L111.682 224M111.682 224V113.084M111.682 224L1.43591 166.069V57.2727" stroke="black"/></svg>',
  '<svg width="224" height="225" viewBox="0 0 224 225" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.10799 56.6364L112 0.560293L222.892 56.6364L112 112.712L1.10799 56.6364Z" stroke="black"/><path d="M31.2467 56.3275L111.345 16.2783L191.443 56.3275L111.345 96.3767L31.2467 56.3275Z" fill="black" stroke="black"/><path d="M222.69 56.3275V165.708L111.681 224M111.681 224V113.084M111.681 224L1.43591 166.069V57.2727" stroke="black"/><path d="M210.901 77.9415L126.409 121.825V201.731L210.901 157.193V77.9415Z" fill="black" stroke="black"/><path d="M210.901 77.9415L126.409 121.825V201.731L210.901 157.193V77.9415Z" fill="black" stroke="black"/></svg>',
  '<svg width="224" height="225" viewBox="0 0 224 225" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.10799 56.6364L112 0.560293L222.892 56.6364L112 112.712L1.10799 56.6364Z" stroke="black"/><path d="M31.2467 56.3275L111.345 16.2783L191.443 56.3275L111.345 96.3767L31.2467 56.3275Z" fill="black" stroke="black"/><path d="M222.69 56.3275V165.708L111.682 224M111.682 224V113.084M111.682 224L1.43591 166.069V57.2727" stroke="black"/><path d="M210.901 77.9415L126.409 121.825V201.731L210.901 157.193V77.9415Z" fill="black" stroke="black"/><path d="M210.901 77.9415L126.409 121.825V201.731L210.901 157.193V77.9415Z" fill="black" stroke="black"/><path d="M13.0994 77.2866L97.5906 121.17V201.076L13.0994 156.538V77.2866Z" fill="black" stroke="black"/></svg>',
  '<svg width="224" height="225" viewBox="0 0 224 225" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.10799 56.6364L112 0.560293L222.892 56.6364L112 112.712L1.10799 56.6364Z" stroke="black"/><path d="M31.2467 56.3275L111.345 16.2783L191.443 56.3275L111.345 96.3767L31.2467 56.3275Z" fill="black" stroke="black"/><path d="M222.69 56.3275V165.708L111.682 224M111.682 224V113.084M111.682 224L1.43591 166.069V57.2727" stroke="black"/><path d="M13.0994 77.2866L97.5906 121.17V201.076L13.0994 156.538V77.2866Z" fill="black" stroke="black"/></svg>',
];

const serviceAdvertisingImages = [
  '<svg width="224" height="146" viewBox="0 0 224 146" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="19.5" width="223" height="126" stroke="white"/><path d="M60 20L71.6552 1H151.897L164 20" stroke="white"/><circle cx="111.5" cy="82.5" r="34" stroke="white"/><path d="M155.5 83C155.5 107.582 135.795 127.5 111.5 127.5C87.2047 127.5 67.5 107.582 67.5 83C67.5 58.418 87.2047 38.5 111.5 38.5C135.795 38.5 155.5 58.418 155.5 83Z" stroke="white"/><rect x="174.5" y="34.5" width="35" height="14" stroke="white"/><rect x="19.5" y="1.5" width="23" height="18" stroke="white"/></svg>',
  ' <svg width="224" height="146" viewBox="0 0 224 146" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="19.5" width="223" height="126" stroke="white"/><path d="M60 20L71.6552 1H151.897L164 20" stroke="white"/><path d="M155.5 83C155.5 107.582 135.795 127.5 111.5 127.5C87.2047 127.5 67.5 107.582 67.5 83C67.5 58.418 87.2047 38.5 111.5 38.5C135.795 38.5 155.5 58.418 155.5 83Z" stroke="white"/><rect x="19.5" y="14.5" width="23" height="5" stroke="white"/><path d="M203.194 24.4815L210.774 18.4338L209.114 27.7298L208.99 28.4259L209.688 28.311L219.368 26.7178L213.111 33.9458L212.631 34.4995L213.322 34.7443L222.504 38L213.322 41.2557L212.631 41.5005L213.111 42.0542L219.368 49.2822L209.688 47.689L208.99 47.5741L209.114 48.2702L210.774 57.5662L203.194 51.5185L202.661 51.0929L202.416 51.7298L199 60.6076L195.584 51.7298L195.339 51.0929L194.806 51.5185L187.226 57.5662L188.886 48.2702L189.01 47.5741L188.312 47.689L178.632 49.2822L184.889 42.0542L185.369 41.5005L184.678 41.2557L175.496 38L184.678 34.7443L185.369 34.4995L184.889 33.9458L178.632 26.7178L188.312 28.311L189.01 28.4259L188.886 27.7298L187.226 18.4338L194.806 24.4815L195.339 24.9071L195.584 24.2702L199 15.3924L202.416 24.2702L202.661 24.9071L203.194 24.4815Z" fill="white" stroke="white"/><circle cx="111.5" cy="82.5" r="34" stroke="white"/></svg>',
  '<svg width="224" height="146" viewBox="0 0 224 146" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="19.5" width="223" height="126" stroke="white"/><path d="M60 20L71.6552 1H151.897L164 20" stroke="white"/><path d="M155.5 83C155.5 107.582 135.795 127.5 111.5 127.5C87.2047 127.5 67.5 107.582 67.5 83C67.5 58.418 87.2047 38.5 111.5 38.5C135.795 38.5 155.5 58.418 155.5 83Z" stroke="white"/><rect x="19.5" y="14.5" width="23" height="5" stroke="white"/><path d="M188.417 19.0451L202.027 7.86746L199.039 25.0954L198.918 25.792L199.615 25.6739L217.047 22.7205L205.748 36.156L205.289 36.7026L205.96 36.9474L222.542 43L205.96 49.0526L205.289 49.2974L205.748 49.844L217.047 63.2795L199.615 60.3261L198.918 60.208L199.039 60.9046L202.027 78.1325L188.417 66.9549L187.876 66.5109L187.632 67.1663L181.5 83.5718L175.368 67.1663L175.124 66.5109L174.583 66.9549L160.973 78.1325L163.961 60.9046L164.082 60.208L163.385 60.3261L145.953 63.2795L157.252 49.844L157.711 49.2974L157.04 49.0526L140.458 43L157.04 36.9474L157.711 36.7026L157.252 36.156L145.953 22.7205L163.385 25.6739L164.082 25.792L163.961 25.0954L160.973 7.86746L174.583 19.0451L175.124 19.4891L175.368 18.8337L181.5 2.42818L187.632 18.8337L187.876 19.4891L188.417 19.0451Z" fill="white" stroke="white"/><circle cx="111.5" cy="82.5" r="34" fill="#FDFDFD" stroke="white"/></svg>',
  '<svg width="224" height="146" viewBox="0 0 224 146" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="19.5" width="223" height="126" stroke="white"/><path d="M60 20L71.6552 1H151.897L164 20" stroke="white"/><circle cx="111.5" cy="82.5" r="34" stroke="white"/><path d="M155.5 83C155.5 107.582 135.795 127.5 111.5 127.5C87.2047 127.5 67.5 107.582 67.5 83C67.5 58.418 87.2047 38.5 111.5 38.5C135.795 38.5 155.5 58.418 155.5 83Z" stroke="white"/><rect x="174.5" y="34.5" width="35" height="14" stroke="white"/><rect x="19.5" y="1.5" width="23" height="18" stroke="white"/></svg>',
];
let count = 0;

const changeImages = () => {
  let i = 0;
  setInterval(() => {
    if (i < serviceWebsiteImages.length) {
      serviceImages[0].innerHTML = `${serviceWebsiteImages[i]}`;
      serviceImages[1].innerHTML = `${serviceDigitalImages[i]}`;
      serviceImages[2].innerHTML = `${serviceAdvertisingImages[i]}`;
      i++;
    } else {
      i = 0;
    }
  }, 350);
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
