import support from "./support";

function uid(): string {
  if (support.module("crypto")) {
    return require("crypto").randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
}

export default uid;
