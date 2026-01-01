import validate from "./validate";

async function copyText(input: unknown): Promise<void> {
  if (validate.isEnvDocument && validate.isString(input)) {
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

export default copyText;
