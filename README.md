# noderus
[![npm version](https://badge.fury.io/js/noderus.svg)](https://badge.fury.io/js/noderus)

An implementation of Logrus's log output in Node.js apps.

If NODE_ENV is set to 'development', or not set at all, then logs will be produced in a structured text format, with field names color-coded to indicate log level.
Otherwise, logs will be produced in JSON format with each message on a new line. This is to allow easy parsing by applications like Logstash.

All logs are written to `stdout`, as this library is primarily aimed at Dockerized applications.

# API Reference
### Table of Contents

-   [setStandardFields](#setstandardfields)
-   [info](#info)
-   [warn](#warn)
-   [error](#error)
-   [fatal](#fatal)
-   [logRequest](#logrequest)
-   [logResponse](#logresponse)

## setStandardFields

[lib/standardFields.js:17-24](https://github.com/nicklanng/noderus/blob/ccfe386fa377911d5dbe1184db00b80c47e29028/lib/standardFields.js#L17-L24 "Source code on GitHub")

Sets up the default set of fields to be logged with every message.
Call this before using the logger.

**Parameters**

-   `service` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The name of parent service
-   `version` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The version of the service

**Examples**

```javascript
const { name, version } = require('./package.json')

setStandardFields(name, version)
```

## info

[lib/basic.js:49-49](https://github.com/nicklanng/noderus/blob/ccfe386fa377911d5dbe1184db00b80c47e29028/lib/basic.js#L49-L49 "Source code on GitHub")

Forwards to `console.log`.
Combines the fields provided with the standard fields.

**Parameters**

-   `fields` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)?** The collection of additional fields to log with the message
-   `msg` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The message itself

## warn

[lib/basic.js:58-58](https://github.com/nicklanng/noderus/blob/ccfe386fa377911d5dbe1184db00b80c47e29028/lib/basic.js#L58-L58 "Source code on GitHub")

Forwards to `console.warn`.
Combines the fields provided with the standard fields.

**Parameters**

-   `fields` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)?** The collection of additional fields to log with the message
-   `msg` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The message itself

## error

[lib/basic.js:67-67](https://github.com/nicklanng/noderus/blob/ccfe386fa377911d5dbe1184db00b80c47e29028/lib/basic.js#L67-L67 "Source code on GitHub")

Forwards to `console.error`.
Combines the fields provided with the standard fields.

**Parameters**

-   `fields` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)?** The collection of additional fields to log with the message
-   `msg` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The message itself

## fatal

[lib/basic.js:77-80](https://github.com/nicklanng/noderus/blob/ccfe386fa377911d5dbe1184db00b80c47e29028/lib/basic.js#L77-L80 "Source code on GitHub")

Forwards to `console.error`.
Combines the fields provided with the standard fields.
NOTE: Also exits the process with a code of 1.

**Parameters**

-   `fields` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)?** The collection of additional fields to log with the message
-   `msg` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The message itself

## logRequest

[lib/http.js:24-36](https://github.com/nicklanng/noderus/blob/ccfe386fa377911d5dbe1184db00b80c47e29028/lib/http.js#L24-L36 "Source code on GitHub")

Takes an object representing an HTTP request and a message.
Creates a set of logging fields to extract certain data from the request
and combines them with the standard fields.
Logs at level INFO.

**Parameters**

-   `req` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** A representation of an HTTP request, abstracted from any particular implentation.
-   `msg` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The message itself

**Examples**

```javascript
// logging from koa
const request = {
  header: ctx.request.header,
  protocol: ctx.protocol,
  remoteAddress: ctx.originalUrl,
  url: ctx.url,
  method: ctx.method,
  contentLength: ctx.request.length
}
logRequest(request, 'HTTP request')
```

## logResponse

[lib/http.js:60-73](https://github.com/nicklanng/noderus/blob/ccfe386fa377911d5dbe1184db00b80c47e29028/lib/http.js#L60-L73 "Source code on GitHub")

Takes an object representing an HTTP response and a message.
Creates a set of logging fields to extract certain data from the response
and combines them with the standard fields.
Logs at level INFO.

**Parameters**

-   `res` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** A representation of an HTTP response, abstracted from any particular implentation.
-   `msg` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The message itself

**Examples**

```javascript
// logging from koa
const response = {
  header: ctx.request.header,
  protocol: ctx.protocol,
  remoteAddress: ctx.originalUrl,
  url: ctx.url,
  method: ctx.method,
  contentLength: ctx.response.length,
  status: ctx.status
}
logResponse(response, 'HTTP response')
```
