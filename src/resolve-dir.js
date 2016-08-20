const path = require('path')

module.exports = (env, defaults) => (
  path.resolve(
    process.cwd(),
    process.env[env] || defaults
  )
)
