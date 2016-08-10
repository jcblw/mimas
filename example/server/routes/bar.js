
const {get} = require('../../../')

get('/bar', (req, res) => {
  res.end('bar')
})
