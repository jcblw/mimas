
const pkgConf = require('pkg-conf')
const tryModule = require('./try-module')
const identity = require('./identity')
const defaults = {
  cwd: process.cwd(),
  middleware: []
}

module.exports = (namespace) => {
  const config = pkgConf.sync(namespace, {defaults})
  const {router, cwd, port} = config
  const middleware = config.middleware
  return {
    cwd,
    middleware: middleware
      .map(tryModule({cwd}))
      .filter(identity),
    port,
    router
  }
}
