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

      navigation: {
         nextEl: ".reviews-button-next",
         prevEl: ".reviews-button-prev",
      }
   })
}
