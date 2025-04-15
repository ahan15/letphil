// https://picsum.photos/w/h (this is the http request link)

const REG_WIDTH = 1600;
const REG_HEIGHT = 900;

const MOB_WIDTH = 800;
const MOB_HEIGHT = 600;

// Helper function to detect if user is on mobile
function isMobile() {
  if (window.innerWidth <= 768) {
    console.log(window.innerWidth);
    return true;
  } else {
    return false;
  }
}

function getUrl() {
  let url = "";
  if (isMobile()) {
    url = `https://picsum.photos/${MOB_WIDTH}/${MOB_HEIGHT}/?random=${Math.random()}`;
  } else {
    url = `https://picsum.photos/${REG_WIDTH}/${REG_HEIGHT}/?random=${Math.random()}`;
  }
  return url;
}

function getImageURLs() {
  const imageURLs = [];
  for (let i = 0; i < 5; i++) {
    imageURLs.push(getUrl());
  }
  return imageURLs;
}

function makeSlider() {
  const sliderTrack = document.querySelector(".slider-track");
  const imgURLs = getImageURLs();

  for (let i = 0; i < 5; i++) {
    const imgDiv = document.createElement('div');
    imgDiv.classList.add('image-div');

    const imgElem = document.createElement('img');
    imgElem.classList.add('image-element');
    imgElem.src = imgURLs[i];

    imgDiv.appendChild(imgElem);

    sliderTrack.appendChild(imgDiv);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  makeSlider();
});