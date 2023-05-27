function tryCallback(f, c) {
  try {
    const r = f();
    if (c) c(null, r);
    return r;
  } catch (e) {
    if (c) c(e);
    return;
  }
}

module.exports = tryCallback;
