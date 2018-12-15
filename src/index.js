import 'babel-polyfill';
import { file, parse } from './globals.js'

function component() {
  var element = document.createElement('div');
  element.innerHTML = join(['Hello', 'webpack'], ' ');
  console.log(file)
  parse()
  return element;
}

document.body.appendChild(component());