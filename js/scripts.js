"use strict";

// declarations
let navButton = document.querySelector(".menu-toggler");
let barTop = document.querySelector(".top");
let barMiddle = document.querySelector(".middle");
let barBottom = document.querySelector(".bottom");
let scrollTop = document.querySelector("#scrollTop");

navButton.addEventListener("click", (e) => {
  e.preventDefault();

  // toggle nav state
  document.body.classList.toggle("menu-visible");
  barTop.classList.toggle("top-open");
  barMiddle.classList.toggle("middle-open");
  barBottom.classList.toggle("bottom-open");
});

// Close menu when navbutton is not clicked
document.onclick = function (e) {
  if (!navButton.contains(e.target)) {
    document.body.classList.remove("menu-visible");
    barTop.classList.remove("top-open");
    barMiddle.classList.remove("middle-open");
    barBottom.classList.remove("bottom-open");
  }
};

window.onscroll = function () {
  scrollToTop();
};

scrollTop.addEventListener("click", (e) => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

function scrollToTop() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTop.style.display = "inline-block";
  } else {
    scrollTop.style.display = "none";
  }
}
