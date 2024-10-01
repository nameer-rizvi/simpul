import trim from "./trim";

function trimBoundary(
  dirty: string,
  boundary?: string,
  delimiter?: string,
): string | undefined {
  let clean = dirty?.trim() || undefined;

  if (clean) {
    if (!boundary) boundary = clean.charAt(0);

    if (clean.startsWith(boundary) && clean.endsWith(boundary)) {
      clean = trim(clean.substring(1, clean.length - 1), delimiter);
    }
  }

  return clean;
}

export default trimBoundary;
