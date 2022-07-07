import { limitStr } from '../functions.js';

let reviewCardTexts = document.querySelectorAll('.review-card__content');

reviewCardTexts.forEach(text => {
    text.innerHTML = limitStr(text.innerHTML, 220);
})

let productCardTitles = document.querySelectorAll('.product-card__title');

productCardTitles.forEach(title => {
    title.innerHTML = limitStr(title.innerHTML, 40);
})