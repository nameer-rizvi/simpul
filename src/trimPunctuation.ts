import trim from "./trim";
import removePunctuation from "./removePunctuation";

function trimPunctuation(
  input: unknown,
  delimiter?: string,
): string | undefined {
  return trim(removePunctuation(input, delimiter), delimiter);
}

export default trimPunctuation;
