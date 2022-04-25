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

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header .navbar a");

window.onscroll = () => {
  menu.classList.remove("active");
  navabr.classList.remove("active");

  sections.forEach((section) => {
    let top = window.scrollY;
    let height = section.offsetHeight;
    let offset = section.offsetTop - 150;
    let id = section.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header .navbar a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

//Slider

function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}

function fadeOut() {
  setInterval(loader, 3000);
}

window.onload = fadeOut;

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

var swiper = new Swiper(".pista-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

//EndSlider
//open link in new tab
let button = document.querySelector("#link-site");
button.addEventListener("click", () => {
  const tab = window.open("https://google.com", "_blank");
});
