module.exports = (object, resolver) => {
  Object.keys(resolver).forEach((oldKey) => {
    Object.defineProperty(
      object,
      resolver[oldKey],
      Object.getOwnPropertyDescriptor(object, oldKey)
    );
    delete object[oldKey];
  });
};
