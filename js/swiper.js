
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";


export const enableSwiper = () => {

    const swiperImages = new Swiper("#sw-img", {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
        },
    });
    const swiperText = new Swiper("#sw-txt", {
        loop: true,
        direction: "vertical"
    })

    swiperImages.on('slideNextTransitionStart', function () {
        swiperText.slidePrev()

    });

    swiperImages.on('slidePrevTransitionStart', function () {
        swiperText.slideNext()
    });
}

