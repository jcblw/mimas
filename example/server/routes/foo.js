
const {get} = require('../../../')

get('/', (req, res) => {
  res.end('foo')
})
