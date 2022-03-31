import { changeTabs } from '../functions.js';

import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', function(){
    const tabSlider = document.querySelector('.tabs-slider');

    if(tabSlider) {
        
        new Swiper(tabSlider, {
            //freeMode: true,
            slidesPerView: 'auto',
            slideToClickedSlide: true,
            spaceBetween: 10
        })
    }

    changeTabs('.tab', '.tab-content-box')
});

