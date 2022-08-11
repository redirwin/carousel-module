const slides = document.querySelectorAll(".slide");
const progressButtons = document.querySelectorAll(".progress-button");
const indexButtonsContainer = document.querySelector(
  ".index-buttons-container"
);
const indexButtons = indexButtonsContainer.childNodes;
let currentSlide = 0;

slides[0].classList.add("current"); // Adds current class to first slide.

// Generates an index button for each slide...
slides.forEach(() => {
  indexButtonsContainer.innerHTML += `<button class="index-button"></button>`;
});
indexButtons[0].classList.add("current"); // ...and adds current class to the first one.

// Handles clicks on next and previous buttons.
progressButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    index === 0 ? (currentSlide -= 1) : currentSlide++;
    currentSlide < 0 && (currentSlide = slides.length - 1);
    currentSlide > slides.length - 1 && (currentSlide = 0);
    changeSlide();
  });
});

// Handles clicks on index buttons
indexButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (index !== currentSlide) {
      currentSlide = index;
      changeSlide();
    }
  });
});

// Checks currentSlide after any button click and changes current slide to match.
function changeSlide() {
  slides.forEach((slide, index) => {
    index === currentSlide
      ? slide.classList.add("current")
      : slide.classList.remove("current");
  });
  indexButtons.forEach((button, index) => {
    index === currentSlide
      ? button.classList.add("current")
      : button.classList.remove("current");
  });
}
