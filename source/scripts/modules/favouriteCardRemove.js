const removeBtns = document.querySelectorAll('.favourite-card__remove-btn');

const onClickRestoreItem = (evt) => {
    const target = evt.currentTarget;
    const overlay = target.parentNode;
    const card = overlay.parentNode.querySelector('.favourite-card__content');;

    if(card.classList.contains('removed')) {
        card.classList.remove('removed')
        overlay.classList.remove('active');
        target.removeEventListener('click', onClickRestoreItem);
    };
}

const onClickRemoveItem = (evt) => {
    const target = evt.currentTarget;
    const card = target.parentNode;
    const overlay = card.parentNode.querySelector('.favourite-card__overlay');

    if(!card.classList.contains('removed')) {
        card.classList.add('removed')
        overlay.classList.add('active');

        const restoreBtn = overlay.querySelector('button');
        restoreBtn.addEventListener('click', onClickRestoreItem);
    };
}

removeBtns.forEach(btn => {
    btn.addEventListener('click', onClickRemoveItem);
})