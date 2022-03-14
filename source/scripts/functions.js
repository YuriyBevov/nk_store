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

function bodyLocker(bool) {
    let body = document.querySelector('body');

    bool ?
    body.style.overflow = 'hidden' : body.style.overflow = 'auto';
}

function changeTabs(el, contentList) {
    let tabs = document.querySelectorAll(el);
    let content = document.querySelectorAll(contentList);

    if(tabs) {
        const onClickChangeTab = (evt) => {
            let data = evt.currentTarget.getAttribute('data-tab-opener');
            
            if(content) {
                content.forEach(c => {
                    c.classList.contains('active') ?
                    c.classList.remove('active') : null;

                    c.getAttribute('data-tab') === data ?
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

    
}

export  { 
    limitStr, addClass, removeClass, 
    checkClass, toggleClass, bodyLocker, 
    changeTabs, getBoundingClientRect 
}