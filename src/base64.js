function encode(value, callback) {
  try {
    const base64 = Buffer.from(value).toString("base64");
    if (callback) callback(null, base64);
    return base64;
  } catch (err) {
    if (callback) callback(err);
    return;
  }
}

function decode(base64, callback) {
  try {
    const value = Buffer.from(base64, "base64").toString();
    if (callback) callback(null, value);
    return value;
  } catch (err) {
    if (callback) callback(err);
    return;
  }
}

function encodeJSON(json, callback) {
  try {
    const base64 = Buffer.from(JSON.stringify(json)).toString("base64");
    if (callback) callback(null, base64);
    return base64;
  } catch (err) {
    if (callback) callback(err);
    return;
  }
}

function decodeJSON(base64, callback) {
  try {
    const json = JSON.parse(Buffer.from(base64, "base64").toString());
    if (callback) callback(null, json);
    return json;
  } catch (err) {
    if (callback) callback(err);
    return;
  }
}

const base64 = { encode, decode, encodeJSON, decodeJSON };

module.exports = base64;
