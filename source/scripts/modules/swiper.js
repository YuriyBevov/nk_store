//import { offerChange } from './onSwiperChange.js';

import SwiperCore, { Autoplay, Scrollbar, Navigation, Pagination, Thumbs } from 'swiper/core';
SwiperCore.use([Autoplay, Scrollbar, Navigation, Pagination, Thumbs]);
import Swiper from 'swiper'


/*const bannerWideSlider = document.querySelector('.banner-wide-swiper-container');

if(bannerWideSlider) {
   new Swiper(".banner-wide-swiper-container", {
      slidesPerView: 'auto',
      loop: true,

      pagination: {
         el: ".banner-wide-swiper-pagination",
         clickable: true
      },

      navigation: {
         nextEl: ".offer-swiper-button-next",
         prevEl: ".offer-swiper-button-prev",
      }
   })
}; */

const introSlider = document.querySelector('.intro-swiper');

if(introSlider) {
   new Swiper(introSlider, {
      slidesPerView: 1,
      loop: true,

      pagination: {
         el: ".intro-swiper-pagination",
         clickable: true
      },
   })
}
