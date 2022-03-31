import { Accordeon } from '../functions.js';

// Использование:
let accordeon = document.querySelector('.offer-history__accordeon');

if(accordeon) {
    new Accordeon(accordeon).init(); 
}