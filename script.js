"use strict";

// STICKY NAVIGATION ON SCROLLL
// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the navbar
var navbar = document.querySelector(".navbar");
console.log(navbar);
// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// COLLAPSE NAVIGATION BAR WHEN SCREEN IS 1200PX
// DECLARE VARIABLEa
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar-nav");

// ADD AND REMOVE ACTIVE CLASS TO NAV
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  console.log(hamburger);
  navMenu.classList.toggle("active");
});
