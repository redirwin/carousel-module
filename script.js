const slides = document.querySelectorAll(".slide-container");
const progressButtons = document.querySelectorAll(".progress-button");
const indexButtonsContainer = document.querySelector(
  ".index-buttons-container"
);
const indexButtons = indexButtonsContainer.childNodes;
let activeSlide = 0;

slides[0].classList.add("active"); // Adds active class to first slide.

// Generates an index button for each slide...
slides.forEach(() => {
  indexButtonsContainer.innerHTML += `<button class="index-button"></button>`;
});
indexButtons[0].classList.add("active"); // ...and adds active class to the first one.

// Handles clicks on next and previous buttons.
progressButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    index === 0 ? (activeSlide -= 1) : activeSlide++;
    activeSlide < 0 && (activeSlide = slides.length - 1);
    activeSlide > slides.length - 1 && (activeSlide = 0);
    changeSlide();
  });
});

// Handles clicks on index buttons
indexButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (index !== activeSlide) {
      activeSlide = index;
      changeSlide();
    }
  });
});

// Checks activeSlide after any button click and changes current slide to match.
function changeSlide() {
  slides.forEach((slide, index) => {
    index === activeSlide
      ? slide.classList.add("active")
      : slide.classList.remove("active");
  });
  indexButtons.forEach((button, index) => {
    index === activeSlide
      ? button.classList.add("active")
      : button.classList.remove("active");
  });
}
