import { removeClass,toggleClass, bodyLocker, checkClass } from '../functions.js';

let btn = document.querySelector('.js-open-filter-btn');
let closeBtn = document.querySelector('.js-close-filter-btn');
let overlay = document.querySelector('.catalog__aside');

const onClickShowFilter = () => {
    !checkClass(overlay, 'js-opened') ?
    bodyLocker(true, false) : bodyLocker(false, false);

    toggleClass(overlay, 'js-opened');
    overlay.addEventListener('click', onClickByOverlayCloseFilter);
    closeBtn.addEventListener('click', onClickHideFilter);
}

const onClickHideFilter = () => {
    bodyLocker(false,false);
    removeClass(overlay, 'js-opened');
    overlay.removeEventListener('click', onClickByOverlayCloseFilter);
    closeBtn.removeEventListener('click', onClickHideFilter);
}

const onClickByOverlayCloseFilter = (evt) => {

    if(evt.target === overlay) {
        bodyLocker(false,false);
        removeClass(overlay, 'js-opened');
        overlay.removeEventListener('click', onClickByOverlayCloseFilter);
        closeBtn.removeEventListener('click', onClickHideFilter);
    }
}

if(btn) {
    btn.addEventListener('click', onClickShowFilter);
}