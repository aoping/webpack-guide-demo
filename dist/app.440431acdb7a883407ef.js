(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print */ \"./src/print.js\");\nvar _ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\")\n\n\nfunction getComponent() {\n  var element = document.createElement('div');\n  element.innerHTML = _.join(['Hello', 'webpack'], ' ');\n  element.onclick = _print__WEBPACK_IMPORTED_MODULE_0__[\"default\"].bind(null, 'Hello webpack!');\n  return element;\n}\n\ngetComponent().then(component => {\n  document.body.appendChild(component);\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return printMe; });\nfunction printMe() {\n  console.log('I get called from print.js!');\n}\n\n//# sourceURL=webpack:///./src/print.js?");

/***/ })

},[["./src/index.js","runtime","vendors"]]]);