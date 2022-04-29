function limitStr( str, n ) {
    if ( str.length > n ) {
        return str.slice(0, n) + '...';
    } else {
        return str
    }
}

function addClass(el, cl) {
    el.classList.add(cl);
}

function removeClass(el, cl) {
    el.classList.remove(cl);
}

function checkClass(el, cl) {
    return el.classList.contains(cl);
}

function toggleClass(el, cl) {
    el.classList.toggle(cl);
}

function bodyLocker(bool, addPadding = false) {
    let body = document.querySelector('body');

    if(bool) {
        body.style.overflow = 'hidden';
        addPadding ?
        body.style.paddingRight = '4px' : null;
    } else {
        body.style.overflow = 'auto';
        body.style.paddingRight = '0';
    }
}

function changeTabs(tabClass, contentClass) {
    let tabs = document.querySelectorAll(tabClass);
    let content = document.querySelectorAll(contentClass);

    if(tabs) {
        const onClickChangeTab = (evt) => {
            let data = evt.currentTarget.getAttribute('data-tab');
            if(content) {
                content.forEach(c => {
                    c.classList.contains('active') ?
                    c.classList.remove('active') : null;

                    c.getAttribute('data-tab-content') === data ?
                    c.classList.add('active') : null;
                });
            }

            tabs.forEach(tab => {
                tab.classList.contains('active') ?
                tab.classList.remove('active') : null;
            });

            evt.currentTarget.classList.add('active');
        }

        tabs.forEach(tab => {
            tab.addEventListener('click', onClickChangeTab);
        });
    }
}

function getBoundingClientRect(elem, side) {
    if(side === 'height') {
        return elem.getBoundingClientRect().height
    }

    if(side === 'width') {
        return elem.getBoundingClientRect().width
    }

    if(side === 'top') {
        return elem.getBoundingClientRect().top
    }
}

export  { 
    limitStr, addClass, removeClass, 
    checkClass, toggleClass, bodyLocker, 
    changeTabs, getBoundingClientRect
}