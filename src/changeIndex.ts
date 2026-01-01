import validate from "./validate";

function changeIndex<T>(
  input: T[] = [],
  oldIndex: number,
  newIndex: number,
): T[] {
  if (!validate.isNumber(oldIndex) || !Number.isInteger(oldIndex)) {
    throw new Error('Second argument ("old index") is not a valid integer.');
  }

  if (!validate.isNumber(newIndex) || !Number.isInteger(newIndex)) {
    throw new Error('Third argument ("new index") is not a valid integer.');
  }

  if (oldIndex < 0 || oldIndex >= input.length) {
    return input;
  }

  if (newIndex >= input.length) {
    input.length = newIndex + 1; // Extend array length if necessary.
  }

  input.splice(newIndex, 0, input.splice(oldIndex, 1)[0]);

  return input;
}

export default changeIndex;
