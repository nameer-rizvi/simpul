import validate from "./validate";
import trim from "./trim";

const PAIRS: Record<string, string> = {
  "[": "]",
  "(": ")",
  "{": "}",
  "<": ">",
  "«": "»",
  "“": "”",
  "‘": "’",
};

function trimBoundary(
  input: string,
  boundary?: string,
  innerTrim?: string,
): string | undefined {
  if (!validate.isStringNonEmpty(input)) return;

  let str = trim(input) || "";

  const open = boundary ?? str.charAt(0);

  const close = PAIRS[open] ?? open;

  while (str.length >= 2 && str.startsWith(open) && str.endsWith(close)) {
    str = str.slice(open.length, str.length - close.length).trim();
  }

  if (innerTrim) {
    const pattern = new RegExp(`^[${innerTrim}]+|[${innerTrim}]+$`, "g");
    str = str.replace(pattern, "").trim();
  }

  return str;
}

export default trimBoundary;
