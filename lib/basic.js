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
  return (msg, fields) => {
    if (typeof msg !== 'string') {
      msg = JSON.stringify(msg)
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

/**
 * Forwards to `console.log`.
 * Combines the fields provided with the standard fields.
 *
 * @param {string} msg The message itself
 * @param {object} [fields] The collection of additional fields to log with the message
 */
const trace = _logMessage('trace', chalk.gray, console.log)

/**
 * Forwards to `console.log`.
 * Combines the fields provided with the standard fields.
 *
 * @param {string} msg The message itself
 * @param {object} [fields] The collection of additional fields to log with the message
 */
const info = _logMessage('info', chalk.cyan, console.info)

/**
 * Forwards to `console.warn`.
 * Combines the fields provided with the standard fields.
 *
 * @param {string} msg The message itself
 * @param {object} [fields] The collection of additional fields to log with the message
 */
const warn = _logMessage('warn', chalk.yellow, console.warn)

/**
 * Forwards to `console.error`.
 * Combines the fields provided with the standard fields.
 *
 * @param {string} msg The message itself
 * @param {object} [fields] The collection of additional fields to log with the message
 */
const error = _logMessage('error', chalk.red, console.error)

/**
 * Forwards to `console.error`.
 * Combines the fields provided with the standard fields.
 * NOTE: Also exits the process with a code of 1.
 *
 * @param {string} msg The message itself
 * @param {object} [fields] The collection of additional fields to log with the message
 */
const fatal = (msg, fields) => {
  _logMessage('fatal', chalk.red, console.error)(msg, fields)
  process.exit(1)
}

module.exports = {
  trace,
  info,
  warn,
  error,
  fatal
}
