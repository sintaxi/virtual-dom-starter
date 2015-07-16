var h = require('virtual-dom/h')
var main = require('main-loop')
var loop = main({ n: 0 }, render, require('virtual-dom'))
document.body.appendChild(loop.target)

function render (state) {
  return h('div', [
    h('h1', 'clicked ' + state.n + ' times'),
    h('button', { onclick: onclick }, 'click me!')
  ])
  function onclick () {
    loop.update({ n: state.n + 1 })
  }
}
