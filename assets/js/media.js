// Add Locomotive Animation
// Set marginTop project-list = 300px & max-width project-item-img
// de su dung

const projectImgs = document.querySelectorAll("#project .project-item");
let current = 0;
let target = 0;
let ease = 0.08;

const left = (start, end, t) => {
  return start * (1 - t) + end * t;
};

const setTransform = (el, transform) => {
  return (el.style.transform = transform);
};

const animate = () => {
  current = parseFloat(left(current, target, ease)).toFixed(2);
  target = window.scrollY;
  projectImgs.forEach((projectImg, index) => {
    if (index === 0) {
      setTransform(projectImg, `translateY(-${current / 20}px)`);
    } else if (0 < index <= 2) {
      setTransform(projectImg, `translateY(-${current / ((index + 1) * 8)}px)`);
    } else {
      setTransform(projectImg, `translateY(-${current / (index + 1)}px)`);
      console.log(index);
    }
  });
  requestAnimationFrame(animate);
};

animate();
