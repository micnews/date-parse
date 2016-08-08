var test = require('tape');
var dateParse = require('./');

test('dateParse', function(t) {
  t.plan(5);
  var d1 = dateParse('2014-12-30T21:17:46.826Z');
  t.ok(d1 instanceof Date);
  var d2 = dateParse('not a date');
  t.ok(null === d2);
  var d3 = dateParse(Date.now());
  t.ok(d3 instanceof Date);
  var d4 = dateParse(new Date());
  t.ok(d4 instanceof Date);
  var d5 = dateParse();
  t.ok(null === d5);
});
