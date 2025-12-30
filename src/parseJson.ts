import validate from "./validate";

function parseJson<T = unknown>(input: unknown): T | undefined {
  if (!validate.isString(input)) return;

  const trimmed = input.trim();

  if (!trimmed) return;

  try {
    return JSON.parse(trimmed) as T;
  } catch {
    return;
  }
}

export default parseJson;
