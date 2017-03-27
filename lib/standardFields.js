const os = require('os')

let standardFields = {}

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
