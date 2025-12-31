import trim from "./trim";
import removePunctuation from "./removePunctuation";

function trimPunctuation(
  input: string,
  delimiter?: string,
): string | undefined {
  return trim(removePunctuation(input, delimiter)!, delimiter);
}

export default trimPunctuation;

// RE: "\W is equivalent to [^a-zA-Z_0-9]"
//     Not using because it removes unicode characters.
