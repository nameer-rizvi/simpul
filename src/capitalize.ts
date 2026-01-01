import validate from "./validate";

function capitalize(input: unknown): string | undefined {
  if (validate.isString(input)) {
    const trimmed = input.trim();

    if (!trimmed) return "";

    return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
  }
}

export default capitalize;
