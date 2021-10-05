function parseJSON(json, callback) {
  try {
    const parsed = JSON.parse(json);
    if (callback) callback(null, parsed);
    return parsed;
  } catch (error) {
    if (callback) callback(error);
    return;
  }
}

module.exports = parseJSON;
