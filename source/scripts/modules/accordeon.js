import { Accordeon } from '../classes.js';

let accordeon = document.querySelectorAll('.offer-history__accordeon');

if(accordeon) {
    accordeon.forEach(acc => {
        new Accordeon(acc).init(); 
    })
}