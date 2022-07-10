const reviews = document.querySelectorAll('.product-reviews-modal__content .user-review');

if(reviews.length) {
    const showMoreBtn = document.querySelector('.product-reviews-modal__more');
    let step = 3;
    let current = step;
    let total = reviews.length;

    const onClickShowMoreReviews = () => {
        if(current + step < total) {
            for (let i = current; i < current + step; i++) {
                reviews[i].classList.remove('hidden');
            }
            current += step;
        } else {
            showMoreBtn.removeEventListener('click', onClickShowMoreReviews);
            showMoreBtn.style.display = 'none';

            for (let i = current; i < total; i++) {
                reviews[i].classList.remove('hidden');
            }
        }
    }

    if(total <= step) {
        showMoreBtn.style.display = 'none';
    } else {
        for (let i = current; i < total; i++) {
            reviews[i].classList.add('hidden');
        }
        showMoreBtn.addEventListener('click', onClickShowMoreReviews);
    }
}
