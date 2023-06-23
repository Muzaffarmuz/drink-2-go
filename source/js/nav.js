let nav = document.querySelector(".main-nav__list");
let navToggle = document.querySelector(".user-nav__toggle");

const getButton = () => {
  nav.classList.remove("main-nav__list--nojs");

  navToggle.addEventListener("click", function () {
    if (nav.classList.contains("main-nav__list--closed")) {
      nav.classList.remove("main-nav__list--closed");
      nav.classList.add("main-nav__list--opened");
    } else {
      nav.classList.add("main-nav__list--closed");
      nav.classList.remove("main-nav__list--opened");
    }
  });
};

export { getButton };
