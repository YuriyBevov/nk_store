//import { offerChange } from './onSwiperChange.js';

import SwiperCore, { EffectFade, Autoplay, Scrollbar, Navigation, Pagination, Thumbs } from 'swiper/core';
SwiperCore.use([ EffectFade, Autoplay, Scrollbar, Navigation, Pagination, Thumbs]);
import Swiper from 'swiper'

let mainSlider = document.querySelectorAll('.main-swiper');

if(mainSlider) {
   mainSlider.forEach(slider => {
      new Swiper(slider, {
         slidesPerView: 'auto',
         spaceBetween: 40,
         modules: [Pagination],

         pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
         },
      })

   })
}

const introSlider = document.querySelector('.intro-swiper');

if(introSlider) {
   new Swiper(introSlider, {
      slidesPerView: 1,
      loop: true,

      speed: 800,
      autoplay: {
         delay: 5000,
      },

      effect: 'fade',
      fadeEffect: { crossFade: true },
      virtualTranslate: true,
      
      pagination: {
         el: ".intro-swiper-pagination",
         clickable: true
      },
   })
}

const reviewsSlider = document.querySelector('.reviews-swiper');

if(reviewsSlider) {
   new Swiper(reviewsSlider, {
      slidesPerView: 'auto',
      modules: [Navigation],
      navigation: {
         nextEl: ".reviews-button-next",
         prevEl: ".reviews-button-prev",
      }
   })
}

const thumbsSliderMain = document.querySelector('.thumbs-swiper');

if(thumbsSliderMain) {
   let galleryThumbs = new Swiper(thumbsSliderMain, {
      centeredSlides: true,
      centeredSlidesBounds: true,
      slidesPerView: 3,
      watchOverflow: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      spaceBetween: 5,
      direction: 'horizontal',

      breakpoints: {
         480: {
           direction: "vertical",
         },
      }
   });

   new Swiper(".thumbs-swiper-main", {
      watchOverflow: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      preventInteractionOnTransition: true,

      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },

      effect: 'fade',
      fadeEffect: {
         crossFade: true
      },

      thumbs: {
         swiper: galleryThumbs
      },
   });
}
