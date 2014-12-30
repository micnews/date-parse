## SYNOPSIS
Parse date string into valid Date() object or null. Never returns date object that is invalid and could throw like so:

```js
new Date('not a date').toISOString() // throws RangeError: Invalid time value
```

[![Build Status](https://travis-ci.org/micnews/date-parse.svg)](https://travis-ci.org/micnews/date-parse)

## USAGE

```js
var dateParse = require('date-parse');
dateParse('2014-12-30T21:17:46.826Z') // new Date('2014-12-30T21:17:46.826Z')
dateParse('not a date') // null
```

##LICENSE

MIT
