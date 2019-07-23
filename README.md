### Table of Contents

-   [setStandardFields][1]
    -   [Parameters][2]
    -   [Examples][3]
-   [trace][4]
    -   [Parameters][5]
-   [info][6]
    -   [Parameters][7]
-   [warn][8]
    -   [Parameters][9]
-   [error][10]
    -   [Parameters][11]
-   [fatal][12]
    -   [Parameters][13]
-   [logRequest][14]
    -   [Parameters][15]
    -   [Examples][16]
-   [logResponse][17]
    -   [Parameters][18]
    -   [Examples][19]

## setStandardFields

[lib/standardFields.js:17-24][20]

Sets up the default set of fields to be logged with every message.
Call this before using the logger.

### Parameters

-   `service` **[string][21]** The name of parent service
-   `version` **[string][21]** The version of the service

### Examples

```javascript
const { name, version } = require('./package.json')

setStandardFields(name, version)
```

## trace

[lib/basic.js:49-49][22]

Forwards to `console.log`.
Combines the fields provided with the standard fields.

### Parameters

-   `fields` **[object][23]?** The collection of additional fields to log with the message
-   `msg` **[string][21]** The message itself

## info

[lib/basic.js:58-58][24]

Forwards to `console.log`.
Combines the fields provided with the standard fields.

### Parameters

-   `fields` **[object][23]?** The collection of additional fields to log with the message
-   `msg` **[string][21]** The message itself

## warn

[lib/basic.js:67-67][25]

Forwards to `console.warn`.
Combines the fields provided with the standard fields.

### Parameters

-   `fields` **[object][23]?** The collection of additional fields to log with the message
-   `msg` **[string][21]** The message itself

## error

[lib/basic.js:76-76][26]

Forwards to `console.error`.
Combines the fields provided with the standard fields.

### Parameters

-   `fields` **[object][23]?** The collection of additional fields to log with the message
-   `msg` **[string][21]** The message itself

## fatal

[lib/basic.js:86-89][27]

Forwards to `console.error`.
Combines the fields provided with the standard fields.
NOTE: Also exits the process with a code of 1.

### Parameters

-   `fields` **[object][23]?** The collection of additional fields to log with the message
-   `msg` **[string][21]** The message itself

## logRequest

[lib/http.js:24-36][28]

Takes an object representing an HTTP request and a message.
Creates a set of logging fields to extract certain data from the request
and combines them with the standard fields.
Logs at level INFO.

### Parameters

-   `req` **[object][23]** A representation of an HTTP request, abstracted from any particular implentation.
-   `msg` **[string][21]** The message itself

### Examples

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

[lib/http.js:60-73][29]

Takes an object representing an HTTP response and a message.
Creates a set of logging fields to extract certain data from the response
and combines them with the standard fields.
Logs at level INFO.

### Parameters

-   `res` **[object][23]** A representation of an HTTP response, abstracted from any particular implentation.
-   `msg` **[string][21]** The message itself

### Examples

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

[1]: #setstandardfields

[2]: #parameters

[3]: #examples

[4]: #trace

[5]: #parameters-1

[6]: #info

[7]: #parameters-2

[8]: #warn

[9]: #parameters-3

[10]: #error

[11]: #parameters-4

[12]: #fatal

[13]: #parameters-5

[14]: #logrequest

[15]: #parameters-6

[16]: #examples-1

[17]: #logresponse

[18]: #parameters-7

[19]: #examples-2

[20]: https://git@github.com/:nicklanng/noderus/blob/068d3c9522657bd29febf8a366373f474bf5e005/lib/standardFields.js#L17-L24 "Source code on GitHub"

[21]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[22]: https://git@github.com/:nicklanng/noderus/blob/068d3c9522657bd29febf8a366373f474bf5e005/lib/basic.js#L49-L49 "Source code on GitHub"

[23]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[24]: https://git@github.com/:nicklanng/noderus/blob/068d3c9522657bd29febf8a366373f474bf5e005/lib/basic.js#L58-L58 "Source code on GitHub"

[25]: https://git@github.com/:nicklanng/noderus/blob/068d3c9522657bd29febf8a366373f474bf5e005/lib/basic.js#L67-L67 "Source code on GitHub"

[26]: https://git@github.com/:nicklanng/noderus/blob/068d3c9522657bd29febf8a366373f474bf5e005/lib/basic.js#L76-L76 "Source code on GitHub"

[27]: https://git@github.com/:nicklanng/noderus/blob/068d3c9522657bd29febf8a366373f474bf5e005/lib/basic.js#L86-L89 "Source code on GitHub"

[28]: https://git@github.com/:nicklanng/noderus/blob/068d3c9522657bd29febf8a366373f474bf5e005/lib/http.js#L24-L36 "Source code on GitHub"

[29]: https://git@github.com/:nicklanng/noderus/blob/068d3c9522657bd29febf8a366373f474bf5e005/lib/http.js#L60-L73 "Source code on GitHub"
