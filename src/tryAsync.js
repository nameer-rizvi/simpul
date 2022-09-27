async function tryAsync(_function, callback) {
  try {
    const result = await _function();
    if (callback) callback(null, result);
    return result;
  } catch (error) {
    if (callback) callback(error);
    return;
  }
}

module.exports = tryAsync;
