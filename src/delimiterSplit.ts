import defaultDelimiter from "./delimiter";
import validate from "./validate";
import cleanString from "./cleanString";

function delimiterSplit(
  input: unknown,
  delimiter = defaultDelimiter,
  delimiter2?: string,
  filter?: string,
): string[] {
  if (!validate.isString(input)) return [];

  const normalized = input.replace(/<br\s*\/?>|\n/g, delimiter);

  const filterLower = filter?.toLowerCase();

  const result = new Set<string>();

  for (const part of normalized.split(delimiter)) {
    const pieces = delimiter2 ? part.split(delimiter2) : [part];
    for (const piece of pieces) {
      const clean = cleanString(piece);
      if (!validate.isStringNonEmpty(clean)) continue;
      if (filterLower && clean.toLowerCase() === filterLower) continue;
      result.add(clean);
    }
  }

  return [...result];
}

export default delimiterSplit;
