import validate from "./validate";
import trimPunctuation from "./trimPunctuation";
import cleanString from "./cleanString";

function slug(
  input: string,
  delimiter: string = "_",
  maxlength: number = 2000,
): string {
  if (!validate.isString(input) || maxlength <= 0) return "";

  let output: string | undefined = input
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&|[+]/g, " and ")
    .replace(/[@]/g, " at ")
    .replace(/[%]/g, " percent ")
    .replace(/[=]/g, " is ");

  output = trimPunctuation(cleanString(output)!, " ")!
    .replace(/\s+/g, delimiter)
    .toLowerCase()
    .slice(0, maxlength);

  output = encodeURIComponent(output); // Shouldn't lower case and slice encoding.

  return output;
}

export default slug;
