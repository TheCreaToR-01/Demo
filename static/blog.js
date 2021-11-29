let hamburger = document.querySelector(".hamburger");
let nav = document.querySelector(".navbar");
let nav_list = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("h-nav-resp");
  nav_list.classList.toggle("v-class-resp");
});
