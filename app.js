



const carousels = document.querySelectorAll('.carousel-container');

carousels.forEach((carousel) => {
  const track = carousel.querySelector('.carousel-track');
  const leftButton = carousel.querySelector('.left-btn');
  const rightButton = carousel.querySelector('.right-btn');
  const itemWidth = 170; 

  let position = 0;

  rightButton.addEventListener('click', () => {
    position -= itemWidth;
    if (position < -(track.children.length - 5) * itemWidth) {
      position = 0;
    }
    track.style.transform = `translateX(${position}px)`;
  });

  leftButton.addEventListener('click', () => {
    position += itemWidth;
    if (position > 0) {
      position = -(track.children.length - 5) * itemWidth;
    }
    track.style.transform = `translateX(${position}px)`;
  });
});







