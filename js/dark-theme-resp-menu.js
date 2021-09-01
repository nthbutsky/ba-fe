const hamburger = document.querySelector("#hamburger");
const hamburgerX = document.querySelector("#hamburger-x");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", showMobileMenu);
hamburgerX.addEventListener("click", showMobileMenu);

function showMobileMenu() {
  hamburger.classList.toggle("header-section__nav-menu-btn_active");
  hamburgerX.classList.toggle("header-section__nav-menu-btn-x_active");
  navMenu.classList.toggle("header-section__nav-list_active");
}
