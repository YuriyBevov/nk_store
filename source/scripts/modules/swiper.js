//import { offerChange } from './onSwiperChange.js';

import SwiperCore, { EffectFade, Autoplay, Scrollbar, Navigation, Pagination, Thumbs, Zoom } from 'swiper/core';
SwiperCore.use([ EffectFade, Autoplay, Scrollbar, Navigation, Pagination, Thumbs, Zoom]);
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

let zoomed = document.querySelectorAll('.zoomist');

let zoomedArray = [];

if(zoomed) {
   zoomed.forEach(element => {
      let zoomer = new Zoomist(element, {
         //height: '100%',
         slider: true,
         zoomer: true,
         maxRatio: 4,
         bounds: true,
         fill: 'fill',
         height: 400,
         zoomRatio: 0.2,
         on: {
            ready() {
            console.log('Zoomist ready!')
            }
         }
      });

      zoomedArray.push(zoomer);

      let btns = document.querySelectorAll('.thumbs-swiper-button');

      btns.forEach(btn => {
         btn.addEventListener('click', function() {
            zoomer.reset();
         })
      })
   });
}

if(thumbsSliderMain) {
   let sliderThumbs = new Swiper(thumbsSliderMain, {
      //centeredSlides: true,
      ///centeredSlidesBounds: true,
      slidesPerView: 4,
      watchOverflow: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      spaceBetween: 0,
      direction: 'horizontal',

      breakpoints: {
         480: {
           spaceBetween: 5,
           slidesPerView: 3,
           direction: "vertical",
         },
      },

      on: {
         slideChange: function() {
            console.log('change', zoomedArray);
         }
      }
   });

   let slider = new Swiper(".thumbs-swiper-main", {
      watchOverflow: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      preventInteractionOnTransition: true,
      allowTouchMove: false,

      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },

      effect: 'fade',
      fadeEffect: {
         crossFade: true
      },

      thumbs: {
         swiper: sliderThumbs
      },

      on: {

         slideChange: function() {
            console.log('change', zoomedArray);
            zoomedArray.forEach(el => {
               el.reset();
            })
         }
      }
   });
}
