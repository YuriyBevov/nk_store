import { limitStr } from '../functions.js';

let reviewCardText = document.querySelectorAll('.review-card__content');

reviewCardText.forEach(content => {
    content.innerHTML = limitStr(content.innerHTML, 220);
})

let productCardTitles = document.querySelectorAll('.product-card__title');

productCardTitles.forEach(title => {
    title.innerHTML = limitStr(title.innerHTML, 40);
})