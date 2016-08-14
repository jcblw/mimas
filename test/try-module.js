
const test = require('ava')
const tryModule = require('../src/try-module')

test(
  'the tryModule module',
  t => {
    t.is('function', typeof tryModule, 'tryModule is a function')
    t.is(typeof tryModule({}), 'function', 'tryModule should return a function')
    t.falsy(tryModule({})('./qux'), 'tryModule\'s return function should return null when a non existent module name is passed')
    t.is(typeof tryModule({})('../src/identity'), 'function', 'tryModule\'s return function should return the module if it imports properly')
  }
)
