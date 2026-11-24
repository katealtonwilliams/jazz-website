document.querySelector("#year").textContent = new Date().getFullYear();

const slideshow = document.querySelector(".slideshow");

if (slideshow) {
  const slides = [...slideshow.querySelectorAll(".slide")];
  const position = slideshow.querySelector(".slide-position");
  let currentIndex = slides.findIndex((slide) => !slide.hidden);

  const showSlide = (offset) => {
    slides[currentIndex].hidden = true;
    currentIndex = (currentIndex + offset + slides.length) % slides.length;
    slides[currentIndex].hidden = false;
    position.textContent = `Photo ${currentIndex + 1} of ${slides.length}`;
  };

  slideshow.querySelectorAll("[data-slide-direction]").forEach((button) => {
    button.addEventListener("click", () => {
      showSlide(button.dataset.slideDirection === "next" ? 1 : -1);
    });
  });
}
