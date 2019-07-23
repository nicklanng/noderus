const { info } = require('./basic')

/**
 * Takes an object representing an HTTP request and a message.
 * Creates a set of logging fields to extract certain data from the request
 * and combines them with the standard fields.
 * Logs at level INFO.
 *
 * @param {string} msg The message itself
 * @param {object} req A representation of an HTTP request, abstracted from any particular implentation.
 *
 * @example
 * // logging from koa
 * const request = {
 *   header: ctx.request.header,
 *   protocol: ctx.protocol,
 *   remoteAddress: ctx.originalUrl,
 *   url: ctx.url,
 *   method: ctx.method,
 *   contentLength: ctx.request.length
 * }
 * logRequest('HTTP request', request)
 */
const logRequest = (msg, req) => {
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
  info(msg, fields)
}

/**
 * Takes an object representing an HTTP response and a message.
 * Creates a set of logging fields to extract certain data from the response
 * and combines them with the standard fields.
 * Logs at level INFO.
 *
 * @param {string} msg The message itself
 * @param {object} res A representation of an HTTP response, abstracted from any particular implentation.
 *
 * @example
 * // logging from koa
 * const response = {
 *   header: ctx.request.header,
 *   protocol: ctx.protocol,
 *   remoteAddress: ctx.originalUrl,
 *   url: ctx.url,
 *   method: ctx.method,
 *   contentLength: ctx.response.length,
 *   status: ctx.status
 * }
 * logResponse('HTTP response', response)
*/
const logResponse = (msg, res) => {
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
  info(msg, fields)
}

module.exports = {
  logRequest,
  logResponse
}
