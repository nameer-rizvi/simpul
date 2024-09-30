import validate from "./validate";

function capitalize(str: string): string | undefined {
  if (!validate.isString(str)) return;

  const trimmed = str.trim();

  if (trimmed.length === 0) return ""; // Handle edge case of an empty string after trimming.

  return trimmed[0].toUpperCase() + trimmed.slice(1);
}

export default capitalize;
