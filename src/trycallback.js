function trycallback(f, c) {
  try {
    let r = f();
    if (c) c(null, r);
    return r;
  } catch (e) {
    if (c) c(e);
    return;
  }
}

module.exports = trycallback;
