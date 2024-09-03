/** @format */
document.addEventListener("DOMContentLoaded", function () {
  const burgerBtn = document.getElementById("burger-btn");
  const appHeader = document.querySelector("header");
  burgerBtn.addEventListener("click", function () {
    appHeader.classList.toggle("open");
  });
});
