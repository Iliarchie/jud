const btnOpen = document.querySelector(".btn-menu");
const btnClose = document.querySelector(".btn-close");
const menu = document.querySelector(".menu");

const preloader = document.querySelector(".preloader");
const wrapper = document.querySelector(".wrapper");

btnOpen.addEventListener("click", function () {
  menu.classList.add("active");
});

btnClose.addEventListener("click", function () {
  menu.classList.remove("active");
});

setTimeout(() => {
  preloader.classList.add("active");
}, 2000);

setTimeout(() => {
    wrapper.classList.add("active");
  }, 2800);
  