var _ = require('lodash')

function getComponent() {
  var element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}

getComponent().then(component => {
  document.body.appendChild(component);
})