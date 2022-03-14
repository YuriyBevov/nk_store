import { limitStr } from '../functions.js';

let reviewCardText = document.querySelectorAll('.review-card__content');

reviewCardText.forEach(content => {
    content.innerHTML = limitStr(content.innerHTML, 195);
})