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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generatePriceTemplate: () => (/* reexport safe */ _thousandify_js__WEBPACK_IMPORTED_MODULE_0__.generatePriceTemplate),\n/* harmony export */   getQueryParam: () => (/* reexport safe */ _web_bom_js__WEBPACK_IMPORTED_MODULE_1__.getQueryParam),\n/* harmony export */   thousandify: () => (/* reexport safe */ _thousandify_js__WEBPACK_IMPORTED_MODULE_0__.thousandify)\n/* harmony export */ });\n/* harmony import */ var _thousandify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thousandify.js */ \"./src/thousandify.js\");\n/* harmony import */ var _web_bom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web-bom.js */ \"./src/web-bom.js\");\n\n\n\n\n\n//# sourceURL=webpack://jskit/./src/index.js?");

/***/ }),

/***/ "./src/thousandify.js":
/*!****************************!*\
  !*** ./src/thousandify.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generatePriceTemplate: () => (/* binding */ generatePriceTemplate),\n/* harmony export */   thousandify: () => (/* binding */ thousandify)\n/* harmony export */ });\nconst toString = Object.prototype.toString;\n\nconst charsetRegExp = /^[\\d\\.]+$/;\n\nconst defaultOption = {\n    thousandSeparator: ',', // 千分位分隔符\n    decimalSeparator: '.', // 小数分隔符\n    decimalDigits: false // 小数位数量, false表示不特殊处理\n}\n\nfunction isNumber(target) {\n    return toString.call(target) === '[object Number]'\n}\n\nfunction thousandify(amount, option) {\n    const parsedAmount = amount + '';\n\n\n    if (!charsetRegExp.test(parsedAmount)) {\n        return amount\n    }\n\n    const {\n        decimalSeparator,\n        thousandSeparator,\n        decimalDigits,\n        splitDigit\n    } = Object.assign({}, defaultOption, option);\n\n    const amountParts = parsedAmount.split(decimalSeparator);\n    const intPartStr = amountParts[0].replace(/(?!^)(?=(\\d{3})+$)/g, thousandSeparator);\n\n    // 处理小数部分\n    let decimalStr = amountParts[1] || '';\n    if (isNumber(decimalDigits)) {\n        decimalStr = (decimalStr + Array(decimalDigits + 1).join(0)).substr(0, decimalDigits);\n    }\n\n    if (splitDigit) {\n        return [intPartStr, decimalStr]\n    }\n    return !!decimalStr\n        ? [intPartStr, decimalStr].join(decimalSeparator)\n        : intPartStr;\n}\n\nfunction generatePriceTemplate(price, target) {\n    const [intPartStr, decimalStr] = thousandify(price)\n    const templateText = `\n        <div>\n            <span class=\"intPartStrWrapper\">{{intPartStr}}</span>\n            <span class=\"intPoint\">.</span>\n            <span class=\"decimalStrWrapper\">{{decimalStr}}</span>\n        </div>\n    `\n    const compiled = _.template(templateText)\n\n    if (target) {\n        target.innerHtml = compiled({\n            intPartStr,\n            decimalStr\n        })\n    }\n\n    return compiled({\n        intPartStr,\n        decimalStr\n    })\n}\n\n//# sourceURL=webpack://jskit/./src/thousandify.js?");

/***/ }),

/***/ "./src/web-bom.js":
/*!************************!*\
  !*** ./src/web-bom.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getQueryParam: () => (/* binding */ getQueryParam)\n/* harmony export */ });\n/**\n * @description 获取url参数\n * @param {*} field \n * @returns \n */\nfunction getQueryParam(field) {\n    const queryParams = new URLSearchParams(window.location.search);\n    if (field) {\n        return queryParams.get(field) || \"\";\n    } else {\n        const params = {};\n        queryParams.forEach((value, key) => {\n            if (params[key]) {\n                if (Array.isArray(params[key])) {\n                    params[key].push(value);\n                } else {\n                    params[key] = [params[key], value];\n                }\n            } else {\n                params[key] = value;\n            }\n        });\n        return params;\n    }\n}\n\n//# sourceURL=webpack://jskit/./src/web-bom.js?");

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