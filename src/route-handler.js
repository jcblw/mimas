
module.exports = (router) => (method) => (route, handler) => {
  return router[method](route, handler)
}
