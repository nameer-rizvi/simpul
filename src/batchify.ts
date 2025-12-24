import validate from "./validate";

function batchify<T>(input: T[], size: number = 10): T[][] | undefined {
  if (!validate.isArray(input) || !(size > 0)) return;

  const batches: T[][] = [];

  for (let i = 0; i < input.length; i += size) {
    batches.push(input.slice(i, i + size));
  }

  return batches;
}

export default batchify;
