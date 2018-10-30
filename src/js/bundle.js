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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
/*! exports provided: calc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calc\", function() { return calc; });\nfunction calc() {\n    let persons = document.querySelectorAll('.counter-block-input')[0],\n         restDays = document.querySelectorAll('.counter-block-input')[1],\n         place = document.getElementById('select'),\n         totalValue = document.getElementById('total'),\n         personsSum = 0,\n         daysSum = 0,\n         total = 0;\n\n         totalValue.innerHTML = 0;\n\n         persons.addEventListener('change', function() {\n             personsSum = +this.value;\n             total = (daysSum + personsSum)*4000;\n\n             if(restDays.value == '' || restDays.value == 0 || persons.value == '' || persons.value == 0) {\n                 totalValue.innerHTML = 0;\n             } else {\n                totalValue.innerHTML = total;\n             }\n         });\n         \n         restDays.addEventListener('change', function() {\n            daysSum = +this.value;\n            total = (daysSum + personsSum)*4000;\n\n            if(persons.value == '' || persons.value == 0 || restDays.value == '' || restDays.value == 0) {\n                totalValue.innerHTML = 0;\n            } else {\n               totalValue.innerHTML = total;\n            }\n        });\n\n        place.addEventListener('change', function() {\n            if (persons.value == '' || persons.value == 0 || restDays.value == '' || restDays.value == 0) {\n            totalValue.innerHTML = 0;\n            } else {\n                let a = total;\n                totalValue.innerHTML = a * this.options[this.selectedIndex].value;\n            }\n        });\n\n        \n        function checkinput (input) {\n            input.addEventListener('keyup', function () {\n                let value = input.value;\n                value = value.replace(/[\\D\\s\\._\\-]+/, \"\");\n                value = value ? parseInt(value, 10 ) : 0;\n                input.value = value;\n            });\n        }\n\n        checkinput (persons);\n        checkinput(restDays); \n}\n\n\n\n//# sourceURL=webpack:///./src/js/parts/calc.js?");

/***/ }),

/***/ "./src/js/parts/form.js":
/*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
/*! exports provided: form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"form\", function() { return form; });\nfunction form() {\n\n    let  close = document.querySelector('.popup-close');\n    \n    let message = {\n        loading: 'Загрузка',\n        success: 'Спасибо! Скоро мы с Вами свяжемся!',\n        failure: 'Что-то пошло не так...'\n    };\n\n    let form = document.querySelector('.main-form'),\n        contact = document.getElementById('form'),\n        statusMessage = document.createElement('div');\n\n        statusMessage.classList.add('status');\n        statusMessage.classList.add('formAlert');\n\n    function sendForm(elem) {\n       \n            elem.addEventListener('submit', (event) => {\n            event.preventDefault();\n            elem.appendChild(statusMessage);\n\n            let formData = new FormData(elem);\n\n            function postData(data) {\n                return new Promise(function(resolve, reject) {\n                        \n                    let request = new XMLHttpRequest();\n                    request.open('POST', 'server.php');\n                    request.setRequestHeader('Content-type', 'application/json; charset = utf-8');\n\n           \n                    let obj = {};\n                    data.forEach((value, key) => {\n                    obj[key] = value;\n                    });\n                    let json = JSON.stringify(obj);\n                    \n\n                    request.addEventListener('readystatechange', () => {\n                         if (request.readyState < 4) {\n                        resolve();\n                         } else if (request.readyState === 4 && request.status == 200) {\n                        resolve();\n                         } else {\n                        reject();\n                         }\n                    });\n                \n                    request.send(json);\n                });\n            }  /* end postdata*/\n        \n            function clearInput() {\n                let input = elem.getElementsByTagName('input');\n            \n                for (let i = 0; i < input.length; i++) {\n                input[i].value = '';\n                 }\n            }\n            \n            postData(formData)\n                .then(()=> statusMessage.innerHTML = message.loading)\n                .then(()=> statusMessage.innerHTML = message.success)\n                .catch(()=> statusMessage.innerHTML = message.failure)\n                .then(clearInput)\n        });\n\n        close.addEventListener('click', () => {\n            elem.removeChild(statusMessage);\n        });\n    }\n\n    sendForm(form);\n    sendForm(contact);\n}\n\n\n\n//# sourceURL=webpack:///./src/js/parts/form.js?");

/***/ }),

/***/ "./src/js/parts/modal.js":
/*!*******************************!*\
  !*** ./src/js/parts/modal.js ***!
  \*******************************/
