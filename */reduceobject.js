function reduceobject(array = []) {
  return array.reduce((r, a) => ({ ...r, [a[0]]: a[1] }), {});
}

module.exports = reduceobject;
