import { bodyLocker } from "../functions";

const zoomer = document.querySelector('.js-zoom-btn');
const zoomModalOverlay = document.querySelector('.zoomist-modal-overlay');
const zoomModal = document.querySelector('.zoomist-modal');
const closeModalBtn = document.querySelector('.zoomist-modal__close');

const onClickZoomImage = () => {
    bodyLocker(true);
    zoomModalOverlay.classList.add('is-opened');
    zoomModal.classList.add('is-active');

    let active = document.querySelector('.thumbs-swiper-main .swiper-slide-active > img');
    let activeSrc = active.getAttribute('src');
    
    let zoomistSrc = document.querySelector('.zoomist');
    zoomistSrc.setAttribute('data-zoomist-src', activeSrc);

    let zoomist = new Zoomist('.zoomist', {
        slider: true,
        zoomer: true,
        maxRatio: 4,
        bounds: true,
        fill: 'fill',
        height: 'auto',
        zoomRatio: 0.2,
    });

    function closeZoomModal() {
        bodyLocker(false);
        closeModalBtn.removeEventListener('click', onClickCloseZoomModal);
        document.removeEventListener('keydown', onEscCloseZoomModal);
        zoomist.destroy();
        zoomModalOverlay.classList.remove('is-opened');
        zoomModal.classList.remove('is-active');
    }

    const onClickCloseZoomModal = () => {
        closeZoomModal();
    }

    const onEscCloseZoomModal = (evt) => {
        if(evt.key === 'Escape') {
            closeZoomModal();
        }
    }

    closeModalBtn.addEventListener('click', onClickCloseZoomModal);
    document.addEventListener('keydown', onEscCloseZoomModal);
}

zoomer.addEventListener('click', onClickZoomImage);