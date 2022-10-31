const imageSliderBox = document.querySelector(".image-slider__image-box");
const imageSliderLeftBtn = document.querySelector(".image-slider__left-btn");
const imageSliderRightBtn = document.querySelector(".image-slider__right-btn");
const imageSliderRounds = document.querySelectorAll(".image-slider__round");
const images = document.querySelectorAll("img");

let imageSlideCounter = 0;
let intervalId;

const removeInterval = () => {
  console.log("Clearing interval");
  clearInterval(intervalId);
};
const startInterval = () => {
  console.log("Setting interval");
  intervalId = setInterval(slideImageToRight, 5000);
};

const updateImageRounds = () => {
  imageSliderRounds.forEach((round) =>
    round.classList.remove("image-slider__round--active")
  );
  imageSliderRounds[imageSlideCounter].classList.add(
    "image-slider__round--active"
  );
};
const slideImage = () => {
  imageSliderBox.style = `transform: translateX(-${
    imageSliderBox.clientWidth * imageSlideCounter
  }px)`;
};
const slideImageToLeft = () => {
  imageSlideCounter--;
  if (imageSlideCounter < 0) {
    imageSlideCounter = images.length - 1;
  }
  updateImageRounds();
  slideImage();
  removeInterval();
  startInterval();
};
const slideImageToRight = () => {
  imageSlideCounter++;
  if (imageSlideCounter > images.length - 1) {
    imageSlideCounter = 0;
  }
  updateImageRounds();
  slideImage();
  removeInterval();
  startInterval();
};

const updateCounter = (roundIndex) => {
  imageSlideCounter = roundIndex;
  updateImageRounds();
  slideImage();
  removeInterval();
  startInterval();
};
const initiateAutomaticImageSlide = () => {
  startInterval();
};
initiateAutomaticImageSlide();

imageSliderLeftBtn.addEventListener("click", slideImageToLeft);
imageSliderRightBtn.addEventListener("click", slideImageToRight);
imageSliderRounds.forEach((imageRound, index) =>
  imageRound.addEventListener("click", updateCounter.bind(null, index))
);
