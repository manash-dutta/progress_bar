const progressEl = document.querySelector("#progress");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const circleEl = document.querySelectorAll(".circle");

let currentActive = 1;

// Event listeners
nextBtn.addEventListener("click", () => {
  if (currentActive < circleEl.length) {
    currentActive++;
  }
  updateNext();
});

prevBtn.addEventListener("click", () => {
  if (currentActive > 1) {
    currentActive--;
  }
  updateNext();
});

function updateNext() {
  circleEl.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const activeCircles = document.querySelectorAll(".active");

  progressEl.style.width =
    ((activeCircles.length - 1) / (circleEl.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    prevBtn.disabled = true;
  } else if (currentActive === circleEl.length) {
    nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
}
