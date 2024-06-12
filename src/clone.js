function clone(json, callback) {
  let result;

  try {
    result = JSON.parse(JSON.stringify(json));
  } catch (error) {
    if (callback) callback(error);
    return;
  }

  if (callback) callback(null, result);

  return result;
}

module.exports = clone;
