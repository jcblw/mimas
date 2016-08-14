require('dotenv')
  .config({silent: true})

const http = require('http')
const finalhandler = require('finalhandler')
const requireDirectory = require('require-directory')
const resolveDir = require('./src/resolve-dir')
const loadConfig = require('./src/load-config')
const supportedMethods = require('./src/supported-methods')
const serverDir = resolveDir('MIMAS_SERVER_DIR', './server')
const namespace = 'mimas'
const config = loadConfig(namespace)
const router = require('router')(config.router)
const routeHandler = require('./src/route-handler')(router)
const port = config.port || process.env.PORT || 4545
const server = http
  .createServer((req, res) => {
    router(req, res, finalhandler(req, res))
  })
  .listen(port, () => {
    console.log(`Mimas server listening on port:${port}`)
  })

config.middleware.forEach((fn) => {
  router.use(fn)
})

supportedMethods.forEach((method) => {
  module.exports[method] = routeHandler(method)
})
module.exports.use = router.use.bind(router)
module.exports.server = server

requireDirectory(module, serverDir)
