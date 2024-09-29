function delay(ms = 1000, onDelay) {
  return new Promise((resolve) =>
    setTimeout(() => {
      if (onDelay) onDelay();
      resolve();
    }, ms),
  );
}

module.exports = delay;
