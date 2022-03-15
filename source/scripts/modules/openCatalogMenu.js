import { addClass, removeClass, checkClass, bodyLocker } from '../functions.js';

let links = document.querySelectorAll('.catalog-nav__link');

let activeLink = null;
let activeSection = null;

const onClickCloseCatalogSection = (evt) => {
    removeClass(activeLink, 'js-active');
    activeLink = null;

    removeClass(activeSection, 'js-active');
    activeSection = null;
    evt.currentTarget.removeEventListener('click', onClickCloseCatalogSection);
    bodyLocker(false);
}

const onClickOpenCatalogSection = (evt) => {
    evt.preventDefault();
    bodyLocker(true, true);

    if(activeLink !== evt.currentTarget) {
        activeLink ?
        removeClass(activeLink, 'js-active') : null;

        activeSection ?
        removeClass(activeSection, 'js-active') : null;

        activeLink = evt.currentTarget;        
        activeSection =  activeLink.nextElementSibling;
        
        if(activeSection) {
            !checkClass(activeSection, 'js-active') ?
            addClass(activeSection, 'js-active') : null;

            let closeBtn = activeSection.querySelector('.js-close');

            closeBtn.addEventListener('click', onClickCloseCatalogSection);
        }

        !checkClass(activeLink, 'js-active') ?
        addClass(activeLink, 'js-active') : null;
    }
}

links.forEach(link => {
    link.addEventListener('click', onClickOpenCatalogSection);
})


/*const onMouseOverShowCatalogSection = (evt) => {
    bodyLocker(true, true);
    
    if(activeLink !== evt.currentTarget) {
        activeLink ?
        removeClass(activeLink, 'js-active') : null;

        activeSection ?
        removeClass(activeSection, 'js-active') : null;

        activeLink = evt.currentTarget;        
        activeSection =  activeLink.nextElementSibling;
        
        if(activeSection) {
            !checkClass(activeSection, 'js-active') ?
            addClass(activeSection, 'js-active') : null;

            let closeBtn = activeSection.querySelector('.js-close');

            closeBtn.addEventListener('click', onClickCloseCatalogSection);
        }

        !checkClass(activeLink, 'js-active') ?
        addClass(activeLink, 'js-active') : null;

        window.addEventListener('mousemove', onMouseOverHideCatalogSection);
    }
}

const onClickCloseCatalogSection = (evt) => {
    removeClass(activeLink, 'js-active');
    activeLink = null;

    removeClass(activeSection, 'js-active');
    activeSection = null;
    window.removeEventListener('mousemove', onMouseOverHideCatalogSection);
    evt.currentTarget.removeEventListener('click', onClickCloseCatalogSection);
    bodyLocker(false);
}

const onMouseOverHideCatalogSection = (evt) => {
    if(!activeLink.contains(evt.target) && !activeSection.contains(evt.target)){
        removeClass(activeLink, 'js-active');
        activeLink = null;

        removeClass(activeSection, 'js-active');
        activeSection = null;
        window.removeEventListener('mousemove', onMouseOverHideCatalogSection);
        bodyLocker(false);
    }
}

links.forEach(link => {
    link.addEventListener('mouseover', onMouseOverShowCatalogSection);
})*/

