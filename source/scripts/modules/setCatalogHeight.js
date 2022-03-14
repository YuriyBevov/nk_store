import { getBoundingClientRect } from '../functions.js';

let header = document.querySelector('header');
let catalogSections = document.querySelectorAll('.catalog-section');

let headerHeight = getBoundingClientRect(header, 'height');

function setCatalogSectionWidth() {
    catalogSections.forEach(section => {
        section.style.height = 'calc(100vh - ' + headerHeight + 'px)';
    });
}

setCatalogSectionWidth();

const onResizeCheckHeaderHeight = () => {
    if(headerHeight !== getBoundingClientRect(header, 'height')) {
        headerHeight = getBoundingClientRect(header, 'height');
        setCatalogSectionWidth();
    }
}

window.addEventListener('resize', onResizeCheckHeaderHeight);
