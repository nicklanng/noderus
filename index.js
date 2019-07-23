const { setStandardFields } = require('./lib/standardFields')
const { trace, info, warn, error, fatal } = require('./lib/basic')
const { logRequest, logResponse } = require('./lib/http')

module.exports = {
  setStandardFields,
  trace,
  info,
  warn,
  error,
  fatal,
  logRequest,
  logResponse
}
