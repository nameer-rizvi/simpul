import validate from "./validate";
import trim from "./trim";
import he from "he";
import { stripHtml } from "string-strip-html";

function cleanString(input: unknown): string | undefined {
  if (validate.isString(input)) {
    return trim(he.decode(stripHtml(input).result));
  }
}

export default cleanString;
