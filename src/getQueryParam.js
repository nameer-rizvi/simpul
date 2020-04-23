const sanitized = require("sanitized");
const he = require("he");

module.exports = (param) => {
  const params = new URLSearchParams(window.location.search);
  var value = params.get(param);
  // sanitized() decodes strings, so encode()
  // is required to transform html entities.
  value && (value = sanitized(he.encode(value)));
  const hash = sanitized(window.location.hash);
  return value ? value : hash ? hash : null;
};
