import { Accordeon } from '../functions.js';

// Использование:
let accordeon = document.querySelector('.offer-history_accordeon');
if(accordeon) {
    new Accordeon('.offer-history_accordeon').init();
}