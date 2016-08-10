
module.exports = (router) => (method) => (route, handler) => {
  router[method](route, handler)
}
