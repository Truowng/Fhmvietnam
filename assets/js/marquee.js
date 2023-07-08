const projectSlides = document.querySelectorAll("#project .project-slide");
const clientSlides = document.querySelectorAll(
  "#client .client-desktop .client-slide"
);
const clientSlidesM = document.querySelectorAll(
  "#client .client-mobile .client-slide"
);

const clone = (parentEl, childEl) => {
  parentEl.forEach((item) => {
    let clone = item.querySelector(`.${childEl}`).cloneNode(true);
    item.appendChild(clone);
  });
};

clone(projectSlides, "project-slide-item");
clone(clientSlides, "client-slide-list");
clone(clientSlidesM, "client-slide-list");
