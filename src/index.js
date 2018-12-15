var _ = require('lodash')
import Print from './print'

function getComponent() {
  var element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.onclick = Print.bind(null, 'Hello webpack!');
  return element;
}

getComponent().then(component => {
  document.body.appendChild(component);
})