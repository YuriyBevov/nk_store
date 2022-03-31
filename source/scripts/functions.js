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

class Accordeon {
    constructor( sel, options = {} ) {
        this.isCollapse = options.isCollapse ? options.isCollapse : false;
        this.accordeon = typeof(sel) === 'object' ? sel : document.querySelector(sel); // могу передавать как класс элемента, так и сам элемент
        this.heads = this.accordeon.querySelectorAll('.accordeon-head');
        this.bodyes = this.accordeon.querySelectorAll('.accordeon-body');
    }
 
    init() {
        this.heads.forEach(head => {
            head.addEventListener('click', (evt) => {
                console.log(this.isCollapse)
                if(this.isCollapse) {
                    this.bodyes.forEach(b => {
                        b.classList.contains('js-opened') ?
                        b.classList.remove('js-opened') : null;
                    })
                }
                let active = evt.currentTarget;
                active.classList.toggle('js-active');
                active.nextElementSibling.classList.toggle('js-opened');
            });
        })
    };
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
    changeTabs, getBoundingClientRect, Accordeon
}