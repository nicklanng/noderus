const { setStandardFields } = require('./lib/standardFields')
const { info, warn, error, fatal } = require('./lib/basic')
const { logRequest, logResponse } = require('./lib/http')

module.exports = {
  setStandardFields,
  info,
  warn,
  error,
  fatal,
  logRequest,
  logResponse
}
