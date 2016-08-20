
const test = require('ava')
const fs = require('fs')
const loadConfig = require('../src/load-config')
const _config = {
  foo: {
    cwd: './',
    port: 'qux',
    middleware: ['./foo.js'],
    router: 'baz'
  }
}

test.before(() => {
  fs.writeFileSync('./package.json', JSON.stringify(_config))
  fs.writeFileSync('./foo.js', `
    module.exports = () => 'foo'
  `)
})

test.after.always(() => {
  fs.unlinkSync('./package.json')
  fs.unlinkSync('./foo.js')
})

test(
  'the load-config module',
  t => {
    t.is('function', typeof loadConfig, 'loadConfig is a function')
    t.throws(() => loadConfig(), /namespace/, 'calling load config with no params throws because it expects a namespace')
    const config = loadConfig('foo')
    t.is(typeof config, 'object', 'the return from load config when passing a namespace is an object')
    t.is(config.cwd, './', 'the correct value of "cwd" property is loaded')
    t.is(config.port, 'qux', 'the correct value of "port" property is loaded')
    t.is(config.router, 'baz', 'the correct value of "router" property is loaded')
    t.is(config.middleware[0](), 'foo', 'a piece of middleware was properly loaded from config')
  }
)
