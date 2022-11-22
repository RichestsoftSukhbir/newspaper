// top nav today
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.querySelector(".day").innerHTML  = new Date().toLocaleDateString("en-US", options);

// year
document.querySelector(".year").innerHTML = new Date().getFullYear();

// header top position changer
let menu = document.querySelector(".menu");
let header = document.querySelector('header');
let ham = document.querySelector(".hamburger");

window.addEventListener("load", function () {
    headerTop();
});
window.addEventListener("resize", function () {
    headerTop();
});

ham.addEventListener("click", function () {
    menu.classList.toggle('active');
    ham.classList.toggle('active');
});

function headerTop() {
    let headerHeight = header.clientHeight;
    menu.style.top = (headerHeight + 1) + "px";
}

var textswiper = new Swiper(".text-slider", {
    allowTouchMove: false,
    spaceBetween: 40,
    effect: "slide",
});
var imageswiper = new Swiper(".image-slider", {
    speed: 1000,
    spaceBetween: 10,
    grabCursor: true,
    navigation: {
        nextEl: '.news-next',
        prevEl: '.news-prev',
    }
});
imageswiper.controller.control = this.textswiper;

var imageswiper = new Swiper(".story-slider", {
    speed: 1000,
    spaceBetween: 40,
    grabCursor: true,
    loop: true,
    navigation: {
        nextEl: '.story-next',
        prevEl: '.story-prev',
    }
});
var sponserswiper = new Swiper(".sponser-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
            loop: false
        },
    },
});