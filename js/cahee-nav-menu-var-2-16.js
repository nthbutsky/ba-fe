const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", showMobileMenu);

function showMobileMenu() {
  hamburger.classList.toggle("header__nav-menu-btn_active");
  navMenu.classList.toggle("header__nav-list_active");
}
