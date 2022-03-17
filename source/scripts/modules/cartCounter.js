import { addClass, removeClass, checkClass } from '../functions.js';

const counter = document.querySelector('.js-counter');
const decBtn = document.querySelector('.js-counter-dec');
const incBtn = document.querySelector('.js-counter-inc');

if(counter) {
    let currentValue = Number(counter.innerHTML);

    const minValue = 1;
    const maxValue = 99;

    const setValue = (operationType) => {
        operationType === 'dec' ?
        currentValue -= 1 :
        operationType === 'inc' ? 
        currentValue += 1 : null;

        counter.innerHTML = currentValue;
    }

    const onClickDecValue = () => {
        if (currentValue === maxValue) {
            removeClass(incBtn, 'disabled');
            setValue('dec');
        }
        if(currentValue > (minValue + 1) && currentValue < maxValue ) {
            checkClass(decBtn, 'disabled') ?
            removeClass(decBtn, 'disabled') : null;
            setValue('dec');
        } else if(currentValue === 2) {
            setValue('dec');
            addClass(decBtn, 'disabled');
        }
    }

    const onClickIncValue = () => {
        if(currentValue === 1) {
            removeClass(decBtn, 'disabled');
            setValue('inc');
        } else if ( currentValue > minValue && currentValue < (maxValue - 1) ) {
            setValue('inc');
        } else if (currentValue === (maxValue - 1) ) {
            setValue('inc');
            addClass(incBtn, 'disabled');
        }
    }

    decBtn.addEventListener('click', onClickDecValue);
    incBtn.addEventListener('click', onClickIncValue);
}