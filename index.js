module.exports = function(val) {
  if (val === null || typeof val === 'boolean') {
    return null
  }
  var d = new Date(val);
  return isNaN(d.getTime()) ? null : d;
};
