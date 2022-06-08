/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_refs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/refs */ \"./src/js/refs.js\");\n/* harmony import */ var _js_generateMarkdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/generateMarkdown */ \"./src/js/generateMarkdown.js\");\n/* harmony import */ var _js_helpers_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/helpers/storage */ \"./src/js/helpers/storage.js\");\n\n\n\n\nvar handleMount = function handleMount() {\n  var list = _js_helpers_storage__WEBPACK_IMPORTED_MODULE_2__.storage.readItem('list', []);\n  var markdown = list.reduce(function (acc, text) {\n    return acc + (0,_js_generateMarkdown__WEBPACK_IMPORTED_MODULE_1__.createLi)(text);\n  }, '');\n  (0,_js_generateMarkdown__WEBPACK_IMPORTED_MODULE_1__.addLiToList)(markdown);\n};\n\nvar handleSubmit = function handleSubmit(e) {\n  e.preventDefault();\n  var value = _js_refs__WEBPACK_IMPORTED_MODULE_0__.refs.input.value;\n  var liItem = (0,_js_generateMarkdown__WEBPACK_IMPORTED_MODULE_1__.createLi)(value);\n  (0,_js_generateMarkdown__WEBPACK_IMPORTED_MODULE_1__.addLiToList)(liItem);\n  var result = _js_helpers_storage__WEBPACK_IMPORTED_MODULE_2__.storage.readItem('list', []);\n  result.push(value);\n  _js_helpers_storage__WEBPACK_IMPORTED_MODULE_2__.storage.addItem('list', result);\n  _js_refs__WEBPACK_IMPORTED_MODULE_0__.refs.input.value = '';\n};\n\n_js_refs__WEBPACK_IMPORTED_MODULE_0__.refs.form.addEventListener('submit', handleSubmit);\naddEventListener('DOMContentLoaded', handleMount);\n\n//# sourceURL=webpack://webpack-tutorial/./src/index.js?");

/***/ }),

/***/ "./src/js/generateMarkdown.js":
/*!************************************!*\
  !*** ./src/js/generateMarkdown.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addLiToList\": function() { return /* binding */ addLiToList; },\n/* harmony export */   \"createLi\": function() { return /* binding */ createLi; }\n/* harmony export */ });\n/* harmony import */ var _refs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./refs */ \"./src/js/refs.js\");\n\nvar createLi = function createLi(text) {\n  return \"<li data-id='\".concat(text, \"'>\").concat(text, \"</li>\");\n};\nvar addLiToList = function addLiToList(markdown) {\n  _refs__WEBPACK_IMPORTED_MODULE_0__.refs.list.insertAdjacentHTML(\"beforeEnd\", markdown);\n};\n\n//# sourceURL=webpack://webpack-tutorial/./src/js/generateMarkdown.js?");

/***/ }),

/***/ "./src/js/helpers/storage.js":
/*!***********************************!*\
  !*** ./src/js/helpers/storage.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"storage\": function() { return /* binding */ storage; }\n/* harmony export */ });\nvar storage = {\n  readItem: function readItem(key, defaultValue) {\n    try {\n      var result = JSON.parse(localStorage.getItem(key));\n      return result ? result : defaultValue;\n    } catch (error) {\n      return null;\n    }\n  },\n  addItem: function addItem(key, value) {\n    localStorage.setItem(key, JSON.stringify(value));\n  },\n  deleteItem: function deleteItem() {},\n  clear: function clear() {}\n};\n\n//# sourceURL=webpack://webpack-tutorial/./src/js/helpers/storage.js?");

/***/ }),

/***/ "./src/js/refs.js":
/*!************************!*\
  !*** ./src/js/refs.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"refs\": function() { return /* binding */ refs; }\n/* harmony export */ });\nvar refs = {\n  form: document.querySelector(\"#form\"),\n  input: document.querySelector(\"input\"),\n  list: document.querySelector(\".list\")\n};\n\n//# sourceURL=webpack://webpack-tutorial/./src/js/refs.js?");

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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;