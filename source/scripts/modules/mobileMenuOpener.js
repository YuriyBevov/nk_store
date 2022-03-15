import { toggleClass, checkClass, bodyLocker } from '../functions.js';

let menu = document.querySelector('.mobile-menu');
let opener = document.querySelector('.js-mobile-menu-opener');

const onClickOpenMenu = () => {
    toggleClass(opener, 'active');
    toggleClass(menu, 'is-opened');

    checkClass(menu, 'is-opened') ?
    bodyLocker(true) : bodyLocker(false);
}

opener.addEventListener('click', onClickOpenMenu);