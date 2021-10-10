function tryCallback(_function, callback) {
  try {
    const result = _function();

    if (callback) callback(null, result);

    return result;
  } catch (error) {
    if (callback) callback(error);

    return;
  }
}

module.exports = tryCallback;
