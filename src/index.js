import _ from 'lodash'
import './style.css'
import Icon from './icon.png'
import Data from './data.xml'

function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello')

  // 
  // var Img = new Image()
  // Img.src = Icon
  // element.appendChild(Img)

  console.log(Data)
  return element;
}

document.body.appendChild(component());