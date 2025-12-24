import validate from "./validate";

function batchify<T>(inputA: T[], inputB: number = 10): T[][] | undefined {
  if (!validate.isArray(inputA) || !(inputB > 0)) return;

  const batches: T[][] = [];

  for (let i = 0; i < inputA.length; i += inputB) {
    batches.push(inputA.slice(i, i + inputB));
  }

  return batches;
}

export default batchify;
