let btns = document.querySelectorAll('.js-filter-btn');

const onClickDropDown = (evt) => {
    let content = evt.currentTarget.nextElementSibling;
    if(content.classList.contains('js-collapsed')) {
        evt.currentTarget.classList.add('is-active');
        content.classList.remove('js-collapsed');
    } else {
        evt.currentTarget.classList.remove('is-active');
        content.classList.add('js-collapsed');
    }
}

btns.forEach(btn => {
    btn.addEventListener('click', onClickDropDown);
})