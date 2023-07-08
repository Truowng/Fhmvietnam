const projectSlides = document.querySelectorAll("#project .project-slide");
projectSlides.forEach((projectSlide) => {
  let clone = projectSlide.querySelector(".project-slide-item").cloneNode(true);
  projectSlide.appendChild(clone);
});
