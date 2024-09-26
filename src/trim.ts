import validate from "./validate";

function trim(dirty: string, delimiter: string = " "): string | undefined {
  if (validate.isString(dirty)) {
    return dirty.replace(/\s+/g, delimiter).trim();
  }
}

export default trim;
