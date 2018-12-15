function component() {
  var element = document.createElement('div');
  element.innerHTML = join(['Hello', 'webpack'], ' ');
  this.alert('aaaaaaa')
  return element;
}

document.body.appendChild(component());