'use strict'

import swiper from './modules/swiper.js';
import setCatalogHeight from './modules/setCatalogHeight.js';
import openCatalogMenu from './modules/openCatalogMenu.js';
import limitStrs from './modules/limitStrs.js';
import mobileMenuOpener from './modules/mobileMenuOpener.js';
import mobileMenuCatalog from './modules/mobileMenuCatalog.js';
import productCardDetail from './modules/productCardDetail.js';
import cartAddBtns from './modules/cartAddBtns.js';
import cartCounter from './modules/cartCounter.js';
import custom_select from './modules/custom_select.js';
import nouislider from './modules/nouislider.js';
import filterDropdown from './modules/filterDropdown.js';
import openFilter from './modules/openFilter.js';
import Zoom from "smooth-zoom";

Zoom(".zoomable");

/*import Zoomist from 'zoomist';

new Zoomist(".zoomist");


//import zoomist from './modules/zoomist.js';

//console.log(zoomist)
/**/

/*import { Fancybox, Panzoom, Carousel } from "@fancyapps/ui";


let zoomed = document.querySelectorAll(".panzoom");

zoomed.forEach(img => {
    new Panzoom(img, {
        panOnlyZoomed: true,
        maxScale: 5
    });
})

const myCarousel = new Carousel(document.querySelector(".carousel"), {
    // Options
  });

Fancybox.bind("[data-fancybox]", {
    //animated: false,
    l10n: {
        CLOSE: "Закрыть",
        NEXT: "Вперед",
        PREV: "Назад",
        ERROR: "Что то пошло не так, попробуйте снова...",
        IMAGE_ERROR: "Изображение не найдено",
        TOGGLE_FULLSCREEN: "Полноэкранный режим",
        TOGGLE_ZOOM: "Увеличить изображение"
    },

    Carousel: {
        slidesPerPage: 1,
        on: {
          change: (that) => {
            // Sync Carousel slide
            myCarousel.slideTo(myCarousel.findPageForSlide(that.page), {
              friction: 0,
              
            });
          },
        },
      },
  });*/

  