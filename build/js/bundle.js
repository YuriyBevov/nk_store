/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/scripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/scripts/functions.js":
/*!*************************************!*\
  !*** ./source/scripts/functions.js ***!
  \*************************************/
/*! exports provided: limitStr, addClass, removeClass, checkClass, toggleClass, bodyLocker, changeTabs, getBoundingClientRect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "limitStr", function() { return limitStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkClass", function() { return checkClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleClass", function() { return toggleClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bodyLocker", function() { return bodyLocker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeTabs", function() { return changeTabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBoundingClientRect", function() { return getBoundingClientRect; });
function limitStr( str, n ) {
    if ( str.length > 50 ) {
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



/***/ }),

/***/ "./source/scripts/index.js":
/*!*********************************!*\
  !*** ./source/scripts/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_setCatalogHeight_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/setCatalogHeight.js */ "./source/scripts/modules/setCatalogHeight.js");
/* harmony import */ var _modules_openCatalogMenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/openCatalogMenu.js */ "./source/scripts/modules/openCatalogMenu.js");





/***/ }),

/***/ "./source/scripts/modules/openCatalogMenu.js":
/*!***************************************************!*\
  !*** ./source/scripts/modules/openCatalogMenu.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions.js */ "./source/scripts/functions.js");


let links = document.querySelectorAll('.catalog-nav__link');

let activeLink = null;
let activeSection = null;

const onMouseOverShowCatalogSection = (evt) => {

    Object(_functions_js__WEBPACK_IMPORTED_MODULE_0__["bodyLocker"])(true);
    
    if(activeLink !== evt.currentTarget) {
        activeLink ?
        Object(_functions_js__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(activeLink, 'js-active') : null;

        activeSection ?
        Object(_functions_js__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(activeSection, 'js-active') : null;

        activeLink = evt.currentTarget;        
        activeSection =  activeLink.nextElementSibling;
        
        if(activeSection) {
            !Object(_functions_js__WEBPACK_IMPORTED_MODULE_0__["checkClass"])(activeSection, 'js-active') ?
            Object(_functions_js__WEBPACK_IMPORTED_MODULE_0__["addClass"])(activeSection, 'js-active') : null;

            let closeBtn = activeSection.querySelector('.js-close');

            closeBtn.addEventListener('click', onClickCloseCatalogSection);
        }

        !Object(_functions_js__WEBPACK_IMPORTED_MODULE_0__["checkClass"])(activeLink, 'js-active') ?
        Object(_functions_js__WEBPACK_IMPORTED_MODULE_0__["addClass"])(activeLink, 'js-active') : null;

        window.addEventListener('mousemove', onMouseOverHideCatalogSection);
    }
}

const onClickCloseCatalogSection = (evt) => {
    Object(_functions_js__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(activeLink, 'js-active');
    activeLink = null;

    Object(_functions_js__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(activeSection, 'js-active');
    activeSection = null;
    window.removeEventListener('mousemove', onMouseOverHideCatalogSection);
    evt.currentTarget.removeEventListener('click', onClickCloseCatalogSection);
}

const onMouseOverHideCatalogSection = (evt) => {
    if(!activeLink.contains(evt.target) && !activeSection.contains(evt.target)){
        Object(_functions_js__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(activeLink, 'js-active');
        activeLink = null;

        Object(_functions_js__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(activeSection, 'js-active');
        activeSection = null;
        window.removeEventListener('mousemove', onMouseOverHideCatalogSection);
    }
}

links.forEach(link => {
    link.addEventListener('mouseover', onMouseOverShowCatalogSection);
})



/***/ }),

/***/ "./source/scripts/modules/setCatalogHeight.js":
/*!****************************************************!*\
  !*** ./source/scripts/modules/setCatalogHeight.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions.js */ "./source/scripts/functions.js");


let header = document.querySelector('header');
let catalogSections = document.querySelectorAll('.catalog-section');

let headerHeight = Object(_functions_js__WEBPACK_IMPORTED_MODULE_0__["getBoundingClientRect"])(header, 'height');

function setCatalogSectionWidth() {
    catalogSections.forEach(section => {
        section.style.height = 'calc(85vh - ' + headerHeight + 'px)';
    });
}

setCatalogSectionWidth();

const onResizeCheckHeaderHeight = () => {
    if(headerHeight !== Object(_functions_js__WEBPACK_IMPORTED_MODULE_0__["getBoundingClientRect"])(header, 'height')) {
        headerHeight = Object(_functions_js__WEBPACK_IMPORTED_MODULE_0__["getBoundingClientRect"])(header, 'height');
        setCatalogSectionWidth();
    }
}

window.addEventListener('resize', onResizeCheckHeaderHeight);


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map