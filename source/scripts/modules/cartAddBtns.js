
import { toggleClass, checkClass } from '../functions.js';

let cartAddBtns = document.querySelectorAll('.js-cart-add-btn');

const onClickToggleCartAdd = (evt) => {
    evt.preventDefault();
    if(!checkClass(evt.currentTarget, 'in-cart')) {
        evt.currentTarget.classList.add('in-cart');
        evt.currentTarget.style.opacity = 0.5;
        evt.currentTarget.querySelector('span').innerHTML = 'Убрать из корзины';
    } else {
        evt.currentTarget.classList.remove('in-cart');
        evt.currentTarget.style.opacity = 1;
        evt.currentTarget.querySelector('span').innerHTML = 'В корзину';
    }

}

cartAddBtns.forEach(btn => {
    btn.addEventListener('click', onClickToggleCartAdd);
})