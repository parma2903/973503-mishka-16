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
var close = document.querySelector(".hit-sale__button-order");

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

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("hit-sale__form--hidden");
});


var cart = document.querySelector(".goods__buy");
var modal = document.querySelector(".popup");
var finish = document.querySelector(".popup__button-order");

modal.classList.add("popup--hidden");
cart.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup--hidden");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("popup")) {
      evt.preventDefault();
      popup.classList.add("popup--hidden");
    }
  }
});

finish.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup--hidden");
});
