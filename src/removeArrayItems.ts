import validate from "./validate";
import clone from "./clone";

function removeArrayItems<T>(
  input: T[] = [],
  finder: (item: T, index: number) => boolean,
  replaceWith?: T,
): { removed: T[]; replaced: T[] } {
  const removed: T[] = [];

  const replaced: T[] = [];

  if (validate.isArray(input)) {
    const source = clone(input);
    for (let i = 0; i < source.length; i++) {
      const item = source[i];
      if (finder && finder(item, i)) {
        replaced.push(replaceWith as T);
      } else {
        removed.push(item);
        replaced.push(item);
      }
    }
  }

  return { removed, replaced };
}

export default removeArrayItems;
