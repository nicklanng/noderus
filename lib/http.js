const { info } = require('./basic')

const logRequest = (req, msg) => {
  const fields = {
    request_id: req.header['x-request-id'] || '',
    external_id: req.header['x-external-id'] || '',
    forwarded_for: req.header['x-forwarded-for'] || '',
    protocol: req.protocol.toUpperCase(),
    remote_address: req.remoteAddress,
    url: req.url,
    method: req.method,
    content_length: req.contentLength || 0
  }
  info(fields, msg)
}

const logResponse = (res, msg) => {
  const fields = {
    request_id: res.header['x-request-id'] || '',
    external_id: res.header['x-external-id'] || '',
    forwarded_for: res.header['x-forwarded-for'] || '',
    protocol: res.protocol.toUpperCase(),
    remote_address: res.remoteAddress,
    url: res.url,
    method: res.method,
    content_length: res.contentLength || 0,
    status: res.status
  }
  info(fields, msg)
}

module.exports = {
  logRequest,
  logResponse
}
