import validate from "./validate";

function capitalize(string: string): string | undefined {
  if (!validate.isString(string)) return;

  const trimmed = string.trim();

  if (!trimmed) return ""; // Handle edge case of an empty string after trimming.

  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
}

export default capitalize;
