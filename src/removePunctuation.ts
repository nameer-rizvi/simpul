import validate from "./validate";

function removePunctuation(
  dirty: string,
  delimiter: string = "",
): string | undefined {
  if (validate.isString(dirty)) {
    return dirty.replace(/[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]/g, delimiter);
  }
}

export default removePunctuation;
