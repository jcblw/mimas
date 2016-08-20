
const test = require('ava')
const routeHandler = require('../src/route-handler')

test('the route handler module', t => {
  t.is(typeof routeHandler, 'function', 'routeHandler is a function')
  t.is(typeof routeHandler(), 'function', 'routeHandlers return is a function')
  t.is(typeof routeHandler()(), 'function', 'routeHandlers returns return is a function')
  t.is(
    routeHandler({foo (x, y) {
      t.is(x, 'bar', 'the first param is correct')
      t.is(y, 'baz', 'the second param is correct')
      return true
    }})('foo')('bar', 'baz'),
    true,
    'the return value is correct if the method passed was called'
  )
})
