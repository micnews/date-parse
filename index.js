module.exports = function(str) {
  if (!str) {
    return null;
  }

  var d = new Date(String(str));
  return isNaN(d.getTime()) ? null : d;
};
