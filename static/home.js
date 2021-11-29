let hamburger = document.querySelector('.hamburger');
let navList = document.querySelector('.nav-list');
let nav = document.querySelector('.navbar');

hamburger.addEventListener('click', ()=>{
    navList.classList.toggle('v-class-resp');
    nav.classList.toggle('h-nav-resp');
    hamburger.classList.toggle('active');
})