
const test = require('ava')
const path = require('path')
const resolveDir = require('../src/resolve-dir')
let envOC

test.before(() => {
  envOC = process.env.FOO_BAR
  process.env.FOO_BAR = './baz'
})

test.after(() => {
  process.env.FOO_BAR = envOC
})

test('the resolve dir module', t => {
  t.throws(() => resolveDir(), /Path/, 'resolve dir will throw if zero params are passed')
  t.is(resolveDir(null, './'), process.cwd(), 'resolve dir will be cwd if "./" is passed to the second param')
  t.is(resolveDir('FOO_BAR'), path.resolve(process.cwd(), './baz'), 'if a valid env key is passed as the first param it will use it as the second part of the path')
})
