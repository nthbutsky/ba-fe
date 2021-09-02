/* COOKIES MODAL */

const cookiesModal = document.querySelector("#cookies-modal");
const cookiesBtn = document.querySelector("#cookies-accept-btn");

document.addEventListener("DOMContentLoaded", () =>
  setTimeout(function () {
    cookiesModal.style.display = "flex";
    cookiesModal.style.top = "0";
  }, 2000)
);

cookiesBtn.addEventListener("click", () =>
  setTimeout(function () {
    cookiesModal.style.top = "-50px";
  }, 500)
);

/* NAV MENU */

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
const navMenuBg = document.querySelector("#nav-menu-bg");
const closeBtn = document.querySelector("#menu-close-btn");

hamburger.addEventListener("click", showHideMenu);
closeBtn.addEventListener("click", showHideMenu);

function showHideMenu() {
  hamburger.classList.toggle("header-section__nav-menu-btn-bar_hide");
  navMenu.classList.toggle("header-section__nav-list_active");
  navMenuBg.classList.toggle("header-section__menu-transparent-bg_active");
}

/* HIRE MODAL */

const hireModal = document.querySelector("#hire-modal");
const hireModalBg = document.querySelector("#hire-modal-bg");
const hireModalOpenBtn = document.querySelector("#header-hire-btn");
const hireModalCloseBtn = document.querySelector("#hire-modal-close-btn");
const hireModalOpenBtnFooter = document.querySelector("#footer-hire-btn");

hireModalOpenBtn.addEventListener("click", showHideHireModal);
hireModalOpenBtnFooter.addEventListener("click", showHideHireModal);
hireModalCloseBtn.addEventListener("click", showHideHireModal);

function showHideHireModal() {
  hamburger.classList.toggle("header-section__nav-menu-btn-bar_hide");
  hireModal.classList.toggle("hire-modal-section__form_active");
  hireModalBg.classList.toggle("hire-modal-section__transparent-bg_active");
}
