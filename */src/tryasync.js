async function tryasync(f, c) {
  try {
    const r = await f();
    if (c) c(null, r);
    return r;
  } catch (e) {
    if (c) c(e);
    return;
  }
}

module.exports = tryasync;
