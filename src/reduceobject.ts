function reduceobject(array: [string, any][] = []): Record<string, any> {
  return array.reduce((r, a) => ({ ...r, [a[0]]: a[1] }), {});
}

export default reduceobject;
