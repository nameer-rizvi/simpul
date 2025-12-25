import validate from "./validate";

async function copytext(input: string): Promise<void> {
  if (validate.isEnvDocument && validate.isString(copytext)) {
    try {
      await navigator.clipboard.writeText(input);
    } catch {
      const element = document.createElement("textarea");
      element.value = input;
      document.body.appendChild(element);
      element.select();
      document.execCommand("copy");
      document.body.removeChild(element);
    }
  }
}

export default copytext;
