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
