function parseJSON(json) {
  try {
    const parsed = JSON.parse(json);
    return parsed;
  } catch {
    return;
  }
}

module.exports = parseJSON;
