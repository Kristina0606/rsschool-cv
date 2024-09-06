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

  document
    .querySelector(".mobile-btn-next")
    .addEventListener("click", function () {
      offset = offset + 270;
      if (offset > 1350) {
        offset = 0;
      }
      sliderLine.style.left = -offset + "px";
    });

  document
    .querySelector(".mobile-btn-back")
    .addEventListener("click", function () {
      offset = offset - 270;
      if (offset < 0) {
        offset = 1350;
      }
      sliderLine.style.left = -offset + "px";
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

////////////////////////////////////////////////////////////////////////////// pagination

let pets = [
  { name: "Katrine", imgLink: "./images/pets-katrine.png" },
  { name: "Jennifer", imgLink: "./images/pets-jennifer.png" },
  { name: "Woody", imgLink: "./images/pets-woody.png" },
  { name: "Sophia", imgLink: "./images/pets-katrine2.png" },
  { name: "Timmy", imgLink: "./images/pets-timmy.png" },
  { name: "Charly", imgLink: "./images/pets-charly.png" },
  { name: "Scarlet", imgLink: "./images/pets-scarlet.png" },
  { name: "Freddie", imgLink: "./images/pets-katrine3.png" },
];

let currentPage = 1;
let numOfPages = 6;
let numOfCards = 8;

if (window.innerWidth <= 1279 && window.innerWidth > 768) {
  numOfPages = 8;
  numOfCards = 6;
} else if (window.innerWidth < 769) {
  numOfPages = 16;
  numOfCards = 3;
}

function getRandomItems(arr, num) {
  const mixArr = arr.slice().sort(() => 0.5 - Math.random());
  return mixArr.slice(0, num);
}

function renderPage(page) {
  const cardContainer = document.getElementById("cards-container");
  cardContainer.innerHTML = "";
  const items = getRandomItems(pets, numOfCards);
  items.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
            <div class="card-img">
              <img src="${item.imgLink}" alt="${item.name}"/>
            </div>
            <div class="card-name">
              <h4>${item.name}</h4>
            </div>
            <div>
              <button type="button" class="card-btn">
                <span>Learn more</span>
              </button>
            </div>`;
    cardContainer.appendChild(card);
  });
  document.getElementById("page-number").innerText = page;
}

function paginationButtons() {
  document.querySelector(".btn-pag-next").addEventListener("click", () => {
    if (currentPage < numOfPages) {
      currentPage++;
      renderPage(currentPage);
    }
  });

  document.querySelector(".nav-double-right").addEventListener("click", () => {
    if (currentPage !== numOfPages) {
      currentPage = numOfPages;
      renderPage(currentPage);
    }
  });

  document.querySelector(".btn-pag-back").addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderPage(currentPage);
    }
  });

  document.querySelector(".nav-double-left").addEventListener("click", () => {
    if (currentPage !== 1) {
      currentPage = 1;
      renderPage(currentPage);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  paginationButtons();
  renderPage(currentPage);
});
