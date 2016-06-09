module.exports = function(val) {
  var d = new Date(val);
  return isNaN(d.getTime()) ? null : d;
};
