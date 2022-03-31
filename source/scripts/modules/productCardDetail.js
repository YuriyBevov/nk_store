import { toggleClass } from '../functions.js';

let btns = document.querySelectorAll('.js-show-detail');
let productCards = document.querySelectorAll('.product-card');

btns.forEach( (btn,i) => {
    btn.addEventListener('click', (evt) => {
        evt.preventDefault();
        let activeCard = productCards[i];
        let flipCard = activeCard.querySelector('.flip-card');

        toggleClass(flipCard, 'is-fliped')
        toggleClass(evt.currentTarget, 'active');
    });
});