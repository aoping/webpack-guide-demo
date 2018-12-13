import _ from 'lodash'
import './style.css'
import Icon from './icon.png'

function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello')

  // 
  // var Img = new Image()
  // Img.src = Icon
  // element.appendChild(Img)

  return element;
}

document.body.appendChild(component());