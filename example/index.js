// ES2015 模块导入
import * as webpackNumbers from '../dist/webpack-numbers';
console.log(webpackNumbers.wordToNum('Two'));


// CommonJS 模块导入
// var webpackNumbers = require('../dist/webpack-numbers');
// console.log(webpackNumbers.wordToNum('Two'));


// AMD 模块导入
// require(['../dist/webpack-numbers'], function ( webpackNumbers) {
//   console.log(webpackNumbers.wordToNum('Two'));
// });

