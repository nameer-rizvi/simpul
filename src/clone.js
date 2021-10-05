function _clone(json, callback) {
  try {
    const clone = JSON.parse(JSON.stringify(json));
    if (callback) callback(null, clone);
    return clone;
  } catch (err) {
    if (callback) callback(err);
    return;
  }
}

module.exports = _clone;
