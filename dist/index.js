/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["jskit"] = factory();
	else
		root["jskit"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/animation/springer.ts":
/*!***********************************!*\
  !*** ./src/animation/springer.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Springer)\n/* harmony export */ });\n// https://github.com/tannerlinsley/springer/blob/master/src/index.js\nvar msPerFrame = 16;\nvar sampleDuration = 10000;\nvar sampleMsPerFrame = msPerFrame / (sampleDuration);\nvar reusedTuple = [0, 0];\nfunction Springer(tension, wobble) {\n    var _a;\n    if (tension === void 0) { tension = 0.5; }\n    if (wobble === void 0) { wobble = 0.5; }\n    var stiffness = Math.min(Math.max(350 * tension, 20), 350);\n    var damping = Math.min(Math.max(40 - (40 * wobble), 1), 40);\n    var steps = [];\n    var progress = 0;\n    var velocity = 0;\n    while (progress !== sampleDuration || velocity !== 0) {\n        _a = stepper(progress, sampleDuration, velocity, stiffness, damping), progress = _a[0], velocity = _a[1];\n        steps.push(progress / sampleDuration);\n    }\n    return function (i) {\n        return steps[Math.ceil(i * (steps.length - 1))];\n    };\n}\n// Inspired by https://github.com/chenglou/react-motion/blob/master/src/stepper.js\nfunction stepper(value, destination, velocity, stiffness, damping) {\n    var spring = -stiffness * (value - destination);\n    var damper = -damping * velocity;\n    var a = spring + damper;\n    var newVelocity = velocity + a * sampleMsPerFrame;\n    var newValue = value + newVelocity * sampleMsPerFrame;\n    if (Math.abs(newVelocity) < 1 && Math.abs(newValue - destination) < 1) {\n        reusedTuple[0] = destination;\n        reusedTuple[1] = 0;\n        return reusedTuple;\n    }\n    reusedTuple[0] = newValue;\n    reusedTuple[1] = newVelocity;\n    return reusedTuple;\n}\n\n\n//# sourceURL=webpack://jskit/./src/animation/springer.ts?");

/***/ }),

/***/ "./src/useSignal.ts":
/*!**************************!*\
  !*** ./src/useSignal.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SignalType: () => (/* binding */ SignalType)\n/* harmony export */ });\n// signal 实现\n// https://www.builder.io/blog/usesignal-is-the-future-of-web-frameworks\nvar SignalType;\n(function (SignalType) {\n    SignalType[SignalType[\"Signal\"] = 0] = \"Signal\";\n    SignalType[SignalType[\"Computed\"] = 1] = \"Computed\";\n    SignalType[SignalType[\"Effect\"] = 2] = \"Effect\";\n})(SignalType || (SignalType = {}));\n\n\n\n//# sourceURL=webpack://jskit/./src/useSignal.ts?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SignalType: () => (/* reexport safe */ _useSignal_ts__WEBPACK_IMPORTED_MODULE_1__.SignalType),\n/* harmony export */   generatePriceTemplate: () => (/* reexport safe */ _thousandify_js__WEBPACK_IMPORTED_MODULE_0__.generatePriceTemplate),\n/* harmony export */   springer: () => (/* reexport safe */ _animation_springer_ts__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   thousandify: () => (/* reexport safe */ _thousandify_js__WEBPACK_IMPORTED_MODULE_0__.thousandify),\n/* harmony export */   webBom: () => (/* reexport module object */ _web_bom_index_js__WEBPACK_IMPORTED_MODULE_2__)\n/* harmony export */ });\n/* harmony import */ var _thousandify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thousandify.js */ \"./src/thousandify.js\");\n/* harmony import */ var _useSignal_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useSignal.ts */ \"./src/useSignal.ts\");\n/* harmony import */ var _web_bom_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web-bom/index.js */ \"./src/web-bom/index.js\");\n/* harmony import */ var _animation_springer_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animation/springer.ts */ \"./src/animation/springer.ts\");\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://jskit/./src/index.js?");

/***/ }),

/***/ "./src/thousandify.js":
/*!****************************!*\
  !*** ./src/thousandify.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generatePriceTemplate: () => (/* binding */ generatePriceTemplate),\n/* harmony export */   thousandify: () => (/* binding */ thousandify)\n/* harmony export */ });\nconst toString = Object.prototype.toString;\n\nconst charsetRegExp = /^[\\d\\.]+$/;\n\nconst defaultOption = {\n    thousandSeparator: ',', // 千分位分隔符\n    decimalSeparator: '.', // 小数分隔符\n    decimalDigits: false // 小数位数量, false表示不特殊处理\n}\n\nfunction isNumber(target) {\n    return toString.call(target) === '[object Number]'\n}\n\nfunction thousandify(amount, option) {\n    const parsedAmount = amount + '';\n\n\n    if (!charsetRegExp.test(parsedAmount)) {\n        return amount\n    }\n\n    const {\n        decimalSeparator,\n        thousandSeparator,\n        decimalDigits,\n        splitDigit\n    } = Object.assign({}, defaultOption, option);\n\n    const amountParts = parsedAmount.split(decimalSeparator);\n    const intPartStr = amountParts[0].replace(/(?!^)(?=(\\d{3})+$)/g, thousandSeparator);\n\n    // 处理小数部分\n    let decimalStr = amountParts[1] || '';\n    if (isNumber(decimalDigits)) {\n        decimalStr = (decimalStr + Array(decimalDigits + 1).join(0)).substr(0, decimalDigits);\n    }\n\n    if (splitDigit) {\n        return [intPartStr, decimalStr]\n    }\n    return !!decimalStr\n        ? [intPartStr, decimalStr].join(decimalSeparator)\n        : intPartStr;\n}\n\nfunction generatePriceTemplate(price, target) {\n    const [intPartStr, decimalStr] = thousandify(price)\n    const templateText = `\n        <div>\n            <span class=\"intPartStrWrapper\">{{intPartStr}}</span>\n            <span class=\"intPoint\">.</span>\n            <span class=\"decimalStrWrapper\">{{decimalStr}}</span>\n        </div>\n    `\n    const compiled = _.template(templateText)\n\n    if (target) {\n        target.innerHtml = compiled({\n            intPartStr,\n            decimalStr\n        })\n    }\n\n    return compiled({\n        intPartStr,\n        decimalStr\n    })\n}\n\n//# sourceURL=webpack://jskit/./src/thousandify.js?");

/***/ }),

