// shallow clone.
function clone(json) {
  if (json === null || typeof json !== "object") return json;

  if (Array.isArray(json)) return [...json];

  return { ...json };
}

module.exports = clone;
