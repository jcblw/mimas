const path = require('path')
const invariant = require('invariant')

module.exports = ({cwd = ''}) => moduleName => {
  const pathName = path.resolve(cwd, moduleName)
  let module
  try {
    module = require(pathName)
    invariant(
      typeof module === 'function',
      'Loaded middleware must export a function'
    )
  } catch (e) {
    console.error(`${pathName} could not be loaded as middleware`)
    console.error(e.message)
    module = null
  }
  return module
}
