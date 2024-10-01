import validate from "./validate";

function removeStrings(
  str: string,
  removes: string[] = [],
): string | undefined {
  if (validate.isString(str)) {
    return removes.reduce((result, remove) => {
      return result.replace(new RegExp(remove, "gi"), "");
    }, str);
  }
}

export default removeStrings;
