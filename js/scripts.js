"use strict";

let navButton = document.querySelector(".menu-toggler");
let barTop = document.querySelector(".top");
let barMiddle = document.querySelector(".middle");
let barBottom = document.querySelector(".bottom");

navButton.addEventListener("click", (e) => {
  e.preventDefault();

  // toggle nav state
  document.body.classList.toggle("menu-visible");
  barTop.classList.toggle("top-open");
  barMiddle.classList.toggle("middle-open");
  barBottom.classList.toggle("bottom-open");
});