/*! exports provided: modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"modal\", function() { return modal; });\nfunction modal() {\n    let more = document.querySelector('.more'),\n        overlay = document.querySelector('.overlay'),\n        close = document.querySelector('.popup-close');\n   \n        more.addEventListener('click', function () {\n            overlay.style.display = 'block';\n            this.classList.add('more-splash');\n        });\n\n        close.addEventListener('click', function ()  {\n            overlay.style.display = 'none';\n            this.classList.remove('more-splash');\n            document.body.style.overflow = '';\n        });\n    \n\n    let content = document.querySelector('.content');\n\n\n    content.addEventListener('click', function (event) {\n        if (event.target && event.target.classList.contains('description-btn')) {\n            overlay.style.display = 'block';\n            this.classList.add('more-splash');\n            document.body.style.overflow = 'hidden';\n        }\n    });\n}\n\n\n\n//# sourceURL=webpack:///./src/js/parts/modal.js?");

/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/*! exports provided: slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"slider\", function() { return slider; });\nfunction slider() {\n    let slideIndex = 1,\n    slides = document.querySelectorAll('.slider-item'),\n    prev = document.querySelector('.prev'),\n    next = document.querySelector('.next'),\n    dotsWrap = document.querySelector('.slider-dots'),\n    dots = document.querySelectorAll('.dot');\n\nfunction showSlides(n) {\n    if (n > slides.length) {\n        slideIndex = 1;\n    }\n    if (n < 1) {\n        slideIndex = slides.length;\n    }\n\n    slides.forEach((item) => item.style.display = 'none');\n    dots.forEach((item) => item.classList.remove('dot-active'));\n\n    slides[slideIndex - 1].style.display = 'block';\n    dots[slideIndex - 1].classList.add('dot-active');\n}    \n\nshowSlides(slideIndex);\n\nfunction plusSlides(n) {\n    showSlides(slideIndex += n);\n}\nfunction currentSlide(n) {\n    showSlides(slideIndex = n);\n}\n\nprev.addEventListener('click', function() {\n    plusSlides(-1);\n});\n\nnext.addEventListener('click', function() {\n    plusSlides(1);\n});\n\ndotsWrap.addEventListener('click', function(event) {\n    for(let i = 0; i < dots.length+1; i++) {\n        if(event.target.classList.contains('dot')&&event.target == dots[i-1]) {\n           currentSlide(i);\n        }\n    }\n});\n}\n\n\n\n//# sourceURL=webpack:///./src/js/parts/slider.js?");

/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/*! exports provided: tabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tabs\", function() { return tabs; });\nfunction tabs() {\n    let tab = document.querySelectorAll('.info-header-tab'),\n    info = document.querySelector('.info-header'),\n    tabContent = document.querySelectorAll('.info-tabcontent');\n    \n    function hideTabContent(a) {\n    for (let i = a; i < tabContent.length; i++) {\n        tabContent[i].classList.remove('show');\n        tabContent[i].classList.add('hide');\n    }\n    }\n    \n    hideTabContent(1);\n    \n    function showTabContent(b) {\n    if (tabContent[b].classList.contains('hide')) {\n        tabContent[b].classList.remove('hide');\n        tabContent[b].classList.add('show');\n    }\n    }\n    \n    info.addEventListener('click', function (event) {\n    let target = event.target;\n    if (target && target.classList.contains('info-header-tab')) {\n        for (let i = 0; i < tab.length; i++) {\n            if (target == tab[i]) {\n                hideTabContent(0);\n                showTabContent(i);\n                break;\n            }\n        }\n    }\n  });    \n}\n\n\n\n//# sourceURL=webpack:///./src/js/parts/tabs.js?");

/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/*! exports provided: timer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"timer\", function() { return timer; });\nfunction timer() {\n\n    let deadline = '2018-10-28';\n\n    function getTimeRemaining(endtime) {\n        let t = Date.parse(endtime) - Date.parse(new Date()),\n            seconds = Math.floor((t / 1000) % 60),\n            minutes = Math.floor((t / 1000 / 60) % 60),\n            hours = Math.floor((t / (1000 * 60 * 60)));\n\n        if (t < 0) {\n            seconds = 0,\n                minutes = 0,\n                hours = 0\n        }\n\n        if (hours < 10) hours = \"0\" + hours;\n        if (minutes < 10) minutes = \"0\" + minutes;\n        if (seconds < 10) seconds = \"0\" + seconds;\n\n        return {\n            'total': t,\n            'hours': hours,\n            'minutes': minutes,\n            'seconds': seconds\n        };\n    }\n\n    function setClock(id, endtime) {\n        let timer = document.getElementById(id),\n            hours = timer.querySelector('.hours'),\n            minutes = timer.querySelector('.minutes'),\n            seconds = timer.querySelector('.seconds'),\n            timeInterval = setInterval(updateClock, 1000);\n\n\n        function updateClock() {\n            let t = getTimeRemaining(endtime);\n            hours.textContent = t.hours;\n            minutes.textContent = t.minutes;\n            seconds.textContent = t.seconds;\n\n            if (t.total <= 0) {\n                clearInterval(timeInterval);\n            }\n        }\n    }\n    setClock('timer', deadline);\n}\n\n\n\n//# sourceURL=webpack:///./src/js/parts/timer.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _parts_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts/tabs */ \"./src/js/parts/tabs.js\");\n/* harmony import */ var _parts_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts/modal */ \"./src/js/parts/modal.js\");\n/* harmony import */ var _parts_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/timer */ \"./src/js/parts/timer.js\");\n/* harmony import */ var _parts_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parts/slider */ \"./src/js/parts/slider.js\");\n/* harmony import */ var _parts_calc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parts/calc */ \"./src/js/parts/calc.js\");\n/* harmony import */ var _parts_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parts/form */ \"./src/js/parts/form.js\");\n \n \n \n \n \n \n \n\nwindow.addEventListener('DOMContentLoaded', function () {\n\n    'use strict';\n     \n     Object(_parts_tabs__WEBPACK_IMPORTED_MODULE_0__[\"tabs\"])();\n     Object(_parts_modal__WEBPACK_IMPORTED_MODULE_1__[\"modal\"])();\n     Object(_parts_timer__WEBPACK_IMPORTED_MODULE_2__[\"timer\"])();\n     Object(_parts_slider__WEBPACK_IMPORTED_MODULE_3__[\"slider\"])();\n     Object(_parts_calc__WEBPACK_IMPORTED_MODULE_4__[\"calc\"])();\n     Object(_parts_form__WEBPACK_IMPORTED_MODULE_5__[\"form\"])();\n\n});\n\n \n\n//# sourceURL=webpack:///./src/js/script.js?");

/***/ })

/******/ });