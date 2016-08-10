require('dotenv')
  .config({silent: true})

const http = require('http')
const finalhandler = require('finalhandler')
const requireDirectory = require('require-directory')
const router = require('router')()
const resolveDir = require('./src/resolve-dir')
const supportedMethods = require('./src/supported-methods')
const routeHandler = require('./src/route-handler')(router)
const serverDir = resolveDir('MIMAS_SERVER_DIR', './server')
const server = http
  .createServer((req, res) => {
    router(req, res, finalhandler(req, res))
  })
  .listen(process.env.PORT || 4545)

supportedMethods.forEach((method) => {
  module.exports[method] = routeHandler(method)
})
module.exports.use = router.use.bind(router)

process.mimasServer = server

requireDirectory(module, serverDir)
