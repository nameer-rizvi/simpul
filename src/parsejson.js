function parsejson(json) {
  try {
    return JSON.parse(json);
  } catch {}
}

module.exports = parsejson;
