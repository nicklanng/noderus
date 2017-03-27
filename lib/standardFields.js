const os = require('os')

let standardFields = {}

/**
 * Sets up the default set of fields to be logged with every message.
 * Call this before using the logger.
 *
 * @param {string} service The name of parent service
 * @param {string} version The version of the service
 */
const setStandardFields = (service, version) => {
  standardFields = {
    'service': service,
    'hostname': os.hostname(),
    'pid': process.pid,
    'version': version
  }
}

const getStandardFields = () => standardFields

module.exports = {
  setStandardFields,
  getStandardFields
}