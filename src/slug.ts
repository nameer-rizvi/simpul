import validate from "./validate";
import cleanstring from "./cleanstring";
import trimPunctuation from "./trimPunctuation";

function slug(
  input: string,
  delimiter: string = "_",
  maxlength: number = 2000,
): string {
  if (!validate.isString(input)) return "";

  let output = cleanstring(input);

  if (!output) return "";

  output = trimPunctuation(output);

  if (!output) return "";

  output = output.replace(/ /g, delimiter);

  output = encodeURIComponent(output);

  output = output.substring(0, maxlength);

  output = output.toLowerCase();

  return output;
}

export default slug;
