import support from "./support";

function copytext(text: string): void {
  if (support.document) {
    const element = document.createElement("textarea");

    element.value = text;

    document.body.appendChild(element);

    element.select();

    document.execCommand("copy");

    document.body.removeChild(element);
  }
}

export default copytext;
