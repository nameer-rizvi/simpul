import validate from "./validate";

function batchify<T>(array: T[], size: number = 10): T[][] | undefined {
  if (!validate.isArray(array)) return;

  const batches: T[][] = [];

  for (let i = 0; i < array.length; i += size) {
    batches.push(array.slice(i, i + size));
  }

  return batches;
}

export default batchify;
