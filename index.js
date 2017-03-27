const { setStandardFields } = require('./lib/standardFields')
const { info, warn, error, fatal } = require('./lib/basic')
const http = require('./lib/http')

module.exports = {
  setStandardFields,
  info,
  warn,
  error,
  fatal,
  http
}
