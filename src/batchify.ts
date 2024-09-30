import validate from "./validate";

function batchify<T>(array: T[], size: number = 10): T[][] | undefined {
  if (!validate.isArray(array)) return;

  const batches: T[][] = [];

  let i = 0;

  while (i < array.length) {
    batches.push(array.slice(i, i + size));
    i += size;
  }

  return batches;
}

export default batchify;
