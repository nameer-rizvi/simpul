import trim from "./trim";
import removePunctuation from "./removePunctuation";

function trimPunctuation(
  dirty: string,
  delimiter?: string
): string | undefined {
  const withoutPunctuation = removePunctuation(dirty);
  if (withoutPunctuation) {
    return trim(withoutPunctuation, delimiter);
  }
}

export default trimPunctuation;

// RE: "\W is equivalent to [^a-zA-Z_0-9]"
//     Not using because it removes unicode characters.
