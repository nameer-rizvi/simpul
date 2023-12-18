function uid(radix = 32) {
  return (
    Date.now().toString(radix) + Math.random().toString(radix).substr(2)
  ).toUpperCase();
}

module.exports = uid;