/***/ "./src/web-bom/index.js":
/*!******************************!*\
  !*** ./src/web-bom/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   forbidAutoScroll: () => (/* binding */ forbidAutoScroll),\n/* harmony export */   getQueryParam: () => (/* binding */ getQueryParam),\n/* harmony export */   getTopLevelDomain: () => (/* binding */ getTopLevelDomain),\n/* harmony export */   scrollToTop: () => (/* binding */ scrollToTop),\n/* harmony export */   setCookie: () => (/* binding */ setCookie),\n/* harmony export */   zoom: () => (/* binding */ zoom)\n/* harmony export */ });\n/**\n * This file contains utility functions for web, involving the use of browser BOM (e.g., history, navigator, window, location, document, etc.).\n * Therefore, please ensure the code is running in a browser environment before using it!\n */\n\n/**\n * @description Get URL parameters\n * @param {*} field \n * @returns \n */\nfunction getQueryParam(field) {\n    const queryParams = new URLSearchParams(window.location.search);\n    if (field) {\n        return queryParams.get(field) || \"\";\n    } else {\n        const params = {};\n        queryParams.forEach((value, key) => {\n            if (params[key]) {\n                if (Array.isArray(params[key])) {\n                    params[key].push(value);\n                } else {\n                    params[key] = [params[key], value];\n                }\n            } else {\n                params[key] = value;\n            }\n        });\n        return params;\n    }\n}\n\n\n/**\n * @description 禁止浏览器自动滚动到浏览位置\n * https://developer.mozilla.org/zh-CN/docs/Web/API/History/scrollRestoration\n * @returns history.scrollRestoration\n */\nfunction forbidAutoScroll() {\n    // 禁止浏览器自动滚动到浏览位置\n    if (history.scrollRestoration) {\n        history.scrollRestoration = 'manual';\n    }\n    return history.scrollRestoration\n}\n\n\n/**\n * @description 放大图片\n * @param {*} e \n */\nfunction zoom(e){\n    var zoomer = e?.currentTarget;\n    if(!zoomer) return;\n    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX\n    e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX\n    x = offsetX/zoomer.offsetWidth*100\n    y = offsetY/zoomer.offsetHeight*100\n    zoomer.style.backgroundPosition = x + '% ' + y + '%';\n}\n\n/**\n * @description 平滑滚动到顶部\n */\nfunction scrollToTop() {\n    window.scrollTo({\n        top: 0,\n        behavior: 'smooth' // 平滑滚动\n    });\n}\n\n\n/**\n * @description 获取当前hostname顶级域名\n * @returns \n */\nfunction getTopLevelDomain() {\n      // 获取当前主机名\n      const currentHost = window.location.hostname;\n\n      // 获取顶级域名，增加容错处理\n      let topLevelDomain = '';\n      const hostParts = currentHost.split('.');\n\n      if (hostParts.length >= 2) {\n          topLevelDomain = hostParts.slice(-2).join('.');\n      } else {\n          // 当主机名不符合预期格式时，回退为当前主机名\n          topLevelDomain = currentHost;\n      }\n      return topLevelDomain\n}\n\n\n/**\n * @description 设置Cookie\n * @param {*} cookieName \n * @param {*} cookieValue \n * @param {*} cookieExpiresDays 默认7天\n * @param {*} domain 默认顶级域名\n */\nfunction setCookie({\n    cookieName = 'currentHost',\n    cookieValue = currentHost,\n    cookieExpiresDays = 7,\n    domain\n}) {\n       const topLevelDomain = domain ?? getTopLevelDomain()\n       // 创建过期时间\n       const date = new Date();\n       date.setTime(date.getTime() + (cookieExpiresDays * 24 * 60 * 60 * 1000)); // 转换为毫秒\n       const expires = `; expires=${date.toUTCString()}`;\n       // 将Cookie设置为顶级域名\n       document.cookie = `${cookieName}=${cookieValue}; domain=${topLevelDomain}; path=/${expires}`;\n}\n\n//# sourceURL=webpack://jskit/./src/web-bom/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});