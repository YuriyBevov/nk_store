const rate = document.querySelector('.add-review-modal__rate');

if(rate) {
    const starControls = rate.querySelectorAll('.star-control label');

    function setActiveRate(el) {
        el.querySelector('.rating-star').classList.add('active');
    }

    const onClickSetRate = (evt) => {
        starControls.forEach(control => {
            const star = control.querySelector('.rating-star');
            star.classList.contains('active') ?
            star.classList.remove('active') : null;
        })

        for (let i = 0; i < starControls.length; i++) {
            if(starControls[i] !== evt.currentTarget) {
                setActiveRate(starControls[i]);
            } else {
                setActiveRate(starControls[i]);
                return
            }
        }
    }
    starControls.forEach(control => {
        control.addEventListener('click', onClickSetRate);
    })
}