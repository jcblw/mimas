
const test = require('ava')
const identity = require('../src/identity')

test(
  'the identity module',
  t => {
    t.is('function', typeof identity, 'Identity is a function')
    t.is(identity(1), 1, 'Identity is a pass through function')
  }
)
