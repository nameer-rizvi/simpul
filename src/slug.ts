import validate from "./validate";
import trimPunctuation from "./trimPunctuation";
import cleanString from "./cleanString";

function slug(input: unknown, delimiter = "_", maxlength = 2000): string {
  if (!validate.isString(input) || maxlength <= 0) return "";

  let output = input
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&|[+]/g, " and ")
    .replace(/[@]/g, " at ")
    .replace(/[%]/g, " percent ")
    .replace(/[=]/g, " is ");

  output = (trimPunctuation(cleanString(output) || "") || "")
    .replace(/\s+/g, delimiter)
    .slice(0, maxlength)
    .toLowerCase();

  output = encodeURIComponent(output); // Encoded value should not be mutated (sliced, lower cased, etc.).

  return output;
}

export default slug;
