/** @format */
document.addEventListener("DOMContentLoaded", function () {
  const burgerBtn = document.getElementById("burger-btn");
  const appHeader = document.querySelector("header");
  const setLinks = document.querySelector(
    ".app-header__components__set-of-links"
  );

  burgerBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    appHeader.classList.toggle("open");
  });

  setLinks.addEventListener("click", function (event) {
    event.stopPropagation();
    appHeader.classList.toggle("open");
  });

  let offset = 0;
  const sliderLine = document.querySelector(".slider-line");

  document.querySelector(".btn-next").addEventListener("click", function () {
    if (window.innerWidth <= 1279) {
      offset = offset + 640;
      if (offset > 1920) {
        offset = 0;
      }
      sliderLine.style.left = -offset + "px";
    } else {
      offset = offset + 1080;
      if (offset >= 2430) {
        offset = 0;
      }
      sliderLine.style.left = -offset + "px";
    }
  });

  document.querySelector(".btn-back").addEventListener("click", function () {
    if (window.innerWidth <= 1279) {
      offset = offset - 640;
      if (offset < 0) {
        offset = 1920;
      }
      sliderLine.style.left = -offset + "px";
    } else {
      offset = offset - 1080;
      if (offset < 0) {
        offset = 2160;
      }
      sliderLine.style.left = -offset + "px";
    }
  });
});

document.addEventListener("click", (e) => {
  const appHeader = document.querySelector("header");
  const setLinks = document.querySelector(
    ".app-header__components__set-of-links"
  );
  const withinBoundaries = e.composedPath().includes(setLinks);

  if (!withinBoundaries && appHeader.classList.contains("open")) {
    appHeader.classList.toggle("open");
  }
});
