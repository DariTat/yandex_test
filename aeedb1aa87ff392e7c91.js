import"core-js/modules/es.symbol.js";import"core-js/modules/es.symbol.description.js";import"core-js/modules/es.symbol.iterator.js";import"core-js/modules/es.array.for-each.js";import"core-js/modules/es.array.from.js";import"core-js/modules/es.array.is-array.js";import"core-js/modules/es.array.iterator.js";import"core-js/modules/es.array.map.js";import"core-js/modules/es.array.slice.js";import"core-js/modules/es.date.to-string.js";import"core-js/modules/es.function.name.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.regexp.exec.js";import"core-js/modules/es.regexp.to-string.js";import"core-js/modules/es.string.iterator.js";import"core-js/modules/web.dom-collections.for-each.js";import"core-js/modules/web.dom-collections.iterator.js";import"core-js/modules/web.timers.js";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,r){if(e){if("string"==typeof e)return _arrayLikeToArray(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(e,r):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,s=new Array(r);t<r;t++)s[t]=e[t];return s}import"./css/style.css";var timer,sliders=_toConsumableArray(document.querySelectorAll(".main-block-four-item")),number=document.querySelector(".main-block-four-control-number"),btnLeft=document.querySelector(".main-block-four-btn.left"),items=_toConsumableArray(document.querySelectorAll(".main-block-three-item")),sliderArr=[];function setMobile(){items.slice(2,7).map((function(e){return e.classList.add("invisible")})),sliders.forEach((function(e){return e.classList.contains("visible")?e.classList.remove("visible"):null})),number.textContent=sliders[0].id,sliders[0].classList.add("visible"),1==number.textContent?btnLeft.classList.add("disabled"):number.textContent>1&&btnLeft.classList.remove("disabled")}function setDeskTop(){items.map((function(e){return e.classList.contains("invisible")?e.classList.remove("invisible"):null})),btnLeft.classList.remove("disabled"),number.textContent=0,0==number.textContent&&((sliderArr=sliders.slice(0,3)).forEach((function(e){return e.classList.add("visible")})),number.textContent=3),timer=setInterval((function(){6==number.textContent?(sliderArr.forEach((function(e){return e.classList.remove("visible")})),(sliderArr=sliders.slice(0,3)).forEach((function(e){return e.classList.add("visible")})),number.textContent=3):3==number.textContent&&(sliderArr.forEach((function(e){return e.classList.remove("visible")})),(sliderArr=sliders.slice(3,6)).forEach((function(e){return e.classList.add("visible")})),number.textContent=6)}),4e3)}window.addEventListener("resize",(function(){window.innerWidth<=375.2?(clearInterval(timer),setMobile()):window.innerWidth<=1920.2&&window.innerWidth>=1366&&(clearInterval(timer),setDeskTop())})),window.innerWidth<=1920&&window.innerWidth>=1366&&(clearInterval(timer),setDeskTop()),window.innerWidth<=375.2&&setMobile();