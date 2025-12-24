import validate from "./validate";

function capitalize(input: string): string | undefined {
  if (!validate.isString(input)) return;

  const trimmed = input.trim();

  if (!trimmed) return "";

  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
}

export default capitalize;
