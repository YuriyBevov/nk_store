import { changeTabs } from '../functions.js';

import Swiper from 'swiper';
import SwiperCore, {Navigation} from 'swiper/core';
SwiperCore.use([Navigation]);

document.addEventListener('DOMContentLoaded', function(){
    const tabSlider = document.querySelector('.tabs-slider');

    if(tabSlider) {
        
        new Swiper(tabSlider, {
            slidesPerView: 'auto',
            slideToClickedSlide: true,
            spaceBetween: 10,
            modules: [Navigation],

            navigation: {
                nextEl: ".tabs-button-next",
                prevEl: ".tabs-button-prev",
             }
        })
    }

    changeTabs('.tab', '.tab-content-box')
});

