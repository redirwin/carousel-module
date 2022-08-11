const slideContainer = document.querySelector(".slide-container");
const slides = document.querySelectorAll(".slide-container");
const indexButtonsContainer = document.querySelector(
  ".index-buttons-container"
);
const indexButtons = indexButtonsContainer.childNodes;
const progressButtons = document.querySelectorAll(".progress-button");
let activeSlide = 0;

function setupCarouselButtons() {
  slides[0].classList.add("active");
  slides.forEach(() => {
    indexButtonsContainer.innerHTML += `<button class="index-button"></button>`;
  });
  indexButtons[0].classList.add("active");
}

function handleProgressButtonClicks() {
  progressButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      index === 0 ? (activeSlide -= 1) : activeSlide++;
      activeSlide < 0 && (activeSlide = slides.length - 1);
      activeSlide > slides.length - 1 && (activeSlide = 0);
      changeSlide();
    });
  });
}

function handleIndexButtons() {
  indexButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      if (index !== activeSlide) {
        activeSlide = index;
        changeSlide();
      }
    });
  });
}

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

setupCarouselButtons();
handleProgressButtonClicks();
handleIndexButtons();
