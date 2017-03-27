const chalk = require('chalk')
const pad = require('pad-left')
const { logJson, logText } = require('./formatters')
const { getStandardFields } = require('./standardFields')

const _ISODateString = (d) => {
  return d.getUTCFullYear() + '-' +
    pad(d.getUTCMonth() + 1, 2, '0') + '-' +
    pad(d.getUTCDate(), 2, '0') + 'T' +
    pad(d.getUTCHours(), 2, '0') + ':' +
    pad(d.getUTCMinutes(), 2, '0') + ':' +
    pad(d.getUTCSeconds(), 2, '0') + '.' +
    pad(d.getUTCMilliseconds(), 3, '0') + 'Z'
}

const _logMessage = (level, color, logMethod) => {
  return (fields, msg) => {
    if (typeof fields === 'string') {
      msg = fields
      fields = {}
    }

    const log = Object.assign(
      {},
      getStandardFields(),
      {
        level: level,
        time: _ISODateString(new Date())
      },
      fields,
      { msg }
    )

    if (typeof process.env.NODE_ENV === 'undefined' || process.env.NODE_ENV === 'development') {
      logText(log, level, color, logMethod)
    } else {
      logJson(log, logMethod)
    }
  }
}

const info = _logMessage('info', chalk.blue, console.info)
const warn = _logMessage('warn', chalk.yellow, console.warn)
const error = _logMessage('error', chalk.red, console.error)
const fatal = (fields, msg) => {
  _logMessage('fatal', chalk.red, console.error)(fields, msg)
  process.exit(1)
}

module.exports = {
  info,
  warn,
  error,
  fatal
}
