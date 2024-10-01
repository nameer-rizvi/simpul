import validate from "./validate";
import clone from "./clone";

function removeArrayItems<T>(
  array: T[] = [],
  finder: (item: T, index: number) => boolean,
  replaceWith: T | undefined = undefined,
): { removed: T[]; replaced: T[] } {
  const removed: T[] = [];

  const replaced: T[] = [];

  if (validate.isArray(array)) {
    const arrayClone = clone(array);
    for (let i = 0; i < arrayClone.length; i++) {
      const item = arrayClone[i];
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
