let menu = document.querySelector("#menu-bars");
let navabr = document.querySelector(".navbar");
menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navabr.classList.toggle("active");
});

let search = document.querySelector("#search-icon");
let searchForm = document.querySelector("#search-form");
search.addEventListener("click", () => {
  searchForm.classList.toggle("active");
});

let searchClose = document.querySelector("#searchFormClose");
searchClose.addEventListener("click", () => {
  searchForm.classList.toggle("active");
});

window.onscroll = () => {
  menu.classList.remove("active");
  navabr.classList.remove("active");
};

//Slider

var swiper = new Swiper(".mySwiper ", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

//EndSlider
