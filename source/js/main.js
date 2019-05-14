var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});


var link = document.querySelector(".hit-sale__button");
var popup = document.querySelector(".hit-sale__form");

popup.classList.add("hit-sale__form--hidden");
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("hit-sale__form--hidden");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("hit-sale__form")) {
      evt.preventDefault();
      popup.classList.add("hit-sale__form--hidden");
    }
  }
});
