/** @format */
document.addEventListener("DOMContentLoaded", function () {
  const burgerBtn = document.getElementById("burger-btn");
  const appHeader = document.querySelector("header");
  const setLinks = document.querySelector(
    ".app-header__components__set-of-links"
  );
  burgerBtn.addEventListener("click", function () {
    appHeader.classList.toggle("open");
  });
  setLinks.addEventListener("click", function () {
    appHeader.classList.toggle("open");
  });
});
