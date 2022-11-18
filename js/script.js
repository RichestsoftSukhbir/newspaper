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
    navigation: {
        nextEl: '.story-next',
        prevEl: '.story-prev',
    }
});