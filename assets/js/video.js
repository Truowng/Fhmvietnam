const video = document.querySelector(
  "#blog-video .blog-video-current-video video"
);

const controller = document.querySelector(
  "#blog-video .blog-video-current-video-controller"
);

controller.addEventListener("click", () => {
  // Check click lan dau
  if (controller.getAttribute("isClicked") == "false") {
    controller.setAttribute("isClicked", "true");
    controller.classList.add("clicked");
  }

  // Check trang thai video
  if (video.getAttribute("videoState") == "play") {
    // Chay video
    video.pause();
    video.setAttribute("videoState", "pause");

    controller.querySelector(".play").classList.add("active");
    controller.querySelector(".pause").classList.remove("active");
  } else {
    // Dung video
    video.play();
    video.setAttribute("videoState", "play");

    controller.querySelector(".play").classList.remove("active");
    controller.querySelector(".pause").classList.add("active");
  }

  // Check thoi gian video
  setInterval(() => {
    if (video.currentTime == video.duration) {
      controller.setAttribute("isClicked", "false");
      controller.classList.remove("clicked");

      controller.querySelector(".play").classList.add("active");
      controller.querySelector(".pause").classList.remove("active");
    }
  }, 200);
});
