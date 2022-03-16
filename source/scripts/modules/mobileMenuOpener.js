import { removeClass, toggleClass, checkClass, bodyLocker, getBoundingClientRect } from '../functions.js';

let menu = document.querySelector('.mobile-menu');
let opener = document.querySelector('.js-mobile-menu-opener');

let header = document.querySelector('.header');
let headerHeight = getBoundingClientRect(header, 'height');

function setMobileMenuPosition() {
    menu.style.top = headerHeight + 'px';
}

setMobileMenuPosition();

const onClickOpenMenu = () => {
    toggleClass(opener, 'active');
    toggleClass(menu, 'is-opened');

    checkClass(menu, 'is-opened') ?
    bodyLocker(true) : bodyLocker(false);
}

const onResizeCheckHeaderHeight = () => {
    if(headerHeight !== getBoundingClientRect(header, 'height')) {
        headerHeight = getBoundingClientRect(header, 'height');
        setMobileMenuPosition();
    }

    if(window.innerWidth > 767 && checkClass(menu, 'is-opened')) {
        removeClass(opener, 'active');
        removeClass(menu, 'is-opened');
        bodyLocker(false);
    }
}

window.addEventListener('resize', onResizeCheckHeaderHeight);
opener.addEventListener('click', onClickOpenMenu);