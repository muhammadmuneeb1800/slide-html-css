const slider = document.querySelectorAll(".slider");
let count = 0;

slider.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

sliderImage = () => {
  slider.forEach((slide) => {
    count = Math.max(0, Math.min(count, slider.length - 1));
    slide.style.transform = `translateX(-${count * 100}%)`;
  });
};

const goPrev = () => {
  count--;
  sliderImage();
};

const goNext = () => {
  count++;
  sliderImage();
};
