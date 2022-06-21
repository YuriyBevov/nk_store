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

class Modal {
    constructor( modal, options = {} ) {
        this.isBodyLocked = options.isBodyLocked ? true : false,
        this.modal = modal;
        this.id = this.modal.getAttribute('id');
        this.openers = document.querySelectorAll('[data-modal-anchor="' + this.id + '"]');
        this.isInited = false;
        this.overlay = this.modal.parentNode;
        this.close = this.modal.querySelector('.modal__close');
    }

    bodyLocker = (bool) => {
        if(this.isInited) {
            let body = document.querySelector('body');
        
            if(bool) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = 'auto';
            }
        } else {
            console.error('Для инициализации используй new Modal(_modal-selector_).init()')
        }
    }

    focusTrap = () => {
        if(this.isInited) {
            const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

            const firstFocusableElement = this.modal.querySelectorAll(focusableElements)[0];
            const focusableContent = this.modal.querySelectorAll(focusableElements);
            const lastFocusableElement = focusableContent[focusableContent.length - 1];

            let onBtnClickHandler = (evt) => {
                let isTabPressed = evt.key === 'Tab' || evt.key === 9;

                if(evt.key === 'Escape') {
                    document.removeEventListener('keydown', onBtnClickHandler);
                }

                if (!isTabPressed) {
                    return;
                }

                if (evt.shiftKey) {
                    if (document.activeElement === firstFocusableElement) {
                        lastFocusableElement.focus();
                        evt.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastFocusableElement) {
                        firstFocusableElement.focus();
                        evt.preventDefault();
                    }
                }
            }

            document.addEventListener('keydown', onBtnClickHandler);

            firstFocusableElement.focus();
        } else {
            console.error('Для инициализации используй new Modal(_modal-selector_).init()')
        }
    }

    addListeners = () => {
        if(this.isInited) {

            this.openers.forEach(opener => {
                opener.removeEventListener('click', this.openModal);
            })

            document.addEventListener('click', this.closeByOverlayClick);
            document.addEventListener('keydown', this.closeByEscBtn);

            this.close.addEventListener('click', this.closeByBtnClick);
        } else {
            console.error('Для инициализации используй new Modal(_modal-selector_).init()')
        }
    }

    refresh = () => {
        if(this.isInited) {
            this.isBodyLocked ?
            this.bodyLocker(false) : null;

            document.removeEventListener('click', this.closeByOverlayClick);
            document.removeEventListener('keydown', this.closeByEscBtn);

            this.close.removeEventListener('click', this.closeByBtnClick);
            this.overlay.classList.remove('is-opened');
            this.modal.classList.remove('is-active');

            this.openers.forEach(opener => {
                opener.addEventListener('click', this.openModal);
            })
        } else {
            console.error('Для инициализации используй new Modal(_modal-selector_).init()')
        }
    }

    closeByOverlayClick = (evt) => {
        if(this.isInited) {
            if(evt.target === this.overlay) {
                this.refresh();
            }
        } else {
            console.error('Для инициализации используй new Modal(_modal-selector_).init()')
        }
    }

    closeByEscBtn = (evt) => {
        if(this.isInited) {
            if (evt.key === "Escape") {
                this.refresh();
            }
        } else {
            console.error('Для инициализации используй new Modal(_modal-selector_).init()')
        }
    }

    closeByBtnClick = () => {
        if(this.isInited) {
            this.refresh();
        } else {
            console.error('Для инициализации используй new Modal(_modal-selector_).init()')
        }
    }

    openModal = (evt) => {
        evt.preventDefault();
        if(this.isInited) {
            console.log('modal opener')
            this.isBodyLocked ?
            this.bodyLocker(true) : null;

            this.overlay.classList.add('is-opened');
            this.modal.classList.add('is-active');
            this.addListeners();
            this.focusTrap();
        } else {
            console.error('Для инициализации используй new Modal(_modal-selector_).init()')
        }
    }
  
    init() {
        if(this.openers) {
            this.isInited = true;

            this.openers.forEach(opener => {
                opener.addEventListener('click', this.openModal, this.modal, this.overlay);
            })
        } else {
            console.error('Не добавлена кнопка открытия модального окна, либо в ней не прописан аттр-т: data-modal-anchor={modal-id} ')
        }
    };
}

export { Accordeon, Modal }