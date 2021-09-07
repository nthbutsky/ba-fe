// MENU

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

function showMobileMenu() {
  hamburger.classList.toggle("header__nav-menu-btn_active");
  navMenu.classList.toggle("header__nav-list_active");
}

hamburger.addEventListener("click", showMobileMenu);

// SCROLL ICON

const scrollIcon = document.querySelector("#scroll-icon");

function hideShowScrollIcon() {
  if (window.scrollY > 0) {
    scrollIcon.style.display = "none";
  } else {
    scrollIcon.style.display = "block";
  }
}

window.addEventListener("scroll", hideShowScrollIcon);
