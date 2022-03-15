let items = document.querySelectorAll('.mobile-menu__catalog-item');

const onClickOpenCatalogSection = (evt) => {
    evt.currentTarget.classList.toggle('active');
}

items.forEach(item => {
    item.addEventListener('click', onClickOpenCatalogSection);
})