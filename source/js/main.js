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


var popupOpen = document.querySelectorAll(".open-popup");
var popup = document.querySelector(".popup");
var close = document.querySelector(".popup__button-order");

for (var i = 0; i < popupOpen.length; i++) {
  popupOpen[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("popup--hidden");
  });
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("popup")) {
      evt.preventDefault();
      popup.classList.add("popup--hidden");
    }
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup--hidden");
});
