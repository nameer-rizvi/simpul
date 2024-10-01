import validate from "./validate";

function replaceStrings(
  str: string,
  replaces: [string, string][] = [],
): string | undefined {
  if (validate.isString(str)) {
    return replaces.reduce((result, [pattern, replacement]) => {
      return result.replace(new RegExp(pattern, "gi"), replacement);
    }, str);
  }
}

export default replaceStrings;
