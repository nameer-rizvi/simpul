function clone(json, callback) {
  try {
    const jsonClone = JSON.parse(JSON.stringify(json));
    if (callback) callback(null, jsonClone);
    return jsonClone;
  } catch (err) {
    if (callback) callback(err);
    return;
  }
}

module.exports = clone;
