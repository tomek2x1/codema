const slider = document.querySelector(".slider__wrapper");
const leftArrow = document.querySelector(".slider__arrow--left");
const rightArrow = document.querySelector(".slider__arrow--right");
const indicatorParrents = document.querySelector(".slider__dots-wrapper");

let sectionIndex = 0;

const setIndex = () => {
  document
    .querySelector(".slider__dot--selected")
    .classList.remove("slider__dot--selected");
  slider.style.transform = `translate(${sectionIndex * -25}%)`;
};

document.querySelectorAll(".slider__dots-wrapper li").forEach((item, index) => {
  item.addEventListener("click", () => {
    sectionIndex = index;
    setIndex();
    item.classList.add("slider__dot--selected");
  });
});

leftArrow.addEventListener("click", () => {
  sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 2;
  setIndex();
  indicatorParrents.children[sectionIndex].classList.add(
    "slider__dot--selected"
  );
});

rightArrow.addEventListener("click", () => {
  sectionIndex = sectionIndex < 2 ? sectionIndex + 1 : 0;
  setIndex();
  indicatorParrents.children[sectionIndex].classList.add(
    "slider__dot--selected"
  );
});
