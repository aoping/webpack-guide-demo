(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\")\n\nfunction getComponent() {\n  var element = document.createElement('div');\n  element.innerHTML = _.join(['Hello', 'webpack'], ' ');\n  return element;\n}\n\ngetComponent().then(component => {\n  document.body.appendChild(component);\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

},[["./src/index.js","runtime","vendors"]]]);