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
    appHeader.classList.remove("open");
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
