import validate from "./validate";

function batchify<T>(input: T[], size = 10): T[][] | undefined {
  if (validate.isArray(input)) {
    if (size === 0) return [input];

    const batches: T[][] = [];

    for (let i = 0; i < input.length; i += size) {
      batches.push(input.slice(i, i + size));
    }

    return batches;
  }
}

export default batchify;
