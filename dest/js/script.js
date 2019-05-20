'use strict'

window.onload = function() {
    var btnMobileMenu = document.querySelector('.header__btn-mobile-menu');

    btnMobileMenu.onclick = function() {
        this.classList.toggle('active');
    }

    var galleryThumbs = new Swiper('.slider-gallery__thumbs', {
        spaceBetween: 10,
        slidesPerView: 8,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    
    var galleryTop = new Swiper('.slider-gallery__top', {
        spaceBetween: 10,
        navigation: {
            nextEl: '.slider-gallery__next',
            prevEl: '.slider-gallery__prev',
        },
        thumbs: {
            swiper: galleryThumbs
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });
}