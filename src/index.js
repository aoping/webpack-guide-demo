async function getComponent() {
  var element = document.createElement('div');
  var _ = await import(/* webpackChunkName: "lodash" */ 'lodash');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.addEventListener('click', function() {
    import(/* webpackPrefetch: true */ './print').then(res => {
      var printMe = res.default
      printMe()
    })
  })
  return element;
}

getComponent().then(component => {
  document.body.appendChild(component);
  })