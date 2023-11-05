const slides = document.querySelectorAll(".slide");
const nextBTn = document.querySelector(".nextBtn");
const prevBTn = document.querySelector(".prevBtn");

slides.forEach(function (slide, index) {
  let TransValue = (slide.style.left = `${index * 100}%`);
});
let counter = 0;
nextBTn.addEventListener("click", () => {
  counter++;
  carousel();
});
prevBTn.addEventListener("click", () => {
  counter--;
  carousel();
});
function carousel() {
  if (counter === slides.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = slides.length - 1;
  }

  if (counter < slides.length - 1) {
    nextBTn.style.display = "block";
  } else {
    nextBTn.style.display = "hidden";
  }
  if (counter > 0) {
    prevBTn.style.display = "block";
  } else {
    prevBTn.style.display = "hidden";
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
