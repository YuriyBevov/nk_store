import { Modal } from '../classes.js';

let modals = document.querySelectorAll('.modal');

if(modals) {
    modals.forEach(modal => {
        new Modal(modal, {
            isBodyLocked: true
        }).init(); 
    })
}