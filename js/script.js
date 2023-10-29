//toggle class active hamburger menu
const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// toggle class active search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-btn").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();

  e.preventDefault();
};

//toggle class active favorit cart
const favoritNav = document.querySelector(".favorit-galeri");
document.querySelector("#shopping-cart").onclick = (e) => {
  favoritNav.classList.toggle("active");
  e.preventDefault();
};
//klik di luar sidebar untuk menghilangkan nav

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

const search = document.querySelector("#search-btn");

document.addEventListener("click", function (e) {
  if (!search.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

const favorit = document.querySelector("#shopping-cart");

document.addEventListener("click", function (e) {
  if (!favorit.contains(e.target) && !favoritNav.contains(e.target)) {
    favoritNav.classList.remove("active");
  }
});

// pop up box

const itemDetailPop = document.querySelector("#item-detail-pop");
const itemDetailBtn = document.querySelector(".item-detail-btn");
const closePop = document.querySelector(".close-icon-btn");

itemDetailBtn.onclick = (e) => {
  itemDetailPop.style.display = "flex";
  e.preventDefault();
};

closePop.onclick = (e) => {
  itemDetailPop.display.style = "none";
  e.preventDefault();
};
