console.log('zoomist');

/*let zoomed = document.querySelectorAll('.zoomist');

let zoomedArray = [];

if(zoomed) {
   zoomed.forEach(element => {
      let zoomer = new Zoomist(element, {
         slider: true,
         zoomer: true,
         maxRatio: 4,
         bounds: true,
         fill: 'fill',
         height: 400,
         zoomRatio: 0.2,
         on: {
            ready() {
               console.log('Zoomist ready!')
            }
         }
      });

      zoomedArray.push(zoomer);

      let btns = document.querySelectorAll('.thumbs-swiper-button');

      btns.forEach(btn => {
         btn.addEventListener('click', function() {
            zoomer.reset();
         })
      })
   });
}*/

const zoomer = document.querySelector('.js-zoom-btn');
const zoomModalOverlay = document.querySelector('.zoomist-modal-overlay');
const zoomModal = document.querySelector('.zoomist-modal');
const closeModalBtn = document.querySelector('.zoomist-modal__close');

const onClickZoomImage = (evt) => {
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
        on: {
           ready() {
              console.log('Zoomist ready!')
           }
        }
    });

    const onClickCloseZoomModal = () => {
        closeModalBtn.removeEventListener('click', onClickCloseZoomModal);

        zoomist.destroy();
        zoomModalOverlay.classList.remove('is-opened');
        zoomModal.classList.remove('is-active');
    }

    closeModalBtn.addEventListener('click', onClickCloseZoomModal);
}

zoomer.addEventListener('click', onClickZoomImage);