import removePunctuation from "./removePunctuation";
import trim from "./trim";

function trimPunctuation(
  dirty: string,
  delimiter?: string,
): string | undefined {
  const removed = removePunctuation(dirty);
  if (removed) {
    return trim(removed, delimiter);
  }
}

export default trimPunctuation;

// RE: "\W is equivalent to [^a-zA-Z_0-9]"
//     Not using because it removes unicode characters.
