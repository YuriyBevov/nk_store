import { toggleClass } from '../functions.js';

let btns = document.querySelectorAll('.js-show-detail');
let productCards = document.querySelectorAll('.product-card');

btns.forEach( (btn,i) => {
    btn.addEventListener('click', (evt) => {
        evt.preventDefault();
        let activeCard = productCards[i];
        let detail = activeCard.querySelector('.product-card__detail');
        let productCardHeader = activeCard.querySelector('.product-card__header');

        toggleClass(productCardHeader, 'is-detailed')
        toggleClass(detail, 'active');

        toggleClass(evt.currentTarget, 'active');
    });
});