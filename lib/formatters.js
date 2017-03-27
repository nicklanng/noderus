const padEnd = require('string.prototype.padend')

const _orderFieldsByKey = (fields) => {
  const ordered = {}

  Object
    .keys(fields)
    .sort()
    .forEach((key) => {
      ordered[key] = fields[key]
    })

  return ordered
}

const logJson = (log, logMethod) => {
  const logString = JSON.stringify(_orderFieldsByKey(log))
  logMethod(logString)
}

const logText = (log, level, color, logMethod) => {
  const orderedFields = _orderFieldsByKey(log)

  const header = `${color(level.substring(0, 4).toUpperCase())}[${orderedFields.time}]`
  const message = padEnd(orderedFields.msg, 45)

  delete orderedFields.time
  delete orderedFields.msg

  const fields = Object.entries(orderedFields)
    .map(val => {
      let key = val[0]
      let value = val[1]
      if (value.length === 0) {
        value = '""'
      }

      return `${color(key)}=${value}`
    })

  const output = [header, message, ...fields].join(' ')

  logMethod(output)
}

module.exports = {
  logJson,
  logText
}
